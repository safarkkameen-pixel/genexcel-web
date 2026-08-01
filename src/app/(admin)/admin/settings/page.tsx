'use client';

import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { AdminShell } from '@/components/admin/AdminShell';
import { Save, Loader2 } from 'lucide-react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    name: 'GenExcel.ai',
    description: '',
    url: 'https://genexcel.ai',
    twitter: '',
    linkedin: '',
    instagram: '',
    contactEmail: '',
    contactPhone: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch('/api/admin/settings')
      .then((res) => res.json())
      .then((data) => {
        if (data.settings) {
          setSettings((prev) => ({ ...prev, ...data.settings }));
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      if (!res.ok) throw new Error('Failed to save');
      toast.success('Settings saved!');
    } catch {
      toast.error('Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  const Field = ({
    label,
    field,
    type = 'text',
  }: {
    label: string;
    field: keyof typeof settings;
    type?: string;
  }) => (
    <div>
      <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
        {label}
      </label>
      <input
        type={type}
        value={settings[field]}
        onChange={(e) =>
          setSettings((prev) => ({ ...prev, [field]: e.target.value }))
        }
        className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
      />
    </div>
  );

  if (loading) {
    return (
      <AdminShell title="Settings">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="w-8 h-8 animate-spin text-primary-500" />
        </div>
      </AdminShell>
    );
  }

  return (
    <AdminShell title="Settings">
      <div className="max-w-2xl space-y-8">
        {/* General */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            General
          </h3>
          <div className="space-y-4">
            <Field label="Site Name" field="name" />
            <Field label="Description" field="description" />
            <Field label="Site URL" field="url" type="url" />
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Social Links
          </h3>
          <div className="space-y-4">
            <Field label="Twitter" field="twitter" type="url" />
            <Field label="LinkedIn" field="linkedin" type="url" />
            <Field label="Instagram" field="instagram" type="url" />
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Contact Info
          </h3>
          <div className="space-y-4">
            <Field label="Email" field="contactEmail" type="email" />
            <Field label="Phone" field="contactPhone" type="tel" />
          </div>
        </div>

        {/* Save */}
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 font-medium"
        >
          {saving ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Save className="w-5 h-5" />
          )}
          Save Settings
        </button>
      </div>
    </AdminShell>
  );
}
