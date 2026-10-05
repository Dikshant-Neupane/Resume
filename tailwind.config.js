/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#735a36',
        'on-primary': '#ffffff',
        'primary-container': '#c4a57b',
        'on-primary-container': '#503b1a',
        'primary-fixed-dim': '#e2c195',
        secondary: '#715b3e',
        'secondary-container': '#f9dbb7',
        tertiary: '#4f5f77',
        surface: '#fff8f4',
        'surface-dim': '#e0d9d3',
        'surface-container': '#f4ece7',
        'surface-container-low': '#faf2ed',
        'surface-container-high': '#eee7e1',
        'surface-container-highest': '#e8e1dc',
        'surface-container-lowest': '#ffffff',
        'surface-variant': '#e8e1dc',
        'on-surface': '#1e1b18',
        'on-surface-variant': '#4e453b',
        outline: '#7f756a',
        'outline-variant': '#d1c5b7',
        background: '#fff8f4',
      },
      fontFamily: {
        heading: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
