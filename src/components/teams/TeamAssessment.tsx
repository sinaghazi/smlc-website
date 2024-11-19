import React, { useState, useMemo } from 'react';
import { Users, Target, ArrowRight, Play, BarChart3, LucideIcon } from 'lucide-react';
import {
  TEAM_CONSTRAINTS,
  AXIS_CONFIG,
  ASSESSMENT_STEPS,
  ACTION_RECOMMENDATIONS,
  STYLE_CONFIG,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  type TeamMember,
  validators
} from './constants';

interface Step {
  title: string;
  icon: LucideIcon;
  description: string;
  content: React.ReactNode;
}

// Helper Functions
const getTeamOrientation = (members: TeamMember[]): string => {
  if (members.length === 0) return "N/A";

  const avgX = members.reduce((sum, m) => sum + m.position.x, 0) / members.length;
  const avgY = members.reduce((sum, m) => sum + m.position.y, 0) / members.length;
  const avgZ = members.reduce((sum, m) => sum + m.position.z, 0) / members.length;

  const orientations = [];
  if (Math.abs(avgX) > 0.3) orientations.push(avgX > 0 ? "Individual-focused" : "Collective-focused");
  if (Math.abs(avgY) > 0.3) orientations.push(avgY > 0 ? "Rational-leaning" : "Emotional-leaning");
  if (Math.abs(avgZ) > 0.3) orientations.push(avgZ > 0 ? "Risk-taking" : "Risk-averse");

  return orientations.length > 0 ? orientations.join(", ") : "Balanced";
};

const getTeamDiversity = (members: TeamMember[]): string => {
  if (members.length < 2) return "N/A";

  const variances = ['x', 'y', 'z'].map(axis => {
    const values = members.map(m => m.position[axis as keyof typeof m.position]);
    const avg = values.reduce((a, b) => a + b, 0) / values.length;
    return values.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / values.length;
  });

  const avgVariance = variances.reduce((a, b) => a + b, 0) / 3;

  if (avgVariance > 0.5) return "High";
  if (avgVariance > 0.2) return "Moderate";
  return "Low";
};

const generateActionItems = (members: TeamMember[]): string[] => {
  if (members.length === 0) return ["Add team members to see recommended actions"];

  const actions = [];
  const orientation = getTeamOrientation(members);
  const diversity = getTeamDiversity(members);

  if (orientation.includes("Individual")) {
    actions.push(ACTION_RECOMMENDATIONS.individual.high);
  }
  if (orientation.includes("Collective")) {
    actions.push(ACTION_RECOMMENDATIONS.individual.low);
  }
  if (orientation.includes("Rational")) {
    actions.push(ACTION_RECOMMENDATIONS.rational.high);
  }
  if (orientation.includes("Emotional")) {
    actions.push(ACTION_RECOMMENDATIONS.rational.low);
  }
  if (orientation.includes("Risk-taking")) {
    actions.push(ACTION_RECOMMENDATIONS.risk.high);
  }
  if (orientation.includes("Risk-averse")) {
    actions.push(ACTION_RECOMMENDATIONS.risk.low);
  }

  if (diversity === "High") {
    actions.push(...ACTION_RECOMMENDATIONS.diversity.high);
  } else if (diversity === "Low") {
    actions.push(...ACTION_RECOMMENDATIONS.diversity.low);
  }

  return actions;
};

