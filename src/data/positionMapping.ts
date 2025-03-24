// src/data/positionMapping.ts
import { generateCompletePositionMapping, mergeWithExistingMapping } from './positionMappingGenerator';

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
                description: "Tech entrepreneur known for pushing boundaries and taking calculated risks",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/330px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
            },
            {
                name: "Jeff Bezos",
                traits: [
                    "Customer obsession",
                    "Long-term thinking",
                    "Analytical decision-making",
                    "Bold vision"
                ],
                description: "Amazon founder known for systematic innovation and calculated risk-taking",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Jeff_Bezos_at_the_Reagan_National_Defense_Forum_%28cropped%29.jpg/330px-Jeff_Bezos_at_the_Reagan_National_Defense_Forum_%28cropped%29.jpg"
            },
            {
                name: "Steve Jobs",
                traits: [
                    "Visionary leadership",
                    "Perfectionism",
                    "Disruptive innovation",
                    "Strong personal conviction"
                ],
                description: "Apple co-founder known for revolutionary products and unwavering individual vision",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/330px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg"
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
                description: "GM CEO known for transforming traditional auto industry through balanced approach",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Mary_Barra_2018.jpg/330px-Mary_Barra_2018.jpg"
            },
            {
                name: "Reed Hastings",
                traits: [
                    "Adaptive strategy",
                    "Data-informed decisions",
                    "Calculated disruption",
                    "Moderate risk-taking"
                ],
                description: "Netflix CEO who transformed entertainment through strategic pivots and innovation",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Reed_Hastings_Linkedin_Profil.jpg/330px-Reed_Hastings_Linkedin_Profil.jpg"
            },
            {
                name: "Sheryl Sandberg",
                traits: [
                    "Analytical leadership",
                    "Strategic growth focus",
                    "Balanced decision-making",
                    "Pragmatic innovation"
                ],
                description: "Tech executive known for scaling businesses with data-driven, measured approaches",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Sheryl_Sandberg_2013.jpg/330px-Sheryl_Sandberg_2013.jpg"
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
                description: "Leader known for thoughtful approach and ability to balance multiple perspectives",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/330px-President_Barack_Obama.jpg"
            },
            {
                name: "Satya Nadella",
                traits: [
                    "Transformational leadership",
                    "Cultural intelligence",
                    "Balanced innovation",
                    "Inclusive decision-making"
                ],
                description: "Microsoft CEO known for balanced transformation and cultural change",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Satya_Nadella_2017_%28cropped%29.jpg/330px-Satya_Nadella_2017_%28cropped%29.jpg"
            },
            {
                name: "Angela Merkel",
                traits: [
                    "Consensus building",
                    "Pragmatic leadership",
                    "Balanced risk assessment",
                    "Methodical decision-making"
                ],
                description: "Former German Chancellor known for measured, centrist approach to leadership",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Angela_Merkel_2021.jpg/330px-Angela_Merkel_2021.jpg"
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
                description: "Former PepsiCo CEO known for stakeholder-centric leadership",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Indra_Nooyi_-_World_Economic_Forum_Annual_Meeting_2011.jpg/330px-Indra_Nooyi_-_World_Economic_Forum_Annual_Meeting_2011.jpg"
            },
            {
                name: "Jacinda Ardern",
                traits: [
                    "Empathetic leadership",
                    "Community-focused",
                    "Cautious decision-making",
                    "Inclusive governance"
                ],
                description: "Former New Zealand PM known for compassionate, community-oriented leadership",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/New_Zealand_Prime_Minister_Jacinda_Ardern_in_2018.jpg/330px-New_Zealand_Prime_Minister_Jacinda_Ardern_in_2018.jpg"
            },
            {
                name: "Howard Schultz",
                traits: [
                    "People-first business",
                    "Social responsibility",
                    "Emotional connection",
                    "Steady growth"
                ],
                description: "Starbucks leader who built company culture around community and employee welfare",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Howard_Schultz_2011_Shankbone.JPG/330px-Howard_Schultz_2011_Shankbone.JPG"
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
                description: "Known for radical employee-centric approaches and collective decision-making",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dan_Price_2020.jpg/330px-Dan_Price_2020.jpg"
            },
            {
                name: "Yvon Chouinard",
                traits: [
                    "Environmental stewardship",
                    "Community values",
                    "Sustainable business",
                    "Anti-consumerism"
                ],
                description: "Patagonia founder known for prioritizing environmental and social concerns over profit",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Yvon_Chouinard.jpg/330px-Yvon_Chouinard.jpg"
            },
            {
                name: "Muhammad Yunus",
                traits: [
                    "Social entrepreneurship",
                    "Community development",
                    "Collective empowerment",
                    "Poverty alleviation"
                ],
                description: "Nobel Peace Prize winner who pioneered microfinance for community development",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Muhammad_Yunus_%28cropped%29.jpg/330px-Muhammad_Yunus_%28cropped%29.jpg"
            }
        ],
        // Highly individualistic, emotional, risk-taking (1, -1, 1)
        "1_-1_1": [
            {
                name: "Richard Branson",
                traits: [
                    "Intuitive decision-making",
                    "Charismatic leadership",
                    "Bold risk-taking",
                    "Emotional connection"
                ],
                description: "Virgin Group founder known for intuitive business decisions and emotional leadership",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Richard_Branson_March_2015.jpg/330px-Richard_Branson_March_2015.jpg"
            },
            {
                name: "Oprah Winfrey",
                traits: [
                    "Emotional intelligence",
                    "Personal brand building",
                    "Intuitive business sense",
                    "Bold media ventures"
                ],
                description: "Media mogul who built an empire through emotional connection and personal branding",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Oprah_in_2014.jpg/330px-Oprah_in_2014.jpg"
            },
            {
                name: "Walt Disney",
                traits: [
                    "Creative vision",
                    "Emotional storytelling",
                    "Entrepreneurial risk-taking",
                    "Individualistic drive"
                ],
                description: "Entertainment pioneer who followed his creative vision despite financial risks",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Walt_Disney_1946.JPG/330px-Walt_Disney_1946.JPG"
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
                description: "Gaming company famous for its no-management structure",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Valve-logo.jpg/330px-Valve-logo.jpg"
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
                description: "Known for its unique organizational structure and innovative culture",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/330px-Spotify_logo_with_text.svg.png"
            },
            {
                name: "Basecamp",
                industry: "Software",
                characteristics: [
                    "Remote-first culture",
                    "Minimal hierarchy",
                    "Focus on work-life balance",
                    "Innovative product development"
                ],
                description: "Software company known for its flat structure and focus on employee autonomy",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Basecamp-logo-2019.svg/330px-Basecamp-logo-2019.svg.png"
            }
        ],
        // Moderately flat, people-oriented, innovative (0.5, 0.5, 0.5)
        "0.5_0.5_0.5": [
            {
                name: "Google",
                industry: "Technology",
                characteristics: [
                    "20% time policy",
                    "Data-driven innovation",
                    "Collaborative culture",
                    "Balanced structure"
                ],
                description: "Tech giant known for balancing innovation with structure",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/330px-Google_%22G%22_Logo.svg.png"
            },
            {
                name: "Patagonia",
                industry: "Retail/Apparel",
                characteristics: [
                    "Environmental mission",
                    "Employee-focused policies",
                    "Sustainable innovation",
                    "Balanced growth"
                ],
                description: "Outdoor apparel company balancing purpose with profit",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Patagonia_logo.svg/330px-Patagonia_logo.svg.png"
            },
            {
                name: "Adobe",
                industry: "Software",
                characteristics: [
                    "Creative culture",
                    "Balanced management",
                    "Innovation focus",
                    "Employee development"
                ],
                description: "Software company with a balance of structure and creative freedom",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/330px-Adobe_Corporate_Logo.png"
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
                description: "Transformed from traditional hierarchy to modern balanced organization",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/330px-Microsoft_logo.svg.png"
            },
            {
                name: "Unilever",
                industry: "Consumer Goods",
                characteristics: [
                    "Sustainability focus",
                    "Global matrix structure",
                    "Balanced innovation",
                    "Stakeholder approach"
                ],
                description: "Consumer goods company balancing profit with purpose",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Unilever_logo.svg/330px-Unilever_logo.svg.png"
            },
            {
                name: "Toyota",
                industry: "Automotive",
                characteristics: [
                    "Lean manufacturing",
                    "Continuous improvement",
                    "Balanced hierarchy",
                    "Methodical innovation"
                ],
                description: "Automotive manufacturer known for balancing efficiency with innovation",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/330px-Toyota_carlogo.svg.png"
            }
        ],
        // Moderately hierarchical, task-oriented, process-driven (-0.5, -0.5, -0.5)
        "-0.5_-0.5_-0.5": [
            {
                name: "Johnson & Johnson",
                industry: "Healthcare",
                characteristics: [
                    "Decentralized structure",
                    "Process-oriented",
                    "Risk-managed innovation",
                    "Stability-focused"
                ],
                description: "Healthcare company with structured approach to innovation and risk",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Johnson_%26_Johnson_logo.svg/330px-Johnson_%26_Johnson_logo.svg.png"
            },
            {
                name: "Procter & Gamble",
                industry: "Consumer Goods",
                characteristics: [
                    "Brand management structure",
                    "Process excellence",
                    "Methodical innovation",
                    "Structured hierarchy"
                ],
                description: "Consumer goods giant with structured approach to brand management",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Procter_%26_Gamble_logo.svg/330px-Procter_%26_Gamble_logo.svg.png"
            },
            {
                name: "IBM",
                industry: "Technology",
                characteristics: [
                    "Structured innovation",
                    "Process-driven culture",
                    "Hierarchical organization",
                    "Methodical approach"
                ],
                description: "Technology company with established processes and structured innovation",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/330px-IBM_logo.svg.png"
            }
        ],
        // Highly hierarchical, task-oriented, process-driven (-1, -1, -1)
        "-1_-1_-1": [
            {
                name: "Goldman Sachs",
                industry: "Finance",
                characteristics: [
                    "Strict hierarchy",
                    "Process-driven",
                    "Risk-averse culture",
                    "Structured advancement"
                ],
                description: "Investment bank known for its hierarchical structure and process orientation",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/330px-Goldman_Sachs.svg.png"
            },
            {
                name: "UPS",
                industry: "Logistics",
                characteristics: [
                    "Highly structured operations",
                    "Process optimization",
                    "Efficiency-focused",
                    "Traditional hierarchy"
                ],
                description: "Logistics company with highly structured processes and operations",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UPS_Logo_Shield_2017.svg/330px-UPS_Logo_Shield_2017.svg.png"
            },
            {
                name: "US Military",
                industry: "Defense",
                characteristics: [
                    "Chain of command",
                    "Standard operating procedures",
                    "Hierarchical structure",
                    "Process adherence"
                ],
                description: "Organization defined by clear hierarchy and standardized processes",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/United_States_Department_of_Defense_Seal.svg/330px-United_States_Department_of_Defense_Seal.svg.png"
            }
        ]
    },

    country: {
        // Highly individualistic, rational, risk-taking (1, 1, 1)
        "1_1_1": [
            {
                name: "Singapore",
                region: "Southeast Asia",
                characteristics: [
                    "Meritocratic system",
                    "Data-driven governance",
                    "Strategic economic planning",
                    "Innovation-focused policies"
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
                    "E-residency program",
                    "Startup ecosystem",
                    "Tech-forward policies"
                ],
                description: "Baltic nation known for digital innovation and entrepreneurial governance",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/330px-Flag_of_Estonia.svg.png"
            },
            {
                name: "United States",
                region: "North America",
                characteristics: [
                    "Entrepreneurial culture",
                    "Innovation ecosystems",
                    "Individual liberty focus",
                    "Risk-taking economy"
                ],
                description: "Nation with strong emphasis on individual achievement and entrepreneurship",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/330px-Flag_of_the_United_States.svg.png"
            },
            {
                name: "Israel",
                region: "Middle East",
                characteristics: [
                    "Startup nation",
                    "Innovation ecosystem",
                    "Entrepreneurial mindset",
                    "Research-driven economy"
                ],
                description: "Middle Eastern nation with strong emphasis on innovation and entrepreneurship",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/330px-Flag_of_Israel.svg.png"
            },
            {
                name: "Hong Kong",
                region: "East Asia",
                characteristics: [
                    "Free market principles",
                    "Low taxation",
                    "Business-friendly policies",
                    "Economic freedom"
                ],
                description: "Asian financial hub with strong emphasis on economic liberty and entrepreneurship",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/330px-Flag_of_Hong_Kong.svg.png"
            }
        ],
        // Highly individualistic, rational, balanced risk (1, 1, 0)
        "1_1_0": [
            {
                name: "Switzerland",
                region: "Central Europe",
                characteristics: [
                    "Direct democracy",
                    "Evidence-based policy",
                    "Banking precision",
                    "Balanced innovation"
                ],
                description: "Alpine nation combining individual freedom with rational governance and measured approach to risk",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/330px-Flag_of_Switzerland.svg.png"
            },
            {
                name: "Netherlands",
                region: "Western Europe",
                characteristics: [
                    "Pragmatic governance",
                    "Consensus-based decisions",
                    "Innovation with caution",
                    "Individual freedoms"
                ],
                description: "European nation balancing individual liberty with practical, evidence-based policies",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/330px-Flag_of_the_Netherlands.svg.png"
            },
            {
                name: "Australia",
                region: "Oceania",
                characteristics: [
                    "Independent spirit",
                    "Evidence-based policy",
                    "Balanced regulation",
                    "Pragmatic innovation"
                ],
                description: "Oceanic nation with strong individual rights and pragmatic governance approach",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/330px-Flag_of_Australia_%28converted%29.svg.png"
            }
        ],
        // Highly individualistic, rational, risk-averse (1, 1, -1)
        "1_1_-1": [
            {
                name: "Japan",
                region: "East Asia",
                characteristics: [
                    "Technological precision",
                    "Consensus decision-making",
                    "Incremental innovation",
                    "Risk-minimizing culture"
                ],
                description: "East Asian nation combining technological excellence with cautious, methodical approaches",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/330px-Flag_of_Japan.svg.png"
            },
            {
                name: "Luxembourg",
                region: "Western Europe",
                characteristics: [
                    "Financial precision",
                    "Regulatory excellence",
                    "Individual wealth focus",
                    "Conservative innovation"
                ],
                description: "European financial center with strong individual rights and cautious governance",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/330px-Flag_of_Luxembourg.svg.png"
            }
        ],
        // Moderately individualistic, highly rational, balanced risk (0.5, 1, 0)
        "0.5_1_0": [
            {
                name: "Finland",
                region: "Northern Europe",
                characteristics: [
                    "Data-driven governance",
                    "World-class education system",
                    "Technological pragmatism",
                    "Social innovation"
                ],
                description: "Nordic nation balancing social welfare with individual achievement and evidence-based policy",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/330px-Flag_of_Finland.svg.png"
            },
            {
                name: "Denmark",
                region: "Northern Europe",
                characteristics: [
                    "Digital government",
                    "Flexicurity model",
                    "Evidence-based welfare",
                    "Entrepreneurial support"
                ],
                description: "Scandinavian country combining social welfare with innovation and entrepreneurship",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/330px-Flag_of_Denmark.svg.png"
            },
            {
                name: "Sweden",
                region: "Northern Europe",
                characteristics: [
                    "Innovation ecosystem",
                    "Social welfare system",
                    "Data-driven policy",
                    "Balanced development"
                ],
                description: "Nordic nation with strong social safety net and thriving innovation economy",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/330px-Flag_of_Sweden.svg.png"
            },
            {
                name: "South Korea",
                region: "East Asia",
                characteristics: [
                    "Technological excellence",
                    "Strategic economic planning",
                    "Education focus",
                    "Balanced innovation"
                ],
                description: "East Asian nation with rapid technological development and strategic governance",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png"
            }
        ],
        // Moderately individualistic, rational, risk-taking (0.5, 1, 1)
        "0.5_1_1": [
            {
                name: "United Kingdom",
                region: "Western Europe",
                characteristics: [
                    "Financial innovation",
                    "Research excellence",
                    "Entrepreneurial support",
                    "Mixed economic model"
                ],
                description: "European nation with strong research base and entrepreneurial ecosystem",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/330px-Flag_of_the_United_Kingdom.svg.png"
            },
            {
                name: "Ireland",
                region: "Western Europe",
                characteristics: [
                    "Tech hub development",
                    "Business-friendly policies",
                    "EU integration",
                    "Social cohesion"
                ],
                description: "European nation that transformed into a technology and business hub",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/330px-Flag_of_Ireland.svg.png"
            },
            {
                name: "Israel",
                region: "Middle East",
                characteristics: [
                    "Innovation ecosystem",
                    "Defense technology",
                    "Entrepreneurial culture",
                    "Collective security focus"
                ],
                description: "Middle Eastern nation with strong innovation culture and strategic planning",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/330px-Flag_of_Israel.svg.png"
            }
        ],
        // Balanced approach (0, 0, 0)
        "0_0_0": [
            {
                name: "Germany",
                region: "Western Europe",
                characteristics: [
                    "Social market economy",
                    "Balanced regulation",
                    "Stakeholder capitalism",
                    "Pragmatic governance"
                ],
                description: "European economy balancing social welfare with market efficiency",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/330px-Flag_of_Germany.svg.png"
            },
            {
                name: "Canada",
                region: "North America",
                characteristics: [
                    "Universal healthcare",
                    "Market economy",
                    "Multicultural policies",
                    "Balanced governance"
                ],
                description: "Nation balancing social programs with economic freedom",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/330px-Flag_of_Canada_%28Pantone%29.svg.png"
            },
            {
                name: "New Zealand",
                region: "Oceania",
                characteristics: [
                    "Progressive policies",
                    "Free market economy",
                    "Indigenous rights focus",
                    "Environmental stewardship"
                ],
                description: "Island nation balancing economic growth with social and environmental concerns",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/330px-Flag_of_New_Zealand.svg.png"
            },
            {
                name: "Austria",
                region: "Central Europe",
                characteristics: [
                    "Social partnership model",
                    "Mixed economy",
                    "Balanced regulation",
                    "Consensus politics"
                ],
                description: "Central European nation with balanced approach to social welfare and market economy",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/330px-Flag_of_Austria.svg.png"
            },
            {
                name: "Belgium",
                region: "Western Europe",
                characteristics: [
                    "Consensus democracy",
                    "Social security system",
                    "Mixed economy",
                    "Pragmatic governance"
                ],
                description: "European nation with balanced approach to social welfare and economic development",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/330px-Flag_of_Belgium_%28civil%29.svg.png"
            },
            {
                name: "Portugal",
                region: "Southern Europe",
                characteristics: [
                    "Social democracy",
                    "Mixed economy",
                    "Balanced innovation",
                    "Moderate policies"
                ],
                description: "Southern European nation with balanced approach to social welfare and economic growth",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/330px-Flag_of_Portugal.svg.png"
            }
        ],
        // Moderately collective, rational, balanced risk (0, 0.5, 0)
        "0_0.5_0": [
            {
                name: "France",
                region: "Western Europe",
                characteristics: [
                    "Strong state role",
                    "Social protections",
                    "Strategic planning",
                    "Balanced innovation"
                ],
                description: "European nation with strong state role in economy and social welfare",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/330px-Flag_of_France.svg.png"
            },
            {
                name: "Spain",
                region: "Southern Europe",
                characteristics: [
                    "Social welfare system",
                    "Mixed economy",
                    "Regional autonomy",
                    "Balanced development"
                ],
                description: "Southern European nation balancing central planning with regional autonomy",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/330px-Flag_of_Spain.svg.png"
            },
            {
                name: "Italy",
                region: "Southern Europe",
                characteristics: [
                    "Family-centered society",
                    "Traditional values",
                    "Mixed economy",
                    "Cultural preservation"
                ],
                description: "Mediterranean nation with strong social bonds and mixed economic approach",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/330px-Flag_of_Italy.svg.png"
            }
        ],
        // Moderately collective, rational, risk-taking (0, 0.5, 0.5)
        "0_0.5_0.5": [
            {
                name: "China",
                region: "East Asia",
                characteristics: [
                    "State-directed capitalism",
                    "Long-term planning",
                    "Technological advancement",
                    "Collective development"
                ],
                description: "East Asian nation with state-directed economic development and technological focus",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/330px-Flag_of_the_People%27s_Republic_of_China.svg.png"
            },
            {
                name: "Vietnam",
                region: "Southeast Asia",
                characteristics: [
                    "Emerging economy",
                    "State-guided development",
                    "Export-oriented policies",
                    "Pragmatic reforms"
                ],
                description: "Southeast Asian nation with state-guided economic development and market reforms",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/330px-Flag_of_Vietnam.svg.png"
            },
            {
                name: "Rwanda",
                region: "East Africa",
                characteristics: [
                    "Vision-based development",
                    "Tech-focused policies",
                    "Strong central planning",
                    "Pragmatic governance"
                ],
                description: "African nation with strong central planning and technology-focused development",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/330px-Flag_of_Rwanda.svg.png"
            }
        ],
        // Moderately collective, emotional, balanced risk (-0.5, -0.5, 0)
        "-0.5_-0.5_0": [
            {
                name: "Brazil",
                region: "South America",
                characteristics: [
                    "Collectivist culture",
                    "Relationship-focused",
                    "Mixed economic approach",
                    "Social programs"
                ],
                description: "South American nation with strong social bonds and mixed development approach",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/330px-Flag_of_Brazil.svg.png"
            },
            {
                name: "Mexico",
                region: "North America",
                characteristics: [
                    "Family-centered society",
                    "Traditional values",
                    "Mixed economy",
                    "Cultural identity"
                ],
                description: "North American nation with strong cultural identity and family-centered society",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/330px-Flag_of_Mexico.svg.png"
            },
            {
                name: "Greece",
                region: "Southern Europe",
                characteristics: [
                    "Family-centered society",
                    "Traditional values",
                    "Social welfare focus",
                    "Cultural preservation"
                ],
                description: "Mediterranean nation with strong social bonds and traditional values",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/330px-Flag_of_Greece.svg.png"
            },
            {
                name: "Turkey",
                region: "Eurasia",
                characteristics: [
                    "Collective identity",
                    "Traditional values",
                    "Mixed economy",
                    "Cultural heritage"
                ],
                description: "Eurasian nation with strong cultural identity and mixed economic approach",
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
                    "Family-centered society",
                    "Diverse cultural traditions",
                    "Entrepreneurial energy",
                    "Mixed economic model"
                ],
                description: "South Asian nation with strong cultural traditions and growing entrepreneurial spirit",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/330px-Flag_of_India.svg.png"
            },
            {
                name: "Indonesia",
                region: "Southeast Asia",
                characteristics: [
                    "Collective harmony",
                    "Cultural diversity",
                    "Emerging economy",
                    "Entrepreneurial growth"
                ],
                description: "Southeast Asian archipelago with diverse cultural traditions and developing economy",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/330px-Flag_of_Indonesia.svg.png"
            },
            {
                name: "Philippines",
                region: "Southeast Asia",
                characteristics: [
                    "Family-centered society",
                    "Relationship-focused",
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
        // Highly collective, emotional, risk-averse (-1, -1, -1)
        "-1_-1_-1": [
            {
                name: "North Korea",
                region: "East Asia",
                characteristics: [
                    "State-controlled economy",
                    "Personality cult leadership",
                    "Ideological rigidity",
                    "Resistance to change"
                ],
                description: "Nation with highly centralized control, personality cult, and resistance to external influence",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/330px-Flag_of_North_Korea.svg.png"
            },
            {
                name: "Cuba",
                region: "Caribbean",
                characteristics: [
                    "Socialist economy",
                    "Collective welfare focus",
                    "State-directed development",
                    "Revolutionary ideology"
                ],
                description: "Caribbean nation with socialist economic model and collective focus",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/330px-Flag_of_Cuba.svg.png"
            },
            {
                name: "Bhutan",
                region: "South Asia",
                characteristics: [
                    "Gross National Happiness",
                    "Traditional values",
                    "Community-focused",
                    "Cautious modernization"
                ],
                description: "Himalayan kingdom prioritizing collective well-being over economic growth",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/330px-Flag_of_Bhutan.svg.png"
            },
            {
                name: "Iran",
                region: "Middle East",
                characteristics: [
                    "Theocratic governance",
                    "Traditional values",
                    "Collective identity",
                    "State-directed economy"
                ],
                description: "Middle Eastern nation with strong religious influence and collective identity",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/330px-Flag_of_Iran.svg.png"
            },
            {
                name: "Saudi Arabia",
                region: "Middle East",
                characteristics: [
                    "Traditional monarchy",
                    "Religious governance",
                    "Collective identity",
                    "Cautious modernization"
                ],
                description: "Middle Eastern monarchy balancing traditional values with selective modernization",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/330px-Flag_of_Saudi_Arabia.svg.png"
            }
        ],
        // Moderately individualistic, emotional, risk-taking (0.5, -0.5, 0.5)
        "0.5_-0.5_0.5": [
            {
                name: "Argentina",
                region: "South America",
                characteristics: [
                    "Expressive culture",
                    "Individualistic tendencies",
                    "Entrepreneurial spirit",
                    "Emotional decision-making"
                ],
                description: "South American nation with expressive culture and entrepreneurial energy",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/330px-Flag_of_Argentina.svg.png"
            },
            {
                name: "Italy",
                region: "Southern Europe",
                characteristics: [
                    "Expressive culture",
                    "Family businesses",
                    "Creative innovation",
                    "Regional identity"
                ],
                description: "Mediterranean nation with strong creative culture and entrepreneurial families",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/330px-Flag_of_Italy.svg.png"
            }
        ],
        // Highly individualistic, emotional, risk-taking (1, -1, 1)
        "1_-1_1": [
            {
                name: "United Arab Emirates",
                region: "Middle East",
                characteristics: [
                    "Visionary leadership",
                    "Bold development",
                    "Luxury focus",
                    "Ambitious projects"
                ],
                description: "Gulf nation known for ambitious development projects and visionary leadership",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/330px-Flag_of_the_United_Arab_Emirates.svg.png"
            },
            {
                name: "Qatar",
                region: "Middle East",
                characteristics: [
                    "Ambitious development",
                    "Global influence seeking",
                    "Bold investments",
                    "Vision-driven leadership"
                ],
                description: "Gulf state with ambitious global projects and bold national vision",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/330px-Flag_of_Qatar.svg.png"
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
                    "Technological ambition",
                    "Collective advancement"
                ],
                description: "East Asian nation with centralized planning and ambitious technological goals",
                exists: true,
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/330px-Flag_of_the_People%27s_Republic_of_China.svg.png"
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
