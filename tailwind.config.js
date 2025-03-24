// tailwind.config.js
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cube: {
                    primary: '#1e40af',
                    secondary: '#3b82f6',
                    hover: '#2563eb',
                    active: '#1d4ed8',
                },
                kokoomus: {
                    navy: '#17344f',      // Laivaston Sininen
                    beige: '#e5e5d8',     // Beigehkö
                    lightBlue: '#a5c7d3',  // Vaalea Sininen
                    blue: '#00527b',      // Alkukoroste Sininen
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
                barlow: ['Barlow Condensed', 'sans-serif'],
                barlowSemi: ['Barlow Semi Condensed', 'sans-serif'],
                sourceSerif: ['Source Serif 4', 'serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}
