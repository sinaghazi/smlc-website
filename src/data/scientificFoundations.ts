// src/data/scientificFoundations.ts

export interface ScientificFoundation {
  dimension: string;
  construct: string;
  poles: string;
  theoreticalBasis: string[];
  validatedMeasures: string[];
  definition: string;
  keyReferences: string[];
}

export interface LevelFoundation {
  level: string;
  description: string;
  dimensions: ScientificFoundation[];
}

export const SCIENTIFIC_FOUNDATIONS: LevelFoundation[] = [
  {
    level: "Personal Level",
    description: "Individual Cognitive & Behavioral Patterns - Based on established psychological constructs with validated measures",
    dimensions: [
      {
        dimension: "Self-Focus vs. Others-Focus",
        construct: "Agency Orientation / Self-Construal",
        poles: "Independent Self-Construal ↔ Interdependent Self-Construal",
        theoreticalBasis: [
          "Hofstede's Individualism-Collectivism (1980)",
          "Markus & Kitayama's Cultural Psychology (1991)",
          "Cross-Cultural Psychology Research"
        ],
        validatedMeasures: [
          "Self-Construal Scale (Singelis, 1994)",
          "Individualism-Collectivism Scale (Triandis, 1995)",
          "Cultural Value Scale (Yoo & Donthu, 2005)"
        ],
        definition: "The extent to which individuals define themselves as autonomous agents vs. embedded in social relationships and collective identity.",
        keyReferences: [
          "Hofstede, G. (1980). Culture's consequences: International differences in work-related values.",
          "Markus, H. R., & Kitayama, S. (1991). Culture and the self: Implications for cognition, emotion, and motivation.",
          "Singelis, T. M. (1994). The measurement of independent and interdependent self-construals."
        ]
      },
      {
        dimension: "Analytical vs. Intuitive",
        construct: "Information Processing Style / Dual-Process Theory",
        poles: "Analytical/Systematic ↔ Intuitive/Heuristic",
        theoreticalBasis: [
          "Kahneman's Dual-Process Theory (2011)",
          "Evans & Stanovich's Type 1/Type 2 Processing (2013)",
          "Cognitive Style Research"
        ],
        validatedMeasures: [
          "Cognitive Reflection Test (Frederick, 2005)",
          "Rational-Experiential Inventory (Pacini & Epstein, 1999)",
          "Need for Cognition Scale (Cacioppo & Petty, 1982)"
        ],
        definition: "Preference for deliberative, rule-based processing vs. automatic, associative, and intuitive processing in decision-making.",
        keyReferences: [
          "Kahneman, D. (2011). Thinking, fast and slow.",
          "Evans, J. S. B., & Stanovich, K. E. (2013). Dual-process theories of higher cognition.",
          "Frederick, S. (2005). Cognitive reflection and decision making."
        ]
      },
      {
        dimension: "Cautious vs. Bold",
        construct: "Regulatory Focus Theory",
        poles: "Prevention-Focused ↔ Promotion-Focused",
        theoreticalBasis: [
          "Higgins' Regulatory Focus Theory (1997)",
          "Risk Perception and Decision-Making Research",
          "Achievement Motivation Theory"
        ],
        validatedMeasures: [
          "Regulatory Focus Questionnaire (Higgins et al., 2001)",
          "General Regulatory Focus Measure (Lockwood et al., 2002)",
          "Risk Propensity Scale (Meertens & Lion, 2008)"
        ],
        definition: "Orientation toward security, responsibility, and loss prevention vs. growth, accomplishment, and gain achievement.",
        keyReferences: [
          "Higgins, E. T. (1997). Beyond pleasure and pain. American Psychologist, 52(12), 1280-1300.",
          "Lockwood, P., Jordan, C. H., & Kunda, Z. (2002). Motivation by positive or negative role models.",
          "Crowe, E., & Higgins, E. T. (1997). Regulatory focus and strategic inclinations."
        ]
      }
    ]
  },
  {
    level: "Organizational Level",
    description: "Leadership & Management Approaches - Based on organizational behavior and leadership research",
    dimensions: [
      {
        dimension: "Directive vs. Collaborative",
        construct: "Power Distance / Leadership Style",
        poles: "High Power Distance ↔ Low Power Distance",
        theoreticalBasis: [
          "Hofstede's Power Distance Index (2001)",
          "GLOBE Leadership Study (House et al., 2004)",
          "Autocratic vs. Democratic Leadership Theory"
        ],
        validatedMeasures: [
          "GLOBE Leadership Scales",
          "Power Distance Scale (Hofstede, 2001)",
          "Leader Behavior Description Questionnaire (LBDQ)"
        ],
        definition: "Acceptance of unequal power distribution and hierarchical decision-making vs. preference for equality and participative leadership.",
        keyReferences: [
          "House, R. J., et al. (2004). Culture, leadership, and organizations: The GLOBE study of 62 societies.",
          "Hofstede, G. (2001). Culture's consequences: Comparing values, behaviors, institutions (2nd ed.).",
          "Yukl, G. (2010). Leadership in organizations (7th ed.)."
        ]
      },
      {
        dimension: "Task-Focused vs. People-Focused",
        construct: "Leadership Orientation / Ohio State Studies",
        poles: "Initiating Structure ↔ Consideration",
        theoreticalBasis: [
          "Ohio State Leadership Studies (Stogdill, 1974)",
          "Blake & Mouton's Managerial Grid (1964)",
          "Task vs. Relationship Leadership Theory"
        ],
        validatedMeasures: [
          "Leader Behavior Description Questionnaire (LBDQ)",
          "Leadership Opinion Questionnaire (LOQ)",
          "Managerial Grid Assessment"
        ],
        definition: "Focus on goal achievement, performance, and task completion vs. emphasis on team cohesion, relationships, and employee well-being.",
        keyReferences: [
          "Stogdill, R. M. (1974). Handbook of leadership: A survey of theory and research.",
          "Blake, R. R., & Mouton, J. S. (1964). The Managerial Grid.",
          "Judge, T. A., Piccolo, R. F., & Ilies, R. (2004). The forgotten ones? Meta-analysis of consideration and initiating structure."
        ]
      },
      {
        dimension: "Structured vs. Flexible",
        construct: "Organizational Control vs. Flexibility",
        poles: "Control/Stability ↔ Flexibility/Adaptability",
        theoreticalBasis: [
          "Quinn & Rohrbaugh's Competing Values Framework (1983)",
          "Burns & Stalker's Mechanistic vs. Organic (1961)",
          "Organizational Ambidexterity Theory"
        ],
        validatedMeasures: [
          "Organizational Culture Assessment Instrument (OCAI)",
          "Competing Values Framework Survey",
          "Organizational Flexibility Scale"
        ],
        definition: "Emphasis on predictability, efficiency, and standardized processes vs. innovation, responsiveness, and adaptive capabilities.",
        keyReferences: [
          "Quinn, R. E., & Rohrbaugh, J. (1983). A spatial model of effectiveness criteria.",
          "Burns, T., & Stalker, G. M. (1961). The management of innovation.",
          "Cameron, K. S., & Quinn, R. E. (2011). Diagnosing and changing organizational culture (3rd ed.)."
        ]
      }
    ]
  },
  {
    level: "Societal Level",
    description: "Cultural & Ideological Orientations - Based on cross-cultural psychology and political science",
    dimensions: [
      {
        dimension: "Individual Rights vs. Collective Good",
        construct: "Individualism-Collectivism / Social Organization",
        poles: "Individual Autonomy ↔ Collective Harmony",
        theoreticalBasis: [
          "Triandis' Individualism-Collectivism (1995)",
          "World Values Survey Research",
          "Political Philosophy: Liberalism vs. Communitarianism"
        ],
        validatedMeasures: [
          "INDCOL Scale (Triandis, 1995)",
          "World Values Survey Items",
          "Cultural Values Scale"
        ],
        definition: "Prioritization of individual rights, freedoms, and personal autonomy vs. group cohesion, consensus, and collective welfare.",
        keyReferences: [
          "Triandis, H. C. (1995). Individualism and collectivism.",
          "Inglehart, R., & Welzel, C. (2005). Modernization, cultural change, and democracy.",
          "Oyserman, D., Coon, H. M., & Kemmelmeier, M. (2002). Rethinking individualism and collectivism."
        ]
      },
      {
        dimension: "Traditional vs. Progressive",
        construct: "Cultural Tightness-Looseness / Value Change",
        poles: "Traditional/Tight ↔ Progressive/Loose",
        theoreticalBasis: [
          "Gelfand's Tightness-Looseness Theory (2011)",
          "Inglehart's Value Change Theory",
          "Cultural Evolution Research"
        ],
        validatedMeasures: [
          "Tightness-Looseness Scale (Gelfand et al., 2011)",
          "Traditional-Secular Values (World Values Survey)",
          "Cultural Change Indicators"
        ],
        definition: "Strength of social norms, tolerance for deviance, and preference for traditional vs. progressive social arrangements.",
        keyReferences: [
          "Gelfand, M. J., et al. (2011). Differences between tight and loose cultures.",
          "Inglehart, R. (1997). Modernization and postmodernization: Cultural, economic, and political change.",
          "Harrington, J. R., & Gelfand, M. J. (2014). Tightness-looseness across the 50 United States."
        ]
      },
      {
        dimension: "Local vs. Global Perspective",
        construct: "Cosmopolitanism / Parochialism-Universalism",
        poles: "Particularistic/Local ↔ Universalistic/Global",
        theoreticalBasis: [
          "Hannerz's Cosmopolitanism Theory (1990)",
          "Beck's Cosmopolitan Realism (2006)",
          "Global Identity Research"
        ],
        validatedMeasures: [
          "Cosmopolitan Orientation Scale",
          "Global Identity Scale",
          "Local-Global Identity Measures"
        ],
        definition: "Identification with local/national community and particularistic values vs. global humanity and universalistic principles.",
        keyReferences: [
          "Hannerz, U. (1990). Cosmopolitans and locals in world culture.",
          "Beck, U. (2006). Cosmopolitan realism: On the distinction between cosmopolitanism in philosophy and the social sciences.",
          "Norris, P. (2000). Global governance and cosmopolitan citizens."
        ]
      }
    ]
  }
];

export const getFoundationByLevel = (level: string): LevelFoundation | undefined => {
  return SCIENTIFIC_FOUNDATIONS.find(f => f.level.toLowerCase().includes(level.toLowerCase()));
};

export const getFoundationByDimension = (dimensionName: string): ScientificFoundation | undefined => {
  for (const level of SCIENTIFIC_FOUNDATIONS) {
    const dimension = level.dimensions.find(d => 
      d.dimension.toLowerCase().includes(dimensionName.toLowerCase())
    );
    if (dimension) return dimension;
  }
  return undefined;
};
