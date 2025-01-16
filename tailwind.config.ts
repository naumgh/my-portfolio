import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],  // Ensure proper content path
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        background: '#0A0A0A',
        surface: '#141414',
        primary: '#E5E5E5',
        secondary: '#A1A1A1',
        accent: '#16A34A',
        muted: '#525252',
      }
    }
  },
  plugins: [containerQueries, typography]
};

export default config;