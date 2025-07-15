'use client';

import { useState } from 'react';

type Episode = {
  id: string;
  title: string;
  notes: string;
  deadline?: string;
  status: 'Idea' | 'Draft' | 'Published';
};

type Props = {
  onAdd: (episode: Episode) => void;
};

export default function EpisodeForm({ onAdd }: Props) {
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newEpisode: Episode = {
      id: Date.now().toString(),
      title,
      notes,
      deadline: deadline || undefined,
      status: 'Idea',
    };

    onAdd(newEpisode);
    setTitle('');
    setNotes('');
    setDeadline('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-background dark:bg-secondary border border-border rounded-xl p-4 mb-6 shadow-sm space-y-4"
    >
      <div>
        <label className="block mb-1 font-medium">Episode Title</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Intro to Podcasting"
          className="w-full px-3 py-2 rounded border border-border bg-white dark:bg-gray-800 text-primary dark:text-white"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Notes / Idea</label>
        <textarea
          value={notes}
          onChange={e => setNotes(e.target.value)}
          placeholder="Quick summary or topic flow"
          className="w-full px-3 py-2 rounded border border-border bg-white dark:bg-gray-800 text-primary dark:text-white"
          rows={3}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Optional Deadline</label>
        <input
          type="date"
          value={deadline}
          onChange={e => setDeadline(e.target.value)}
          className="w-full px-3 py-2 rounded border border-border bg-white dark:bg-gray-800 text-primary dark:text-white"
        />
      </div>

      <button
        type="submit"
        className="bg-primary text-white dark:bg-accent dark:text-black px-4 py-2 rounded hover:opacity-90"
      >
        Add Episode
      </button>
    </form>
  );
}
