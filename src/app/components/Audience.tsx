'use client';

import { siteConfig } from '@/lib/constants';

export default function Audience() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-accent mb-10">
        Who Is {siteConfig.name} For?
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 text-left">
        <div className="p-6 bg-background dark:bg-secondary rounded-xl border border-border dark:border-muted shadow">
          <h3 className="text-xl font-semibold text-primary dark:text-accent mb-2">
            🎙 Solo Podcasters
          </h3>
          <p className="text-sm text-secondary dark:text-muted">
            Especially students who juggle studies and side projects. Stay consistent without needing a team.
          </p>
        </div>

        <div className="p-6 bg-background dark:bg-secondary rounded-xl border border-border dark:border-muted shadow">
          <h3 className="text-xl font-semibold text-primary dark:text-accent mb-2">
            🏫 Campus Radio Clubs
          </h3>
          <p className="text-sm text-secondary dark:text-muted">
            Manage multiple shows, hosts, and deadlines. Plan collaboratively with structure.
          </p>
        </div>

        <div className="p-6 bg-background dark:bg-secondary rounded-xl border border-border dark:border-muted shadow">
          <h3 className="text-xl font-semibold text-primary dark:text-accent mb-2">
            📚 Educational Creators
          </h3>
          <p className="text-sm text-secondary dark:text-muted">
            From class explainers to audio storytelling, organize content clearly and publish with ease.
          </p>
        </div>
      </div>
    </section>
  );
}
