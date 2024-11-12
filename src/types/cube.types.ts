// types/cube.types.ts
export interface CubePosition {
    x: number;
    y: number;
    z: number;
}

export interface CubeDimension {
    [key: string]: {
        axes: Array<{
            name: string;
            min: number;
            max: number;
            label: string;
        }>;
    };
}

export interface CubeAxis {
    name: string;
    min: number;
    max: number;
    label: string;
}

export class IconState {
    position: any;
    active: any;
    color:any;
}

export class Position {
}
