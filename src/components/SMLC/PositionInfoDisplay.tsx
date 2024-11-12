// src/components/SMLC/PositionInfoDisplay.tsx
import React from 'react';
import { IconState } from './types';
import { getExamplesByPosition } from '../../data/positionMapping';
import { AxisType } from '../../types/axis.types';
import { PersonaExample, CompanyExample, CountryExample } from '../../data/positionMapping';

interface PositionInfoDisplayProps {
    icon: IconState;
    isSecondary?: boolean;
    onToggleSecondary?: () => void;
}

const mapAxisTypeToPositionType = (axisType: AxisType): 'personal' | 'business' | 'country' => {
    switch (axisType) {
        case AxisType.PERSONAL:
            return 'personal';
        case AxisType.ORGANIZATIONAL:
            return 'business';
        case AxisType.SOCIETAL:
            return 'country';
        default:
            return 'personal';
    }
};

export const PositionInfoDisplay: React.FC<PositionInfoDisplayProps> = ({
                                                                            icon,
                                                                            isSecondary = false,
                                                                            onToggleSecondary
                                                                        }) => {
    if (!icon.active && isSecondary && onToggleSecondary) {
        return (
            <button
                onClick={onToggleSecondary}
                className="w-full h-full flex items-center justify-center text-4xl text-gray-400 hover:text-gray-600"
            >
                +
            </button>
        );
    }

    const mappedType = mapAxisTypeToPositionType(icon.axisType);
    const examples = getExamplesByPosition(icon.position, mappedType);


    const renderPersonalInfo = (example: PersonaExample) => (
        <div className="space-y-4">
            <div>
                <h4 className="text-base font-medium text-gray-900">Example Leader</h4>
                <p className="text-sm text-gray-600">{example.name}</p>
            </div>
            <div>
                <h4 className="text-base font-medium text-gray-900">Key Traits</h4>
                <ul className="mt-2 space-y-1">
                    {example.traits.map((trait, index) => (
                        <li key={index} className="text-sm text-gray-600">• {trait}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h4 className="text-base font-medium text-gray-900">Overview</h4>
                <p className="text-sm text-gray-600">{example.description}</p>
            </div>
        </div>
    );

    const renderBusinessInfo = (example: CompanyExample) => (
        <div className="space-y-4">
            <div>
                <h4 className="text-base font-medium text-gray-900">Example Organization</h4>
                <p className="text-sm text-gray-600">{example.name} ({example.industry})</p>
            </div>
            <div>
                <h4 className="text-base font-medium text-gray-900">Key Characteristics</h4>
                <ul className="mt-2 space-y-1">
                    {example.characteristics.map((char, index) => (
                        <li key={index} className="text-sm text-gray-600">• {char}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h4 className="text-base font-medium text-gray-900">Overview</h4>
                <p className="text-sm text-gray-600">{example.description}</p>
            </div>
        </div>
    );

    const renderCountryInfo = (example: CountryExample) => (
        <div className="space-y-4">
            <div>
                <h4 className="text-base font-medium text-gray-900">Example Society</h4>
                <p className="text-sm text-gray-600">
                    {example.exists ? `${example.name} (${example.region})` : 'Theoretical Model'}
                </p>
            </div>
            <div>
                <h4 className="text-base font-medium text-gray-900">Key Characteristics</h4>
                <ul className="mt-2 space-y-1">
                    {example.characteristics.map((char, index) => (
                        <li key={index} className="text-sm text-gray-600">• {char}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h4 className="text-base font-medium text-gray-900">Overview</h4>
                <p className="text-sm text-gray-600">{example.description}</p>
            </div>
        </div>
    );

    const renderExample = () => {
        if (examples.length === 0) {
            return (
                <div className="text-sm text-gray-500 italic">
                    No exact matches found for this position
                </div>
            );
        }

        const example = examples[0];
        switch (icon.axisType) {
            case AxisType.PERSONAL:
                return renderPersonalInfo(example as PersonaExample);
            case AxisType.ORGANIZATIONAL:
                return renderBusinessInfo(example as CompanyExample);
            case AxisType.SOCIETAL:
                return renderCountryInfo(example as CountryExample);
            default:
                return null;
        }
    };

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">
                {isSecondary ? 'Comparison Position' : 'Primary Position'} ({icon.axisType})
            </h3>
            {renderExample()}
        </div>
    );
};
