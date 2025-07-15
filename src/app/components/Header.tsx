import Link from 'next/link';
import { siteConfig } from '@/lib/constants';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 border-b bg-background">
      <Link href="/" className="text-xl font-bold text-primary">
        {siteConfig.name}
      </Link>
      <nav className="flex items-center gap-4">
        <Link href="/about" className="text-secondary hover:underline">About</Link>
        <Link href="/join" className="text-secondary hover:underline">Join</Link>
        <Link href="/dashboard"className="text-sm font-medium text-muted-foreground hover:text-primary dark:hover:text-white">Dashboard</Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
