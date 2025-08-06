// src/components/theoretical/TheoreticalFoundations.tsx
import React, { useState } from 'react';
import { SCIENTIFIC_FOUNDATIONS, LevelFoundation, ScientificFoundation } from '../../data/scientificFoundations';

interface TheoreticalFoundationsProps {
  className?: string;
}

const DimensionCard: React.FC<{ dimension: ScientificFoundation }> = ({ dimension }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <h4 className="text-lg font-semibold text-gray-800 mb-2">
          {dimension.dimension}
        </h4>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Construct:</strong> {dimension.construct}
        </p>
        <p className="text-sm text-gray-600 mb-3">
          <strong>Poles:</strong> {dimension.poles}
        </p>
        <p className="text-gray-700 mb-3">{dimension.definition}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-blue-600 hover:text-blue-800">
            {isExpanded ? 'Hide Details' : 'Show Scientific Details'}
          </span>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform ${
              isExpanded ? 'transform rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
          <div>
            <h5 className="font-medium text-gray-800 mb-2">Theoretical Basis</h5>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              {dimension.theoreticalBasis.map((basis, index) => (
                <li key={index}>{basis}</li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-medium text-gray-800 mb-2">Validated Measures</h5>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              {dimension.validatedMeasures.map((measure, index) => (
                <li key={index}>{measure}</li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-medium text-gray-800 mb-2">Key References</h5>
            <div className="text-sm text-gray-600 space-y-1">
              {dimension.keyReferences.map((reference, index) => (
                <p key={index} className="text-xs leading-relaxed">
                  {reference}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const LevelSection: React.FC<{ level: LevelFoundation }> = ({ level }) => {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{level.level}</h2>
        <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
          {level.description}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {level.dimensions.map((dimension, index) => (
          <DimensionCard key={index} dimension={dimension} />
        ))}
      </div>
    </div>
  );
};

const TheoreticalFoundations: React.FC<TheoreticalFoundationsProps> = ({ className = '' }) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${className}`}>
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Scientific Foundations
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          The Multidimensional Leadership Cube is grounded in established psychological, 
          organizational, and cultural research. Each dimension is based on validated 
          theoretical constructs and measurement instruments from peer-reviewed scientific literature.
        </p>
      </div>

      <div className="space-y-16">
        {SCIENTIFIC_FOUNDATIONS.map((level, index) => (
          <LevelSection key={index} level={level} />
        ))}
      </div>

      <div className="mt-16 bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Why Scientific Grounding Matters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h3 className="font-semibold mb-2">Validity & Reliability</h3>
            <p className="text-sm leading-relaxed">
              Each dimension is based on extensively validated psychological and organizational 
              constructs, ensuring the framework measures what it claims to measure.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Cross-Cultural Applicability</h3>
            <p className="text-sm leading-relaxed">
              The underlying theories have been tested across diverse cultures and contexts, 
              making the framework globally applicable while respecting cultural differences.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Empirical Foundation</h3>
            <p className="text-sm leading-relaxed">
              Rather than intuitive categories, each dimension emerges from decades of 
              empirical research and factor analysis of human behavior patterns.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Practical Utility</h3>
            <p className="text-sm leading-relaxed">
              The scientific foundation enables practical applications in assessment, 
              development, and organizational design with confidence in the results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheoreticalFoundations;
