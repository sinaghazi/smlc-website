import React, { useState } from 'react';
import { CubeVisualization } from './CubeVisualization';
import { ControlPanel } from './ControlPanel';
import { PositionInfoDisplay } from './PositionInfoDisplay';
import { AxisType } from '../../types/axis.types';
import { Position, IconState } from './types';
import { GuidelinesModal } from './GuidelinesModal';

const SMLCContainer: React.FC = () => {
    // Three leadership level positions for triangle surface
    const [personalPosition, setPersonalPosition] = useState<Position>({ x: 0.5, y: 0.5, z: 0.5 });
    const [organizationalPosition, setOrganizationalPosition] = useState<Position>({ x: -0.5, y: -0.5, z: 0.5 });
    const [societalPosition, setSocietalPosition] = useState<Position>({ x: 0, y: 0.5, z: -0.5 });
    
    // Current level selection for single-user experience
    const [currentLevel, setCurrentLevel] = useState<AxisType>(AxisType.PERSONAL);
    
    // Legacy icon state for backward compatibility with control panel
    const [primaryIcon, setPrimaryIcon] = useState<IconState>({
        position: personalPosition,
        active: true,
        color: '#ef4444',
        axisType: AxisType.PERSONAL
    });

    const [showGuidelines, setShowGuidelines] = useState(false);

    const handlePositionChange = (_: boolean, position: Position) => {
        // Route position updates based on current level selection
        switch (currentLevel) {
            case AxisType.PERSONAL:
                setPersonalPosition(position);
                break;
            case AxisType.ORGANIZATIONAL:
                setOrganizationalPosition(position);
                break;
            case AxisType.SOCIETAL:
                setSocietalPosition(position);
                break;
        }
        
        // Update legacy icon state for control panel compatibility
        setPrimaryIcon(prev => ({ ...prev, position }));
    };

    const handleAxisChange = (_: boolean, axisType: AxisType) => {
        // Update current level selection
        setCurrentLevel(axisType);
        
        // Get position for the selected level
        const getCurrentPosition = (type: AxisType): Position => {
            switch (type) {
                case AxisType.PERSONAL:
                    return personalPosition;
                case AxisType.ORGANIZATIONAL:
                    return organizationalPosition;
                case AxisType.SOCIETAL:
                    return societalPosition;
                default:
                    return { x: 0, y: 0, z: 0 };
            }
        };

        const currentPosition = getCurrentPosition(axisType);
        
        // Update legacy icon state for control panel compatibility
        setPrimaryIcon(prev => ({ ...prev, axisType, position: currentPosition }));
    };

    const handleReset = () => {
        const resetPosition = { x: 0, y: 0, z: 0 };
        
        // Reset all three level positions
        setPersonalPosition(resetPosition);
        setOrganizationalPosition(resetPosition);
        setSocietalPosition(resetPosition);
        
        // Reset legacy icon state
        setPrimaryIcon(prev => ({
            ...prev,
            position: resetPosition
        }));
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title and Introduction */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                        Sina's Multidimensional Leadership Cube (SMLC)
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore leadership styles across three dimensions: individual vs collective, rational vs emotional, and risk-taking vs risk-averse.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Control Panel */}
                    <div className="lg:col-span-1">
                        <ControlPanel
                            primaryIcon={primaryIcon}
                            onPositionChange={handlePositionChange}
                            onAxisChange={handleAxisChange}
                            onReset={handleReset}
                        />
                    </div>

                    {/* Cube Visualization */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <CubeVisualization
                                primaryIcon={primaryIcon}
                                secondaryIcon={{ position: { x: 0, y: 0, z: 0 }, active: false, color: '#3b82f6', axisType: AxisType.ORGANIZATIONAL }}
                                personalPosition={personalPosition}
                                organizationalPosition={organizationalPosition}
                                societalPosition={societalPosition}
                                onPositionChange={handlePositionChange}
                            />
                        </div>

                        {/* Position Information */}
                        <div className="mt-8">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <PositionInfoDisplay icon={primaryIcon} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Guidelines Modal - Simplified for single-user experience */}
            <GuidelinesModal
                isOpen={showGuidelines}
                onClose={() => setShowGuidelines(false)}
                primaryPosition={primaryIcon.position}
                secondaryPosition={{ x: 0, y: 0, z: 0 }}
            />
        </div>
    );
};

export default SMLCContainer;
