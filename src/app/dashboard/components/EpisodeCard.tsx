'use client';

import { useState } from 'react';
import { format } from 'date-fns';

type Episode = {
  id: string;
  title: string;
  notes: string;
  deadline?: string;
  status: 'Idea' | 'Draft' | 'Published';
};

type Props = {
  episode: Episode;
  onUpdateStatus: (id: string, newStatus: Episode['status']) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, updated: Partial<Episode>) => void;
};

export default function EpisodeCard({ episode, onUpdateStatus, onDelete, onEdit }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [edited, setEdited] = useState({
    title: episode.title,
    notes: episode.notes,
    deadline: episode.deadline || '',
  });

  const handleSave = () => {
    onEdit(episode.id, edited);
    setIsEditing(false);
  };

  return (
    <div className="border border-border p-4 rounded-md bg-background dark:bg-[#111] space-y-2">
      {isEditing ? (
        <>
          <input
            value={edited.title}
            onChange={(e) => setEdited({ ...edited, title: e.target.value })}
            className="w-full p-2 text-lg font-semibold bg-transparent border rounded"
          />
          <textarea
            value={edited.notes}
            onChange={(e) => setEdited({ ...edited, notes: e.target.value })}
            className="w-full p-2 text-sm bg-transparent border rounded"
          />
          <input
            type="date"
            value={edited.deadline}
            onChange={(e) => setEdited({ ...edited, deadline: e.target.value })}
            className="w-full p-2 text-sm border rounded"
          />
          <div className="flex gap-2 pt-2">
            <button onClick={handleSave} className="px-3 py-1 text-sm rounded bg-primary text-white">
              Save
            </button>
            <button onClick={() => setIsEditing(false)} className="px-3 py-1 text-sm border rounded">
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-lg font-semibold">{episode.title}</h3>
          <p className="text-sm text-muted-foreground whitespace-pre-line">{episode.notes}</p>
          {episode.deadline && (
            <p className="text-xs text-muted-foreground">
              Deadline: {format(new Date(episode.deadline), 'MMM d, yyyy')}
            </p>
          )}

          <div className="flex gap-2 mt-3 flex-wrap">
            {episode.status !== 'Idea' && (
              <button
                onClick={() => onUpdateStatus(episode.id, 'Idea')}
                className="text-xs px-2 py-1 border rounded"
              >
                ← Idea
              </button>
            )}
            {episode.status !== 'Draft' && (
              <button
                onClick={() => onUpdateStatus(episode.id, 'Draft')}
                className="text-xs px-2 py-1 border rounded"
              >
                → Draft
              </button>
            )}
            {episode.status !== 'Published' && (
              <button
                onClick={() => onUpdateStatus(episode.id, 'Published')}
                className="text-xs px-2 py-1 border rounded"
              >
                ✅ Publish
              </button>
            )}
            <button onClick={() => setIsEditing(true)} className="text-xs px-2 py-1 border rounded">
              ✏️ Edit
            </button>
            <button onClick={() => onDelete(episode.id)} className="text-xs px-2 py-1 border rounded text-red-500">
              🗑 Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
