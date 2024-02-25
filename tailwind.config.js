/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                bodyFont: ['"Syncopate"', 'sans-serif'],
            },
            boxShadow: {
                '3xl': '-1px 0 16px rgba(0, 0, 0, 0.3)',
            },
            zIndex: {
                100: '100',
            },
            // ,
            // width: {
            //   maxWidth: ["max-width: 1024px"],
            // },
            // margin: {
            //   marginInline: ["margin-inline: 1.5rem"],
            // },
        },
    },
    plugins: [],
}
