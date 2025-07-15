
'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/constants';

export default function EmailForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 max-w-xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-accent mb-6">
        Join the EchoPlan Waitlist
      </h2>
      <p className="text-secondary dark:text-muted mb-6">
        Get notified when we launch + early access to our beta.
      </p>

      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        onSubmit={() => setSubmitted(true)}
        className="flex flex-col sm:flex-row gap-3 justify-center"
      >
        <input
          required
          type="email"
          name="email"
          placeholder="your@email.com"
          className="px-4 py-2 rounded-md border border-border bg-background dark:bg-secondary text-primary dark:text-accent placeholder:text-muted w-full sm:w-auto"
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-primary text-white dark:bg-accent dark:text-black hover:opacity-90 transition"
        >
          {submitted ? '✓ Joined!' : 'Join Now'}
        </button>
      </form>
    </section>
  );
}
