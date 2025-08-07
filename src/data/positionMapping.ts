// src/data/positionMapping.ts
import { personalExamples } from './examples/personalExamples';
import { businessExamples } from './examples/businessExamples';
import { countryExamples } from './examples/countryExamples';

export interface PersonaExample {
    name: string;
    traits: string[];
    description: string;
}

export interface CompanyExample {
    name: string;
    industry: string;
    characteristics: string[];
    description: string;
}

export interface CountryExample {
    name: string;
    region: string;
    characteristics: string[];
    description: string;
    exists: boolean;
}

export interface PositionData {
    x: number;
    y: number;
    z: number;
}

export interface PositionMapping {
    personal: {
        [key: string]: PersonaExample[];
    };
    business: {
        [key: string]: CompanyExample[];
    };
    country: {
        [key: string]: CountryExample[];
    };
}



const existingExamples: PositionMapping = {
    personal: personalExamples,
    business: businessExamples,
    country: countryExamples
};



// Export the comprehensive examples directly
export const positionMapping = existingExamples;

// Export type definitions
export interface PersonaExample {
    name: string;
    traits: string[];
    description: string;
}

export interface CompanyExample {
    name: string;
    industry: string;
    characteristics: string[];
    description: string;
}

export interface CountryExample {
    name: string;
    region: string;
    characteristics: string[];
    description: string;
    exists: boolean;
}

export interface PositionMapping {
    personal: {
        [key: string]: PersonaExample[];
    };
    business: {
        [key: string]: CompanyExample[];
    };
    country: {
        [key: string]: CountryExample[];
    };
}

// Helper function to get examples by position
export function getExamplesByPosition(
    position: { x: number; y: number; z: number },
    type: 'personal' | 'business' | 'country'
): PersonaExample[] | CompanyExample[] | CountryExample[] {
    const key = getPositionKey(position);
    return positionMapping[type][key] || [];
}

// Helper function to get position key
export function getPositionKey(position: { x: number; y: number; z: number }): string {
    const roundToNearest = (num: number): number => {
        const step = 0.5;
        const rounded = Math.round(num / step) * step;
        return Math.max(Math.min(rounded, 1), -1);
    };

    return `${roundToNearest(position.x)}_${roundToNearest(position.y)}_${roundToNearest(position.z)}`;
}

