// src/data/examples/countryExamples.ts
import { CountryExample } from '../positionMapping';

export const countryExamples: { [key: string]: CountryExample[] } = {
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

    // Free market, system-centric, moderate (1, 1, 0)
    "1_1_0": [
        {
            name: "Switzerland",
            region: "Central Europe",
            characteristics: [
                "Market efficiency",
                "Institutional stability",
                "Innovation ecosystem",
                "Quality focus"
            ],
            description: "Balanced market economy with strong institutions and measured innovation",
            exists: true
        },
        {
            name: "Australia",
            region: "Oceania",
            characteristics: [
                "Resource-based economy",
                "Strong institutions",
                "Regulatory efficiency",
                "Innovation support"
            ],
            description: "Market-oriented democracy with strong institutional frameworks",
            exists: true
        }
    ],

    // Free market, system-centric, conservative (1, 1, -1)
    "1_1_-1": [
        {
            name: "Hong Kong",
            region: "East Asia",
            characteristics: [
                "Laissez-faire capitalism",
                "Financial hub",
                "Low regulation",
                "Economic freedom"
            ],
            description: "Free market economy with minimal government intervention",
            exists: true
        }
    ],

    // Free market, balanced, innovative (1, 0, 1)
    "1_0_1": [
        {
            name: "United States",
            region: "North America",
            characteristics: [
                "Entrepreneurial culture",
                "Innovation economy",
                "Market dynamism",
                "Risk-taking society"
            ],
            description: "Market economy emphasizing innovation and entrepreneurship",
            exists: true
        },
        {
            name: "Israel",
            region: "Middle East",
            characteristics: [
                "Startup nation",
                "Tech innovation",
                "Military-tech transfer",
                "Venture capital ecosystem"
            ],
            description: "Innovation-driven economy with strong tech sector and startup culture",
            exists: true
        }
    ],

    // Free market, balanced, moderate (1, 0, 0)
    "1_0_0": [
        {
            name: "United Kingdom",
            region: "Western Europe",
            characteristics: [
                "Financial services hub",
                "Market orientation",
                "Pragmatic governance",
                "Innovation balance"
            ],
            description: "Market economy balancing financial sector strength with diverse industries",
            exists: true
        },
        {
            name: "Canada",
            region: "North America",
            characteristics: [
                "Resource economy",
                "Market principles",
                "Social balance",
                "Steady growth"
            ],
            description: "Market-oriented economy with natural resources and social considerations",
            exists: true
        }
    ],

    // Moderately free market, system-centric, innovative (0.5, 1, 1)
    "0.5_1_1": [
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
        },
        {
            name: "Taiwan",
            region: "East Asia",
            characteristics: [
                "Semiconductor leadership",
                "Export-oriented",
                "Tech manufacturing",
                "Innovation clusters"
            ],
            description: "Technology-focused economy balancing state guidance with market forces",
            exists: true
        }
    ],

    // Moderately free market, system-centric (0.5, 0.5, 0.5)
    "0.5_0.5_0.5": [
        {
            name: "Netherlands",
            region: "Western Europe",
            characteristics: [
                "Polder model",
                "Consensus governance",
                "Innovation economy",
                "Social market approach"
            ],
            description: "Consensus-based governance balancing market efficiency with social objectives",
            exists: true
        },
        {
            name: "Japan",
            region: "East Asia",
            characteristics: [
                "Corporate capitalism",
                "Technology focus",
                "Social harmony",
                "Long-term planning"
            ],
            description: "Unique blend of market efficiency and collective social structure",
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
        },
        {
            name: "Belgium",
            region: "Western Europe",
            characteristics: [
                "Mixed economy",
                "EU institutional center",
                "Social consensus",
                "Balanced governance"
            ],
            description: "Small country balancing market economics with strong social institutions",
            exists: true
        }
    ],

    // Balanced, human-centric, conservative (0, -1, -1)
    "0_-1_-1": [
        {
            name: "Austria",
            region: "Central Europe",
            characteristics: [
                "Social partnership",
                "Quality of life focus",
                "Stable institutions",
                "Conservative social policy"
            ],
            description: "Social market economy emphasizing stability and quality of life",
            exists: true
        }
    ],

    // Moderately collectivist, human-centric, moderate (-0.5, -0.5, 0)
    "-0.5_-0.5_0": [
        {
            name: "Italy",
            region: "Southern Europe",
            characteristics: [
                "Family-centered society",
                "Regional diversity",
                "Cultural heritage focus",
                "Mixed innovation"
            ],
            description: "Mediterranean model balancing traditional values with modern economy",
            exists: true
        }
    ],

    // Moderately collectivist, human-centric, conservative (-0.5, -0.5, -0.5)
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
        },
        {
            name: "Spain",
            region: "Southern Europe",
            characteristics: [
                "Social democratic model",
                "Regional autonomy",
                "Work-life balance",
                "Cultural emphasis"
            ],
            description: "Mediterranean social model with emphasis on quality of life",
            exists: true
        }
    ],

    // Collectivist, human-centric, innovative (-1, -1, 1)
    "-1_-1_1": [
        {
            name: "Finland",
            region: "Nordic Europe",
            characteristics: [
                "Education excellence",
                "Innovation culture",
                "Social equality",
                "Tech leadership"
            ],
            description: "Nordic model combining strong social welfare with technological innovation",
            exists: true
        }
    ],

    // Highly collectivist, human-centric, conservative (-1, -1, -1)
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
        },
        {
            name: "Sweden",
            region: "Nordic Europe",
            characteristics: [
                "Cradle-to-grave welfare",
                "Consensus politics",
                "Environmental leadership",
                "Gender equality"
            ],
            description: "Comprehensive welfare state with strong emphasis on equality and consensus",
            exists: true
        }
    ],

    // Collectivist, system-centric, moderate (-1, 1, 0)
    "-1_1_0": [
        {
            name: "China",
            region: "East Asia",
            characteristics: [
                "State capitalism",
                "Central planning",
                "Long-term strategy",
                "Collective goals"
            ],
            description: "Socialist market economy with state-led development and collective orientation",
            exists: true
        }
    ],

    // Free market, human-centric, innovative (1, -1, 1)
    "1_-1_1": [
        {
            name: "New Zealand",
            region: "Oceania",
            characteristics: [
                "Social innovation",
                "Environmental focus",
                "Quality of life",
                "Progressive policies"
            ],
            description: "Market economy with strong social innovation and environmental consciousness",
            exists: true
        }
    ],

    // Mixed positions with unique characteristics
    "0.5_-0.5_1": [
        {
            name: "Brazil",
            region: "South America",
            characteristics: [
                "Emerging market",
                "Social programs",
                "Innovation pockets",
                "Cultural diversity"
            ],
            description: "Large emerging economy balancing social needs with market dynamics",
            exists: true
        }
    ],

    "-0.5_1_1": [
        {
            name: "India",
            region: "South Asia",
            characteristics: [
                "Democratic planning",
                "Tech innovation",
                "Social complexity",
                "Jugaad innovation"
            ],
            description: "Diverse democracy combining state involvement with innovation and entrepreneurship",
            exists: true
        }
    ],

    "0_0.5_1": [
        {
            name: "Ireland",
            region: "Western Europe",
            characteristics: [
                "Tech hub",
                "EU integration",
                "Innovation economy",
                "Social partnership"
            ],
            description: "Small open economy successfully transitioning to knowledge-based innovation",
            exists: true
        }
    ],

    "0.5_0_-0.5": [
        {
            name: "Mexico",
            region: "North America",
            characteristics: [
                "NAFTA integration",
                "Manufacturing base",
                "Cultural traditions",
                "Mixed development"
            ],
            description: "Emerging economy balancing market integration with social and cultural considerations",
            exists: true
        }
    ]
};
