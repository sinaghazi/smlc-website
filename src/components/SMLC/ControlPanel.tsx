import React from 'react';
import { AxisType, AXIS_LABELS } from '../../types/axis.types';
import { Position, IconState } from './types';
import './ControlPanel.css';

interface ControlPanelProps {
    primaryIcon: IconState;
    onPositionChange: (isSecondary: boolean, position: Position) => void;
    onAxisChange: (isSecondary: boolean, axis: AxisType) => void;
    onReset: () => void;
}

const IconControls: React.FC<{
    icon: IconState;
    axisType: AxisType;
    onPositionChange: (isSecondary: boolean, position: Position) => void;
    onAxisChange: (isSecondary: boolean, axis: AxisType) => void;
    onReset: () => void;
}> = ({ icon, axisType, onPositionChange, onAxisChange, onReset }) => {
    const step = 0.5; // This will create 5 steps: -1, -0.5, 0, 0.5, 1


    return (
        <div className="space-y-4">
            {/* Level Selection */}
            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                    Select Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                    {Object.values(AxisType).map((type) => (
                        <button
                            key={type}
                            className={`px-4 py-2 rounded ${
                                axisType === type
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                            onClick={() => onAxisChange(false, type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            {/* Position Controls */}
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">
                        Your Leadership Position
                    </h3>
                    <button
                        onClick={onReset}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Reset
                    </button>
                </div>
                {['x', 'y', 'z'].map((axis) => (
                    <div key={axis} className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            {AXIS_LABELS[axisType][axis as keyof typeof AXIS_LABELS[typeof axisType]]}
                        </label>
                        <input
                            type="range"
                            min="-1"
                            max="1"
                            step={step}
                            value={icon.position[axis as keyof Position]}
                            onChange={(e) => {
                                const newPosition = { ...icon.position };
                                newPosition[axis as keyof Position] = parseFloat(e.target.value);
                                onPositionChange(false, newPosition);
                            }}
                            className="slider-primary"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export const ControlPanel: React.FC<ControlPanelProps> = ({
    primaryIcon,
    onPositionChange,
    onAxisChange,
    onReset
}) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            {/* Single User Controls */}
            <IconControls
                icon={primaryIcon}
                axisType={primaryIcon.axisType}
                onPositionChange={onPositionChange}
                onAxisChange={onAxisChange}
                onReset={onReset}
            />
        </div>
    );
};
