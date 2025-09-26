import React, { useState } from 'react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
  };

  return (
    <section className="bg-gray-100 py-14">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="md:max-w-[420px]">
          <h2 className="mb-3 text-2xl font-semibold text-blue-900 sm:text-3xl">
            Direct to your inbox
          </h2>
          <p className="text-sm leading-relaxed text-gray-800 sm:text-base">
            Sign up for our newsletter with the latest insights, analysis, and more.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-xs font-semibold text-blue-900 sm:text-sm">
              Work Email
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded border border-gray-400 px-4 py-3 text-sm focus:border-blue-600 focus:outline-none sm:text-base"
                placeholder="Enter your work email"
                required
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded border-2 border-blue-700 bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800 sm:px-6 sm:py-3 sm:text-base"
              >
                Continue
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                  <svg className="h-4 w-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <p className="text-xs leading-relaxed text-gray-600">
            By clicking the "Continue" button, you agree to the{' '}
            <a href="#" className="text-blue-700 hover:underline">Security Council Terms of Use</a>{' '}
            and{' '}
            <a href="#" className="text-blue-700 hover:underline">Privacy Policy.</a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
