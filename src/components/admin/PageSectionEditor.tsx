'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import {
  ChevronDown,
  Save,
  Loader2,
  ArrowLeft,
  Plus,
  Trash2,
  GripVertical,
} from 'lucide-react';
import Link from 'next/link';

interface Section {
  id: string;
  section: string;
  content: string;
  updatedAt: Date;
}

// ─── Field definitions for each section type ─────────────────────────────

interface FieldDef {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'number' | 'toggle' | 'list';
  placeholder?: string;
  help?: string;
}

const sectionFields: Record<string, { label: string; description: string; fields: FieldDef[] }> = {
  stats: {
    label: 'Statistics',
    description: 'Numbers shown on the homepage to highlight key achievements',
    fields: [
      { key: 'value', label: 'Number', type: 'number', placeholder: '10000', help: 'The main number to display' },
      { key: 'suffix', label: 'Suffix', type: 'text', placeholder: '+', help: 'Symbol after number (e.g. +, %, K)' },
      { key: 'label', label: 'Label', type: 'text', placeholder: 'Families Trust Us', help: 'Description below the number' },
    ],
  },
  features: {
    label: 'Features',
    description: 'Feature cards shown on the homepage',
    fields: [
      { key: 'icon', label: 'Icon Name', type: 'text', placeholder: 'Dna', help: 'Lucide icon name (e.g. Dna, Brain, Camera)' },
      { key: 'title', label: 'Title', type: 'text', placeholder: 'Genetic Insights' },
      { key: 'description', label: 'Description', type: 'textarea', placeholder: 'Describe this feature...' },
      { key: 'color', label: 'Gradient Color', type: 'text', placeholder: 'from-blue-500 to-cyan-500', help: 'Tailwind gradient classes' },
      { key: 'href', label: 'Link URL', type: 'text', placeholder: '/solutions/families#genetics' },
    ],
  },
  testimonials: {
    label: 'Testimonials',
    description: 'Customer reviews and testimonials',
    fields: [
      { key: 'quote', label: 'Quote', type: 'textarea', placeholder: 'What the customer said...' },
      { key: 'author', label: 'Author Name', type: 'text', placeholder: 'Priya M.' },
      { key: 'role', label: 'Role / Title', type: 'text', placeholder: 'Parent of 9-year-old' },
      { key: 'location', label: 'Location', type: 'text', placeholder: 'Mumbai' },
      { key: 'avatar', label: 'Avatar Image URL', type: 'text', placeholder: '/images/testimonials/avatar-1.jpg' },
    ],
  },
  pricing: {
    label: 'Pricing Plans',
    description: 'Pricing tiers and their features',
    fields: [
      { key: 'name', label: 'Plan Name', type: 'text', placeholder: 'Premium' },
      { key: 'price', label: 'Price', type: 'text', placeholder: '2,999', help: 'Price without currency symbol' },
      { key: 'period', label: 'Billing Period', type: 'text', placeholder: 'per year' },
      { key: 'description', label: 'Short Description', type: 'text', placeholder: 'Complete genetic insights for your child' },
      { key: 'features', label: 'Features (one per line)', type: 'list', placeholder: 'Add a feature...', help: 'List of features included in this plan' },
      { key: 'cta', label: 'Button Text', type: 'text', placeholder: 'Order Genetic Test' },
      { key: 'href', label: 'Button Link', type: 'text', placeholder: '/order' },
      { key: 'popular', label: 'Mark as Popular', type: 'toggle', help: 'Highlight this plan as the recommended option' },
    ],
  },
};

// ─── Human-readable section names ────────────────────────────────────────

const sectionLabels: Record<string, string> = {
  stats: 'Statistics',
  features: 'Features',
  testimonials: 'Testimonials',
  pricing: 'Pricing Plans',
};

// ─── Helper: Parse JSON content safely ───────────────────────────────────

function parseContent(content: string): Record<string, unknown>[] {
  try {
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : [parsed];
  } catch {
    return [];
  }
}

// ─── Single field renderer ───────────────────────────────────────────────

