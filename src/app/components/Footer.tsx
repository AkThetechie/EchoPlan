'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background dark:bg-secondary text-secondary dark:text-muted py-8 mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/join" className="hover:underline">
            Join Waitlist
          </Link>
          <Link href="/demo" className="hover:underline">
            Demo
          </Link>
        </div>
      </div>
    </footer>
  );
}
