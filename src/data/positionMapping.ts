// src/data/positionMapping.ts
import { generateCompletePositionMapping, mergeWithExistingMapping } from './positionMappingGenerator';

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
    personal: {
        // Highly individualistic, rational, risk-taking (1, 1, 1)
        "1_1_1": [
            {
                name: "Elon Musk",
                traits: [
                    "Innovative thinking",
                    "High risk tolerance",
                    "Data-driven decision making",
                    "Strong individual vision"
                ],
                description: "Tech entrepreneur known for pushing boundaries and taking calculated risks"
            },
            {
                name: "Jeff Bezos",
                traits: [
                    "Customer obsession",
                    "Long-term thinking",
                    "Analytical decision-making",
                    "Bold vision"
                ],
                description: "Amazon founder known for systematic innovation and calculated risk-taking"
            }
        ],
        // Moderately individualistic, rational, risk-taking (0.5, 0.5, 0.5)
        "0.5_0.5_0.5": [
            {
                name: "Mary Barra",
                traits: [
                    "Strategic innovation",
                    "Balanced leadership",
                    "Forward-thinking",
                    "Measured risk-taking"
                ],
                description: "GM CEO known for transforming traditional auto industry through balanced approach"
            }
        ],
        // Balanced position (0, 0, 0)
        "0_0_0": [
            {
                name: "Barack Obama",
                traits: [
                    "Balanced decision-making",
                    "Collaborative yet decisive",
                    "Measured risk-taking",
                    "Strategic thinking"
                ],
                description: "Leader known for thoughtful approach and ability to balance multiple perspectives"
            },
            {
                name: "Satya Nadella",
                traits: [
                    "Transformational leadership",
                    "Cultural intelligence",
                    "Balanced innovation",
                    "Inclusive decision-making"
                ],
                description: "Microsoft CEO known for balanced transformation and cultural change"
            }
        ],
        // Moderately collective, emotional, risk-averse (-0.5, -0.5, -0.5)
        "-0.5_-0.5_-0.5": [
            {
                name: "Indra Nooyi",
                traits: [
                    "Stakeholder focus",
                    "Emotional intelligence",
                    "Sustainable growth",
                    "Cultural sensitivity"
                ],
                description: "Former PepsiCo CEO known for stakeholder-centric leadership"
            }
        ],
        // Highly collective, emotional, risk-averse (-1, -1, -1)
        "-1_-1_-1": [
            {
                name: "Dan Price",
                traits: [
                    "Employee-first approach",
                    "Collective decision-making",
                    "Social responsibility",
                    "Conservative growth"
                ],
                description: "Known for radical employee-centric approaches and collective decision-making"
            }
        ]
    },

    business: {
        // Highly flat, people-oriented, innovative (1, 1, 1)
        "1_1_1": [
            {
                name: "Valve Corporation",
                industry: "Gaming",
                characteristics: [
                    "Flat hierarchy",
                    "Self-managing teams",
                    "Creative freedom",
                    "Innovation-focused"
                ],
                description: "Gaming company famous for its no-management structure"
            },
            {
                name: "Spotify",
                industry: "Technology/Entertainment",
                characteristics: [
                    "Squad framework",
                    "Strong engineering culture",
                    "Employee autonomy",
                    "Rapid innovation"
                ],
                description: "Known for its unique organizational structure and innovative culture"
            }
        ],
        // Moderately flat, people-oriented, innovative (0.5, 0.5, 0.5)
        "0.5_0.5_0.5": [
            {
                name: "Google",
                industry: "Technology",
                characteristics: [
                    "Semi-flat structure",
                    "Innovation time",
                    "Data-driven culture",
                    "Employee empowerment"
                ],
                description: "Tech giant balancing innovation with structured growth"
            }
        ],
        // Balanced approach (0, 0, 0)
        "0_0_0": [
            {
                name: "Microsoft (current)",
                industry: "Technology",
                characteristics: [
                    "Matrix organization",
                    "Balanced culture",
                    "Innovative yet stable",
                    "Process and people focused"
                ],
                description: "Transformed from traditional hierarchy to modern balanced organization"
            }
        ],
        // Moderately hierarchical, task-oriented, process-driven (-0.5, -0.5, -0.5)
        "-0.5_-0.5_-0.5": [
            {
                name: "Johnson & Johnson",
                industry: "Healthcare",
                characteristics: [
                    "Structured hierarchy",
                    "Quality focus",
                    "Risk management",
                    "Process adherence"
                ],
                description: "Healthcare company balancing innovation with strict quality control"
            }
        ],
        // Highly hierarchical, task-oriented, process-driven (-1, -1, -1)
        "-1_-1_-1": [
            {
                name: "Toyota",
                industry: "Automotive",
                characteristics: [
                    "Lean manufacturing",
                    "Strong processes",
                    "Quality focus",
                    "Hierarchical structure"
                ],
                description: "Exemplar of efficient manufacturing and process optimization"
            }
        ]
    },

    country: {
        // Free market, system-centric, data-driven (1, 1, 1)
        "1_1_1": [
            {
                name: "Singapore",
                region: "Southeast Asia",
                characteristics: [
                    "Smart nation initiative",
                    "Efficient governance",
                    "Strong free market",
                    "Data-driven policy"
                ],
                description: "City-state known for efficient governance and smart technology adoption",
                exists: true
            },
            {
                name: "Estonia",
                region: "Northern Europe",
                characteristics: [
                    "Digital society",
                    "E-governance",
                    "Tech-driven economy",
                    "Startup ecosystem"
                ],
                description: "Pioneer in digital governance and technology-driven society",
                exists: true
            }
        ],
        // Moderately free market, system-centric (0.5, 0.5, 0.5)
        "0.5_0.5_0.5": [
            {
                name: "South Korea",
                region: "East Asia",
                characteristics: [
                    "Tech-driven development",
                    "Mixed economy",
                    "Strong planning",
                    "Innovation focus"
                ],
                description: "Balance of state planning and market dynamics with technology focus",
                exists: true
            }
        ],
        // Balanced approach (0, 0, 0)
        "0_0_0": [
            {
                name: "Germany",
                region: "Central Europe",
                characteristics: [
                    "Social market economy",
                    "Stakeholder capitalism",
                    "Industrial policy",
                    "Social protection"
                ],
                description: "Balanced approach between market efficiency and social protection",
                exists: true
            }
        ],
        // Moderately collectivist, human-centric (-0.5, -0.5, -0.5)
        "-0.5_-0.5_-0.5": [
            {
                name: "France",
                region: "Western Europe",
                characteristics: [
                    "Strong social programs",
                    "State involvement",
                    "Cultural preservation",
                    "Quality of life focus"
                ],
                description: "Emphasis on social protection with mixed economic approach",
                exists: true
            }
        ],
        // Highly collectivist, human-centric, intuition-driven (-1, -1, -1)
        "-1_-1_-1": [
            {
                name: "Denmark",
                region: "Nordic Europe",
                characteristics: [
                    "Strong social welfare",
                    "High trust society",
                    "Work-life balance",
                    "Community focused"
                ],
                description: "Known for high quality of life and strong social support systems",
                exists: true
            },
            {
                name: "Norway",
                region: "Nordic Europe",
                characteristics: [
                    "Universal welfare",
                    "Collective bargaining",
                    "Environmental focus",
                    "Social equality"
                ],
                description: "Strong emphasis on social equality and environmental sustainability",
                exists: true
            }
        ],
        // Mixed examples with varying dimensions
        "1_-1_0": [
            {
                name: "Japan",
                region: "East Asia",
                characteristics: [
                    "Corporate capitalism",
                    "Collective culture",
                    "Technology focus",
                    "Traditional values"
                ],
                description: "Unique blend of market efficiency and collective social structure",
                exists: true
            }
        ],
        "0_1_-1": [
            {
                name: "Switzerland",
                region: "Central Europe",
                characteristics: [
                    "Direct democracy",
                    "Market efficiency",
                    "Consensus building",
                    "Risk management"
                ],
                description: "Balanced approach with strong institutional frameworks",
                exists: true
            }
        ]
    }
};



// Generate complete mapping and merge with existing examples
export const positionMapping = mergeWithExistingMapping(
    generateCompletePositionMapping(),
    existingExamples
);

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

