#!/usr/bin/env bash
# SSL + Security hardening for genexcel-website VM
# VM: genexcel-website | Zone: asia-south1-a | Project: genexcelai
#
# Usage:
#   gcloud compute scp scripts/nginx-initial.conf genexcel-website:/tmp/nginx-initial.conf --zone=asia-south1-a
#   gcloud compute scp scripts/ssl-and-security-setup.sh genexcel-website:/tmp/ssl-and-security-setup.sh --zone=asia-south1-a
#   gcloud compute ssh genexcel-website --zone=asia-south1-a --command="sudo bash /tmp/ssl-and-security-setup.sh"

set -euo pipefail

DOMAIN="genexcel.ai"
EMAIL="admin@genexcel.ai"

echo "============================================"
echo "  GenExcel SSL & Security Setup"
echo "============================================"

# -----------------------------------------------
# 1. Nginx config (HTTP-only, for certbot to modify)
# -----------------------------------------------
echo ""
echo "=== [1/7] Setting up initial Nginx config ==="
cp /tmp/nginx-initial.conf /etc/nginx/sites-available/genexcel
ln -sf /etc/nginx/sites-available/genexcel /etc/nginx/sites-enabled/genexcel
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx
echo "  ✓ Nginx configured (HTTP-only)"

# -----------------------------------------------
# 2. Certbot — obtain SSL certificate
# -----------------------------------------------
echo ""
echo "=== [2/7] Running Certbot ==="
certbot --nginx \
  -d "$DOMAIN" \
  -d "www.$DOMAIN" \
  --non-interactive \
  --agree-tos \
  --email "$EMAIL" \
  --redirect
echo "  ✓ SSL certificate obtained and nginx updated"

# Verify auto-renewal timer is active
systemctl enable --now certbot.timer || true
echo "  ✓ Certbot auto-renewal timer enabled"

# -----------------------------------------------
# 3. Harden Nginx SSL settings
# -----------------------------------------------
echo ""
echo "=== [3/7] Hardening Nginx SSL ==="

# Add security headers and HSTS via a snippet
cat > /etc/nginx/snippets/security-headers.conf <<'SNIPPET'
# HSTS — force HTTPS for 1 year, include subdomains
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;

# Prevent clickjacking
add_header X-Frame-Options "SAMEORIGIN" always;

# Prevent MIME-type sniffing
add_header X-Content-Type-Options "nosniff" always;

# Referrer policy
add_header Referrer-Policy "strict-origin-when-cross-origin" always;

# Permissions policy — restrict sensitive APIs
add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()" always;
SNIPPET

# Include the snippet in the certbot-managed server block
if ! grep -q "security-headers.conf" /etc/nginx/sites-available/genexcel; then
  # Insert the include right after the first "listen 443" block's server_name line
  sed -i '/listen 443 ssl/,/server_name/{/server_name/a\    include /etc/nginx/snippets/security-headers.conf;
}' /etc/nginx/sites-available/genexcel
fi

nginx -t
systemctl reload nginx
echo "  ✓ Security headers configured"

# -----------------------------------------------
# 4. UFW Firewall
# -----------------------------------------------
echo ""
echo "=== [4/7] Configuring UFW Firewall ==="
apt-get install -y ufw > /dev/null 2>&1

# Reset to defaults
ufw --force reset > /dev/null 2>&1

# Default policies
ufw default deny incoming
ufw default allow outgoing

# Allow SSH (port 22)
ufw allow 22/tcp comment "SSH"

# Allow HTTP and HTTPS
ufw allow 80/tcp comment "HTTP"
ufw allow 443/tcp comment "HTTPS"

# Enable firewall
ufw --force enable
echo "  ✓ UFW enabled (SSH + HTTP + HTTPS only)"

# -----------------------------------------------
# 5. Fail2Ban — brute-force protection
# -----------------------------------------------
echo ""
echo "=== [5/7] Installing & Configuring Fail2Ban ==="
apt-get install -y fail2ban > /dev/null 2>&1

cat > /etc/fail2ban/jail.local <<'JAIL'
[DEFAULT]
bantime  = 1h
findtime = 10m
maxretry = 5
backend  = systemd

[sshd]
enabled = true
port    = ssh
filter  = sshd
maxretry = 3

[nginx-http-auth]
enabled = true

[nginx-botsearch]
enabled  = true
port     = http,https
filter   = nginx-botsearch
logpath  = /var/log/nginx/access.log
maxretry = 2
JAIL

systemctl enable fail2ban
systemctl restart fail2ban
echo "  ✓ Fail2Ban installed (SSH: 3 attempts, nginx bot protection)"

# -----------------------------------------------
# 6. Automatic security updates
# -----------------------------------------------
echo ""
echo "=== [6/7] Enabling Automatic Security Updates ==="
apt-get install -y unattended-upgrades > /dev/null 2>&1

cat > /etc/apt/apt.conf.d/20auto-upgrades <<'AUTOUP'
APT::Periodic::Update-Package-Lists "1";
APT::Periodic::Unattended-Upgrade "1";
APT::Periodic::AutocleanInterval "7";
AUTOUP

systemctl enable unattended-upgrades
systemctl restart unattended-upgrades
echo "  ✓ Automatic security updates enabled"

# -----------------------------------------------
# 7. SSH hardening
# -----------------------------------------------
echo ""
echo "=== [7/7] Hardening SSH ==="
SSHD_CONF="/etc/ssh/sshd_config"

# Disable root login
sed -i 's/^#\?PermitRootLogin.*/PermitRootLogin no/' "$SSHD_CONF"

# Disable password auth (GCE uses keys via OS Login)
sed -i 's/^#\?PasswordAuthentication.*/PasswordAuthentication no/' "$SSHD_CONF"

# Limit auth attempts
sed -i 's/^#\?MaxAuthTries.*/MaxAuthTries 3/' "$SSHD_CONF"

# Disable empty passwords
sed -i 's/^#\?PermitEmptyPasswords.*/PermitEmptyPasswords no/' "$SSHD_CONF"

systemctl reload ssh
echo "  ✓ SSH hardened (no root login, no password auth, max 3 attempts)"

# -----------------------------------------------
# Summary
# -----------------------------------------------
echo ""
echo "============================================"
echo "  Setup Complete!"
echo "============================================"
echo ""
echo "  SSL:       https://$DOMAIN (Let's Encrypt)"
echo "  Firewall:  UFW (22, 80, 443 only)"
echo "  Fail2Ban:  SSH + Nginx protection"
echo "  Updates:   Automatic security patches"
echo "  SSH:       Root login disabled, key-only"
echo ""
echo "  Verify: curl -I https://$DOMAIN"
echo "============================================"
