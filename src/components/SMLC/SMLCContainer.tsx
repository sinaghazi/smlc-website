import React, { useState } from 'react';
import { CubeVisualization } from './CubeVisualization';
import { ControlPanel } from './ControlPanel';
import { PositionInfoDisplay } from './PositionInfoDisplay';
import { AxisType } from '../../types/axis.types';
import { Position, IconState } from './types';
import { GuidelinesModal } from './GuidelinesModal';

const SMLCContainer: React.FC = () => {
    const [primaryIcon, setPrimaryIcon] = useState<IconState>({
        position: { x: 0, y: 0, z: 0 },
        active: true,
        color: '#ef4444',
        axisType: AxisType.PERSONAL
    });

    const [secondaryIcon, setSecondaryIcon] = useState<IconState>({
        position: { x: 0, y: 0, z: 0 },
        active: false,
        color: '#3b82f6',
        axisType: AxisType.ORGANIZATIONAL
    });

    const [showGuidelines, setShowGuidelines] = useState(false);

    const handlePositionChange = (isSecondary: boolean, position: Position) => {
        if (isSecondary) {
            setSecondaryIcon(prev => ({ ...prev, position }));
        } else {
            setPrimaryIcon(prev => ({ ...prev, position }));
        }
    };

    const handleAxisChange = (isSecondary: boolean, axisType: AxisType) => {
        if (isSecondary) {
            setSecondaryIcon(prev => ({ ...prev, axisType }));
        } else {
            setPrimaryIcon(prev => ({ ...prev, axisType }));
        }
    };

    const handleToggleSecondaryIcon = () => {
        setSecondaryIcon(prev => ({ ...prev, active: !prev.active }));
    };

    const handleReset = (isSecondary: boolean) => {
        const resetPosition = { x: 0, y: 0, z: 0 };
        if (isSecondary) {
            setSecondaryIcon(prev => ({
                ...prev,
                position: resetPosition,
                active: false
            }));
        } else {
            setPrimaryIcon(prev => ({
                ...prev,
                position: resetPosition
            }));
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Control Panel */}
                    <div className="lg:col-span-1">
                        <ControlPanel
                            primaryIcon={primaryIcon}
                            secondaryIcon={secondaryIcon}
                            onPositionChange={handlePositionChange}
                            onAxisChange={handleAxisChange}
                            onToggleSecondaryIcon={handleToggleSecondaryIcon}
                            onReset={handleReset}
                        />
                    </div>

                    {/* Cube Visualization */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <CubeVisualization
                                primaryIcon={primaryIcon}
                                secondaryIcon={secondaryIcon}
                                onPositionChange={handlePositionChange}
                            />
                        </div>

                        {/* Information Boxes */}
                        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Primary Position Info */}
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <PositionInfoDisplay icon={primaryIcon} />
                            </div>

                            {/* Secondary Position Info */}
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <PositionInfoDisplay
                                    icon={secondaryIcon}
                                    isSecondary={true}
                                    onToggleSecondary={handleToggleSecondaryIcon}
                                />
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-8 flex justify-end space-x-4">
                            {secondaryIcon.active && (
                                <button
                                    onClick={() => setShowGuidelines(true)}
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                                >
                                    Show Guidelines
                                </button>
                            )}

                        </div>
                    </div>
                </div>
            </div>

            {/* Guidelines Modal */}
            <GuidelinesModal
                isOpen={showGuidelines}
                onClose={() => setShowGuidelines(false)}
                primaryPosition={primaryIcon.position}
                secondaryPosition={secondaryIcon.position}
            />
        </div>
    );
};

export default SMLCContainer;
