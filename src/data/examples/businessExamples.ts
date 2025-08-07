// src/data/examples/businessExamples.ts
import { CompanyExample } from '../positionMapping';

export const businessExamples: { [key: string]: CompanyExample[] } = {
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
        },
        {
            name: "Netflix",
            industry: "Entertainment/Technology",
            characteristics: [
                "Freedom and responsibility",
                "High performance culture",
                "Minimal processes",
                "Continuous innovation"
            ],
            description: "Streaming giant with radical transparency and autonomous teams"
        }
    ],

    // Flat, people-oriented, moderate innovation (1, 1, 0)
    "1_1_0": [
        {
            name: "Patagonia",
            industry: "Outdoor Apparel",
            characteristics: [
                "Purpose-driven culture",
                "Employee empowerment",
                "Sustainable practices",
                "Balanced growth"
            ],
            description: "Outdoor company known for environmental mission and employee-centric culture"
        },
        {
            name: "Ben & Jerry's",
            industry: "Food & Beverage",
            characteristics: [
                "Social mission focus",
                "Employee participation",
                "Community engagement",
                "Steady innovation"
            ],
            description: "Ice cream company balancing social mission with business stability"
        }
    ],

    // Flat, people-oriented, process-oriented (1, 1, -1)
    "1_1_-1": [
        {
            name: "Southwest Airlines",
            industry: "Aviation",
            characteristics: [
                "Employee-first culture",
                "Standardized processes",
                "Low-cost efficiency",
                "Cultural consistency"
            ],
            description: "Airline known for employee satisfaction and operational efficiency"
        }
    ],

    // Flat, balanced approach, innovative (1, 0, 1)
    "1_0_1": [
        {
            name: "Tesla",
            industry: "Automotive/Energy",
            characteristics: [
                "Rapid iteration",
                "Direct decision-making",
                "Disruptive innovation",
                "Mission-driven"
            ],
            description: "Electric vehicle pioneer with fast-moving, innovative culture"
        },
        {
            name: "SpaceX",
            industry: "Aerospace",
            characteristics: [
                "Rapid prototyping",
                "Flat communication",
                "Bold innovation",
                "Engineering excellence"
            ],
            description: "Space company revolutionizing aerospace through rapid innovation"
        }
    ],

    // Moderately flat, people-oriented, innovative (0.5, 1, 1)
    "0.5_1_1": [
        {
            name: "Atlassian",
            industry: "Software",
            characteristics: [
                "Team collaboration focus",
                "Open culture",
                "Continuous innovation",
                "Employee development"
            ],
            description: "Software company emphasizing team collaboration and innovative tools"
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
        },
        {
            name: "Salesforce",
            industry: "Software/CRM",
            characteristics: [
                "Ohana culture",
                "Balanced hierarchy",
                "Customer success focus",
                "Steady innovation"
            ],
            description: "CRM leader balancing family-like culture with business growth"
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
        },
        {
            name: "Unilever",
            industry: "Consumer Goods",
            characteristics: [
                "Sustainable living brands",
                "Balanced stakeholder focus",
                "Global consistency",
                "Purpose-driven growth"
            ],
            description: "Global consumer goods company balancing purpose with performance"
        },
        {
            name: "IBM",
            industry: "Technology Services",
            characteristics: [
                "Enterprise focus",
                "Balanced innovation",
                "Process excellence",
                "Client-centric"
            ],
            description: "Technology services giant balancing innovation with enterprise stability"
        }
    ],

    // Balanced hierarchy, task-oriented, process-focused (0, -0.5, -0.5)
    "0_-0.5_-0.5": [
        {
            name: "Intel",
            industry: "Semiconductors",
            characteristics: [
                "Engineering excellence",
                "Process discipline",
                "Technical focus",
                "Quality standards"
            ],
            description: "Semiconductor leader with strong engineering discipline and process focus"
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
        },
        {
            name: "Procter & Gamble",
            industry: "Consumer Goods",
            characteristics: [
                "Brand management focus",
                "Disciplined processes",
                "Market research driven",
                "Systematic innovation"
            ],
            description: "Consumer goods giant known for systematic brand building and market research"
        }
    ],

    // Hierarchical, task-oriented, moderate innovation (-1, -0.5, 0)
    "-1_-0.5_0": [
        {
            name: "General Electric",
            industry: "Industrial Conglomerate",
            characteristics: [
                "Strong hierarchy",
                "Performance management",
                "Operational focus",
                "Systematic approaches"
            ],
            description: "Industrial conglomerate known for management systems and operational excellence"
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
        },
        {
            name: "McDonald's",
            industry: "Food Service",
            characteristics: [
                "Standardized operations",
                "Strict processes",
                "Hierarchical management",
                "Consistency focus"
            ],
            description: "Global fast-food chain known for operational standardization and consistency"
        },
        {
            name: "FedEx",
            industry: "Logistics",
            characteristics: [
                "Command structure",
                "Process excellence",
                "Operational efficiency",
                "Reliability focus"
            ],
            description: "Logistics company with military-inspired hierarchy and process discipline"
        }
    ],

    // Hierarchical, people-oriented, process-driven (-1, 1, -1)
    "-1_1_-1": [
        {
            name: "Starbucks",
            industry: "Food & Beverage",
            characteristics: [
                "Partner-focused culture",
                "Store-level hierarchy",
                "Consistent experience",
                "Employee benefits"
            ],
            description: "Coffee chain balancing employee care with operational consistency"
        }
    ],

    // Hierarchical, task-oriented, innovative (-1, -1, 1)
    "-1_-1_1": [
        {
            name: "Apple",
            industry: "Technology",
            characteristics: [
                "Design-driven hierarchy",
                "Perfectionist culture",
                "Innovation obsession",
                "Centralized control"
            ],
            description: "Technology company with hierarchical structure focused on design innovation"
        },
        {
            name: "NASA",
            industry: "Aerospace/Research",
            characteristics: [
                "Mission-critical hierarchy",
                "Technical excellence",
                "Innovation imperative",
                "Safety protocols"
            ],
            description: "Space agency balancing strict hierarchy with breakthrough innovation"
        }
    ],

    // Flat, task-oriented, innovative (1, -1, 1)
    "1_-1_1": [
        {
            name: "GitHub",
            industry: "Software Development",
            characteristics: [
                "Developer-centric",
                "Meritocratic",
                "Open source focus",
                "Technical innovation"
            ],
            description: "Platform enabling collaborative software development with technical focus"
        }
    ],

    // Moderately hierarchical, people-oriented, innovative (-0.5, 1, 1)
    "-0.5_1_1": [
        {
            name: "3M",
            industry: "Diversified Technology",
            characteristics: [
                "Innovation culture",
                "Employee creativity",
                "15% time policy",
                "Collaborative research"
            ],
            description: "Diversified company famous for fostering employee-driven innovation"
        }
    ]
};
