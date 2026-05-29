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
                // Warm accent used across the personal site ("quiet competence")
                accent: {
                    50: '#fdf5ef',
                    100: '#fae6d6',
                    200: '#f3c8a8',
                    300: '#eca377',
                    400: '#e58050',
                    500: '#dd6234',
                    600: '#c84d27',
                    700: '#a63c22',
                    800: '#853223',
                    900: '#6c2c20',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
                display: ['Fraunces', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}
