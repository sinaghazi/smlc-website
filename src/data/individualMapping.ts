// src/data/individualMapping.ts
import { PersonaExample } from './types';

// Individual position mapping data
export const individualMapping: { [key: string]: PersonaExample[] } = {
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
        },
        {
            name: "Richard Branson",
            traits: [
                "Bold risk-taking",
                "Entrepreneurial spirit",
                "Analytical approach",
                "Independent thinking"
            ],
            description: "Virgin Group founder known for disrupting multiple industries through calculated risks",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Richard_Branson_March_2015.jpg/330px-Richard_Branson_March_2015.jpg"
        },
        {
            name: "Mark Cuban",
            traits: [
                "Data-driven decisions",
                "Outspoken individualism",
                "Strategic risk-taking",
                "Analytical mindset"
            ],
            description: "Entrepreneur and investor known for bold moves and independent thinking",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Mark_Cuban_at_Web_Summit_2017.jpg/330px-Mark_Cuban_at_Web_Summit_2017.jpg"
        }
    ],
    // Individualistic, rational, balanced (1, 1, 0)
    "1_1_0": [
        {
            name: "Bill Gates",
            traits: [
                "Strategic thinking",
                "Analytical approach",
                "Measured risk-taking",
                "Individual vision"
            ],
            description: "Microsoft co-founder known for strategic innovation and calculated decision-making",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bill_Gates_2017_%28cropped%29.jpg/330px-Bill_Gates_2017_%28cropped%29.jpg"
        },
        {
            name: "Warren Buffett",
            traits: [
                "Value-based decisions",
                "Analytical thinking",
                "Measured approach",
                "Independent judgment"
            ],
            description: "Investor known for rational analysis and independent thinking with calculated risks",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Warren_Buffett_KU_Visit.jpg/330px-Warren_Buffett_KU_Visit.jpg"
        },
        {
            name: "Sundar Pichai",
            traits: [
                "Data-driven leadership",
                "Strategic vision",
                "Balanced risk approach",
                "Individual decision-making"
            ],
            description: "Google CEO known for analytical leadership and measured innovation",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sundar_pichai.png/330px-Sundar_pichai.png"
        }
    ],
    // Individualistic, rational, risk-averse (1, 1, -1)
    "1_1_-1": [
        {
            name: "Tim Cook",
            traits: [
                "Operational excellence",
                "Analytical approach",
                "Risk mitigation focus",
                "Individual leadership"
            ],
            description: "Apple CEO known for operational precision and careful strategic decisions",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Tim_Cook_%282017%2C_cropped%29.jpg/330px-Tim_Cook_%282017%2C_cropped%29.jpg"
        },
        {
            name: "Ginni Rometty",
            traits: [
                "Strategic transformation",
                "Data-driven decisions",
                "Careful planning",
                "Individual vision"
            ],
            description: "Former IBM CEO known for methodical leadership and strategic caution",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Ginni_Rometty_at_the_Fortune_MPW_Summit_in_2011.jpg/330px-Ginni_Rometty_at_the_Fortune_MPW_Summit_in_2011.jpg"
        },
        {
            name: "Jamie Dimon",
            traits: [
                "Risk management focus",
                "Analytical leadership",
                "Cautious innovation",
                "Independent thinking"
            ],
            description: "JPMorgan Chase CEO known for prudent leadership and risk management",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Jamie_Dimon%2C_CEO_of_JPMorgan_Chase.jpg/330px-Jamie_Dimon%2C_CEO_of_JPMorgan_Chase.jpg"
        }
    ],
    // Individualistic, emotional, risk-taking (1, -1, 1)
    "1_-1_1": [
        {
            name: "Oprah Winfrey",
            traits: [
                "Intuitive decision-making",
                "Emotional intelligence",
                "Bold risk-taking",
                "Personal authenticity"
            ],
            description: "Media mogul known for intuitive business moves and emotional connection",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Oprah_in_2014.jpg/330px-Oprah_in_2014.jpg"
        },
        {
            name: "Gary Vaynerchuk",
            traits: [
                "Passionate leadership",
                "Intuitive business sense",
                "Bold moves",
                "Authentic individuality"
            ],
            description: "Entrepreneur known for passion-driven decisions and bold business moves",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Gary_Vaynerchuk_public_domain.jpg/330px-Gary_Vaynerchuk_public_domain.jpg"
        },
        {
            name: "Sara Blakely",
            traits: [
                "Intuitive product development",
                "Emotional connection",
                "Bold entrepreneurship",
                "Individual vision"
            ],
            description: "Spanx founder known for intuition-led innovation and risk-taking",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Sara_Blakely_2.jpg/330px-Sara_Blakely_2.jpg"
        }
    ],
    // Individualistic, emotional, balanced (1, -1, 0)
    "1_-1_0": [
        {
            name: "Arianna Huffington",
            traits: [
                "Intuitive leadership",
                "Emotional intelligence",
                "Measured risk-taking",
                "Personal authenticity"
            ],
            description: "Media entrepreneur known for intuitive vision with calculated execution",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Arianna_Huffington_2012_Shankbone.JPG/330px-Arianna_Huffington_2012_Shankbone.JPG"
        },
        {
            name: "Yvon Chouinard",
            traits: [
                "Value-driven decisions",
                "Emotional connection to mission",
                "Measured innovation",
                "Independent thinking"
            ],
            description: "Patagonia founder known for passion-driven leadership with calculated risks",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Yvon_Chouinard.jpg/330px-Yvon_Chouinard.jpg"
        },
        {
            name: "Tony Robbins",
            traits: [
                "Emotional intelligence",
                "Intuitive understanding",
                "Calculated risk-taking",
                "Personal authenticity"
            ],
            description: "Life coach and entrepreneur known for emotional wisdom with strategic approach",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tony_Robbins_-_2009_Bassano.jpg/330px-Tony_Robbins_-_2009_Bassano.jpg"
        }
    ],
    // Moderately individualistic, rational, risk-taking (0.5, 1, 1)
    "0.5_1_1": [
        {
            name: "Satya Nadella",
            traits: [
                "Strategic innovation",
                "Data-driven decisions",
                "Calculated risk-taking",
                "Collaborative leadership"
            ],
            description: "Microsoft CEO known for transformative leadership with analytical approach",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Satya_Nadella_2017_%28cropped%29.jpg/330px-Satya_Nadella_2017_%28cropped%29.jpg"
        },
        {
            name: "Jensen Huang",
            traits: [
                "Technical vision",
                "Strategic risk-taking",
                "Analytical thinking",
                "Balanced leadership"
            ],
            description: "NVIDIA founder known for technical innovation and strategic vision",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Jensen_Huang_2018_%28cropped%29.jpg/330px-Jensen_Huang_2018_%28cropped%29.jpg"
        },
        {
            name: "Lisa Su",
            traits: [
                "Technical expertise",
                "Data-driven leadership",
                "Strategic risks",
                "Balanced approach"
            ],
            description: "AMD CEO known for technical leadership and strategic turnaround",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Lisa_Su_2020.jpg/330px-Lisa_Su_2020.jpg"
        }
    ],
    // Moderately individualistic, rational, balanced (0.5, 1, 0)
    "0.5_1_0": [
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
        },
        {
            name: "Ursula von der Leyen",
            traits: [
                "Balanced leadership",
                "Pragmatic approach",
                "Measured risk assessment",
                "Collaborative decision-making"
            ],
            description: "European Commission President known for balanced and methodical leadership",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Ursula_von_der_Leyen_2022_%28cropped%29.jpg/330px-Ursula_von_der_Leyen_2022_%28cropped%29.jpg"
        }
    ],
    // Moderately collective, rational, balanced (-0.5, 1, 0)
    "-0.5_1_0": [
        {
            name: "Jacinda Ardern",
            traits: [
                "Collaborative leadership",
                "Data-informed decisions",
                "Measured approach",
                "Community focus"
            ],
            description: "Former New Zealand PM known for collaborative, evidence-based leadership",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/New_Zealand_Prime_Minister_Jacinda_Ardern_in_2018.jpg/330px-New_Zealand_Prime_Minister_Jacinda_Ardern_in_2018.jpg"
        },
        {
            name: "Greta Thunberg",
            traits: [
                "Collective action focus",
                "Evidence-based advocacy",
                "Measured activism",
                "Community-oriented"
            ],
            description: "Climate activist known for evidence-based, collective approach to change",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Greta_Thunberg_at_the_Parliament_%2833549960178%29_%28cropped%29.jpg/330px-Greta_Thunberg_at_the_Parliament_%2833549960178%29_%28cropped%29.jpg"
        },
        {
            name: "José Mujica",
            traits: [
                "Collective welfare focus",
                "Pragmatic leadership",
                "Measured approach",
                "Community-oriented"
            ],
            description: "Former Uruguay president known for humble, collective-focused leadership",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jos%C3%A9_Mujica_2014_%28cropped%29.jpg/330px-Jos%C3%A9_Mujica_2014_%28cropped%29.jpg"
        }
    ],
    // Moderately collective, emotional, balanced (-0.5, -0.5, 0)
    "-0.5_-0.5_0": [
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
        },
        {
            name: "Malala Yousafzai",
            traits: [
                "Community advocacy",
                "Empathetic approach",
                "Measured activism",
                "Collective focus"
            ],
            description: "Education activist known for community-focused, empathetic leadership",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Malala_Yousafzai_at_Girl_Summit_2014.jpg/330px-Malala_Yousafzai_at_Girl_Summit_2014.jpg"
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
            description: "Gravity Payments CEO known for radical employee-focused policies",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Dan_Price_2020.jpg/330px-Dan_Price_2020.jpg"
        },
        {
            name: "Vandana Shiva",
            traits: [
                "Community-centered activism",
                "Intuitive approach",
                "Cautious preservation",
                "Collective welfare"
            ],
            description: "Environmental activist focused on community preservation and cautious approach",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Vandana_Shiva_in_2007.jpg/330px-Vandana_Shiva_in_2007.jpg"
        },
        {
            name: "Pope Francis",
            traits: [
                "Community-focused leadership",
                "Empathetic approach",
                "Traditional values",
                "Cautious change"
            ],
            description: "Religious leader known for community focus and cautious, empathetic approach",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pope_Francis_in_March_2013.jpg/330px-Pope_Francis_in_March_2013.jpg"
        }
    ],
    // Additional positions to ensure at least 50 entries
    // Individualistic, balanced, risk-taking (1, 0, 1)
    "1_0_1": [
        {
            name: "Jack Dorsey",
            traits: [
                "Independent thinking",
                "Balanced emotional-rational approach",
                "Bold innovation",
                "Unconventional leadership"
            ],
            description: "Twitter co-founder known for independent vision and unconventional approach",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Jack_Dorsey_2012.jpg/330px-Jack_Dorsey_2012.jpg"
        },
        {
            name: "Peter Thiel",
            traits: [
                "Contrarian thinking",
                "Balanced decision-making",
                "Bold investments",
                "Independent vision"
            ],
            description: "Entrepreneur and investor known for contrarian thinking and bold moves",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Peter_Thiel_by_Dan_Taylor.jpg/330px-Peter_Thiel_by_Dan_Taylor.jpg"
        }
    ],
    // Balanced, rational, risk-taking (0, 1, 1)
    "0_1_1": [
        {
            name: "Andy Jassy",
            traits: [
                "Balanced leadership",
                "Data-driven decisions",
                "Strategic risk-taking",
                "Collaborative approach"
            ],
            description: "Amazon CEO known for balanced leadership with calculated innovation",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Andy_Jassy_at_the_2019_Web_Summit_%2849063591152%29_%28cropped%29.jpg/330px-Andy_Jassy_at_the_2019_Web_Summit_%2849063591152%29_%28cropped%29.jpg"
        },
        {
            name: "Shantanu Narayen",
            traits: [
                "Balanced vision",
                "Analytical approach",
                "Strategic innovation",
                "Collaborative leadership"
            ],
            description: "Adobe CEO known for balanced transformation with data-driven decisions",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Shantanu_Narayen_-_World_Economic_Forum_Annual_Meeting_2011.jpg/330px-Shantanu_Narayen_-_World_Economic_Forum_Annual_Meeting_2011.jpg"
        }
    ],
    // Balanced, emotional, risk-taking (0, -1, 1)
    "0_-1_1": [
        {
            name: "Richard Branson",
            traits: [
                "Balanced leadership",
                "Intuitive decisions",
                "Bold risk-taking",
                "People-focused"
            ],
            description: "Virgin founder known for intuitive business moves and bold innovation",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Richard_Branson_March_2015.jpg/330px-Richard_Branson_March_2015.jpg"
        },
        {
            name: "Boyan Slat",
            traits: [
                "Balanced approach",
                "Passion-driven innovation",
                "Bold environmental solutions",
                "Collaborative leadership"
            ],
            description: "Ocean Cleanup founder known for passion-driven environmental innovation",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Boyan_Slat_Portrait.jpg/330px-Boyan_Slat_Portrait.jpg"
        }
    ],
    // Collective, rational, risk-taking (-1, 1, 1)
    "-1_1_1": [
        {
            name: "Lee Kuan Yew",
            traits: [
                "Collective prosperity focus",
                "Data-driven governance",
                "Bold national transformation",
                "Strategic vision"
            ],
            description: "Singapore's founding father known for collective focus with bold transformation",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Lee_Kuan_Yew.jpg/330px-Lee_Kuan_Yew.jpg"
        },
        {
            name: "Deng Xiaoping",
            traits: [
                "Collective development focus",
                "Pragmatic approach",
                "Bold economic reforms",
                "Strategic vision"
            ],
            description: "Chinese leader known for collective prosperity with bold economic reforms",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Deng_Xiaoping_and_Jimmy_Carter_at_the_arrival_ceremony_for_the_Vice_Premier_of_China._-_NARA_-_183157-restored_%28cropped%29.jpg/330px-Deng_Xiaoping_and_Jimmy_Carter_at_the_arrival_ceremony_for_the_Vice_Premier_of_China._-_NARA_-_183157-restored_%28cropped%29.jpg"
        }
    ],
    // Collective, balanced, risk-averse (-1, 0, -1)
    "-1_0_-1": [
        {
            name: "Angela Merkel",
            traits: [
                "Collective welfare focus",
                "Balanced approach",
                "Cautious decision-making",
                "Consensus building"
            ],
            description: "Former German Chancellor known for collective focus with cautious approach",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Angela_Merkel_2021.jpg/330px-Angela_Merkel_2021.jpg"
        },
        {
            name: "Olaf Scholz",
            traits: [
                "Collective prosperity focus",
                "Balanced leadership",
                "Cautious governance",
                "Consensus-oriented"
            ],
            description: "German Chancellor known for collective welfare with measured approach",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/2022-12-16_Bundeskanzler_Olaf_Scholz_by_Sandro_Halank%E2%80%93018_%28cropped%29.jpg/330px-2022-12-16_Bundeskanzler_Olaf_Scholz_by_Sandro_Halank%E2%80%93018_%28cropped%29.jpg"
        }
    ],
    // Individualistic, balanced, risk-averse (1, 0, -1)
    "1_0_-1": [
        {
            name: "Warren Buffett",
            traits: [
                "Independent thinking",
                "Balanced emotional-rational approach",
                "Risk-averse investing",
                "Long-term focus"
            ],
            description: "Investor known for independent thinking with cautious, long-term approach",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Warren_Buffett_KU_Visit.jpg/330px-Warren_Buffett_KU_Visit.jpg"
        },
        {
            name: "Charlie Munger",
            traits: [
                "Independent judgment",
                "Balanced decision-making",
                "Risk-averse strategy",
                "Long-term thinking"
            ],
            description: "Investor known for independent thinking with cautious investment approach",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Munger1.jpg/330px-Munger1.jpg"
        }
    ],
    // Balanced, rational, risk-averse (0, 1, -1)
    "0_1_-1": [
        {
            name: "Jerome Powell",
            traits: [
                "Balanced leadership",
                "Data-driven decisions",
                "Cautious policy approach",
                "Stability focus"
            ],
            description: "Federal Reserve Chair known for data-driven decisions with cautious approach",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Jerome_Powell_official_portrait.jpg/330px-Jerome_Powell_official_portrait.jpg"
        },
        {
            name: "Christine Lagarde",
            traits: [
                "Balanced governance",
                "Analytical approach",
                "Risk mitigation focus",
                "Stability-oriented"
            ],
            description: "ECB President known for balanced leadership with cautious monetary policy",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Christine_Lagarde_-_2018_%28cropped%29.jpg/330px-Christine_Lagarde_-_2018_%28cropped%29.jpg"
        }
    ],
    // Collective, emotional, risk-taking (-1, -1, 1)
    "-1_-1_1": [
        {
            name: "Hugo Chávez",
            traits: [
                "Collective welfare focus",
                "Emotional leadership",
                "Bold social reforms",
                "Revolutionary approach"
            ],
            description: "Venezuelan leader known for collective focus with bold, emotion-driven policies",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Hugo_Ch%C3%A1vez_in_Guatemala_2008.jpg/330px-Hugo_Ch%C3%A1vez_in_Guatemala_2008.jpg"
        },
        {
            name: "Evo Morales",
            traits: [
                "Indigenous collective focus",
                "Passion-driven leadership",
                "Bold social transformation",
                "Community-centered"
            ],
            description: "Bolivian leader known for indigenous collective focus with bold reforms",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Evo_Morales_2019.jpg/330px-Evo_Morales_2019.jpg"
        }
    ]
};

// Ensure we have at least 50 entries total
// Current count: 52 individuals across different positions
