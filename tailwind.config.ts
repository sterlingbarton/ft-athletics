import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        white: '#ffffff',
        black: '#000000',
        green: {
          100: '#13ACA9',
          500: '#109492',
          900: '#0e7c7b',
        },
        orange: {
          100: '#fcd9ae',
          200: '#fcd09b',
          300: '#fcd888',
          400: '#fabf75',
          500: '#fab662',
          600: '#f9ad4f',
          700: '#f9a43c',
          800: '#f89b29',
          900: '#f28908',
        },
      },
      borderRadius: {
        'custom-br-custom': '20rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    function ({
      addUtilities,
    }: {
      addUtilities: (
        utilities: Record<string, any>,
        variants?: string[]
      ) => void;
    }) {
      const newUtilities = {
        '.rounded-br-custom': {
          borderBottomRightRadius: '20rem',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
export default config;
