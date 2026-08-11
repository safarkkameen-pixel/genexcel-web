# GenExcel Website - Technical Deployment Documentation

> **Last updated:** 2026-03-25
> **Maintained by:** Curanova Technologies (nabhan@curanova.ai)

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Repository Information](#2-repository-information)
3. [Infrastructure / Hosting Details](#3-infrastructure--hosting-details)
4. [Application Deployment](#4-application-deployment)
5. [Environment Configuration](#5-environment-configuration)
6. [Database](#6-database)
7. [Domain and DNS Configuration](#7-domain-and-dns-configuration)
8. [File Storage](#8-file-storage)
9. [Maintenance and Operations](#9-maintenance-and-operations)
10. [Recovery Instructions](#10-recovery-instructions)
11. [Additional Notes](#11-additional-notes)

---

## 1. Project Overview

### Application Name

**GenExcel** — Genetic Excellence for Children

### Purpose

GenExcel is a consumer-facing marketing website for a children's health and genetics platform. It showcases GenExcel's products and services — genetic testing kits, AI-powered nutrition analysis, brain games, and telemedicine — and provides a blog for content marketing.

> **Important:** This repo (`genexcel`) is the **website only**. It is NOT the GenExcel app backend.
> The actual GenExcel app backend (Django + Celery + Redis + PostgreSQL) runs separately on the `genexcel-production` VM (`35.200.144.175`) in `asia-south1-a`. That is a completely separate project.

### Main Features

- **Public Website** — Marketing pages (Home, About, Pricing, Blog, Contact, FAQs, Careers, Press, Help)
- **Legal/Compliance Pages** — Terms, Cookies, DPDP (India data protection), Account Deletion
- **Blog** — Blog listing and individual post pages (reads from DB when available, shows empty state when not)
- **3D Animations** — DNA helix visualization using Three.js/React Three Fiber
- **Dark/Light Theme** — Theme toggle with system preference detection

### Technology Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 14 (App Router, React 18) |
| **Language** | TypeScript 5.4 |
| **Styling** | Tailwind CSS 3.4, Framer Motion, GSAP |
| **Rich Text Editor** | TipTap (ProseMirror-based) |
| **3D Graphics** | Three.js, React Three Fiber, Drei |
| **Authentication** | NextAuth.js v5 (beta) with credentials provider |
| **Database** | SQLite (via Prisma ORM 5.22) — used for blog/admin only |
| **ORM** | Prisma |
| **UI Components** | Radix UI primitives, Lucide icons |
| **Container Runtime** | Docker (multi-stage Alpine build) |
| **Hosting** | Google Cloud Run (serverless, us-central1) |
| **CI/CD** | GitHub Actions |
| **Cloud Platform** | Google Cloud Platform (GCP) |
| **Container Registry** | GCP Artifact Registry |

---

## 2. Repository Information

### GitHub Repository

```
https://github.com/curanova-git/genexcel.git
```

**Access:** Private repository under the `curanova-git` GitHub organization.
**Git account used for pushes:** `nab-curanova` (nab-curanova@users.noreply.github.com)

### Repository Structure

```
genexcel/
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CD pipeline (GitHub Actions)
├── documents/                       # Project documentation
│   ├── CONTENT_TEMPLATES.md
│   ├── DEPLOYMENT_DOCUMENTATION.md  # This file
│   ├── DESIGN_SYSTEM.md
│   ├── GENEXCEL_WEBSITE_DOCUMENTATION.md
│   ├── IMAGE_PROMPTS.md
│   ├── NEXTJS_SUPER_WEBSITE_SPEC.md
│   ├── README.md
│   └── TECHNICAL_SPECIFICATION.md
├── prisma/
│   ├── schema.prisma               # Database schema
│   ├── seed.ts                     # Database seed script
│   └── migrations/
│       └── 20260218083821_init/    # Initial migration
├── public/                          # Static assets (logos, favicons, manifest)
├── scripts/
│   └── entrypoint.sh              # Legacy entrypoint (not used in Cloud Run)
├── src/
│   ├── app/
│   │   ├── (admin)/               # Admin dashboard routes (not used in Cloud Run)
│   │   ├── (public)/              # Public-facing website routes
│   │   │   ├── about/
│   │   │   ├── blog/
│   │   │   ├── careers/
│   │   │   ├── contact/
│   │   │   ├── cookies/
│   │   │   ├── delete-account/
│   │   │   ├── dpdp/
│   │   │   ├── faqs/
│   │   │   ├── help/
│   │   │   ├── press/
│   │   │   ├── pricing/
│   │   │   ├── terms/
│   │   │   ├── layout.tsx         # Public layout (header/footer)
│   │   │   └── page.tsx           # Homepage
│   │   └── api/                   # API routes (admin, auth — not actively used)
│   ├── components/
│   ├── config/
│   │   └── site.ts                # Site metadata configuration
│   ├── hooks/
│   └── lib/
│       ├── auth.ts                # NextAuth configuration
│       ├── content.ts             # Content fetching utilities
│       ├── prisma.ts              # Prisma client singleton
│       └── utils.ts               # Utility functions
├── Dockerfile                      # Multi-stage Docker build
├── next.config.js                  # output: standalone, redirects, image config
├── package.json
└── nginx.conf                      # Legacy Nginx config (not used in Cloud Run)
```

### Branching Strategy

- **Single branch:** `main`
- All code is pushed directly to `main`
- CI/CD triggers on every push to `main` (build + deploy)
- Pull requests to `main` trigger lint + typecheck only (no deploy)

---

## 3. Infrastructure / Hosting Details

### Hosting Platform

**Google Cloud Run** (serverless container hosting)

| Property | Value |
|----------|-------|
| **GCP Project** | `genexcel-ai` |
| **Service Name** | `genexcel-website` |
| **Region** | `us-central1` (Iowa) |
| **Cloud Run URL** | `https://genexcel-website-av67coj7hq-uc.a.run.app` |
| **Custom Domain** | `https://genexcel.ai` |
| **Platform** | Managed Cloud Run (fully serverless) |
| **Port** | `8080` |
| **Memory** | `256Mi` |
| **CPU** | `1` |
| **Min Instances** | `0` (scales to zero when no traffic) |
| **Max Instances** | `3` |
| **Auth** | Unauthenticated (public) |

### Container Image

| Property | Value |
|----------|-------|
| **Registry** | GCP Artifact Registry |
| **Repository** | `asia-south1-docker.pkg.dev/genexcel-ai/genexcel` |
| **Image Name** | `genexcel-website` |
| **Tagging** | Git commit SHA + `latest` |
| **Full Image Path** | `asia-south1-docker.pkg.dev/genexcel-ai/genexcel/genexcel-website:<sha>` |

### Domain Mappings (Cloud Run)

| Domain | Status | Type |
|--------|--------|------|
| `genexcel.ai` | ✅ Active | Cloud Run Domain Mapping (us-central1) |
| `www.genexcel.ai` | ✅ Active | Cloud Run Domain Mapping (us-central1) |

SSL certificates are **Google-managed** (automatically provisioned and renewed by Cloud Run).

### Other VMs in the GCP Project (unrelated to this website)

| VM | Zone | Type | IP | Purpose |
|----|------|------|----|---------|
| `genexcel-production` | asia-south1-a | e2-medium | 35.200.144.175 | GenExcel app backend (Django) |
| `almaspms` | asia-south1-a | e2-micro | 34.14.154.224 | ALMAS PMS application |

---

## 4. Application Deployment

### Prerequisites

- Node.js 20.x
- npm (included with Node.js)
- Docker (for containerized deployment)
- GCP CLI (`gcloud`) authenticated
- GitHub repository access

### Local Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/curanova-git/genexcel.git
cd genexcel

# 2. Install dependencies
npm ci

# 3. Set environment variables
export DATABASE_URL="file:./data/genexcel.db"
export NEXTAUTH_SECRET="local-dev-secret"
export AUTH_URL="http://localhost:3000"

# 4. Generate Prisma client
npx prisma generate

# 5. Run database migrations
npx prisma migrate deploy

# 6. Seed the database
npx tsx prisma/seed.ts

# 7. Start development server
npm run dev
# App available at http://localhost:3000
```

### Production Deployment Workflow (Automated)

Deployment is fully automated via GitHub Actions. Triggered on every push to `main`.

**Pipeline stages:**

1. **Lint & Typecheck** (`lint-and-typecheck` job)
   - `npm ci` — install dependencies
   - `npm run lint` — ESLint checks
   - `npm run type-check` — TypeScript compilation check

2. **Build & Deploy** (`build-and-deploy` job, push to `main` only)
   - Authenticate to GCP using Workload Identity Federation (WIF)
   - Configure Docker for GCP Artifact Registry
   - Build multi-stage Docker image (with BuildKit caching via GitHub Actions cache)
   - Push image to Artifact Registry tagged with git SHA + `latest`
   - Deploy to Cloud Run (`gcloud run deploy`)
   - Health check: curl the Cloud Run URL after 10 seconds

### Dockerfile (Multi-Stage Build)

The Dockerfile uses a 3-stage build:

| Stage | Base | Purpose |
|-------|------|---------|
| `deps` | `node:20-alpine` | Install npm dependencies + generate Prisma client |
| `builder` | `node:20-alpine` | Build Next.js (`output: standalone`) |
| `runner` | `node:20-alpine` | Minimal production image |

**Container startup:** `node server.js` (Next.js standalone server, no DB/migrations at runtime)

```dockerfile
# Stage 1: Install dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app
COPY package.json package-lock.json ./
COPY prisma ./prisma
RUN npm ci

# Stage 2: Build the application
FROM node:20-alpine AS builder
RUN apk add --no-cache openssl
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY next.config.js tsconfig.json tailwind.config.ts postcss.config.js ./
COPY package.json ./
COPY prisma ./prisma
RUN npx prisma generate
COPY public ./public
COPY src ./src
RUN npm run build

# Stage 3: Production runner
FROM node:20-alpine AS runner
RUN apk add --no-cache openssl
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080
ENV HOSTNAME="0.0.0.0"
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 8080
CMD ["node", "server.js"]
```

### Manual Deployment (Emergency)

If CI/CD is broken, deploy manually:

```bash
# 1. Build and push image
REGION="asia-south1"
PROJECT="genexcel-ai"
IMAGE="$REGION-docker.pkg.dev/$PROJECT/genexcel/genexcel-website:manual-$(date +%Y%m%d)"

docker build -t $IMAGE .
gcloud auth configure-docker "$REGION-docker.pkg.dev"
docker push $IMAGE

# 2. Deploy to Cloud Run
gcloud run deploy genexcel-website \
  --image=$IMAGE \
  --region=us-central1 \
  --platform=managed \
  --allow-unauthenticated \
  --port=8080 \
  --memory=256Mi \
  --cpu=1 \
  --min-instances=0 \
  --max-instances=3 \
  --project=$PROJECT
```

---

## 5. Environment Configuration

### Runtime Environment Variables

Cloud Run has no secrets injected at runtime for the public website. The only env vars are baked into the Dockerfile:

| Variable | Value | Set In |
|----------|-------|--------|
| `NODE_ENV` | `production` | Dockerfile |
| `PORT` | `8080` | Dockerfile |
| `HOSTNAME` | `0.0.0.0` | Dockerfile |

### GitHub Actions Secrets Required (CI/CD only)

| Secret Name | Purpose |
|-------------|---------|
| `GCP_PROJECT_ID` | GCP project ID (`genexcel-ai`) |
| `GCP_REGION` | Artifact Registry region (`asia-south1`) |
| `WIF_PROVIDER` | Workload Identity Federation provider resource name |
| `WIF_SERVICE_ACCOUNT` | GCP service account for WIF |

### Configuration Files

| File | Purpose |
|------|---------|
| `next.config.js` | `output: "standalone"`, redirects (/order, /signup → /pricing), image domains |
| `tailwind.config.ts` | Tailwind CSS theme, custom colors, animations |
| `tsconfig.json` | TypeScript compiler options, path aliases (`@/*` → `src/*`) |
| `src/config/site.ts` | Site metadata (name, description, URLs, social links) |

---

## 6. Database

### Current State on Cloud Run

Cloud Run is **stateless** — there is no persistent SQLite database in production. The website runs entirely from the built Next.js standalone output.

- All public pages (Home, About, Pricing, Contact, etc.) work without a database
- The blog page gracefully shows an empty state when DB is unavailable
- The admin panel exists in the codebase but is **not actively used** on Cloud Run

### Database Schema (for reference / local dev)

**SQLite** via Prisma ORM. Schema has 6 models:

| Model | Purpose |
|-------|---------|
| `AdminUser` | Admin panel users (SUPER_ADMIN, ADMIN, EDITOR) |
| `Session` | Auth sessions |
| `BlogPost` | Blog articles |
| `Category` | Blog categories |
| `Tag` | Blog tags |
| `PageContent` | CMS-editable page sections (JSON) |
| `Media` | Uploaded media metadata |

---

## 7. Domain and DNS Configuration

### Domain

| Property | Value |
|----------|-------|
| **Domain** | `genexcel.ai` |
| **Registrar DNS** | External (ns1.dns-parking.com, ns2.dns-parking.com) |

### DNS Records (at Registrar)

| Type | Name | Value | Purpose |
|------|------|-------|---------|
| A | `@` | `216.239.32.21` | Cloud Run IP |
| A | `@` | `216.239.34.21` | Cloud Run IP |
| A | `@` | `216.239.36.21` | Cloud Run IP |
| A | `@` | `216.239.38.21` | Cloud Run IP |
| CNAME | `www` | `ghs.googlehosted.com.` | Cloud Run www redirect |

### SSL Certificate

| Property | Value |
|----------|-------|
| **Provider** | Google-managed (auto-provisioned via Cloud Run domain mapping) |
| **Domains Covered** | `genexcel.ai`, `www.genexcel.ai` |
| **Auto-Renewal** | Yes — fully managed by Google |

---

## 8. File Storage

- **Static assets** (logos, favicons, manifest) are in `public/` and baked into the Docker image at build time
- **No persistent file storage** in production — Cloud Run is stateless
- If media upload functionality is needed in future, migrate to Google Cloud Storage (GCS)

---

## 9. Maintenance and Operations

### Deploying Updates

Fully automated — just push to `main`:

```bash
git add .
git commit -m "Your changes"
git push origin main
```

GitHub Actions will lint, build, push image, and deploy to Cloud Run automatically.

### Monitoring Logs

```bash
# View live Cloud Run logs
gcloud logging read 'resource.type="cloud_run_revision" AND resource.labels.service_name="genexcel-website"' \
  --project=genexcel-ai --limit=50 --format='value(textPayload)'

# Or use GCP Console:
# https://console.cloud.google.com/run/detail/us-central1/genexcel-website/logs?project=genexcel-ai
```

### Checking Service Status

```bash
# Service status
gcloud run services describe genexcel-website --region=us-central1 --project=genexcel-ai

# List revisions
gcloud run revisions list --service=genexcel-website --region=us-central1 --project=genexcel-ai

# Domain mapping status
gcloud beta run domain-mappings list --region=us-central1 --project=genexcel-ai
```

### Scaling

Cloud Run scales automatically (0 to 3 instances). To adjust limits:

```bash
gcloud run services update genexcel-website \
  --region=us-central1 \
  --min-instances=0 \
  --max-instances=5 \
  --memory=512Mi \
  --project=genexcel-ai
```

### Rollback

```bash
# List recent revisions
gcloud run revisions list --service=genexcel-website --region=us-central1 --project=genexcel-ai

# Roll back to a specific revision
gcloud run services update-traffic genexcel-website \
  --region=us-central1 \
  --to-revisions=genexcel-website-00003-r25=100 \
  --project=genexcel-ai
```

---

## 10. Recovery Instructions

### Scenario 1: Website is down

```bash
# Check service status
gcloud run services describe genexcel-website --region=us-central1 --project=genexcel-ai \
  --format='value(status.conditions[0].type, status.conditions[0].status, status.conditions[0].message)'

# Check latest revision
gcloud run revisions list --service=genexcel-website --region=us-central1 --project=genexcel-ai --limit=3

# Check logs for errors
gcloud logging read 'resource.type="cloud_run_revision" AND resource.labels.service_name="genexcel-website" AND severity>=ERROR' \
  --project=genexcel-ai --limit=20
```

### Scenario 2: Deploy a fresh service from scratch

```bash
# Build and push image
IMAGE="asia-south1-docker.pkg.dev/genexcel-ai/genexcel/genexcel-website:latest"
docker build -t $IMAGE .
gcloud auth configure-docker asia-south1-docker.pkg.dev
docker push $IMAGE

# Deploy
gcloud run deploy genexcel-website \
  --image=$IMAGE \
  --region=us-central1 \
  --platform=managed \
  --allow-unauthenticated \
  --port=8080 \
  --memory=256Mi \
  --cpu=1 \
  --min-instances=0 \
  --max-instances=3 \
  --project=genexcel-ai

# Recreate domain mappings
gcloud beta run domain-mappings create --domain=genexcel.ai \
  --service=genexcel-website --region=us-central1 --project=genexcel-ai --force-override

gcloud beta run domain-mappings create --domain=www.genexcel.ai \
  --service=genexcel-website --region=us-central1 --project=genexcel-ai --force-override
```

DNS records to set at registrar:
- `@` → 4 A records: `216.239.32.21`, `216.239.34.21`, `216.239.36.21`, `216.239.38.21`
- `www` → CNAME: `ghs.googlehosted.com.`

---

## 11. Additional Notes

### Security

- Cloud Run services are accessed via HTTPS only (Google-managed SSL)
- Container runs as non-root user (`nextjs`, UID 1001)
- No SSH, no VM, no firewall rules to manage
- Admin routes (`/admin`) exist in code but have no active DB backing on Cloud Run

### Cost

- Cloud Run free tier: 2M requests/month, 360K vCPU-seconds, 180K GB-seconds — covers this traffic at **$0/month**
- Artifact Registry: minimal storage cost for Docker images (~$0.10/GB/month)

### Known Limitations

1. **No persistent storage** — Blog posts require a database. Currently shows empty state on Cloud Run.
2. **Admin panel non-functional** — `/admin` exists in code but DB is not connected
3. **No staging environment** — Code deploys directly to production
4. **No uptime monitoring** — No alerting configured

### CI/CD Authentication

Uses **Workload Identity Federation (WIF)** — no long-lived service account keys stored anywhere.

### Quick Reference Commands

```bash
# View Cloud Run service
gcloud run services describe genexcel-website --region=us-central1 --project=genexcel-ai

# View logs
gcloud logging read 'resource.type="cloud_run_revision" AND resource.labels.service_name="genexcel-website"' \
  --project=genexcel-ai --limit=30

# Check domain mappings
gcloud beta run domain-mappings list --region=us-central1 --project=genexcel-ai

# View Artifact Registry images
gcloud artifacts docker images list asia-south1-docker.pkg.dev/genexcel-ai/genexcel/genexcel-website

# Check SSL / site health
curl -sI https://genexcel.ai
```

---

*This document was last updated on 2026-03-25.*
*Infrastructure was migrated from Singapore VM (asia-southeast1-b, e2-micro) to Google Cloud Run (us-central1) for cost savings and zero-maintenance hosting.*
*Previous migration history: Mumbai VM (asia-south1-a, e2-small) → Singapore VM (2026-03-19) → Cloud Run (2026-03-25)*
