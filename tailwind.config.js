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
        // --- NOVAS CORES PRIMÁRIAS ---
        primary: '#00BFFF', // Ciano Tecnológico (Deep Sky Blue)
        secondary: '#1E90FF', // Azul Vibrante (Dodger Blue)
        // --- FIM DAS NOVAS CORES ---
        background: '#F0F2F5',
        'text-primary': '#343A40',
        'text-secondary': '#6C757D',
      },
      boxShadow: {
         'neumorphic-out': '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
         'neumorphic-in': 'inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #ffffff',
         'neumorphic-out-sm': '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff',
         'neumorphic-in-sm': 'inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #ffffff',
      },
      // ... resto do seu ficheiro (animações) ...
      animation: {
         'float-slow': 'float 10s infinite ease-in-out alternate',
         'spin-slow': 'spin 3s linear infinite',
         'bounce-slow': 'bounce-slow 2s infinite ease-in-out',
         'fade-in': 'fadeIn 0.8s ease-out forwards',
         'slide-in-up': 'slideInUp 0.8s ease-out forwards',
       },
       keyframes: {
         float: { '0%, 100%': { transform: 'translateY(0) translateX(0)' }, '25%': { transform: 'translateY(-10px) translateX(10px)' }, '50%': { transform: 'translateY(10px) translateX(-10px)' }, '75%': { transform: 'translateY(-5px) translateX(5px)' } },
         'bounce-slow': { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
         fadeIn: { from: { opacity: 0, transform: 'translateY(20px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
         slideInUp: { from: { opacity: 0, transform: 'translateY(50px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
       },
    },
  },
  plugins: [],
}