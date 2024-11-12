# Sina's Multidimensional Leadership Cube (SMLC)

A powerful 3D visualization tool for understanding leadership dimensions across personal, organizational, and societal levels.

## 🚀 Features

- Interactive 3D cube visualization using Three.js and React Three Fiber
- Real-time position tracking and comparison
- Multi-dimensional analysis across three leadership levels
- Responsive design with Tailwind CSS
- Guidelines and insights based on position analysis
- Export and sharing capabilities

## 🛠 Tech Stack

- **Framework:** React 18+ with TypeScript
- **3D Rendering:** Three.js with React Three Fiber
- **Styling:** Tailwind CSS
- **State Management:** React Hooks
- **3D Controls:** React Three Drei
- **Build Tool:** Vite
- **Component Library:** Shadcn/ui

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/sinaghazi/smlc.git
cd smlc
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🏗 Project Structure

```
src/
├── components/
│   ├── SMLC/
│   │   ├── CubeVisualization.tsx
│   │   ├── ControlPanel.tsx
│   │   ├── GuidelinesModal.tsx
│   │   └── SMLCContainer.tsx
│   └── ui/
├── types/
│   ├── axis.types.ts
│   └── cube.types.ts
├── constants/
│   ├── colors.constants.ts
│   └── cube.constants.ts
└── App.tsx
```

## 🎮 Usage

1. Select a leadership level (Personal, Organizational, or Societal)
2. Adjust the axis values using the control panel
3. Add a comparison point (optional)
4. View the visualization in the 3D cube
5. Export or share your analysis

## 🔑 Key Components

- **CubeVisualization**: Handles the 3D rendering and interaction
- **ControlPanel**: Manages user input and axis controls
- **GuidelinesModal**: Provides analysis and insights
- **SMLCContainer**: Main container component orchestrating the application

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📄 License

This project is licensed under the CC BY 4.0 License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Three.js community
- React Three Fiber team
- Tailwind CSS team

## 🔮 Future Enhancements

- Enhanced analytics and reporting
- Additional visualization modes
- Collaborative features
- Mobile optimization
- Integration with external leadership assessment tools

## ⚠️ Requirements

- Node.js 16+
- Modern browser with WebGL support
- Minimum screen resolution: 1024x768

## 📞 Contact

For questions and support, please contact info@sinaghazi.com or visit [sinaghazi.com](https://sinaghazi.com)
