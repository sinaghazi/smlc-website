// src/data/examples/personalExamples.ts
import { PersonaExample } from '../positionMapping';

export const personalExamples: { [key: string]: PersonaExample[] } = {
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
        },
        {
            name: "Steve Jobs",
            traits: [
                "Design perfectionism",
                "Visionary leadership",
                "Disruptive innovation",
                "Individual decision-making"
            ],
            description: "Apple co-founder known for revolutionary product design and uncompromising vision"
        }
    ],

    // High individualism, rational, moderate risk (1, 1, 0)
    "1_1_0": [
        {
            name: "Warren Buffett",
            traits: [
                "Value investing",
                "Analytical thinking",
                "Independent decisions",
                "Conservative growth"
            ],
            description: "Investment guru known for rational, independent investment strategies"
        },
        {
            name: "Bill Gates",
            traits: [
                "Systematic problem-solving",
                "Data-driven philanthropy",
                "Strategic thinking",
                "Measured approaches"
            ],
            description: "Microsoft founder applying analytical thinking to global challenges"
        }
    ],

    // High individualism, rational, risk-averse (1, 1, -1)
    "1_1_-1": [
        {
            name: "Ray Dalio",
            traits: [
                "Principles-based decisions",
                "Risk management",
                "Systematic thinking",
                "Independent analysis"
            ],
            description: "Hedge fund founder known for principled, risk-managed investment approach"
        }
    ],

    // High individualism, balanced emotional, risk-taking (1, 0, 1)
    "1_0_1": [
        {
            name: "Richard Branson",
            traits: [
                "Entrepreneurial spirit",
                "Personal branding",
                "Adventure-seeking",
                "Charismatic leadership"
            ],
            description: "Virgin Group founder known for bold ventures and personal risk-taking"
        },
        {
            name: "Oprah Winfrey",
            traits: [
                "Personal authenticity",
                "Emotional intelligence",
                "Brand building",
                "Risk-taking in media"
            ],
            description: "Media mogul combining personal connection with bold business ventures"
        }
    ],

    // High individualism, balanced emotional, moderate risk (1, 0, 0)
    "1_0_0": [
        {
            name: "Mark Cuban",
            traits: [
                "Direct communication",
                "Independent thinking",
                "Calculated risks",
                "Personal accountability"
            ],
            description: "Entrepreneur and investor known for straightforward, independent approach"
        }
    ],

    // High individualism, emotional, risk-taking (1, -1, 1)
    "1_-1_1": [
        {
            name: "Lady Gaga",
            traits: [
                "Artistic vision",
                "Emotional expression",
                "Bold creativity",
                "Personal authenticity"
            ],
            description: "Artist known for combining personal expression with bold creative risks"
        }
    ],

    // Moderately individualistic, rational, risk-taking (0.5, 1, 1)
    "0.5_1_1": [
        {
            name: "Sundar Pichai",
            traits: [
                "Collaborative innovation",
                "Technical expertise",
                "Strategic vision",
                "Measured boldness"
            ],
            description: "Google CEO balancing individual leadership with team-based innovation"
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
        },
        {
            name: "Tim Cook",
            traits: [
                "Operational excellence",
                "Steady innovation",
                "Collaborative leadership",
                "Sustainable growth"
            ],
            description: "Apple CEO maintaining innovation while building collaborative culture"
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
        },
        {
            name: "Angela Merkel",
            traits: [
                "Pragmatic leadership",
                "Consensus building",
                "Steady decision-making",
                "Crisis management"
            ],
            description: "Former German Chancellor known for pragmatic, balanced leadership approach"
        }
    ],

    // Balanced individualism, emotional, risk-averse (0, -1, -1)
    "0_-1_-1": [
        {
            name: "Fred Rogers",
            traits: [
                "Empathetic communication",
                "Value-based decisions",
                "Careful messaging",
                "Nurturing approach"
            ],
            description: "Children's television host known for gentle, caring, and thoughtful approach"
        }
    ],

    // Moderately collective, rational, moderate risk (-0.5, 0.5, 0)
    "-0.5_0.5_0": [
        {
            name: "Christine Lagarde",
            traits: [
                "Multilateral thinking",
                "Economic analysis",
                "Institutional leadership",
                "Measured approaches"
            ],
            description: "ECB President known for collaborative, analytical approach to monetary policy"
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
        },
        {
            name: "Jacinda Ardern",
            traits: [
                "Empathetic leadership",
                "Collective decision-making",
                "Cautious policy approach",
                "Community focus"
            ],
            description: "Former New Zealand PM known for compassionate, community-focused leadership"
        }
    ],

    // Highly collective, rational, risk-averse (-1, 1, -1)
    "-1_1_-1": [
        {
            name: "Janet Yellen",
            traits: [
                "Consensus building",
                "Data-driven policy",
                "Institutional stability",
                "Risk management"
            ],
            description: "Fed Chair known for collaborative, evidence-based monetary policy"
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
        },
        {
            name: "Muhammad Yunus",
            traits: [
                "Social entrepreneurship",
                "Community empowerment",
                "Gradual change",
                "Human-centered approach"
            ],
            description: "Nobel laureate known for microcredit and community-based economic development"
        }
    ],

    // Collective, emotional, risk-taking (-1, -1, 1)
    "-1_-1_1": [
        {
            name: "Greta Thunberg",
            traits: [
                "Collective mobilization",
                "Passionate advocacy",
                "Bold activism",
                "Social movement building"
            ],
            description: "Climate activist known for mobilizing collective action through emotional appeals"
        }
    ]
};
