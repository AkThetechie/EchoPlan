import type { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-primary dark:bg-black dark:text-white">
      <header className="border-b border-border px-6 py-4">
        <h1 className="text-xl font-bold">EchoPlan Dashboard</h1>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-6">
        {children}
      </section>

      <footer className="text-xs text-muted-foreground text-center py-6 opacity-60">
        EchoPlan MVP — local-only. Data is not synced across devices.
      </footer>
    </div>
  );
}
