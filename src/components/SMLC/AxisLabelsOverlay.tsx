// src/components/SMLC/AxisLabelsOverlay.tsx
import React from 'react';
import { AxisType, AXIS_LABELS } from "../../types/axis.types";

interface AxisLabelsOverlayProps {
    axisType: AxisType;
}

export const AxisLabelsOverlay: React.FC<AxisLabelsOverlayProps> = ({ axisType }) => {
    const labels = AXIS_LABELS[axisType];

    return (
        <div className="absolute inset-0 pointer-events-none">
            {/* X-axis labels */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <span className="text-sm font-medium text-gray-700">
                    {labels.x.split(' vs. ')[0]}
                </span>
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <span className="text-sm font-medium text-gray-700">
                    {labels.x.split(' vs. ')[1]}
                </span>
            </div>

            {/* Y-axis labels */}
            <div className="absolute left-1/2 top-4 transform -translate-x-1/2">
                <span className="text-sm font-medium text-gray-700">
                    {labels.y.split(' vs. ')[1]}
                </span>
            </div>
            <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2">
                <span className="text-sm font-medium text-gray-700">
                    {labels.y.split(' vs. ')[0]}
                </span>
            </div>

            {/* Z-axis labels */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-32">
                <span className="text-sm font-medium text-gray-700">
                    {labels.z.split(' vs. ')[1]}
                </span>
            </div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 mr-32">
                <span className="text-sm font-medium text-gray-700">
                    {labels.z.split(' vs. ')[0]}
                </span>
            </div>
        </div>
    );
};
