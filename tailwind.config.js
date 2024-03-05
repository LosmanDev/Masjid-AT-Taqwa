/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#b000ff',

          secondary: '#00abff',

          accent: '#00a33a',

          neutral: '#1a0815',

          'base-100': '#ffffff',

          info: '#00dfff',

          success: '#009f67',

          warning: '#a66000',

          error: '#ff4673',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
