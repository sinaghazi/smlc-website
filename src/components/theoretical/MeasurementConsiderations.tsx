// src/components/theoretical/MeasurementConsiderations.tsx
import React from 'react';
import { AlertTriangle, CheckCircle, Info, Globe } from 'lucide-react';

interface ConsiderationCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  considerations: string[];
  iconColor: string;
}

const ConsiderationCard: React.FC<ConsiderationCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  considerations, 
  iconColor 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 p-2 rounded-lg ${iconColor}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <ul className="space-y-2">
            {considerations.map((consideration, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm text-gray-700">{consideration}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const MeasurementConsiderations: React.FC = () => {
  const considerations = [
    {
      icon: AlertTriangle,
      iconColor: "bg-yellow-500",
      title: "Avoiding False Binaries",
      description: "Leadership dimensions exist on continua, not as binary oppositions. Effective measurement must capture the nuanced, situational nature of leadership behaviors.",
      considerations: [
        "Frame all dimensions as continuous scales rather than either/or choices",
        "Include situational context in assessments (e.g., 'In crisis situations, I tend to...')",
        "Allow for flexibility ratings indicating adaptability across situations",
        "Consider adding a 'situational adaptability' meta-dimension",
        "Use 7-point Likert scales to capture nuanced positions"
      ]
    },
    {
      icon: Globe,
      iconColor: "bg-blue-500",
      title: "Cultural Validity & Bias",
      description: "Leadership concepts must be meaningful and valid across diverse cultural contexts while avoiding Western-centric assumptions.",
      considerations: [
        "Test measurement invariance across different cultural groups",
        "Include diverse perspectives in item development and validation",
        "Avoid culturally loaded language (e.g., 'Individual Rights vs. Collective Good' rather than 'Individualism vs. Collectivism')",
        "Provide cultural context adjustments and explanations",
        "Consider emic (culture-specific) vs. etic (universal) aspects of each dimension"
      ]
    },
    {
      icon: CheckCircle,
      iconColor: "bg-green-500",
      title: "Reliability & Validity",
      description: "Measurements must be psychometrically sound with established reliability and construct validity evidence.",
      considerations: [
        "Achieve minimum Cronbach's alpha of 0.70 for internal consistency",
        "Conduct exploratory and confirmatory factor analysis",
        "Establish convergent validity with existing validated measures",
        "Test discriminant validity between dimensions",
        "Include attention checks and reverse-coded items to detect response bias"
      ]
    },
    {
      icon: Info,
      iconColor: "bg-purple-500",
      title: "Practical Implementation",
      description: "Assessment tools must balance scientific rigor with user experience and practical utility.",
      considerations: [
        "Keep assessments concise (ideally 15-20 minutes maximum)",
        "Provide immediate, actionable feedback with development suggestions",
        "Include confidence intervals and measurement error information",
        "Offer both comprehensive and brief assessment options",
        "Enable progress tracking and reassessment over time"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Measurement Considerations
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Developing scientifically sound and culturally sensitive measurement approaches 
          for the Multidimensional Leadership Cube framework.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {considerations.map((consideration, index) => (
          <ConsiderationCard
            key={index}
            icon={consideration.icon}
            iconColor={consideration.iconColor}
            title={consideration.title}
            description={consideration.description}
            considerations={consideration.considerations}
          />
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Recommended Assessment Framework
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-3">Quick Assessment</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• 27 items (3 per dimension)</li>
              <li>• 7-point Likert scales</li>
              <li>• 5-7 minutes completion time</li>
              <li>• Basic position mapping</li>
              <li>• Suitable for initial exploration</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-blue-200">
            <h3 className="font-semibold text-gray-800 mb-3">Comprehensive Assessment</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• 81 items (9 per dimension)</li>
              <li>• Situational scenarios included</li>
              <li>• 15-20 minutes completion time</li>
              <li>• Detailed analysis and recommendations</li>
              <li>• Confidence intervals provided</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-3">360° Assessment</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Multi-rater perspectives</li>
              <li>• Self vs. others comparison</li>
              <li>• Blind spot identification</li>
              <li>• Team dynamic analysis</li>
              <li>• Professional development focus</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-blue-100 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">Development Roadmap</h4>
          <p className="text-blue-700 text-sm">
            Phase 1: Implement Quick Assessment with basic validation • 
            Phase 2: Develop Comprehensive Assessment with situational items • 
            Phase 3: Create 360° Assessment for organizational use • 
            Phase 4: Cross-cultural validation and normative data collection
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeasurementConsiderations;
