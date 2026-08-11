'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { PlusCircle, Edit, Trash2, X, Check } from 'lucide-react';
import { adminFetch, AdminSessionExpiredError } from '@/lib/adminFetch';

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  color: string | null;
  _count: { posts: number };
}

export function CategoryManager({
  categories,
}: {
  categories: Category[];
}) {
  const router = useRouter();
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleCreate = async () => {
    if (!newName.trim()) return;
    try {
      const res = await adminFetch('/api/admin/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newName, description: newDescription }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error);
      }
      toast.success('Category created');
      setNewName('');
      setNewDescription('');
      setIsAdding(false);
      router.refresh();
    } catch (err) {
      if (!(err instanceof AdminSessionExpiredError)) {
        toast.error(err instanceof Error ? err.message : 'Failed to create');
      }
    }
  };

  const handleUpdate = async (id: string) => {
    if (!editName.trim()) return;
    try {
      const res = await adminFetch(`/api/admin/categories/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: editName }),
      });
      if (!res.ok) throw new Error('Failed to update');
      toast.success('Category updated');
      setEditingId(null);
      router.refresh();
    } catch (err) {
      if (!(err instanceof AdminSessionExpiredError)) {
        toast.error('Failed to update category');
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this category? Posts in this category will become uncategorized.'))
      return;
    try {
      const res = await adminFetch(`/api/admin/categories/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete');
      toast.success('Category deleted');
      router.refresh();
    } catch (err) {
      if (!(err instanceof AdminSessionExpiredError)) {
        toast.error('Failed to delete category');
      }
    }
  };

  return (
    <div className="max-w-2xl space-y-6">
      {/* Add Button */}
      {!isAdding && (
        <button
          onClick={() => setIsAdding(true)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
        >
          <PlusCircle className="w-4 h-4" />
          Add Category
        </button>
      )}

      {/* Add Form */}
      {isAdding && (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 space-y-3">
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Category name"
            className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            autoFocus
          />
          <input
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Description (optional)"
            className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <div className="flex gap-2">
            <button
              onClick={handleCreate}
              className="flex items-center gap-1 px-3 py-1.5 bg-primary-500 text-white rounded-lg text-sm hover:bg-primary-600"
            >
              <Check className="w-4 h-4" /> Save
            </button>
            <button
              onClick={() => {
                setIsAdding(false);
                setNewName('');
                setNewDescription('');
              }}
              className="flex items-center gap-1 px-3 py-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg text-sm hover:bg-slate-300 dark:hover:bg-slate-600"
            >
              <X className="w-4 h-4" /> Cancel
            </button>
          </div>
        </div>
      )}

      {/* Categories List */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        {categories.length === 0 ? (
          <div className="p-12 text-center text-slate-500">
            No categories yet.
          </div>
        ) : (
          <div className="divide-y divide-slate-200 dark:divide-slate-700">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50"
              >
                {editingId === cat.id ? (
                  <div className="flex items-center gap-2 flex-1">
                    <input
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="flex-1 px-3 py-1.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                      autoFocus
                    />
                    <button
                      onClick={() => handleUpdate(cat.id)}
                      className="p-1.5 text-green-500 hover:bg-green-50 dark:hover:bg-green-500/10 rounded-md"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">
                        {cat.name}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {cat._count.posts} post
                        {cat._count.posts !== 1 ? 's' : ''} &middot; /{cat.slug}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setEditingId(cat.id);
                          setEditName(cat.name);
                        }}
                        className="p-1.5 text-slate-400 hover:text-primary-500 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(cat.id)}
                        className="p-1.5 text-slate-400 hover:text-red-500 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
