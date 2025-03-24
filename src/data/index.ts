// src/data/index.ts
import { generateCompletePositionMapping, mergeWithExistingMapping } from './positionMappingGenerator';
import { individualMapping } from './individualMapping';
import { businessMapping } from './businessMapping';
import { countryMapping } from './countryMapping';
import { 
    PersonaExample, 
    CompanyExample, 
    CountryExample, 
    PositionData, 
    PositionMapping,
    getPositionKey
} from './types';

// Create a combined mapping with all examples
const existingExamples: PositionMapping = {
    personal: individualMapping,
    business: businessMapping,
    country: countryMapping
};

// Generate complete mapping and merge with existing examples
export const positionMapping = mergeWithExistingMapping(
    generateCompletePositionMapping(),
    existingExamples
);

// Helper function to get examples by position
export function getExamplesByPosition(
    position: { x: number; y: number; z: number },
    type: 'personal' | 'business' | 'country'
): PersonaExample[] | CompanyExample[] | CountryExample[] {
    const key = getPositionKey(position);
    return positionMapping[type][key] || [];
}

// Re-export types and functions for backward compatibility
export type {
    PersonaExample,
    CompanyExample,
    CountryExample,
    PositionData,
    PositionMapping
};
export { getPositionKey };
