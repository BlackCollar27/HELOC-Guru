import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, DollarSign, Target, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

interface SurveyPageProps {
  onNavigate: (page: string) => void;
}

export function SurveyPage({ onNavigate }: SurveyPageProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    homeValue: '',
    mortgageBalance: '',
    creditScore: '',
    propertyType: '',
    useOfFunds: '',
    timeframe: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Final step - navigate to partners
      onNavigate('partners');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600" style={{ fontWeight: 600 }}>
              Step {step} of {totalSteps}
            </span>
            <span className="text-sm text-gray-600" style={{ fontWeight: 600 }}>
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-600 to-blue-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <Step1
                key="step1"
                formData={formData}
                updateFormData={updateFormData}
                onNext={handleNext}
              />
            )}
            {step === 2 && (
              <Step2
                key="step2"
                formData={formData}
                updateFormData={updateFormData}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            {step === 3 && (
              <Step3
                key="step3"
                formData={formData}
                updateFormData={updateFormData}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            {step === 4 && (
              <Step4
                key="step4"
                formData={formData}
                updateFormData={updateFormData}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

interface StepProps {
  formData: any;
  updateFormData: (field: string, value: string) => void;
  onNext: () => void;
  onBack?: () => void;
}

function Step1({ formData, updateFormData, onNext }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
          <Home className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
          Tell Us About Your Home
        </h2>
      </div>

      <p className="text-lg text-gray-600 mb-8">
        First, let's understand your property details
      </p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 600 }}>
            Estimated Home Value *
          </label>
          <input
            type="number"
            value={formData.homeValue}
            onChange={(e) => updateFormData('homeValue', e.target.value)}
            placeholder="$500,000"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-lg"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 600 }}>
            Remaining Mortgage Balance *
          </label>
          <input
            type="number"
            value={formData.mortgageBalance}
            onChange={(e) => updateFormData('mortgageBalance', e.target.value)}
            placeholder="$250,000"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-lg"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 600 }}>
            Property Type *
          </label>
          <div className="grid grid-cols-2 gap-4">
            {['Single Family', 'Condo', 'Townhouse', 'Multi-Family'].map((type) => (
              <motion.button
                key={type}
                type="button"
                onClick={() => updateFormData('propertyType', type)}
                className={`px-4 py-3 rounded-xl border-2 transition-all ${
                  formData.propertyType === type
                    ? 'border-purple-600 bg-purple-50 text-purple-900'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ fontWeight: formData.propertyType === type ? 600 : 500 }}
              >
                {formData.propertyType === type && <CheckCircle2 className="w-5 h-5 text-purple-600 inline-block mr-2" />}
                {type}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <motion.button
        onClick={onNext}
        disabled={!formData.homeValue || !formData.mortgageBalance || !formData.propertyType}
        className="w-full mt-8 px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        whileHover={{ scale: formData.homeValue && formData.mortgageBalance && formData.propertyType ? 1.02 : 1 }}
        whileTap={{ scale: 0.98 }}
        style={{ fontWeight: 600 }}
      >
        Continue
        <ArrowRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
}

function Step2({ formData, updateFormData, onNext, onBack }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
          <Target className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
          Your Financial Goals
        </h2>
      </div>

      <p className="text-lg text-gray-600 mb-8">
        Help us understand what you're looking to accomplish
      </p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 600 }}>
            How will you use the funds? *
          </label>
          <div className="space-y-3">
            {[
              'Home Renovation',
              'Debt Consolidation',
              'Education Expenses',
              'Investment Property',
              'Emergency Fund',
              'Other',
            ].map((use) => (
              <motion.button
                key={use}
                type="button"
                onClick={() => updateFormData('useOfFunds', use)}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all text-left ${
                  formData.useOfFunds === use
                    ? 'border-purple-600 bg-purple-50 text-purple-900'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                style={{ fontWeight: formData.useOfFunds === use ? 600 : 500 }}
              >
                {formData.useOfFunds === use && <CheckCircle2 className="w-5 h-5 text-purple-600 inline-block mr-2" />}
                {use}
              </motion.button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 600 }}>
            When do you need funding? *
          </label>
          <div className="grid grid-cols-2 gap-4">
            {['Immediately', 'Within 30 days', 'Within 60 days', 'Just exploring'].map((time) => (
              <motion.button
                key={time}
                type="button"
                onClick={() => updateFormData('timeframe', time)}
                className={`px-4 py-3 rounded-xl border-2 transition-all ${
                  formData.timeframe === time
                    ? 'border-purple-600 bg-purple-50 text-purple-900'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ fontWeight: formData.timeframe === time ? 600 : 500 }}
              >
                {formData.timeframe === time && <CheckCircle2 className="w-5 h-5 text-purple-600 inline-block mr-2" />}
                {time}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <motion.button
          onClick={onBack}
          className="px-6 py-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ fontWeight: 600 }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </motion.button>
        <motion.button
          onClick={onNext}
          disabled={!formData.useOfFunds || !formData.timeframe}
          className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          whileHover={{ scale: formData.useOfFunds && formData.timeframe ? 1.02 : 1 }}
          whileTap={{ scale: 0.98 }}
          style={{ fontWeight: 600 }}
        >
          Continue
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
}

function Step3({ formData, updateFormData, onNext, onBack }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-xl flex items-center justify-center">
          <DollarSign className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
          Credit Information
        </h2>
      </div>

      <p className="text-lg text-gray-600 mb-8">
        This helps us match you with the best rates
      </p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 600 }}>
            Estimated Credit Score *
          </label>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Excellent (740+)', value: '740+' },
              { label: 'Good (670-739)', value: '670-739' },
              { label: 'Fair (580-669)', value: '580-669' },
              { label: 'Poor (Below 580)', value: 'below-580' },
            ].map((score) => (
              <motion.button
                key={score.value}
                type="button"
                onClick={() => updateFormData('creditScore', score.value)}
                className={`px-4 py-3 rounded-xl border-2 transition-all ${
                  formData.creditScore === score.value
                    ? 'border-purple-600 bg-purple-50 text-purple-900'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ fontWeight: formData.creditScore === score.value ? 600 : 500 }}
              >
                {formData.creditScore === score.value && <CheckCircle2 className="w-5 h-5 text-purple-600 inline-block mr-2" />}
                {score.label}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
          <p className="text-sm text-blue-900">
            💡 <strong>Good news!</strong> Checking your options will not affect your credit score.
          </p>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <motion.button
          onClick={onBack}
          className="px-6 py-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ fontWeight: 600 }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </motion.button>
        <motion.button
          onClick={onNext}
          disabled={!formData.creditScore}
          className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          whileHover={{ scale: formData.creditScore ? 1.02 : 1 }}
          whileTap={{ scale: 0.98 }}
          style={{ fontWeight: 600 }}
        >
          Continue
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
}

function Step4({ formData, updateFormData, onNext, onBack }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
          Almost There!
        </h2>
      </div>

      <p className="text-lg text-gray-600 mb-8">
        Just a few details to see your personalized matches
      </p>

      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 600 }}>
              First Name *
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => updateFormData('firstName', e.target.value)}
              placeholder="John"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 600 }}>
              Last Name *
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => updateFormData('lastName', e.target.value)}
              placeholder="Smith"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 600 }}>
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => updateFormData('email', e.target.value)}
            placeholder="john@example.com"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 600 }}>
            Phone Number *
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => updateFormData('phone', e.target.value)}
            placeholder="(555) 123-4567"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 600 }}>
            ZIP Code *
          </label>
          <input
            type="text"
            value={formData.zipCode}
            onChange={(e) => updateFormData('zipCode', e.target.value)}
            placeholder="94105"
            maxLength={5}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            required
          />
        </div>

        <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
          <p className="text-xs text-gray-700">
            By clicking "View My Matches", you agree to our{' '}
            <a href="#" className="text-purple-600 hover:text-purple-700 underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-purple-600 hover:text-purple-700 underline">
              Privacy Policy
            </a>
            . You consent to receive calls and texts from EquityKey and our lending partners at the number provided, including via automated technology.
          </p>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <motion.button
          onClick={onBack}
          className="px-6 py-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ fontWeight: 600 }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </motion.button>
        <motion.button
          onClick={onNext}
          disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.zipCode}
          className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          whileHover={{ scale: formData.firstName && formData.lastName && formData.email && formData.phone && formData.zipCode ? 1.02 : 1 }}
          whileTap={{ scale: 0.98 }}
          style={{ fontWeight: 600 }}
        >
          View My Matches
          <CheckCircle2 className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
}
