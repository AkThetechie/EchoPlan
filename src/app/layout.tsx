import './globals.css';
import { siteConfig } from '@/lib/constants';
import { ThemeProvider } from '@/components/ThemeProvider'; // We'll create this
import { cn } from '@/lib/utils'; // ShadCN utility classnames
import type { Metadata } from 'next';
import { Header} from '@/components/Header';
export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background text-secondary antialiased transition-colors font-mono'
        )}
        style={{ fontFamily: siteConfig.font }}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
