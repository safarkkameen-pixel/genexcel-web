'use client';

import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { AdminShell } from '@/components/admin/AdminShell';
import {
  Search,
  PlusCircle,
  Trash2,
  Copy,
  ImageIcon,
  Loader2,
  X,
} from 'lucide-react';

interface MediaItem {
  id: string;
  filename: string;
  url: string;
  mimeType: string;
  size: number;
  altText: string | null;
  folder: string;
  createdAt: string;
}

export default function MediaPage() {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const [newUrl, setNewUrl] = useState('');
  const [newFilename, setNewFilename] = useState('');
  const [newAltText, setNewAltText] = useState('');
  const [adding, setAdding] = useState(false);

  const fetchMedia = async () => {
    const res = await fetch('/api/admin/media');
    const data = await res.json();
    setMedia(data.media);
    setLoading(false);
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const handleAdd = async () => {
    if (!newUrl.trim()) return;
    setAdding(true);
    try {
      const res = await fetch('/api/admin/media', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: newUrl,
          filename: newFilename || 'image',
          altText: newAltText,
        }),
      });
      if (!res.ok) throw new Error('Failed to add');
      toast.success('Media added!');
      setNewUrl('');
      setNewFilename('');
      setNewAltText('');
      setShowAdd(false);
      fetchMedia();
    } catch {
      toast.error('Failed to add media');
    } finally {
      setAdding(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this media?')) return;
    try {
      await fetch(`/api/admin/media/${id}`, { method: 'DELETE' });
      toast.success('Media deleted');
      setMedia(media.filter((m) => m.id !== id));
    } catch {
      toast.error('Failed to delete');
    }
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success('URL copied!');
  };

  const filtered = media.filter(
    (m) =>
      m.filename.toLowerCase().includes(search.toLowerCase()) ||
      m.altText?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminShell title="Media Library">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search media..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <button
            onClick={() => setShowAdd(!showAdd)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
          >
            <PlusCircle className="w-4 h-4" />
            Add Media
          </button>
        </div>

        {/* Add Media Form */}
        {showAdd && (
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 space-y-3">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Add Media by URL
              </h3>
              <button onClick={() => setShowAdd(false)}>
                <X className="w-4 h-4 text-slate-400" />
              </button>
            </div>
            <input
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              placeholder="Image URL (https://...)"
              className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                value={newFilename}
                onChange={(e) => setNewFilename(e.target.value)}
                placeholder="Filename"
                className="px-3 py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <input
                value={newAltText}
                onChange={(e) => setNewAltText(e.target.value)}
                placeholder="Alt text"
                className="px-3 py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <button
              onClick={handleAdd}
              disabled={adding}
              className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 text-sm disabled:opacity-50"
            >
              {adding ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <PlusCircle className="w-4 h-4" />
              )}
              Add
            </button>
          </div>
        )}

        {/* Media Grid */}
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 className="w-8 h-8 animate-spin text-primary-500" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-12 text-center">
            <ImageIcon className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
            <p className="text-slate-500">
              {media.length === 0
                ? 'No media files yet.'
                : 'No media matches your search.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-slate-100 dark:bg-slate-700 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.url}
                    alt={item.altText || item.filename}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '';
                      (e.target as HTMLImageElement).className =
                        'w-full h-full flex items-center justify-center';
                    }}
                  />
                  {/* Overlay actions */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => copyUrl(item.url)}
                      className="p-2 bg-white/90 rounded-lg hover:bg-white"
                      title="Copy URL"
                    >
                      <Copy className="w-4 h-4 text-slate-700" />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-2 bg-white/90 rounded-lg hover:bg-white"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-xs font-medium text-slate-900 dark:text-white truncate">
                    {item.filename}
                  </p>
                  <p className="text-xs text-slate-400 truncate mt-0.5">
                    {item.altText || 'No alt text'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminShell>
  );
}