export const TeamAssessment: React.FC = () => {
  const [step, setStep] = useState(1);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  // Memoized values
  const teamOrientation = useMemo(() => getTeamOrientation(teamMembers), [teamMembers]);
  const teamDiversity = useMemo(() => getTeamDiversity(teamMembers), [teamMembers]);
  const actionItems = useMemo(() => generateActionItems(teamMembers), [teamMembers]);

  // Handlers
  const handleAddMember = () => {
    if (!validators.isValidTeamSize(teamMembers.length + 1)) {
      alert(ERROR_MESSAGES.MAX_TEAM_SIZE);
      return;
    }

    const newMember: TeamMember = {
      id: `member-${Date.now()}`,
      name: `Team Member ${teamMembers.length + 1}`,
      position: TEAM_CONSTRAINTS.DEFAULT_POSITION
    };
    setTeamMembers([...teamMembers, newMember]);
  };

  const handleRemoveMember = (memberId: string) => {
    setTeamMembers(prev => prev.filter(m => m.id !== memberId));
  };

  const handleUpdatePosition = (memberId: string, axis: keyof TeamMember['position'], value: number) => {
    if (!validators.isValidPosition(value)) return;

    setTeamMembers(prev => prev.map(member =>
        member.id === memberId
            ? { ...member, position: { ...member.position, [axis]: value }}
            : member
    ));
  };

  const steps: Step[] = [
    {
      title: "Team Formation",
      icon: Users,
      description: "Begin by gathering your team members and establishing a safe, open environment for honest discussion.",
      content: (
          <div className={STYLE_CONFIG.containers.card}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Step 1: Team Formation</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-gray-600">Current Team Size: {teamMembers.length}</p>
                </div>
              </div>

              <div className="grid gap-4">
                <button
                    onClick={handleAddMember}
                    disabled={!validators.isValidTeamSize(teamMembers.length + 1)}
                    className={STYLE_CONFIG.buttons.primary}
                >
                  Add Team Member
                </button>
              </div>

              {teamMembers.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Team Members:</h4>
                    <ul className="space-y-2">
                      {teamMembers.map((member) => (
                          <li key={member.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                            <span>{member.name}</span>
                            <button
                                onClick={() => handleRemoveMember(member.id)}
                                className="text-red-600 hover:text-red-700"
                            >
                              Remove
                            </button>
                          </li>
                      ))}
                    </ul>
                  </div>
              )}
            </div>
          </div>
      )
    },
    {
      title: "Individual Assessment",
      icon: Target,
      description: "Each team member evaluates their position within the SMLC framework.",
      content: (
          <div className={STYLE_CONFIG.containers.card}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Step 2: Individual Assessment</h3>
            {teamMembers.map((member) => (
                <div key={member.id} className="mb-6 last:mb-0">
                  <h4 className="font-medium text-gray-900 mb-3">{member.name}</h4>
                  <div className="space-y-4">
                    {Object.keys(AXIS_CONFIG).map((axis) => (
                        <div key={axis} className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700">
                            {AXIS_CONFIG[axis as keyof typeof AXIS_CONFIG].label}
                          </label>
                          <input
                              type="range"
                              min="-1"
                              max="1"
                              step="0.1"
                              value={member.position[axis as keyof typeof member.position]}
                              onChange={(e) => handleUpdatePosition(
                                  member.id,
                                  axis as keyof TeamMember['position'],
                                  parseFloat(e.target.value)
                              )}
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                          />
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>{AXIS_CONFIG[axis as keyof typeof AXIS_CONFIG].min}</span>
                            <span>{AXIS_CONFIG[axis as keyof typeof AXIS_CONFIG].max}</span>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
            ))}
          </div>
      )
    },
    {
      title: "Team Analysis",
      icon: BarChart3,
      description: "Analyze team composition and identify areas for synergy.",
      content: (
          <div className={STYLE_CONFIG.containers.card}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Step 3: Team Analysis</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Team Composition Summary</h4>
                <div className="space-y-4">
                  {Object.keys(AXIS_CONFIG).map((axis) => {
                    const values = teamMembers.map(m => m.position[axis as keyof typeof m.position]);
                    const avg = values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
                    const variance = values.length ? values.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / values.length : 0;

                    return (
                        <div key={axis} className="space-y-2">
                          <h5 className="text-sm font-medium text-gray-700">
                            {AXIS_CONFIG[axis as keyof typeof AXIS_CONFIG].label}
                          </h5>
                          <div className="flex items-center gap-4">
                            <div className="flex-grow bg-gray-200 h-2 rounded-full">
                              <div
                                  className="bg-indigo-600 h-full rounded-full"
                                  style={{
                                    width: `${((avg + 1) / 2) * 100}%`
                                  }}
                              />
                            </div>
                            <span className="text-sm text-gray-600">
                          {avg.toFixed(2)}
                        </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            Diversity: {Math.sqrt(variance).toFixed(2)}
                          </p>
                        </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Insights</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {teamMembers.length > 0 ? (
                      <>
                        <li>• Team size: {teamMembers.length} members</li>
                        <li>• Primary orientation: {teamOrientation}</li>
                        <li>• Diversity level: {teamDiversity}</li>
                      </>
                  ) : (
                      <li>Add team members to see insights</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
      )
    },
    {
      title: "Action Plan",
      icon: Play,
      description: "Develop concrete steps to leverage team diversity and improve collaboration.",
      content: (
          <div className={STYLE_CONFIG.containers.card}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Step 4: Action Plan</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Recommended Actions</h4>
                <ul className="space-y-3">
                  {actionItems.map((action, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <ArrowRight className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{action}</span>
                      </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Next Steps</h4>
                <ul className="space-y-3">
                  {ASSESSMENT_STEPS.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <ArrowRight className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{step.description}</span>
                      </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
      )
    }
  ];

  return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Progress Steps */}
          <div className="relative">
            {/* Progress Bar */}
            <div className={STYLE_CONFIG.progress.bar}>
              <div
                  className={STYLE_CONFIG.progress.fill}
                  style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {/* Step Indicators */}
            <div className="relative flex justify-between">
              {steps.map((s, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <button
                        onClick={() => setStep(index + 1)}
                        disabled={teamMembers.length === 0 && index > 0}
                        className={`
                    relative z-10 flex items-center justify-center w-10 h-10 rounded-full 
                    transition-all duration-300 
                    ${step >= index + 1
                            ? STYLE_CONFIG.steps.active
                            : STYLE_CONFIG.steps.inactive}
                    ${teamMembers.length === 0 && index > 0
                            ? STYLE_CONFIG.steps.disabled
                            : STYLE_CONFIG.steps.hover}
                  `}
                        aria-label={`Go to step ${index + 1}: ${s.title}`}
                    >
                      <s.icon className="w-5 h-5" />
                    </button>
                    <span className={`
                  mt-2 text-sm font-medium 
                  ${step >= index + 1 ? 'text-indigo-600' : 'text-gray-500'}
                `}>
                  {s.title}
                </span>
                  </div>
              ))}
            </div>
          </div>

          {/* Current Step Description */}
          <div className="text-center">
            <p className="text-gray-600">
              {steps[step - 1].description}
            </p>
          </div>

          {/* Step Content */}
          <div className="transition-all duration-300">
            {steps[step - 1].content}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <button
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
                className={`
              ${STYLE_CONFIG.buttons.secondary}
              ${step === 1 ? STYLE_CONFIG.buttons.disabled : ''}
            `}
                aria-label="Previous step"
            >
              Previous
            </button>

            <button
                onClick={() => setStep(Math.min(steps.length, step + 1))}
                disabled={teamMembers.length === 0 || step === steps.length}
                className={`
              ${STYLE_CONFIG.buttons.primary}
              ${teamMembers.length === 0 || step === steps.length
                    ? STYLE_CONFIG.buttons.disabled
                    : ''}
            `}
                aria-label={step === steps.length ? 'Complete assessment' : 'Next step'}
            >
              {step === steps.length ? 'Complete' : 'Next'}
            </button>
          </div>

          {/* Completion Message */}
          {step === steps.length && (
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-center text-green-800">
                  {SUCCESS_MESSAGES.ASSESSMENT_COMPLETE}
                </p>
              </div>
          )}
        </div>
      </div>
  );
};

export default TeamAssessment;
