import { siteConfig } from '@/lib/constants';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="text-center px-6 py-20 bg-background">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
        Plan Podcasts <br className="hidden sm:inline" /> Without the Chaos
      </h1>
      <p className="max-w-xl mx-auto text-lg text-secondary mb-8">
        {siteConfig.description}
      </p>
      <Link
        href="/join"
        className="inline-block bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-secondary transition"
      >
        Join the Waitlist
      </Link>
    </section>
  );
}
