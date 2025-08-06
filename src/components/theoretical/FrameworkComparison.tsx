// src/components/theoretical/FrameworkComparison.tsx
import React, { useState } from 'react';
import { CheckCircle, XCircle, Info } from 'lucide-react';

interface Framework {
  name: string;
  developer: string;
  year: string;
  focus: string;
  dimensions: number;
  levels: string[];
  strengths: string[];
  limitations: string[];
  keyDifference: string;
}

const FrameworkComparison: React.FC = () => {
  const [selectedFramework, setSelectedFramework] = useState<string>('SMLC');

  const frameworks: Framework[] = [
    {
      name: "SMLC (Multidimensional Leadership Cube)",
      developer: "Sina Ghazi",
      year: "2024",
      focus: "Integrated multi-level leadership analysis",
      dimensions: 9,
      levels: ["Personal", "Organizational", "Societal"],
      strengths: [
        "Multi-level integration across personal, organizational, and societal domains",
        "Situational flexibility and adaptability focus",
        "Based on established psychological and organizational constructs",
        "Practical leadership development orientation",
        "Avoids false binaries with continuum-based measurement",
        "Cultural sensitivity with bias-aware design"
      ],
      limitations: [
        "Newer framework requiring empirical validation",
        "Complex multi-level structure may be challenging for some users",
        "Limited normative data currently available"
      ],
      keyDifference: "Only framework integrating personal, organizational, and societal leadership dimensions with flexibility meta-dimension"
    },
    {
      name: "Hofstede's Cultural Dimensions",
      developer: "Geert Hofstede",
      year: "1980",
      focus: "National culture differences",
      dimensions: 6,
      levels: ["National Culture"],
      strengths: [
        "Extensively validated across 76+ countries",
        "Widely used in international business",
        "Large dataset and normative scores",
        "Clear practical applications"
      ],
      limitations: [
        "Limited to national-level culture only",
        "Static view of culture",
        "Western bias in original development",
        "Doesn't address individual leadership styles",
        "Ecological fallacy concerns"
      ],
      keyDifference: "Focuses only on national culture, not individual leadership or organizational dynamics"
    },
    {
      name: "GLOBE Leadership Study",
      developer: "House, Hanges et al.",
      year: "2004",
      focus: "Culture and leadership effectiveness",
      dimensions: 9,
      levels: ["Cultural Values", "Leadership Behaviors"],
      strengths: [
        "Comprehensive 62-society study",
        "Links culture to leadership effectiveness",
        "Multiple leadership dimensions",
        "Strong empirical foundation"
      ],
      limitations: [
        "Complex and difficult to apply practically",
        "Limited individual-level focus",
        "Doesn't integrate personal psychological factors",
        "Static cultural assumptions"
      ],
      keyDifference: "Emphasizes cultural endorsement of leadership rather than individual adaptability"
    },
    {
      name: "Schwartz's Value Theory",
      developer: "Shalom Schwartz",
      year: "1992",
      focus: "Universal human values",
      dimensions: 10,
      levels: ["Individual Values"],
      strengths: [
        "Universal value structure validated globally",
        "Sophisticated theoretical model",
        "Individual-level measurement",
        "Motivational focus"
      ],
      limitations: [
        "Limited to personal values only",
        "Doesn't address organizational or leadership contexts",
        "Abstract concepts may be difficult to apply",
        "No integration with behavioral leadership"
      ],
      keyDifference: "Focuses on universal personal values but lacks leadership and organizational contexts"
    },
    {
      name: "Big Five Leadership",
      developer: "Various researchers",
      year: "1990s",
      focus: "Personality traits in leadership",
      dimensions: 5,
      levels: ["Individual Personality"],
      strengths: [
        "Strong psychometric properties",
        "Extensive validation",
        "Predictive of leadership outcomes",
        "Well-established measurement tools"
      ],
      limitations: [
        "Limited to personality traits only",
        "Doesn't address situational or cultural factors",
        "No organizational or societal dimensions",
        "Static view of leadership capacity"
      ],
      keyDifference: "Focuses on stable personality traits rather than adaptable leadership behaviors across contexts"
    }
  ];

  const selectedFrameworkData = frameworks.find(f => f.name.includes(selectedFramework));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Framework Comparison
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          How the Multidimensional Leadership Cube relates to and differs from 
          existing leadership and cultural frameworks.
        </p>
      </div>

      {/* Framework Selector */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {frameworks.map((framework) => (
            <button
              key={framework.name}
              onClick={() => setSelectedFramework(framework.name.split(' ')[0])}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                framework.name.includes(selectedFramework)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {framework.name.split(' (')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Framework Details */}
      {selectedFrameworkData && (
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {selectedFrameworkData.name}
              </h2>
              <div className="space-y-3">
                <p><strong>Developer:</strong> {selectedFrameworkData.developer}</p>
                <p><strong>Year:</strong> {selectedFrameworkData.year}</p>
                <p><strong>Focus:</strong> {selectedFrameworkData.focus}</p>
                <p><strong>Dimensions:</strong> {selectedFrameworkData.dimensions}</p>
                <p><strong>Levels:</strong> {selectedFrameworkData.levels.join(', ')}</p>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                  <Info className="w-4 h-4 mr-2" />
                  Key Distinguishing Feature
                </h4>
                <p className="text-blue-700 text-sm">{selectedFrameworkData.keyDifference}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Strengths
                </h3>
                <ul className="space-y-2">
                  {selectedFrameworkData.strengths.map((strength, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center">
                  <XCircle className="w-5 h-5 mr-2" />
                  Limitations
                </h3>
                <ul className="space-y-2">
                  {selectedFrameworkData.limitations.map((limitation, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {limitation}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Comparison Table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
        <div className="px-6 py-4 bg-gray-50 border-b">
          <h2 className="text-xl font-bold text-gray-800">Comprehensive Comparison</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Framework
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Personal Level
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Organizational Level
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Societal Level
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Situational Flexibility
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="bg-blue-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  SMLC
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 inline mr-1" />
                  Self-Focus, Analytical, Cautious dimensions
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 inline mr-1" />
                  Directive, Task-Focus, Structured dimensions
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 inline mr-1" />
                  Rights, Traditional, Local dimensions
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 inline mr-1" />
                  Built-in flexibility focus
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Hofstede
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <XCircle className="w-5 h-5 text-red-600 inline mr-1" />
                  National averages only
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <XCircle className="w-5 h-5 text-red-600 inline mr-1" />
                  Limited organizational focus
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 inline mr-1" />
                  Strong cultural dimensions
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <XCircle className="w-5 h-5 text-red-600 inline mr-1" />
                  Static cultural view
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  GLOBE
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <XCircle className="w-5 h-5 text-red-600 inline mr-1" />
                  Limited individual focus
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 inline mr-1" />
                  Leadership behaviors
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 inline mr-1" />
                  Cultural values
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <XCircle className="w-5 h-5 text-red-600 inline mr-1" />
                  Cultural endorsement focus
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Schwartz Values
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 inline mr-1" />
                  Strong personal values
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <XCircle className="w-5 h-5 text-red-600 inline mr-1" />
                  No organizational focus
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <XCircle className="w-5 h-5 text-red-600 inline mr-1" />
                  Limited cultural context
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <XCircle className="w-5 h-5 text-red-600 inline mr-1" />
                  Static value priorities
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SMLC's Unique Value Proposition */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          SMLC's Unique Value Proposition
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-orange-700 mb-3">Multi-Level Integration</h3>
            <p className="text-sm text-gray-700">
              The only framework that systematically integrates personal psychology, 
              organizational behavior, and societal culture in a unified model.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-orange-700 mb-3">Flexibility Focus</h3>
            <p className="text-sm text-gray-700">
              Emphasizes situational adaptability and the ability to flexibly 
              adjust leadership approach based on context and needs.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-orange-700 mb-3">Practical Development</h3>
            <p className="text-sm text-gray-700">
              Designed for leadership development with actionable insights 
              and specific behavioral guidance for growth.
            </p>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-orange-100 rounded-lg">
          <p className="text-orange-800 text-sm">
            <strong>Integration Opportunity:</strong> Rather than replacing existing frameworks, 
            SMLC can complement and integrate insights from established models, providing 
            a more comprehensive leadership development approach.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrameworkComparison;
