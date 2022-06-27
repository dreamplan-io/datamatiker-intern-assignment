module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    fontFamily: {
      sans: ['Montserrat', 'Roboto', 'sans-serif'],
      alternative: ['Montserrat Alternates', 'Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        dp: {
          'blue-500': '#0700F6',
          'medium-blue':'#4D8387',
          'light-blue-400': '#99E2E7',
          'light-blue-800': '#33585A',
          'grayscale-100': '#FFFFFF',
          'grayscale-300': '#D5D9E3',
          'grayscale-800': '#2F3032',
          'yellow-500': '#FAF33E',
          'jet': '#2F3032'
        },
      },
      fontSize: {
        'dp-headline-2-t': '48px',
        'dp-headline-3-t': '36px',
        'dp-headline-2-m': '30px',
        'dp-headline-4-m': '22px',
        'dp-headline-5-m': '20px',
        'dp-headline-6-m': '18px',
        'dp-bodytext-l-m': '16px',
        'dp-bodytext-m-dt': '14px',
      },
    },
  },
  variants: {},
  plugins: [],
};
