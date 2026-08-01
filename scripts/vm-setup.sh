#!/usr/bin/env bash
# One-time VM setup for genexcel-website
# VM: genexcel-website | Zone: asia-south1-a | Project: genexcelai
#
# This script is for documentation/reproducibility.
# It was already run on the VM on 2026-02-19.
#
# To re-run:
#   gcloud compute scp scripts/vm-setup.sh genexcel-website:/tmp/vm-setup.sh --zone=asia-south1-a
#   gcloud compute ssh genexcel-website --zone=asia-south1-a --command="bash /tmp/vm-setup.sh"

set -euo pipefail

echo "=== Updating system ==="
sudo apt-get update -y && sudo apt-get upgrade -y

echo "=== Installing Docker ==="
sudo apt-get install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor --yes -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu noble stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo usermod -aG docker "$(whoami)"

echo "=== Installing Nginx ==="
sudo apt-get install -y nginx

echo "=== Installing Certbot ==="
sudo apt-get install -y certbot python3-certbot-nginx

echo "=== Configuring Docker for Artifact Registry ==="
gcloud auth configure-docker asia-south1-docker.pkg.dev --quiet

echo "=== Enabling OS Login ==="
# Done at instance level via:
# gcloud compute instances add-metadata genexcel-website --zone=asia-south1-a --metadata enable-oslogin=TRUE

echo ""
echo "=== Setup complete ==="
echo "Next steps:"
echo "  1. Copy nginx config: gcloud compute scp scripts/nginx-genexcel.conf genexcel-website:/tmp/"
echo "  2. Apply: gcloud compute ssh ... --command='sudo cp /tmp/genexcel.conf /etc/nginx/sites-available/genexcel'"
echo "  3. Point DNS A record for genexcel.ai to VM external IP"
echo "  4. After DNS propagation: sudo certbot --nginx -d genexcel.ai -d www.genexcel.ai"
echo "  5. Push to main branch to trigger first deployment"
