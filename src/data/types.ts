// src/data/types.ts
// Common type definitions for position mapping data

export interface PositionData {
    x: number;
    y: number;
    z: number;
}

export interface PersonaExample {
    name: string;
    traits: string[];
    description: string;
    iconUrl?: string; // URL to the person's headshot
}

export interface CompanyExample {
    name: string;
    industry: string;
    characteristics: string[];
    description: string;
    iconUrl?: string; // URL to the company's logo
}

export interface CountryExample {
    name: string;
    region: string;
    characteristics: string[];
    description: string;
    exists: boolean;
    iconUrl?: string; // URL to the country's flag
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

// Helper function to get position key
export function getPositionKey(position: { x: number; y: number; z: number }): string {
    const roundToNearest = (num: number): number => {
        const step = 0.5;
        const rounded = Math.round(num / step) * step;
        return Math.max(Math.min(rounded, 1), -1);
    };

    return `${roundToNearest(position.x)}_${roundToNearest(position.y)}_${roundToNearest(position.z)}`;
}
