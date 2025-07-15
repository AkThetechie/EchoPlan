'use client';

import { siteConfig } from '@/lib/constants';

const features = [
  {
    title: '🎯 Episode Dashboard',
    description:
      'Track all your podcast ideas in one place — from Idea → Draft → Published.',
  },
  {
    title: '📝 Script Editor with Timestamps',
    description:
      'Write distraction-free scripts with markdown and timestamp support for each segment.',
  },
  {
    title: '⏰ Lightweight Reminders',
    description:
      'Set deadlines for each episode and get gentle nudges to stay consistent.',
  },
  {
    title: '🏷️ Tags & Filters',
    description:
      'Organize episodes by themes, series, or formats using simple filters.',
  },
  {
    title: '🌗 Clean & Calm UI',
    description:
      'Dark-mode ready and free from distractions — built for creators who want focus.',
  },
];

export default function Features() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-accent mb-10">
        What You Can Do with {siteConfig.name}
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-background dark:bg-secondary rounded-2xl p-6 shadow-md border border-border dark:border-muted transition"
          >
            <h3 className="text-xl font-semibold text-primary dark:text-accent mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-secondary dark:text-muted">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
