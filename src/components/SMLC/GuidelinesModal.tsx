// src/components/SMLC/GuidelinesModal.tsx
import React from 'react';
import { Position } from './types';

interface GuidelinesModalProps {
    isOpen: boolean;
    onClose: () => void;
    primaryPosition: Position;
    secondaryPosition: Position;
}

export const GuidelinesModal: React.FC<GuidelinesModalProps> = ({
                                                                    isOpen,
                                                                    onClose,
                                                                    primaryPosition,
                                                                    secondaryPosition
                                                                }) => {
    if (!isOpen) return null;

    const diff = {
        x: Math.abs(primaryPosition.x - secondaryPosition.x),
        y: Math.abs(primaryPosition.y - secondaryPosition.y),
        z: Math.abs(primaryPosition.z - secondaryPosition.z)
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
                {/* Backdrop */}
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
                    onClick={onClose}
                />

                {/* Modal */}
                <div className="relative bg-white rounded-lg max-w-lg w-full p-6 shadow-xl">
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                    >
                        <span className="sr-only">Close</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    {/* Content */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Leadership Insights and Guidelines
                        </h3>

                        <div className="bg-gray-50 rounded-md p-4">
                            <h4 className="text-sm font-medium text-gray-900 mb-2">Position Analysis</h4>
                            <div className="text-sm text-gray-500 space-y-1">
                                <p>Primary: ({primaryPosition.x.toFixed(2)}, {primaryPosition.y.toFixed(2)}, {primaryPosition.z.toFixed(2)})</p>
                                <p>Secondary: ({secondaryPosition.x.toFixed(2)}, {secondaryPosition.y.toFixed(2)}, {secondaryPosition.z.toFixed(2)})</p>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-md p-4">
                            <h4 className="text-sm font-medium text-gray-900 mb-2">Gap Analysis</h4>
                            <ul className="text-sm text-gray-500 space-y-1 list-disc list-inside">
                                <li>X-Axis Gap: {diff.x.toFixed(2)}</li>
                                <li>Y-Axis Gap: {diff.y.toFixed(2)}</li>
                                <li>Z-Axis Gap: {diff.z.toFixed(2)}</li>
                            </ul>
                        </div>

                        <div className="flex justify-end space-x-3 mt-6">

                            <button
                                onClick={onClose}
                                className="px-4 py-2 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
