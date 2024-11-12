// src/utils/webglContext.ts
export const createWebGLContext = (canvas: HTMLCanvasElement) => {
    return canvas.getContext('webgl2', {
        alpha: false,
        antialias: true,
        preserveDrawingBuffer: true,
        powerPreference: 'high-performance',
        failIfMajorPerformanceCaveat: false
    });
};
