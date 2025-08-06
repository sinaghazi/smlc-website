// src/components/validation/ValidationFeedback.tsx
import React, { useState } from 'react';
import { Send, CheckCircle, Star } from 'lucide-react';

interface FeedbackData {
  participantId: string;
  assessmentExperience: number;
  frameworkClarity: number;
  practicalRelevance: number;
  culturalApplicability: number;
  overallSatisfaction: number;
  mostValueable: string;
  improvements: string;
  additionalComments: string;
  participantType: 'individual' | 'organization' | 'researcher';
  industry?: string;
  location: string;
  experienceLevel: 'novice' | 'intermediate' | 'expert';
}

const ValidationFeedback: React.FC = () => {
  const [feedback, setFeedback] = useState<Partial<FeedbackData>>({
    participantType: 'individual',
    experienceLevel: 'intermediate'
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = [
    'Experience Ratings',
    'Open Feedback', 
    'Background Info',
    'Review & Submit'
  ];

  const handleRatingChange = (field: string, value: number) => {
    setFeedback({ ...feedback, [field]: value });
  };

  const handleInputChange = (field: string, value: string) => {
    setFeedback({ ...feedback, [field]: value });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submitFeedback = () => {
    // In a real implementation, this would send to a backend service
    console.log('Submitting feedback:', feedback);
    setIsSubmitted(true);
    
    // Save to localStorage for demo purposes
    const existingFeedback = JSON.parse(localStorage.getItem('smlc-feedback') || '[]');
    existingFeedback.push({ ...feedback, submittedAt: new Date().toISOString() });
    localStorage.setItem('smlc-feedback', JSON.stringify(existingFeedback));
  };

  const StarRating = ({ value, onChange, label }: { value: number; onChange: (v: number) => void; label: string }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className={`p-1 ${value >= star ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-400 transition-colors`}
          >
            <Star className="w-6 h-6 fill-current" />
          </button>
        ))}
      </div>
      <div className="text-xs text-gray-500 mt-1">
        {value === 0 ? 'Not rated' : `${value}/5 stars`}
      </div>
    </div>
  );

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
          <p className="text-gray-600 mb-6">
            Your feedback has been submitted and will help us improve the SMLC framework.
            We greatly appreciate your contribution to our research validation process.
          </p>
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-900 mb-2">Next Steps</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• We may contact you for follow-up studies (if you provided contact info)</li>
              <li>• Results will be shared in our research publications</li>
              <li>• You're welcome to share the framework with others</li>
            </ul>
          </div>
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">SMLC Framework Validation</h1>
          <p className="text-gray-600">
            Help us validate and improve the SMLC framework by sharing your experience and insights.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            {steps.map((step, index) => (
              <span key={index} className={`${index === currentStep ? 'text-blue-600 font-medium' : ''}`}>
                {step}
              </span>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="min-h-96">
          {currentStep === 0 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6">Rate Your Experience</h2>
              <div className="space-y-6">
                <StarRating 
                  value={feedback.assessmentExperience || 0}
                  onChange={(v) => handleRatingChange('assessmentExperience', v)}
                  label="How was your assessment experience?"
                />
                <StarRating 
                  value={feedback.frameworkClarity || 0}
                  onChange={(v) => handleRatingChange('frameworkClarity', v)}
                  label="How clear and understandable was the framework?"
                />
                <StarRating 
                  value={feedback.practicalRelevance || 0}
                  onChange={(v) => handleRatingChange('practicalRelevance', v)}
                  label="How relevant is this framework to your work/life?"
                />
                <StarRating 
                  value={feedback.culturalApplicability || 0}
                  onChange={(v) => handleRatingChange('culturalApplicability', v)}
                  label="How well does this apply across different cultures?"
                />
                <StarRating 
                  value={feedback.overallSatisfaction || 0}
                  onChange={(v) => handleRatingChange('overallSatisfaction', v)}
                  label="Overall satisfaction with SMLC framework"
                />
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6">Tell Us More</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What was most valuable about the SMLC framework?
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={4}
                    value={feedback.mostValueable || ''}
                    onChange={(e) => handleInputChange('mostValueable', e.target.value)}
                    placeholder="Describe what you found most useful or insightful..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What could be improved?
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={4}
                    value={feedback.improvements || ''}
                    onChange={(e) => handleInputChange('improvements', e.target.value)}
                    placeholder="Suggestions for improvements, additional features, etc..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Comments
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                    value={feedback.additionalComments || ''}
                    onChange={(e) => handleInputChange('additionalComments', e.target.value)}
                    placeholder="Any other thoughts or feedback..."
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6">Background Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Participant Type</label>
                  <select
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    value={feedback.participantType || 'individual'}
                    onChange={(e) => handleInputChange('participantType', e.target.value)}
                  >
                    <option value="individual">Individual Learner</option>
                    <option value="organization">Organizational Representative</option>
                    <option value="researcher">Academic/Researcher</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                  <select
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    value={feedback.experienceLevel || 'intermediate'}
                    onChange={(e) => handleInputChange('experienceLevel', e.target.value)}
                  >
                    <option value="novice">Novice (0-2 years)</option>
                    <option value="intermediate">Intermediate (3-10 years)</option>
                    <option value="expert">Expert (10+ years)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry (Optional)</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    value={feedback.industry || ''}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    placeholder="e.g., Technology, Healthcare, Education..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    value={feedback.location || ''}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="Country or region..."
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6">Review Your Feedback</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Ratings Summary</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>Assessment Experience: {feedback.assessmentExperience || 0}/5</div>
                    <div>Framework Clarity: {feedback.frameworkClarity || 0}/5</div>
                    <div>Practical Relevance: {feedback.practicalRelevance || 0}/5</div>
                    <div>Cultural Applicability: {feedback.culturalApplicability || 0}/5</div>
                    <div>Overall Satisfaction: {feedback.overallSatisfaction || 0}/5</div>
                  </div>
                </div>
                {feedback.mostValueable && (
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Most Valuable</h3>
                    <p className="text-blue-800 text-sm">{feedback.mostValueable}</p>
                  </div>
                )}
                {feedback.improvements && (
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-900 mb-2">Suggested Improvements</h3>
                    <p className="text-yellow-800 text-sm">{feedback.improvements}</p>
                  </div>
                )}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Background</h3>
                  <div className="text-sm text-gray-600">
                    Type: {feedback.participantType} | Level: {feedback.experienceLevel} | Location: {feedback.location || 'Not specified'}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={previousStep}
            disabled={currentStep === 0}
            className={`px-6 py-2 rounded-lg transition-colors ${
              currentStep === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
          >
            Previous
          </button>
          
          {currentStep < steps.length - 1 ? (
            <button
              onClick={nextStep}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Next
            </button>
          ) : (
            <button
              onClick={submitFeedback}
              className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Submit Feedback</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ValidationFeedback;
