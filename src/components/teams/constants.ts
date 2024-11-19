// src/components/teams/constants.ts

import { LucideIcon, Users, Target, BarChart3, Play } from 'lucide-react';

// Team size constraints
export const TEAM_CONSTRAINTS = {
    MIN_MEMBERS: 1,
    MAX_MEMBERS: 10,
    DEFAULT_POSITION: { x: 0, y: 0, z: 0 }
} as const;

// Axis configuration
export const AXIS_CONFIG = {
    x: {
        label: 'Individual vs Collective',
        min: 'Collective',
        max: 'Individual',
        step: 0.1,
        range: { min: -1, max: 1 }
    },
    y: {
        label: 'Emotional vs Rational',
        min: 'Emotional',
        max: 'Rational',
        step: 0.1,
        range: { min: -1, max: 1 }
    },
    z: {
        label: 'Risk-Taking vs Risk-Averse',
        min: 'Risk-Averse',
        max: 'Risk-Taking',
        step: 0.1,
        range: { min: -1, max: 1 }
    }
} as const;

// Team diversity thresholds
export const DIVERSITY_THRESHOLDS = {
    HIGH: 0.5,
    MODERATE: 0.2,
    LOW: 0
} as const;

// Orientation thresholds
export const ORIENTATION_THRESHOLD = 0.3;

// Step configuration
export interface StepConfig {
    id: string;
    title: string;
    icon: LucideIcon;
    description: string;
}

export const ASSESSMENT_STEPS: StepConfig[] = [
    {
        id: 'formation',
        title: 'Team Formation',
        icon: Users,
        description: 'Begin by gathering your team members and establishing a safe, open environment for honest discussion.'
    },
    {
        id: 'assessment',
        title: 'Individual Assessment',
        icon: Target,
        description: 'Each team member evaluates their position within the SMLC framework.'
    },
    {
        id: 'analysis',
        title: 'Team Analysis',
        icon: BarChart3,
        description: 'Analyze team composition and identify areas for synergy.'
    },
    {
        id: 'action',
        title: 'Action Plan',
        icon: Play,
        description: 'Develop concrete steps to leverage team diversity and improve collaboration.'
    }
] as const;

// Action recommendations based on team orientation
export const ACTION_RECOMMENDATIONS = {
    individual: {
        high: 'Foster more collaborative decision-making processes',
        low: 'Create opportunities for individual contribution and recognition'
    },
    rational: {
        high: 'Incorporate emotional intelligence in team discussions',
        low: 'Implement structured decision-making frameworks'
    },
    risk: {
        high: 'Establish risk assessment protocols',
        low: 'Create safe spaces for experimentation and innovation'
    },
    diversity: {
        high: [
            'Leverage team diversity through cross-functional projects',
            'Establish clear communication channels to bridge differences'
        ],
        low: [
            'Seek diverse perspectives in decision-making',
            'Consider adding team members with complementary styles'
        ]
    }
} as const;

// CSS class configurations
export const STYLE_CONFIG = {
    buttons: {
        primary: 'px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors',
        secondary: 'px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors',
        disabled: 'px-4 py-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed'
    },
    steps: {
        active: 'bg-indigo-600 text-white shadow-lg',
        inactive: 'bg-white border-2 border-gray-300 text-gray-500',
        disabled: 'opacity-50 cursor-not-allowed',
        hover: 'hover:scale-110'
    },
    containers: {
        card: 'bg-white p-6 rounded-lg shadow-lg',
        section: 'space-y-4'
    },
    progress: {
        bar: 'h-0.5 bg-gray-200',
        fill: 'h-full bg-indigo-600 transition-all duration-300'
    }
} as const;

// Error messages
export const ERROR_MESSAGES = {
    MAX_TEAM_SIZE: `Maximum team size of ${TEAM_CONSTRAINTS.MAX_MEMBERS} reached`,
    MIN_TEAM_SIZE: `Minimum team size of ${TEAM_CONSTRAINTS.MIN_MEMBERS} required`,
    INVALID_POSITION: 'Invalid position value provided',
    GENERAL_ERROR: 'An error occurred. Please try again.'
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
    MEMBER_ADDED: 'Team member added successfully',
    MEMBER_REMOVED: 'Team member removed successfully',
    ASSESSMENT_COMPLETE: 'Team assessment complete! You can now proceed with implementing the action plan.'
} as const;

// Types for team assessment
export interface TeamMember {
    id: string;
    name: string;
    position: {
        x: number;
        y: number;
        z: number;
    };
}

export interface TeamAnalysis {
    orientation: string;
    diversity: 'High' | 'Moderate' | 'Low' | 'N/A';
    recommendations: string[];
}

// Helper type for axis keys
export type AxisKey = keyof typeof AXIS_CONFIG;

// Validator functions
export const validators = {
    isValidTeamSize: (size: number) =>
        size >= TEAM_CONSTRAINTS.MIN_MEMBERS && size <= TEAM_CONSTRAINTS.MAX_MEMBERS,

    isValidPosition: (value: number) =>
        value >= -1 && value <= 1,

    isValidStep: (step: number) =>
        step >= 1 && step <= ASSESSMENT_STEPS.length
};
