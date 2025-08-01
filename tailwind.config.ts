/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        brand: {
          50: '#f0f4ff',
          100: '#e0e7ff',
          500: '#6366f1',
          600: '#4f46e5',
          900: '#312e81',
        },
        
        // Background
        bg: {
          primary: '#EE2B69',
          secondary: '#f8fafc',
          dark: '#0f172a',
        },
        
        // Text
        text: {
          primary: '#0f172a',
          secondary: '#64748b',
          muted: '#94a3b8',
        },
      },
      
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}