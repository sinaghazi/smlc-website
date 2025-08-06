// src/components/assessment/InteractiveAssessment.tsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BarChart3, Save, RotateCcw } from 'lucide-react';

interface AssessmentQuestion {
  id: string;
  level: 'personal' | 'organizational' | 'societal';
  dimension: string;
  question: string;
  leftAnchor: string;
  rightAnchor: string;
  situationalNote?: string;
}

interface AssessmentResult {
  level: string;
  dimension: string;
  score: number;
  position: string;
}

const InteractiveAssessment: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<{ [key: string]: number }>({});
  const [showResults, setShowResults] = useState(false);

  // Assessment questions based on the scientific framework
  const questions: AssessmentQuestion[] = [
    // Personal Level Questions
    {
      id: 'personal_x_1',
      level: 'personal',
      dimension: 'Self-Focus vs. Others-Focus',
      question: 'When making important decisions, I primarily consider:',
      leftAnchor: 'My own goals and preferences',
      rightAnchor: 'How it affects my team/community',
      situationalNote: 'Think about your general tendency across different situations.'
    },
    {
      id: 'personal_y_1',
      level: 'personal',
      dimension: 'Analytical vs. Intuitive',
      question: 'When solving complex problems, I tend to:',
      leftAnchor: 'Use systematic analysis and data',
      rightAnchor: 'Rely on intuition and gut feelings',
      situationalNote: 'Consider your natural first approach to problem-solving.'
    },
    {
      id: 'personal_z_1',
      level: 'personal',
      dimension: 'Cautious vs. Bold',
      question: 'In uncertain situations, I typically:',
      leftAnchor: 'Focus on preventing potential losses',
      rightAnchor: 'Focus on potential gains and opportunities',
      situationalNote: 'Think about your risk orientation in leadership situations.'
    },

    // Organizational Level Questions
    {
      id: 'org_x_1',
      level: 'organizational',
      dimension: 'Directive vs. Collaborative',
      question: 'When leading a team, I prefer to:',
      leftAnchor: 'Make decisions and direct action',
      rightAnchor: 'Facilitate group decision-making',
      situationalNote: 'Consider your preferred leadership style in most situations.'
    },
    {
      id: 'org_y_1',
      level: 'organizational',
      dimension: 'Task-Focused vs. People-Focused',
      question: 'As a leader, I prioritize:',
      leftAnchor: 'Achieving goals and deliverables',
      rightAnchor: 'Team harmony and development',
      situationalNote: 'Think about where you naturally place your attention.'
    },
    {
      id: 'org_z_1',
      level: 'organizational',
      dimension: 'Structured vs. Flexible',
      question: 'I believe effective organizations should be:',
      leftAnchor: 'Well-structured with clear processes',
      rightAnchor: 'Adaptable and responsive to change',
      situationalNote: 'Consider your philosophy about organizational design.'
    },

    // Societal Level Questions
    {
      id: 'societal_x_1',
      level: 'societal',
      dimension: 'Individual Rights vs. Collective Good',
      question: 'Society functions best when it emphasizes:',
      leftAnchor: 'Individual freedom and rights',
      rightAnchor: 'Collective welfare and harmony',
      situationalNote: 'Think about your fundamental social values.'
    },
    {
      id: 'societal_y_1',
      level: 'societal',
      dimension: 'Traditional vs. Progressive',
      question: 'I believe social change should be:',
      leftAnchor: 'Gradual, preserving traditions',
      rightAnchor: 'Progressive, embracing innovation',
      situationalNote: 'Consider your attitude toward societal transformation.'
    },
    {
      id: 'societal_z_1',
      level: 'societal',
      dimension: 'Local vs. Global Perspective',
      question: 'When addressing challenges, I focus on:',
      leftAnchor: 'Local community needs',
      rightAnchor: 'Global human concerns',
      situationalNote: 'Think about the scope of your typical concerns.'
    }
  ];

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleResponse = (value: number) => {
    setResponses({
      ...responses,
      [currentQ.id]: value
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setResponses({});
    setShowResults(false);
  };

  const calculateResults = (): AssessmentResult[] => {
    const results: AssessmentResult[] = [];
    
    // Group responses by level and dimension
    const dimensionMap: { [key: string]: string } = {
      'personal_x': 'Self-Focus vs. Others-Focus',
      'personal_y': 'Analytical vs. Intuitive', 
      'personal_z': 'Cautious vs. Bold',
      'org_x': 'Directive vs. Collaborative',
      'org_y': 'Task-Focused vs. People-Focused',
      'org_z': 'Structured vs. Flexible',
      'societal_x': 'Individual Rights vs. Collective Good',
      'societal_y': 'Traditional vs. Progressive',
      'societal_z': 'Local vs. Global Perspective'
    };

    Object.entries(dimensionMap).forEach(([key, dimension]) => {
      const responseKey = `${key}_1`;
      const score = responses[responseKey] || 0;
      const normalizedScore = (score - 4) / 3; // Convert 1-7 to -1 to 1
      
      const level = key.includes('personal') ? 'Personal' : 
                   key.includes('org') ? 'Organizational' : 'Societal';
      
      let position = '';
      if (normalizedScore < -0.33) {
        position = dimension.split(' vs. ')[0] + ' oriented';
      } else if (normalizedScore > 0.33) {
        position = dimension.split(' vs. ')[1] + ' oriented';
      } else {
        position = 'Balanced';
      }

      results.push({
        level,
        dimension,
        score: normalizedScore,
        position
      });
    });

    return results;
  };

  const getScoreColor = (score: number): string => {
    const absScore = Math.abs(score);
    if (absScore < 0.33) return 'bg-green-500';
    if (absScore < 0.66) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  if (showResults) {
    const results = calculateResults();
    
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Your SMLC Assessment Results
            </h1>
            <p className="text-gray-600">
              Based on your responses, here's your position across the three levels of leadership
            </p>
          </div>

          <div className="space-y-8">
            {['Personal', 'Organizational', 'Societal'].map((level) => (
              <div key={level} className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">{level} Level</h2>
                <div className="space-y-4">
                  {results.filter(r => r.level === level).map((result, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium text-gray-800">{result.dimension}</h3>
                        <span className={`px-3 py-1 rounded-full text-white text-sm ${getScoreColor(result.score)}`}>
                          {result.position}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                          style={{ 
                            width: `${Math.abs(result.score) * 50}%`,
                            marginLeft: result.score < 0 ? `${50 + result.score * 50}%` : '50%'
                          }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>{result.dimension.split(' vs. ')[0]}</span>
                        <span>Balanced</span>
                        <span>{result.dimension.split(' vs. ')[1]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={resetAssessment}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Assessment</span>
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Save className="w-4 h-4" />
              <span>Save Results</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-2">
              {currentQ.level.charAt(0).toUpperCase() + currentQ.level.slice(1)} Level
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentQ.question}</h2>
            {currentQ.situationalNote && (
              <p className="text-gray-600 text-sm italic">{currentQ.situationalNote}</p>
            )}
          </div>

          {/* Response Scale */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex justify-between text-sm text-gray-700 mb-4">
              <span className="font-medium">{currentQ.leftAnchor}</span>
              <span className="font-medium">{currentQ.rightAnchor}</span>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3, 4, 5, 6, 7].map((value) => (
                <button
                  key={value}
                  onClick={() => handleResponse(value)}
                  className={`w-12 h-12 rounded-full border-2 font-semibold transition-all ${
                    responses[currentQ.id] === value
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
            
            <div className="flex justify-between text-xs text-gray-500">
              <span>Strongly {currentQ.leftAnchor.toLowerCase()}</span>
              <span>Neutral</span>
              <span>Strongly {currentQ.rightAnchor.toLowerCase()}</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={previousQuestion}
            disabled={currentQuestion === 0}
            className={`flex items-center space-x-2 px-6 py-2 rounded-lg transition-colors ${
              currentQuestion === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          <button
            onClick={nextQuestion}
            disabled={!responses[currentQ.id]}
            className={`flex items-center space-x-2 px-6 py-2 rounded-lg transition-colors ${
              !responses[currentQ.id]
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <span>{currentQuestion === questions.length - 1 ? 'View Results' : 'Next'}</span>
            {currentQuestion === questions.length - 1 ? (
              <BarChart3 className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveAssessment;
