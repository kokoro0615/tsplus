#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
LOCK_FILE="$PROJECT_ROOT/.next/dev/lock"
NEXT_BIN="$PROJECT_ROOT/node_modules/.bin/next"
NEXT_DEV_MATCH="$NEXT_BIN dev"

list_dev_pids() {
  ps -eo pid=,args= | awk -v pat="$NEXT_DEV_MATCH" '$2 == "node" && index($0, pat) { print $1 }'
}

print_processes() {
  local pids=("$@")

  if ((${#pids[@]} == 0)); then
    return 0
  fi

  ps -o pid=,pgid=,ppid=,etime=,command= -p "${pids[@]}"
}

print_lock_status() {
  if [[ -e "$LOCK_FILE" ]]; then
    echo "Lock file: present ($LOCK_FILE)"
  else
    echo "Lock file: absent"
  fi
}

remove_stale_lock() {
  local pids=()
  mapfile -t pids < <(list_dev_pids)

  if [[ -e "$LOCK_FILE" ]] && ((${#pids[@]} == 0)); then
    rm -f "$LOCK_FILE"
    echo "Removed stale lock: $LOCK_FILE"
  fi
}

status() {
  local pids=()
  mapfile -t pids < <(list_dev_pids)

  if ((${#pids[@]} > 0)); then
    echo "Next dev is running for this project:"
    print_processes "${pids[@]}"
  else
    echo "Next dev is not running for this project."
  fi

  print_lock_status

  if [[ -e "$LOCK_FILE" ]] && ((${#pids[@]} == 0)); then
    echo "Lock state: stale"
  fi
}

stop_running() {
  local pids=()
  local pgids=()
  local remaining=()
  mapfile -t pids < <(list_dev_pids)

  if ((${#pids[@]} == 0)); then
    echo "No next dev process found for this project."
    remove_stale_lock
    return 0
  fi

  echo "Stopping next dev for this project:"
  print_processes "${pids[@]}"

  mapfile -t pgids < <(ps -o pgid= -p "${pids[@]}" | tr -d ' ' | awk 'NF' | sort -u)
  for pgid in "${pgids[@]}"; do
    kill -TERM "--" "-$pgid" 2>/dev/null || true
  done

  for _ in {1..50}; do
    mapfile -t remaining < <(list_dev_pids)
    if ((${#remaining[@]} == 0)); then
      remove_stale_lock
      echo "Next dev stopped."
      return 0
    fi
    sleep 0.2
  done

  echo "Next dev did not exit after SIGTERM. Sending SIGKILL."
  mapfile -t remaining < <(list_dev_pids)
  if ((${#remaining[@]} > 0)); then
    mapfile -t pgids < <(ps -o pgid= -p "${remaining[@]}" | tr -d ' ' | awk 'NF' | sort -u)
    for pgid in "${pgids[@]}"; do
      kill -KILL "--" "-$pgid" 2>/dev/null || true
    done
  fi

  sleep 0.2
  remove_stale_lock
  echo "Next dev stopped."
}

start_dev() {
  local pids=()
  mapfile -t pids < <(list_dev_pids)

  if ((${#pids[@]} > 0)); then
    echo "Another next dev instance is already running for this project."
    print_processes "${pids[@]}"
    print_lock_status
    echo "Use 'npm run dev:restart -- --port <port>' if you intend to restart it."
    exit 1
  fi

  remove_stale_lock
  exec "$NEXT_BIN" dev "$@"
}

command="${1:-start}"

case "$command" in
  start)
    shift || true
    start_dev "$@"
    ;;
  status)
    status
    ;;
  stop)
    stop_running
    ;;
  restart)
    shift || true
    stop_running
    start_dev "$@"
    ;;
  *)
    echo "Usage: $0 {start|status|stop|restart} [next-dev-args...]" >&2
    exit 1
    ;;
esac
