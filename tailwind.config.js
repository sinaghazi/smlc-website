// tailwind.config.js
//
// Design system: "coordinates" — Swiss/technical, ink on bone paper, one
// electric cobalt accent (acid signal-lime on dark surfaces), Space Grotesk
// display type, JetBrains Mono for micro-labels, hairline borders, near-sharp
// corners. The neutral scale is deliberately mapped over the `stone` name so
// every existing stone-* class participates in the system.
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Cool ink-on-paper neutrals (replaces Tailwind's warm stone).
                stone: {
                    50: '#f7f7f4',
                    100: '#eeeeea',
                    200: '#e0e0d9',
                    300: '#c6c6bc',
                    400: '#9a9a8f',
                    500: '#6f6f66',
                    600: '#52524b',
                    700: '#3b3b36',
                    800: '#232320',
                    900: '#141412',
                    950: '#0a0a09',
                },
                // Electric cobalt — the single accent on light surfaces.
                accent: {
                    50: '#eef1ff',
                    100: '#dde4ff',
                    200: '#bcc9ff',
                    300: '#92a6ff',
                    400: '#6379ff',
                    500: '#3a4fff',
                    600: '#2438f0',
                    700: '#1d2cc4',
                    800: '#1b289c',
                    900: '#1a2576',
                },
                // Acid lime — highlight color on dark/ink surfaces only.
                signal: {
                    200: '#f1ffa3',
                    300: '#e5ff66',
                    400: '#d7f93c',
                    500: '#bfe22a',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
                display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
            },
            // Near-sharp corners everywhere (rounded-full is untouched).
            borderRadius: {
                sm: '1px',
                DEFAULT: '2px',
                md: '2px',
                lg: '3px',
                xl: '4px',
                '2xl': '6px',
                '3xl': '8px',
            },
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}
