// src/components/SMLC/types.ts
import {AxisType} from "@/types/axis.types.ts";

export interface Position {
    x: number;
    y: number;
    z: number;
}

export interface IconState {
    position: Position;
    active: boolean;
    color: string;
    axisType: AxisType;

}
