#!/bin/bash
# SQLite backup to GCS — runs via cron every 6 hours
# Bucket: gs://genexcel-website-blog
# Retention: 7 days (managed by bucket lifecycle policy)

set -euo pipefail

DB_PATH="/opt/genexcel/data/genexcel.db"
BUCKET="gs://genexcel-website-blog/backups"
TIMESTAMP=$(date -u +"%Y-%m-%dT%H-%M-%SZ")
BACKUP_FILE="/tmp/genexcel-${TIMESTAMP}.db"
LOG="/var/log/genexcel-backup.log"

log() {
  echo "[$(date -u +"%Y-%m-%dT%H:%M:%SZ")] $1" | tee -a "$LOG"
}

log "Starting backup..."

# Safe online backup (works while app is running, no corruption)
sqlite3 "$DB_PATH" ".backup '${BACKUP_FILE}'"

# Upload to GCS
gsutil cp "$BACKUP_FILE" "${BUCKET}/genexcel-${TIMESTAMP}.db"

# Cleanup local temp file
rm -f "$BACKUP_FILE"

log "Backup complete: ${BUCKET}/genexcel-${TIMESTAMP}.db"
