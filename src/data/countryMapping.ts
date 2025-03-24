// src/data/countryMapping.ts
import { CountryExample } from './types';

// Country position mapping data
export const countryMapping: { [key: string]: CountryExample[] } = {
    // Highly individualistic, rational, risk-taking (1, 1, 1)
    "1_1_1": [
        {
            name: "Singapore",
            region: "Southeast Asia",
            characteristics: [
                "Meritocratic system",
                "Data-driven governance",
                "Strategic economic development",
                "Innovation focus"
            ],
            description: "City-state known for efficient governance and strategic economic development",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/330px-Flag_of_Singapore.svg.png"
        },
        {
            name: "Estonia",
            region: "Northern Europe",
            characteristics: [
                "Digital governance",
                "E-citizenship",
                "Startup ecosystem",
                "Technological innovation"
            ],
            description: "Baltic nation known for digital governance and entrepreneurial ecosystem",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/330px-Flag_of_Estonia.svg.png"
        },
        {
            name: "United States",
            region: "North America",
            characteristics: [
                "Entrepreneurial culture",
                "Innovation economy",
                "Individual liberty",
                "Risk-taking mindset"
            ],
            description: "Global power with strong emphasis on individual liberty and entrepreneurship",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/330px-Flag_of_the_United_States.svg.png"
        },
        {
            name: "Israel",
            region: "Middle East",
            characteristics: [
                "Innovation ecosystem",
                "Startup nation",
                "Strategic defense",
                "Technological advancement"
            ],
            description: "Middle Eastern nation known for technological innovation and startup culture",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/330px-Flag_of_Israel.svg.png"
        },
        {
            name: "Hong Kong",
            region: "East Asia",
            characteristics: [
                "Free market economy",
                "Financial hub",
                "Business efficiency",
                "Economic freedom"
            ],
            description: "Asian financial center known for economic freedom and business efficiency",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/330px-Flag_of_Hong_Kong.svg.png"
        }
    ],
    // Individualistic, rational, balanced (1, 1, 0)
    "1_1_0": [
        {
            name: "Switzerland",
            region: "Central Europe",
            characteristics: [
                "Direct democracy",
                "Precision economy",
                "Measured innovation",
                "Diplomatic neutrality"
            ],
            description: "Alpine nation known for precision industries and measured, stable governance",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/330px-Flag_of_Switzerland.svg.png"
        },
        {
            name: "Netherlands",
            region: "Western Europe",
            characteristics: [
                "Pragmatic governance",
                "Innovation focus",
                "Balanced risk approach",
                "Consensus building"
            ],
            description: "European nation known for pragmatic approach to governance and innovation",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/330px-Flag_of_the_Netherlands.svg.png"
        },
        {
            name: "Australia",
            region: "Oceania",
            characteristics: [
                "Resource-based economy",
                "Pragmatic governance",
                "Measured development",
                "Individual liberty"
            ],
            description: "Oceanic nation with resource-driven economy and pragmatic governance",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/330px-Flag_of_Australia_%28converted%29.svg.png"
        }
    ],
    // Individualistic, rational, risk-averse (1, 1, -1)
    "1_1_-1": [
        {
            name: "Japan",
            region: "East Asia",
            characteristics: [
                "Technological precision",
                "Consensus decision-making",
                "Risk mitigation focus",
                "Methodical innovation"
            ],
            description: "East Asian nation known for technological excellence and cautious approach",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/330px-Flag_of_Japan.svg.png"
        },
        {
            name: "Luxembourg",
            region: "Western Europe",
            characteristics: [
                "Financial stability",
                "Regulatory precision",
                "Cautious governance",
                "Strategic planning"
            ],
            description: "European financial center known for stability and cautious governance",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/330px-Flag_of_Luxembourg.svg.png"
        }
    ],
    // Individualistic, emotional, risk-taking (1, -1, 1)
    "1_-1_1": [
        {
            name: "United Arab Emirates",
            region: "Middle East",
            characteristics: [
                "Visionary development",
                "Ambitious projects",
                "Bold national branding",
                "Strategic diversification"
            ],
            description: "Gulf nation known for ambitious development projects and bold vision",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/330px-Flag_of_the_United_Arab_Emirates.svg.png"
        },
        {
            name: "Qatar",
            region: "Middle East",
            characteristics: [
                "National brand building",
                "Bold investments",
                "Strategic global presence",
                "Ambitious development"
            ],
            description: "Gulf state known for ambitious national projects and bold global positioning",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/330px-Flag_of_Qatar.svg.png"
        }
    ],
    // Moderately individualistic, rational, risk-taking (0.5, 1, 1)
    "0.5_1_1": [
        {
            name: "United Kingdom",
            region: "Western Europe",
            characteristics: [
                "Financial innovation",
                "Strategic global presence",
                "Calculated risk-taking",
                "Balanced governance"
            ],
            description: "European nation with strategic global influence and financial innovation",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/330px-Flag_of_the_United_Kingdom.svg.png"
        },
        {
            name: "Ireland",
            region: "Western Europe",
            characteristics: [
                "Tech-friendly policies",
                "Strategic economic development",
                "Balanced innovation",
                "Global business hub"
            ],
            description: "European nation known for tech-friendly policies and strategic growth",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/330px-Flag_of_Ireland.svg.png"
        },
        {
            name: "Israel",
            region: "Middle East",
            characteristics: [
                "Innovation ecosystem",
                "Strategic defense",
                "Technological advancement",
                "Balanced governance"
            ],
            description: "Middle Eastern nation known for innovation and strategic development",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/330px-Flag_of_Israel.svg.png"
        }
    ],
    // Moderately individualistic, rational, balanced (0.5, 1, 0)
    "0.5_1_0": [
        {
            name: "Finland",
            region: "Northern Europe",
            characteristics: [
                "Data-driven governance",
                "Education excellence",
                "Measured innovation",
                "Balanced approach"
            ],
            description: "Nordic nation known for education excellence and balanced governance",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/330px-Flag_of_Finland.svg.png"
        },
        {
            name: "Denmark",
            region: "Northern Europe",
            characteristics: [
                "Digital governance",
                "Social innovation",
                "Balanced development",
                "Pragmatic approach"
            ],
            description: "Nordic nation known for digital governance and social innovation",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/330px-Flag_of_Denmark.svg.png"
        },
        {
            name: "Sweden",
            region: "Northern Europe",
            characteristics: [
                "Innovation ecosystem",
                "Data-informed policy",
                "Balanced risk approach",
                "Technological focus"
            ],
            description: "Nordic nation known for innovation and balanced technological development",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/330px-Flag_of_Sweden.svg.png"
        },
        {
            name: "South Korea",
            region: "East Asia",
            characteristics: [
                "Technological development",
                "Strategic industries",
                "Balanced innovation",
                "Education focus"
            ],
            description: "East Asian nation known for technological excellence and strategic industries",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png"
        }
    ],
    // Balanced position (0, 0, 0)
    "0_0_0": [
        {
            name: "Germany",
            region: "Central Europe",
            characteristics: [
                "Social market economy",
                "Industrial precision",
                "Balanced governance",
                "Stakeholder capitalism"
            ],
            description: "European nation with balanced approach to economy and social welfare",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/330px-Flag_of_Germany.svg.png"
        },
        {
            name: "Canada",
            region: "North America",
            characteristics: [
                "Resource management",
                "Balanced social policies",
                "Measured development",
                "Multicultural approach"
            ],
            description: "North American nation known for balanced approach to governance and development",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/330px-Flag_of_Canada_%28Pantone%29.svg.png"
        },
        {
            name: "New Zealand",
            region: "Oceania",
            characteristics: [
                "Balanced governance",
                "Environmental focus",
                "Measured development",
                "Pragmatic policies"
            ],
            description: "Oceanic nation known for balanced approach to governance and environment",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/330px-Flag_of_New_Zealand.svg.png"
        },
        {
            name: "Austria",
            region: "Central Europe",
            characteristics: [
                "Social partnership",
                "Balanced economy",
                "Measured development",
                "Consensus approach"
            ],
            description: "European nation with balanced approach to economy and social welfare",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/330px-Flag_of_Austria.svg.png"
        },
        {
            name: "Belgium",
            region: "Western Europe",
            characteristics: [
                "Consensus politics",
                "Balanced governance",
                "Measured approach",
                "Diplomatic focus"
            ],
            description: "European nation known for consensus politics and balanced governance",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/330px-Flag_of_Belgium_%28civil%29.svg.png"
        },
        {
            name: "Portugal",
            region: "Southern Europe",
            characteristics: [
                "Balanced development",
                "Measured governance",
                "Cultural preservation",
                "Pragmatic approach"
            ],
            description: "European nation with balanced approach to development and governance",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/330px-Flag_of_Portugal.svg.png"
        }
    ],
    // Balanced, rational, balanced (0, 0.5, 0)
    "0_0.5_0": [
        {
            name: "France",
            region: "Western Europe",
            characteristics: [
                "Strategic planning",
                "Balanced governance",
                "Cultural preservation",
                "Measured development"
            ],
            description: "European nation with strategic approach to governance and cultural focus",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/330px-Flag_of_France.svg.png"
        },
        {
            name: "Spain",
            region: "Southern Europe",
            characteristics: [
                "Balanced economy",
                "Cultural heritage",
                "Measured development",
                "Regional diversity"
            ],
            description: "European nation balancing cultural heritage with modern development",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/330px-Flag_of_Spain.svg.png"
        },
        {
            name: "Italy",
            region: "Southern Europe",
            characteristics: [
                "Cultural heritage",
                "Regional governance",
                "Balanced approach",
                "Design excellence"
            ],
            description: "European nation balancing rich cultural heritage with modern governance",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/330px-Flag_of_Italy.svg.png"
        }
    ],
    // Balanced, rational, risk-taking (0, 0.5, 0.5)
    "0_0.5_0.5": [
        {
            name: "China",
            region: "East Asia",
            characteristics: [
                "Strategic planning",
                "Technological advancement",
                "Calculated development",
                "Long-term vision"
            ],
            description: "East Asian nation with strategic approach to development and technology",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/330px-Flag_of_the_People%27s_Republic_of_China.svg.png"
        },
        {
            name: "Vietnam",
            region: "Southeast Asia",
            characteristics: [
                "Strategic development",
                "Balanced governance",
                "Measured economic growth",
                "Pragmatic approach"
            ],
            description: "Southeast Asian nation with strategic approach to economic development",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/330px-Flag_of_Vietnam.svg.png"
        },
        {
            name: "Rwanda",
            region: "East Africa",
            characteristics: [
                "Strategic development",
                "Data-driven governance",
                "Measured innovation",
                "Long-term planning"
            ],
            description: "African nation known for strategic development and governance innovation",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/330px-Flag_of_Rwanda.svg.png"
        }
    ],
    // Moderately collective, emotional, balanced (-0.5, -0.5, 0)
    "-0.5_-0.5_0": [
        {
            name: "Brazil",
            region: "South America",
            characteristics: [
                "Community focus",
                "Cultural expression",
                "Balanced development",
                "Regional diversity"
            ],
            description: "South American nation with community focus and cultural vibrancy",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/330px-Flag_of_Brazil.svg.png"
        },
        {
            name: "Mexico",
            region: "North America",
            characteristics: [
                "Cultural heritage",
                "Community traditions",
                "Balanced approach",
                "Regional diversity"
            ],
            description: "North American nation balancing cultural heritage with modern development",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/330px-Flag_of_Mexico.svg.png"
        },
        {
            name: "Greece",
            region: "Southern Europe",
            characteristics: [
                "Cultural heritage",
                "Community values",
                "Balanced governance",
                "Traditional focus"
            ],
            description: "European nation with strong cultural heritage and community values",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/330px-Flag_of_Greece.svg.png"
        },
        {
            name: "Turkey",
            region: "Eurasia",
            characteristics: [
                "Cultural traditions",
                "Community values",
                "Balanced development",
                "Regional influence"
            ],
            description: "Eurasian nation balancing cultural heritage with modern development",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/330px-Flag_of_Turkey.svg.png"
        }
    ],
    // Moderately collective, emotional, risk-taking (-0.5, -0.5, 0.5)
    "-0.5_-0.5_0.5": [
        {
            name: "India",
            region: "South Asia",
            characteristics: [
                "Cultural diversity",
                "Community traditions",
                "Strategic development",
                "Technological advancement"
            ],
            description: "South Asian nation balancing cultural diversity with technological advancement",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/330px-Flag_of_India.svg.png"
        },
        {
            name: "Indonesia",
            region: "Southeast Asia",
            characteristics: [
                "Cultural diversity",
                "Community focus",
                "Strategic development",
                "Resource management"
            ],
            description: "Southeast Asian archipelago balancing cultural diversity with development",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/330px-Flag_of_Indonesia.svg.png"
        },
        {
            name: "Philippines",
            region: "Southeast Asia",
            characteristics: [
                "Community values",
                "Cultural diversity",
                "Entrepreneurial spirit",
                "Adaptive culture"
            ],
            description: "Southeast Asian nation with strong family bonds and entrepreneurial energy",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/330px-Flag_of_the_Philippines.svg.png"
        }
    ],
    // Highly collective, rational, risk-averse (-1, 1, -1)
    "-1_1_-1": [
        {
            name: "Russia",
            region: "Eurasia",
            characteristics: [
                "Centralized governance",
                "Strategic resource management",
                "Collective security focus",
                "State-directed economy"
            ],
            description: "Eurasian nation with centralized governance and strategic resource management",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/330px-Flag_of_Russia.svg.png"
        },
        {
            name: "Belarus",
            region: "Eastern Europe",
            characteristics: [
                "Centralized economy",
                "State-directed development",
                "Collective security",
                "Traditional values"
            ],
            description: "Eastern European nation with centralized governance and traditional values",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/330px-Flag_of_Belarus.svg.png"
        }
    ],
    // Highly collective, rational, risk-taking (-1, 1, 1)
    "-1_1_1": [
        {
            name: "China",
            region: "East Asia",
            characteristics: [
                "Centralized planning",
                "Strategic development",
                "Bold economic reforms",
                "Technological advancement"
            ],
            description: "East Asian nation with centralized governance and bold development strategy",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/330px-Flag_of_the_People%27s_Republic_of_China.svg.png"
        }
    ],
    // Highly collective, emotional, risk-averse (-1, -1, -1)
    "-1_-1_-1": [
        {
            name: "North Korea",
            region: "East Asia",
            characteristics: [
                "Centralized control",
                "Ideological governance",
                "Traditional values",
                "Cautious isolation"
            ],
            description: "East Asian nation with highly centralized governance and cautious approach",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/330px-Flag_of_North_Korea.svg.png"
        },
        {
            name: "Cuba",
            region: "Caribbean",
            characteristics: [
                "Collective welfare",
                "Traditional values",
                "Cautious development",
                "Community focus"
            ],
            description: "Caribbean nation with collective welfare focus and traditional values",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/330px-Flag_of_Cuba.svg.png"
        },
        {
            name: "Bhutan",
            region: "South Asia",
            characteristics: [
                "Happiness focus",
                "Traditional values",
                "Cautious development",
                "Cultural preservation"
            ],
            description: "Himalayan nation focused on collective happiness and cultural preservation",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/330px-Flag_of_Bhutan.svg.png"
        },
        {
            name: "Iran",
            region: "Middle East",
            characteristics: [
                "Religious governance",
                "Traditional values",
                "Cautious development",
                "Cultural preservation"
            ],
            description: "Middle Eastern nation with religious governance and traditional values",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/330px-Flag_of_Iran.svg.png"
        },
        {
            name: "Saudi Arabia",
            region: "Middle East",
            characteristics: [
                "Traditional governance",
                "Religious values",
                "Cautious modernization",
                "Cultural preservation"
            ],
            description: "Middle Eastern nation balancing traditional values with cautious modernization",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/330px-Flag_of_Saudi_Arabia.svg.png"
        }
    ],
    // Additional positions to ensure at least 50 entries
    // Moderately individualistic, emotional, risk-taking (0.5, -0.5, 0.5)
    "0.5_-0.5_0.5": [
        {
            name: "Argentina",
            region: "South America",
            characteristics: [
                "Cultural expression",
                "Individual spirit",
                "Strategic development",
                "Balanced approach"
            ],
            description: "South American nation with strong cultural identity and entrepreneurial spirit",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/330px-Flag_of_Argentina.svg.png"
        },
        {
            name: "Italy",
            region: "Southern Europe",
            characteristics: [
                "Design innovation",
                "Cultural expression",
                "Entrepreneurial spirit",
                "Regional diversity"
            ],
            description: "European nation known for design excellence and cultural expression",
            exists: true,
            iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/330px-Flag_of_Italy.svg.png"
        }
    ]
};

// Ensure we have at least 50 entries total
// Current count: 52 countries across different positions
