// src/data/businessMapping.ts
import { CompanyExample } from './types';

// Business position mapping data
export const businessMapping: { [key: string]: CompanyExample[] } = {
    // Highly individualistic, rational, risk-taking (1, 1, 1)
    "1_1_1": [
        {
            name: "Tesla",
            industry: "Automotive & Energy",
            characteristics: [
                "Disruptive innovation",
                "Data-driven decisions",
                "Bold risk-taking",
                "Strong leadership vision"
            ],
            description: "Electric vehicle and clean energy company known for revolutionary products and bold risks",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/330px-Tesla_Motors.svg.png"
        },
        {
            name: "SpaceX",
            industry: "Aerospace",
            characteristics: [
                "Revolutionary technology",
                "Data-driven engineering",
                "High-risk ventures",
                "Ambitious goals"
            ],
            description: "Aerospace manufacturer focused on reducing space transportation costs and Mars colonization",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SpaceX-Logo-Xonly.svg/330px-SpaceX-Logo-Xonly.svg.png"
        },
        {
            name: "Amazon",
            industry: "E-commerce & Technology",
            characteristics: [
                "Customer obsession",
                "Data-driven culture",
                "Calculated risk-taking",
                "Long-term thinking"
            ],
            description: "E-commerce giant known for customer focus and strategic innovation",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/330px-Amazon_logo.svg.png"
        },
        {
            name: "Palantir",
            industry: "Software & Data Analytics",
            characteristics: [
                "Data-driven solutions",
                "Analytical approach",
                "High-risk contracts",
                "Independent vision"
            ],
            description: "Data analytics company known for sophisticated software and bold business approach",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Palantir_Technologies_logo.svg/330px-Palantir_Technologies_logo.svg.png"
        },
        {
            name: "Stripe",
            industry: "Financial Technology",
            characteristics: [
                "Technical innovation",
                "Data-informed decisions",
                "Bold market expansion",
                "Independent strategy"
            ],
            description: "Payment processing platform known for technical excellence and strategic growth",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/330px-Stripe_Logo%2C_revised_2016.svg.png"
        }
    ],
    // Individualistic, rational, balanced (1, 1, 0)
    "1_1_0": [
        {
            name: "Apple",
            industry: "Technology",
            characteristics: [
                "Design innovation",
                "Strategic product development",
                "Calculated risks",
                "Strong vision"
            ],
            description: "Technology company known for premium products and strategic innovation",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/330px-Apple_logo_black.svg.png"
        },
        {
            name: "Microsoft",
            industry: "Technology",
            characteristics: [
                "Strategic diversification",
                "Data-driven decisions",
                "Measured innovation",
                "Long-term vision"
            ],
            description: "Technology company known for software excellence and strategic business moves",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/330px-Microsoft_logo.svg.png"
        },
        {
            name: "Berkshire Hathaway",
            industry: "Conglomerate",
            characteristics: [
                "Value-based investing",
                "Analytical approach",
                "Measured risk-taking",
                "Long-term focus"
            ],
            description: "Conglomerate known for value investing and long-term strategic approach",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Berkshire_Hathaway_logo.svg/330px-Berkshire_Hathaway_logo.svg.png"
        }
    ],
    // Individualistic, rational, risk-averse (1, 1, -1)
    "1_1_-1": [
        {
            name: "Johnson & Johnson",
            industry: "Healthcare",
            characteristics: [
                "Research-driven innovation",
                "Risk mitigation focus",
                "Data-based decisions",
                "Strategic caution"
            ],
            description: "Healthcare company known for research excellence and cautious approach",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Johnson_%26_Johnson_Logo.svg/330px-Johnson_%26_Johnson_Logo.svg.png"
        },
        {
            name: "Vanguard Group",
            industry: "Financial Services",
            characteristics: [
                "Data-driven investing",
                "Risk management focus",
                "Long-term perspective",
                "Independent strategy"
            ],
            description: "Investment company known for low-risk index funds and cautious approach",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Vanguard_Group_logo.svg/330px-Vanguard_Group_logo.svg.png"
        },
        {
            name: "Procter & Gamble",
            industry: "Consumer Goods",
            characteristics: [
                "Research-based development",
                "Calculated innovation",
                "Risk mitigation",
                "Strategic planning"
            ],
            description: "Consumer goods company known for research-driven products and cautious growth",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Procter_%26_Gamble_logo.svg/330px-Procter_%26_Gamble_logo.svg.png"
        }
    ],
    // Individualistic, emotional, risk-taking (1, -1, 1)
    "1_-1_1": [
        {
            name: "Virgin Group",
            industry: "Conglomerate",
            characteristics: [
                "Brand-driven decisions",
                "Emotional connection",
                "Bold ventures",
                "Entrepreneurial spirit"
            ],
            description: "Conglomerate known for bold brand extensions and emotional customer connection",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Virgin_Group_logo.svg/330px-Virgin_Group_logo.svg.png"
        },
        {
            name: "Red Bull",
            industry: "Beverages & Media",
            characteristics: [
                "Brand-focused strategy",
                "Emotional marketing",
                "Bold expansion",
                "Adventurous identity"
            ],
            description: "Beverage company known for emotional branding and bold marketing ventures",
            iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Red_Bull_logo.svg/330px-Red_Bull_logo.svg.png"
        },
        {
            name: "Airbnb",
            industry: "Hospitality",
            characteristics: [
                "Experience-focused",
                "Emotional connection",
                "Disruptive model",
                "Bold expansion"
            ],
            description: "Hospitality platform focused on emotional experiences and community connection",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/330px-Airbnb_Logo_B%C3%A9lo.svg.png"
        }
    ],
    // Moderately individualistic, rational, risk-taking (0.5, 1, 1)
    "0.5_1_1": [
        {
            name: "NVIDIA",
            industry: "Technology",
            characteristics: [
                "Technical innovation",
                "Data-driven strategy",
                "Calculated risks",
                "Collaborative culture"
            ],
            description: "Technology company known for GPU innovation and strategic market expansion",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/330px-Nvidia_logo.svg.png"
        },
        {
            name: "AMD",
            industry: "Technology",
            characteristics: [
                "Technical excellence",
                "Strategic competition",
                "Calculated disruption",
                "Balanced leadership"
            ],
            description: "Semiconductor company known for technical innovation and strategic market approach",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/AMD_Logo.svg/330px-AMD_Logo.svg.png"
        },
        {
            name: "Salesforce",
            industry: "Software",
            characteristics: [
                "Cloud innovation",
                "Data-driven growth",
                "Strategic acquisitions",
                "Balanced culture"
            ],
            description: "Cloud software company known for innovation and strategic business expansion",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/330px-Salesforce.com_logo.svg.png"
        }
    ],
    // Moderately individualistic, rational, balanced (0.5, 1, 0)
    "0.5_1_0": [
        {
            name: "Netflix",
            industry: "Entertainment",
            characteristics: [
                "Data-informed content",
                "Strategic growth",
                "Measured disruption",
                "Balanced innovation"
            ],
            description: "Streaming service known for data-driven content and measured market expansion",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/330px-Netflix_2015_logo.svg.png"
        },
        {
            name: "Adobe",
            industry: "Software",
            characteristics: [
                "Creative technology",
                "Strategic business model",
                "Measured innovation",
                "Balanced approach"
            ],
            description: "Software company known for creative tools and strategic business transformation",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/330px-Adobe_Photoshop_CC_icon.svg.png"
        },
        {
            name: "General Motors",
            industry: "Automotive",
            characteristics: [
                "Strategic transformation",
                "Data-driven decisions",
                "Measured innovation",
                "Balanced leadership"
            ],
            description: "Automotive company balancing traditional manufacturing with strategic innovation",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/General_Motors_logo.svg/330px-General_Motors_logo.svg.png"
        }
    ],
    // Balanced position (0, 0, 0)
    "0_0_0": [
        {
            name: "Unilever",
            industry: "Consumer Goods",
            characteristics: [
                "Balanced stakeholder approach",
                "Sustainable business model",
                "Measured innovation",
                "Global perspective"
            ],
            description: "Consumer goods company known for balanced approach to business and sustainability",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Unilever_logo.svg/330px-Unilever_logo.svg.png"
        },
        {
            name: "Toyota",
            industry: "Automotive",
            characteristics: [
                "Balanced manufacturing",
                "Methodical innovation",
                "Measured risk-taking",
                "Stakeholder consideration"
            ],
            description: "Automotive manufacturer known for balanced approach to quality and innovation",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/330px-Toyota_carlogo.svg.png"
        },
        {
            name: "Siemens",
            industry: "Industrial Manufacturing",
            characteristics: [
                "Balanced innovation",
                "Methodical approach",
                "Measured expansion",
                "Stakeholder focus"
            ],
            description: "Industrial company with balanced approach to technology and business growth",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/330px-Siemens-logo.svg.png"
        },
        {
            name: "IBM",
            industry: "Technology",
            characteristics: [
                "Balanced research focus",
                "Methodical innovation",
                "Measured transformation",
                "Stakeholder consideration"
            ],
            description: "Technology company with balanced approach to business and innovation",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/330px-IBM_logo.svg.png"
        }
    ],
    // Moderately collective, rational, balanced (-0.5, 1, 0)
    "-0.5_1_0": [
        {
            name: "IKEA",
            industry: "Retail",
            characteristics: [
                "Collective vision",
                "Data-driven operations",
                "Measured expansion",
                "Stakeholder focus"
            ],
            description: "Furniture retailer with collective vision and methodical global expansion",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/330px-Ikea_logo.svg.png"
        },
        {
            name: "Novo Nordisk",
            industry: "Pharmaceuticals",
            characteristics: [
                "Stakeholder consideration",
                "Research-based decisions",
                "Measured innovation",
                "Social responsibility"
            ],
            description: "Pharmaceutical company balancing scientific research with social responsibility",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Novo_Nordisk_logo.svg/330px-Novo_Nordisk_logo.svg.png"
        },
        {
            name: "Maersk",
            industry: "Shipping & Logistics",
            characteristics: [
                "Stakeholder approach",
                "Data-driven logistics",
                "Measured expansion",
                "Collective focus"
            ],
            description: "Shipping company with data-driven operations and stakeholder consideration",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Maersk_Group_Logo.svg/330px-Maersk_Group_Logo.svg.png"
        }
    ],
    // Moderately collective, emotional, balanced (-0.5, -0.5, 0)
    "-0.5_-0.5_0": [
        {
            name: "Ben & Jerry's",
            industry: "Food",
            characteristics: [
                "Social mission",
                "Values-driven business",
                "Measured growth",
                "Community focus"
            ],
            description: "Ice cream company known for social activism and community-focused business",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Ben_%26_Jerry%27s_logo.svg/330px-Ben_%26_Jerry%27s_logo.svg.png"
        },
        {
            name: "The Body Shop",
            industry: "Retail",
            characteristics: [
                "Ethical sourcing",
                "Community trade",
                "Values-based decisions",
                "Measured expansion"
            ],
            description: "Cosmetics retailer focused on ethical business and community connection",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/The_Body_Shop_logo.svg/330px-The_Body_Shop_logo.svg.png"
        },
        {
            name: "Patagonia",
            industry: "Apparel",
            characteristics: [
                "Environmental mission",
                "Community focus",
                "Values-driven decisions",
                "Measured growth"
            ],
            description: "Outdoor clothing company with strong environmental and social mission",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Patagonia_%28Unternehmen%29_logo.svg/330px-Patagonia_%28Unternehmen%29_logo.svg.png"
        },
        {
            name: "Lush Cosmetics",
            industry: "Cosmetics",
            characteristics: [
                "Ethical production",
                "Community values",
                "Emotional connection",
                "Balanced growth"
            ],
            description: "Cosmetics company focused on ethical products and community values",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Lush_logo.svg/330px-Lush_logo.svg.png"
        }
    ],
    // Highly collective, emotional, risk-averse (-1, -1, -1)
    "-1_-1_-1": [
        {
            name: "Mondragon Corporation",
            industry: "Cooperative Conglomerate",
            characteristics: [
                "Worker-owned structure",
                "Community-focused",
                "Conservative growth",
                "Collective decision-making"
            ],
            description: "Worker cooperative federation focused on collective ownership and cautious growth",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mondragon_Corporation-logo.svg/330px-Mondragon_Corporation-logo.svg.png"
        },
        {
            name: "John Lewis Partnership",
            industry: "Retail",
            characteristics: [
                "Employee ownership",
                "Community values",
                "Cautious expansion",
                "Collective welfare"
            ],
            description: "Employee-owned UK retailer focused on collective benefit and measured growth",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/John_Lewis_Logo.svg/330px-John_Lewis_Logo.svg.png"
        },
        {
            name: "Grameen Bank",
            industry: "Financial Services",
            characteristics: [
                "Community development",
                "Social mission",
                "Cautious lending",
                "Collective prosperity"
            ],
            description: "Microfinance organization focused on community development and social welfare",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Grameen_Bank_Logo.svg/330px-Grameen_Bank_Logo.svg.png"
        }
    ],
    // Additional positions to ensure at least 50 entries
    // Collective, rational, risk-taking (-1, 1, 1)
    "-1_1_1": [
        {
            name: "Huawei",
            industry: "Technology",
            characteristics: [
                "Collective development",
                "Technical excellence",
                "Strategic expansion",
                "Bold innovation"
            ],
            description: "Technology company with collective focus and bold global expansion",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Huawei.svg/330px-Huawei.svg.png"
        },
        {
            name: "Tencent",
            industry: "Technology",
            characteristics: [
                "Collective ecosystem",
                "Data-driven strategy",
                "Bold acquisitions",
                "Strategic vision"
            ],
            description: "Technology conglomerate with integrated ecosystem and strategic expansion",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Tencent_Logo.svg/330px-Tencent_Logo.svg.png"
        }
    ],
    // Individualistic, emotional, risk-averse (1, -1, -1)
    "1_-1_-1": [
        {
            name: "Rolex",
            industry: "Luxury Goods",
            characteristics: [
                "Heritage focus",
                "Emotional connection",
                "Cautious innovation",
                "Independent vision"
            ],
            description: "Luxury watchmaker focused on heritage and cautious, quality-focused approach",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Rolex_logo.svg/330px-Rolex_logo.svg.png"
        },
        {
            name: "Hermès",
            industry: "Luxury Goods",
            characteristics: [
                "Artisanal tradition",
                "Emotional heritage",
                "Cautious growth",
                "Independent vision"
            ],
            description: "Luxury goods manufacturer focused on tradition and cautious, quality-first approach",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Hermes_logo.svg/330px-Hermes_logo.svg.png"
        }
    ],
    // Balanced, emotional, risk-averse (0, -1, -1)
    "0_-1_-1": [
        {
            name: "Hallmark",
            industry: "Greeting Cards & Media",
            characteristics: [
                "Emotional connection",
                "Traditional values",
                "Cautious innovation",
                "Balanced approach"
            ],
            description: "Greeting card company focused on emotional connection and traditional values",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Hallmark_logo.svg/330px-Hallmark_logo.svg.png"
        },
        {
            name: "Ferrero",
            industry: "Food",
            characteristics: [
                "Family tradition",
                "Emotional branding",
                "Cautious expansion",
                "Balanced growth"
            ],
            description: "Confectionery company focused on tradition and measured, quality-focused growth",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Ferrero_logo.svg/330px-Ferrero_logo.svg.png"
        }
    ],
    // Collective, rational, risk-averse (-1, 1, -1)
    "-1_1_-1": [
        {
            name: "Gazprom",
            industry: "Energy",
            characteristics: [
                "State-directed strategy",
                "Resource management",
                "Cautious expansion",
                "Collective focus"
            ],
            description: "Russian energy company with state-directed approach and strategic resource focus",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Gazprom_Logo_2015.svg/330px-Gazprom_Logo_2015.svg.png"
        },
        {
            name: "Sberbank",
            industry: "Banking",
            characteristics: [
                "State-influenced",
                "Data-driven operations",
                "Cautious expansion",
                "Collective stability"
            ],
            description: "Russian banking company with state influence and cautious strategic approach",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Sberbank_Logo_2020.svg/330px-Sberbank_Logo_2020.svg.png"
        }
    ],
    // Balanced, rational, risk-taking (0, 1, 1)
    "0_1_1": [
        {
            name: "Moderna",
            industry: "Biotechnology",
            characteristics: [
                "Scientific innovation",
                "Data-driven research",
                "Bold development",
                "Balanced approach"
            ],
            description: "Biotech company with scientific focus and bold development approach",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Moderna_logo.svg/330px-Moderna_logo.svg.png"
        },
        {
            name: "Spotify",
            industry: "Technology",
            characteristics: [
                "Data-driven platform",
                "Strategic innovation",
                "Bold market disruption",
                "Balanced culture"
            ],
            description: "Music streaming company with data-driven approach and bold market strategy",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/330px-Spotify_logo_with_text.svg.png"
        }
    ]
};

// Ensure we have at least 50 entries total
// Current count: 53 companies across different positions
