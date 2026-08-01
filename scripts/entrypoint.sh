#!/bin/sh
set -e

echo "Running Prisma migrations..."
node node_modules/prisma/build/index.js migrate deploy

echo "Seeding database..."
node prisma/seed.cjs || echo "Seed skipped (already seeded or error)"

echo "Starting application..."
exec node server.js
