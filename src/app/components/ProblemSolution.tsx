'use client';

import { siteConfig } from '@/lib/constants';

export default function ProblemSolution() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-accent mb-6">
        Why EchoPlan?
      </h2>
      <p className="text-lg text-secondary dark:text-muted mb-4">
        Most solo and student podcasters struggle with consistency.
        They juggle ideas across Notion, Google Docs, calendars, and reminders—
        which leads to burnout, missed deadlines, and forgotten episodes.
      </p>
      <p className="text-lg text-secondary dark:text-muted">
        EchoPlan replaces the chaos with a single, podcast-native space.
        Plan, script, and track your episodes with no distractions, no clutter,
        and no learning curve.
      </p>
    </section>
  );
}
