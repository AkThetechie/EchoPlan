/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',

        background: 'var(--color-background)',
        foreground: 'var(--color-primary)',
        border: 'var(--color-secondary)',
        ring: 'var(--color-accent)',
      },
      fontFamily: {
        mono: ['"Libertinus Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
