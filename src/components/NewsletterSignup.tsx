import React, { useState } from 'react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-blue-900 text-3xl font-semibold mb-3">
              Direct to your inbox
            </h2>
            <p className="text-gray-800 text-lg leading-8">
              Sign up for our newsletter with the latest insights, analysis and<br />
              more.
            </p>
          </div>

          {/* Right Form */}
          <div className="flex-1 max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <label htmlFor="email" className="block text-blue-900 font-semibold text-sm mb-1">
                  Work Email
                </label>
                <div className="flex">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-4 border border-gray-400 focus:outline-none focus:border-blue-600"
                    placeholder="Enter your work email"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-blue-700 text-white px-6 py-4 border-2 border-blue-700 font-semibold hover:bg-blue-800 flex items-center"
                  >
                    <span>Continue</span>
                    <div className="ml-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <p className="text-xs text-gray-600">
                By clicking the "Continue" button, you are agreeing to the{' '}
                <a href="#" className="text-blue-700 hover:underline">Security Council Terms of Use</a>
                {' '}and{' '}
                <a href="#" className="text-blue-700 hover:underline">Privacy Policy.</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
