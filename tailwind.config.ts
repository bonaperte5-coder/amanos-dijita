import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F8FAFF',
        surface: '#EEF3FF',
        'accent-blue': '#0072FF',
        'accent-blue-dark': '#0052CC',
        cta: '#FF6B35',
        'text-main': '#0A1628',
        'text-secondary': '#5C6E8A',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Space Grotesk', 'sans-serif'],
        body: ['var(--font-body)', 'DM Sans', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
