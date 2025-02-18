/** @type {import('tailwindcss').Config} */
import {fontFamily} from 'tailwindcss/defaultTheme'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                pink: {
                    light: '#f87fb7', dark: '#f62875'
                }, p: {
                    black: '#111111', white: '#FDF9F9', gray: '#cfcfcf', beige: '#F7F0F0', beigeCards: '#E2CBCB',
                }
            },
            fontFamily: {
                karla: ['var(--font-karla)', ...fontFamily.sans],
                leckerli: ["Leckerli One", "cursive"], // Ajout de la police Leckerli One
            },
            boxShadow: {
                'custom': '6px 6px 0px 0px #E2CBCB', // L'ombre personnalisée
            },
        },
    },
    plugins: [],
}