# Sina's Multidimensional Leadership Cube (SMLC)

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.14-blue.svg)](https://tailwindcss.com/)

## Overview

SMLC is an interactive framework designed to visualize and analyze leadership dynamics across personal, organizational, and societal levels. Through a three-dimensional cube interface, users can explore different leadership dimensions and understand their relationships.

## Features

- **3D Visualization**: Interactive cube representation using Three.js
- **Multi-level Analysis**: Personal, organizational, and societal perspectives
- **Position Mapping**: Detailed examples and insights for different positions
- **Comparison Tools**: Analyze differences between leadership styles
- **Responsive Design**: Optimized for desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js (v20.0.0 or higher)
- npm (v10.0.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sinaghazi/smlc-website.git
   cd smlc-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

### Project Structure

```
smlc-website/
├── src/
│   ├── components/         # React components
│   ├── types/             # TypeScript type definitions
│   ├── data/              # Data mappings and constants
│   ├── utils/             # Utility functions
│   └── assets/            # Static assets
├── public/                # Public assets
└── dist/                  # Production build output
```

## Usage

### Basic Navigation

1. Select the desired level (Personal, Organizational, or Societal)
2. Adjust the position using the control panel sliders
3. Add a comparison point to analyze differences
4. View detailed examples and insights for each position

### Advanced Features

- **Position Analysis**: Understand the characteristics of specific positions
- **Comparison Mode**: Compare different leadership styles
- **Export Options**: Save and share your analysis
- **Interactive Learning**: Explore real-world examples

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Commit your changes:
   ```bash
   git commit -m "feat: add some feature"
   ```
4. Push to your fork:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Create a Pull Request

## Development

### Commands

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run clean`: Clean build artifacts

### Code Style

We use:
- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety

### Testing

Run tests with:
```bash
npm test
```

## Performance

The application is optimized for:
- Fast initial loading
- Smooth 3D rendering
- Efficient data handling
- Responsive interactions

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting service

## License

This project is licensed under the Creative Commons Attribution 4.0 International License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Three.js for 3D rendering
- React Three Fiber for React integration
- TailwindCSS for styling
- Vite for build tooling

## Contact

Sina Ghazi 

Project Link: [https://github.com/sinaghazi/smlc-website](https://github.com/sinaghazi/smlc-website)

