'use client';

import { useEffect, useState } from 'react';
import EpisodeForm from './components/EpisodeForm';
import EpisodeCard from './components/EpisodeCard';
import { siteConfig } from '@/lib/constants';

type Episode = {
  id: string;
  title: string;
  notes: string;
  deadline?: string;
  status: 'Idea' | 'Draft' | 'Published';
};

export default function DashboardPage() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [filter, setFilter] = useState<'All' | 'Idea' | 'Draft' | 'Published'>('All');

  // Load episodes from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('echoplan_episodes');
    if (saved) {
      setEpisodes(JSON.parse(saved));
    }
  }, []);

  // Save episodes to localStorage
  useEffect(() => {
    localStorage.setItem('echoplan_episodes', JSON.stringify(episodes));
  }, [episodes]);

  const addEpisode = (ep: Episode) => {
    setEpisodes(prev => [ep, ...prev]);
  };

  const updateStatus = (id: string, newStatus: Episode['status']) => {
    setEpisodes(prev =>
      prev.map(ep => (ep.id === id ? { ...ep, status: newStatus } : ep))
    );
  };

  const deleteEpisode = (id: string) => {
    setEpisodes(prev => prev.filter(ep => ep.id !== id));
  };

  const editEpisode = (id: string, updated: Partial<Episode>) => {
  setEpisodes(prev =>
    prev.map(ep => (ep.id === id ? { ...ep, ...updated } : ep))
  );
};


  const filteredEpisodes =
    filter === 'All'
      ? episodes
      : episodes.filter(ep => ep.status === filter);

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-primary dark:text-white">
        🎙 Your Episodes
      </h1>

      <EpisodeForm onAdd={addEpisode} />

      {/* Filter Buttons */}
      <div className="flex gap-2 flex-wrap mb-4">
        {['All', 'Idea', 'Draft', 'Published'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status as typeof filter)}
            className={`text-sm px-3 py-1 rounded border transition ${
              filter === status
                ? 'bg-primary text-white dark:bg-accent dark:text-black'
                : 'bg-transparent text-muted-foreground border-border'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Episode List */}
      <div className="space-y-4">
        {filteredEpisodes.length === 0 ? (
          <p className="text-muted-foreground text-sm dark:text-gray-400">
            No episodes in this category.
          </p>
        ) : (
          filteredEpisodes.map((episode) => (
            <EpisodeCard
              key={episode.id}
              episode={episode}
              onUpdateStatus={updateStatus}
              onDelete={deleteEpisode}
              onEdit={editEpisode}
            />
          ))
        )}
      </div>
    </main>
  );
}
