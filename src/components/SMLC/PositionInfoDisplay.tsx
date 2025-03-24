// src/components/SMLC/PositionInfoDisplay.tsx
import React from 'react';
import { IconState } from './types';
import { getExamplesByPosition } from '../../data/index';
import { AxisType } from '../../types/axis.types';
import { PersonaExample, CompanyExample, CountryExample } from '../../data/types';

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

// Helper function to get Wikipedia URL for a person
const getWikipediaUrl = (name: string): string => {
    // Extract just the person's name without any descriptors
    const actualName = name.split(' (')[0].trim();
    const nameForUrl = actualName.replace(/\s+/g, '_');
    return `https://en.wikipedia.org/wiki/${nameForUrl}`;
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
    const allExamples = getExamplesByPosition(icon.position, mappedType);
    
    // Filter examples to only include those with icon URLs
    const examples = {
        personal: (allExamples as PersonaExample[]).filter(ex => ex.iconUrl),
        business: (allExamples as CompanyExample[]).filter(ex => ex.iconUrl),
        country: (allExamples as CountryExample[]).filter(ex => ex.iconUrl)
    };

    const renderPersonalInfo = (examples: PersonaExample[]) => {
        // If no examples with icons are available, show a message
        if (examples.length === 0) {
            return (
                <div className="text-sm text-gray-500 italic">
                    No examples with images available for this position
                </div>
            );
        }
        
        // Get the first example for traits and description
        const primaryExample = allExamples[0] as PersonaExample;
        
        return (
            <div className="space-y-4">
                <div>
                    <h4 className="text-base font-medium text-gray-900">Example Leaders</h4>
                    <div className="flex flex-wrap gap-3 mt-2">
                        {examples.map((example, index) => (
                            <a 
                                key={index} 
                                href={getWikipediaUrl(example.name)} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex flex-col items-center group"
                                title={`View ${example.name}'s Wikipedia page`}
                            >
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-blue-500 transition-colors">
                                    <img 
                                        src={example.iconUrl} 
                                        alt={example.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="text-xs text-center mt-1 group-hover:text-blue-500">{example.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-base font-medium text-gray-900">Key Traits</h4>
                    <ul className="mt-2 space-y-1">
                        {primaryExample?.traits.map((trait, index) => (
                            <li key={index} className="text-sm text-gray-600">• {trait}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-base font-medium text-gray-900">Overview</h4>
                    <p className="text-sm text-gray-600">{primaryExample?.description}</p>
                </div>
            </div>
        );
    };

    const renderBusinessInfo = (examples: CompanyExample[]) => {
        // If no examples with icons are available, show a message
        if (examples.length === 0) {
            return (
                <div className="text-sm text-gray-500 italic">
                    No examples with logos available for this position
                </div>
            );
        }
        
        // Get the first example for characteristics and description
        const primaryExample = allExamples[0] as CompanyExample;
        
        return (
            <div className="space-y-4">
                <div>
                    <h4 className="text-base font-medium text-gray-900">Example Organizations</h4>
                    <div className="flex flex-wrap gap-3 mt-2">
                        {examples.map((example, index) => (
                            <a 
                                key={index} 
                                href={`https://en.wikipedia.org/wiki/${example.name.replace(/\s+/g, '_')}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex flex-col items-center group"
                                title={`Learn more about ${example.name}`}
                            >
                                <div className="w-16 h-16 overflow-hidden border-2 border-gray-200 group-hover:border-blue-500 transition-colors">
                                    <img 
                                        src={example.iconUrl} 
                                        alt={example.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="text-xs text-center mt-1 group-hover:text-blue-500">{example.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-base font-medium text-gray-900">Key Characteristics</h4>
                    <ul className="mt-2 space-y-1">
                        {primaryExample?.characteristics.map((char, index) => (
                            <li key={index} className="text-sm text-gray-600">• {char}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-base font-medium text-gray-900">Overview</h4>
                    <p className="text-sm text-gray-600">{primaryExample?.description}</p>
                </div>
            </div>
        );
    };

    const renderCountryInfo = (examples: CountryExample[]) => {
        // If no examples with icons are available, show a message
        if (examples.length === 0) {
            return (
                <div className="text-sm text-gray-500 italic">
                    No examples with flags available for this position
                </div>
            );
        }
        
        // Get the first example for characteristics and description
        const primaryExample = allExamples[0] as CountryExample;
        
        return (
            <div className="space-y-4">
                <div>
                    <h4 className="text-base font-medium text-gray-900">Example Societies</h4>
                    <div className="flex flex-wrap gap-3 mt-2">
                        {examples.map((example, index) => (
                            <a 
                                key={index} 
                                href={example.exists ? `https://en.wikipedia.org/wiki/${example.name.replace(/\s+/g, '_')}` : '#'} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`flex flex-col items-center group ${!example.exists ? 'pointer-events-none' : ''}`}
                                title={example.exists ? `Learn more about ${example.name}` : 'Theoretical model - no Wikipedia page'}
                            >
                                <div className="w-16 h-10 overflow-hidden border-2 border-gray-200 group-hover:border-blue-500 transition-colors">
                                    <img 
                                        src={example.iconUrl} 
                                        alt={example.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="text-xs text-center mt-1 group-hover:text-blue-500">
                                    {example.name}
                                    {!example.exists && <span className="text-gray-400"> (Theoretical)</span>}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-base font-medium text-gray-900">Key Characteristics</h4>
                    <ul className="mt-2 space-y-1">
                        {primaryExample?.characteristics.map((char, index) => (
                            <li key={index} className="text-sm text-gray-600">• {char}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-base font-medium text-gray-900">Overview</h4>
                    <p className="text-sm text-gray-600">{primaryExample?.description}</p>
                </div>
            </div>
        );
    };

    const renderExample = () => {
        if (allExamples.length === 0) {
            return (
                <div className="text-sm text-gray-500 italic">
                    No exact matches found for this position
                </div>
            );
        }

        switch (icon.axisType) {
            case AxisType.PERSONAL:
                return renderPersonalInfo(examples.personal);
            case AxisType.ORGANIZATIONAL:
                return renderBusinessInfo(examples.business);
            case AxisType.SOCIETAL:
                return renderCountryInfo(examples.country);
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