function FormField({
  field,
  value,
  onChange,
}: {
  field: FieldDef;
  value: unknown;
  onChange: (val: unknown) => void;
}) {
  const inputClass =
    'w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors';

  if (field.type === 'textarea') {
    return (
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          {field.label}
        </label>
        <textarea
          value={(value as string) || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          rows={3}
          className={cn(inputClass, 'resize-y')}
        />
        {field.help && (
          <p className="text-xs text-slate-400 mt-1">{field.help}</p>
        )}
      </div>
    );
  }

  if (field.type === 'number') {
    return (
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          {field.label}
        </label>
        <input
          type="number"
          value={value !== undefined && value !== null ? String(value) : ''}
          onChange={(e) => onChange(e.target.value ? Number(e.target.value) : '')}
          placeholder={field.placeholder}
          className={inputClass}
        />
        {field.help && (
          <p className="text-xs text-slate-400 mt-1">{field.help}</p>
        )}
      </div>
    );
  }

  if (field.type === 'toggle') {
    return (
      <div className="flex items-center justify-between py-1">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            {field.label}
          </label>
          {field.help && (
            <p className="text-xs text-slate-400 mt-0.5">{field.help}</p>
          )}
        </div>
        <button
          type="button"
          onClick={() => onChange(!value)}
          className={cn(
            'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
            value ? 'bg-primary-500' : 'bg-slate-300 dark:bg-slate-600'
          )}
        >
          <span
            className={cn(
              'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
              value ? 'translate-x-6' : 'translate-x-1'
            )}
          />
        </button>
      </div>
    );
  }

  if (field.type === 'list') {
    const items = Array.isArray(value) ? (value as string[]) : [];
    return (
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          {field.label}
        </label>
        {field.help && (
          <p className="text-xs text-slate-400 mb-2">{field.help}</p>
        )}
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <GripVertical className="w-4 h-4 text-slate-300 flex-shrink-0" />
              <input
                type="text"
                value={item}
                onChange={(e) => {
                  const updated = [...items];
                  updated[i] = e.target.value;
                  onChange(updated);
                }}
                className={cn(inputClass, 'flex-1')}
              />
              <button
                type="button"
                onClick={() => {
                  const updated = items.filter((_, idx) => idx !== i);
                  onChange(updated);
                }}
                className="p-1.5 text-red-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => onChange([...items, ''])}
            className="flex items-center gap-1.5 text-sm text-primary-500 hover:text-primary-600 font-medium mt-1"
          >
            <Plus className="w-4 h-4" />
            Add Item
          </button>
        </div>
      </div>
    );
  }

  // Default: text input
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
        {field.label}
      </label>
      <input
        type="text"
        value={(value as string) || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder}
        className={inputClass}
      />
      {field.help && (
        <p className="text-xs text-slate-400 mt-1">{field.help}</p>
      )}
    </div>
  );
}

// ─── Single item card (one stat / one feature / one testimonial / etc.) ──

