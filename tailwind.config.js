/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,html}",
  ],
  theme: {
    extend: {
      colors: {
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        detail: 'rgb(var(--color-detail) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        'gray-1': 'rgb(var(--color-gray-1) / <alpha-value>)',
        'gray-5': 'rgb(var(--color-gray-5) / <alpha-value>)',
        'gray-6': 'rgb(var(--color-gray-6) / <alpha-value>)',
        'gray-7': 'rgb(var(--color-gray-7) / <alpha-value>)',
        'gray-8': 'rgb(var(--color-gray-8) / <alpha-value>)',
        'text-gray': 'rgb(var(--color-text-gray) / <alpha-value>)',
        'neutral-bg': 'rgb(var(--color-neutral-bg) / <alpha-value>)',
        'error': 'rgb(var(--color-error) / <alpha-value>)',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        label: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'hero': ['90px', { lineHeight: '1.2em', fontWeight: '700' }],
        'heading-lg': ['48px', { lineHeight: '64px', fontWeight: '700' }],
        'heading-md': ['24px', { lineHeight: '1.58em' }],
        'body-lg': ['22px', { lineHeight: '1.41em' }],
        'body-md': ['20px', { lineHeight: '36px' }],
        'body-sm': ['14px', { lineHeight: '24px' }],
        'label-sm': ['12px', { lineHeight: '23px', letterSpacing: '0.125em' }],
      },
      boxShadow: {
        'card': '0px 18px 58px 16px rgba(0, 0, 0, 0.06)',
        'dark': '0px 10px 20px 0px rgba(41, 41, 42, 0.07)',
        'caption': '0px 39px 100px 0px rgba(25, 62, 108, 0.12)',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(180, 100, 80, 0.4)' },
          '70%': { boxShadow: '0 0 0 30px rgba(180, 100, 80, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(180, 100, 80, 0)' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
      },
      borderRadius: {
        'pill': '26.5px',
        'feature': '8px',
        'input': '10px',
        'navbar': '15px',
      },
    },
  },
  plugins: [],
};
