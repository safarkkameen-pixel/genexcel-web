'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import Youtube from '@tiptap/extension-youtube';
import { TipTapToolbar } from './TipTapToolbar';

interface TipTapEditorProps {
  content?: string;
  onChange?: (json: string, html: string) => void;
}

export function TipTapEditor({ content, onChange }: TipTapEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3, 4] },
      }),
      Image.configure({ inline: false }),
      Link.configure({ openOnClick: false }),
      Placeholder.configure({
        placeholder: 'Start writing your blog post...',
      }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Underline,
      TextStyle,
      Color,
      Youtube.configure({ width: 640, height: 360 }),
    ],
    content: content ? tryParseJSON(content) : '',
    editorProps: {
      attributes: {
        class:
          'prose prose-slate dark:prose-invert max-w-none min-h-[400px] focus:outline-none px-6 py-4',
      },
    },
    onUpdate: ({ editor }) => {
      if (onChange) {
        onChange(JSON.stringify(editor.getJSON()), editor.getHTML());
      }
    },
  });

  if (!editor) return null;

  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-800">
      <TipTapToolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}

function tryParseJSON(str: string) {
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
}
