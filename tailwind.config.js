/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#162F4F',
          secondary: '#133467',
          slate: '#556780',
        },
        green: {
          DEFAULT: '#8FA28A',
          light: '#C7D3C0',
        },
        cream: {
          DEFAULT: '#F7F4ED',
        },
        gold: {
          DEFAULT: '#BFA07A',
          soft: '#CEBCA7',
        },
        blue: {
          light: '#C5D2E2',
        },
        slateblue: '#556780',
        gray: '#8494A8',
        ink: '#2B2B2B',
      },
      fontFamily: {
        display: ['"Manrope"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 9vw, 8.5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-lg': ['clamp(3rem, 7vw, 6.5rem)', { lineHeight: '0.98', letterSpacing: '-0.025em', fontWeight: '800' }],
        'display-md': ['clamp(2.25rem, 5vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-sm': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.015em', fontWeight: '800' }],
        'eyebrow': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.22em', fontWeight: '600' }],
      },
      maxWidth: {
        '8xl': '1440px',
        editorial: '720px',
      },
      spacing: {
        section: '120px',
        'section-sm': '80px',
        'section-xs': '56px',
      },
      borderRadius: {
        'xl2': '20px',
        'xl3': '24px',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(22, 47, 79, 0.06)',
        float: '0 20px 60px -15px rgba(22, 47, 79, 0.18)',
        deep: '0 40px 80px -20px rgba(22, 47, 79, 0.32)',
        gold: '0 12px 40px -8px rgba(191, 160, 122, 0.4)',
        inset: 'inset 0 1px 0 0 rgba(255,255,255,0.08)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
        silky: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scrollDot: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '70%': { transform: 'translateY(18px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        floatY: 'floatY 6s ease-in-out infinite',
        scrollDot: 'scrollDot 2s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        drawLine: 'drawLine 2.5s ease-smooth forwards',
      },
    },
  },
  plugins: [],
};