function ItemCard({
  item,
  index,
  fields,
  onUpdate,
  onRemove,
  itemLabel,
}: {
  item: Record<string, unknown>;
  index: number;
  fields: FieldDef[];
  onUpdate: (index: number, key: string, value: unknown) => void;
  onRemove: (index: number) => void;
  itemLabel: string;
}) {
  return (
    <div className="relative bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
      {/* Item header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          {itemLabel} #{index + 1}
        </span>
        <button
          type="button"
          onClick={() => onRemove(index)}
          className="flex items-center gap-1 text-xs text-red-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 px-2 py-1 rounded-lg transition-colors"
        >
          <Trash2 className="w-3.5 h-3.5" />
          Remove
        </button>
      </div>

      {/* Fields grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map((field) => {
          // Full width for textarea and list fields
          const fullWidth = field.type === 'textarea' || field.type === 'list';
          return (
            <div key={field.key} className={fullWidth ? 'md:col-span-2' : ''}>
              <FormField
                field={field}
                value={item[field.key]}
                onChange={(val) => onUpdate(index, field.key, val)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Generic fallback editor (for unknown section types) ─────────────────

function GenericEditor({
  content,
  onChange,
}: {
  content: string;
  onChange: (val: string) => void;
}) {
  return (
    <div>
      <p className="text-sm text-amber-600 dark:text-amber-400 mb-3">
        This section uses a custom format. You can edit the raw content below.
      </p>
      <textarea
        value={content}
        onChange={(e) => onChange(e.target.value)}
        rows={12}
        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary-500 resize-y"
        spellCheck={false}
      />
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────

export function PageSectionEditor({
  page,
  sections,
}: {
  page: string;
  sections: Section[];
}) {
  const router = useRouter();
  const [openSection, setOpenSection] = useState<string | null>(
    sections[0]?.section || null
  );
  const [editedData, setEditedData] = useState<Record<string, Record<string, unknown>[]>>({});
  const [editedRaw, setEditedRaw] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState<string | null>(null);

  // Get the current items for a section (edited or original)
  const getItems = useCallback(
    (section: Section): Record<string, unknown>[] => {
      if (editedData[section.section]) return editedData[section.section];
      return parseContent(section.content);
    },
    [editedData]
  );

  // Get raw content for generic editor
  const getRawContent = (section: Section): string => {
    return editedRaw[section.section] ?? section.content;
  };

  // Check if this section has a known field definition
  const hasFieldDef = (sectionName: string) => sectionName in sectionFields;

  // Update a single field in a single item
  const updateItemField = (sectionName: string, items: Record<string, unknown>[], index: number, key: string, value: unknown) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [key]: value };
    setEditedData((prev) => ({ ...prev, [sectionName]: updated }));
  };

  // Remove an item
  const removeItem = (sectionName: string, items: Record<string, unknown>[], index: number) => {
    const updated = items.filter((_, i) => i !== index);
    setEditedData((prev) => ({ ...prev, [sectionName]: updated }));
  };

  // Add a new empty item
  const addItem = (sectionName: string, items: Record<string, unknown>[]) => {
    const fieldDef = sectionFields[sectionName];
    if (!fieldDef) return;

    const newItem: Record<string, unknown> = {};
    fieldDef.fields.forEach((f) => {
      if (f.type === 'toggle') newItem[f.key] = false;
      else if (f.type === 'list') newItem[f.key] = [];
      else if (f.type === 'number') newItem[f.key] = 0;
      else newItem[f.key] = '';
    });

    setEditedData((prev) => ({
      ...prev,
      [sectionName]: [...items, newItem],
    }));
  };

  // Save
  const handleSave = async (sectionName: string) => {
    setSaving(sectionName);
    try {
      let contentToSave: string;

      if (hasFieldDef(sectionName)) {
        const items = editedData[sectionName];
        if (!items) {
          toast.info('No changes to save');
          setSaving(null);
          return;
        }
        contentToSave = JSON.stringify(items);
      } else {
        const raw = editedRaw[sectionName];
        if (!raw) {
          toast.info('No changes to save');
          setSaving(null);
          return;
        }
        // Validate JSON for raw editor
        try {
          JSON.parse(raw);
        } catch {
          toast.error('Invalid content format. Please check your input.');
          setSaving(null);
          return;
        }
        contentToSave = raw;
      }

      const res = await fetch(`/api/admin/pages/${page}/${sectionName}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: contentToSave }),
      });

      if (!res.ok) throw new Error('Failed to save');

      const label = sectionLabels[sectionName] || sectionName;
      toast.success(`${label} saved successfully!`);
      router.refresh();
    } catch {
      toast.error('Failed to save. Please try again.');
    } finally {
      setSaving(null);
    }
  };

  // Item label for each section
  const getItemLabel = (sectionName: string): string => {
    const labels: Record<string, string> = {
      stats: 'Stat',
      features: 'Feature',
      testimonials: 'Testimonial',
      pricing: 'Plan',
    };
    return labels[sectionName] || 'Item';
  };

  return (
    <div className="max-w-4xl space-y-4">
      <Link
        href="/admin/pages"
        className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Pages
      </Link>

      {sections.length === 0 ? (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-12 text-center">
          <p className="text-slate-500">
            No content sections found for this page. Run the seed script to
            populate default content.
          </p>
        </div>
      ) : (
        sections.map((section) => {
          const fieldDef = sectionFields[section.section];
          const label = fieldDef?.label || section.section.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase());
          const description = fieldDef?.description;

          return (
            <div
              key={section.id}
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() =>
                  setOpenSection(
                    openSection === section.section ? null : section.section
                  )
                }
                className="w-full flex items-center justify-between p-5 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
              >
                <div className="text-left">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    {label}
                  </h3>
                  {description && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {description}
                    </p>
                  )}
                  <p className="text-xs text-slate-400 mt-1">
                    Last updated:{' '}
                    {format(new Date(section.updatedAt), 'MMM d, yyyy h:mm a')}
                  </p>
                </div>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-slate-400 transition-transform',
                    openSection === section.section && 'rotate-180'
                  )}
                />
              </button>

              {/* Accordion Content */}
              {openSection === section.section && (
                <div className="border-t border-slate-200 dark:border-slate-700 p-5">
                  {fieldDef ? (
                    <>
                      {/* Structured form editor */}
                      <div className="space-y-4">
                        {getItems(section).map((item, index) => (
                          <ItemCard
                            key={index}
                            item={item}
                            index={index}
                            fields={fieldDef.fields}
                            onUpdate={(i, key, val) =>
                              updateItemField(
                                section.section,
                                getItems(section),
                                i,
                                key,
                                val
                              )
                            }
                            onRemove={(i) =>
                              removeItem(section.section, getItems(section), i)
                            }
                            itemLabel={getItemLabel(section.section)}
                          />
                        ))}
                      </div>

                      {/* Add new item */}
                      <button
                        type="button"
                        onClick={() =>
                          addItem(section.section, getItems(section))
                        }
                        className="flex items-center gap-2 mt-4 px-4 py-2.5 border-2 border-dashed border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-primary-400 hover:text-primary-500 rounded-xl transition-colors text-sm font-medium w-full justify-center"
                      >
                        <Plus className="w-4 h-4" />
                        Add {getItemLabel(section.section)}
                      </button>
                    </>
                  ) : (
                    /* Generic raw editor for unknown types */
                    <GenericEditor
                      content={getRawContent(section)}
                      onChange={(val) =>
                        setEditedRaw((prev) => ({
                          ...prev,
                          [section.section]: val,
                        }))
                      }
                    />
                  )}

                  {/* Save button */}
                  <div className="flex justify-end mt-5">
                    <button
                      onClick={() => handleSave(section.section)}
                      disabled={saving === section.section}
                      className="flex items-center gap-2 px-5 py-2.5 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50 text-sm font-medium"
                    >
                      {saving === section.section ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Save className="w-4 h-4" />
                      )}
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
