import React from 'react';
import OptimizedImage from './OptimizedImage';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-[#0E3A8A] py-16 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-10">
            <h2 className="text-2xl font-semibold leading-9 sm:text-3xl lg:text-4xl">
              “Security Council’s research provides the independent threat intelligence analysis we need for strategic decision-making.”
            </h2>
            <div className="space-y-1 text-sm sm:text-base">
              <p className="font-semibold">Ananya Iyer</p>
              <p>Head of Cyber Risk</p>
              <p>QuantaEdge</p>
            </div>
          </div>
          <div className="space-y-6 rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur-sm sm:p-8">
            <h3 className="text-xl font-semibold sm:text-2xl">
              Research Case Study: Early Threat Detection Analysis
            </h3>
            <p className="text-sm leading-6 text-white/90 sm:text-base">
              A major financial institution used Security Council to detect executive credential leaks on the dark web. The alert arrived hours before wider circulation, helping the team secure access and avoid reputational damage.
            </p>
            <a href="#" className="inline-flex items-center text-sm font-semibold text-white transition hover:text-blue-100 sm:text-base">
              See Client Story
              <svg className="ml-2 h-5 w-5" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <OptimizedImage
              src="/testimonials/healthcare-case-study.webp"
              alt="Healthcare case study visualization"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6 rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur-sm sm:p-8">
            <h3 className="text-xl font-semibold sm:text-2xl">
              Healthcare Threat Intelligence: Compliance Research Findings
            </h3>
            <p className="text-sm leading-6 text-white/90 sm:text-base">
              Using Security Council’s disclosure-ready reports, a healthcare provider identified dark web exposure of patient record mentions and took immediate action—helping fulfill internal audit and HIPAA documentation requirements.
            </p>
            <a href="#" className="inline-flex items-center text-sm font-semibold text-white transition hover:text-blue-100 sm:text-base">
              See Client Story
              <svg className="ml-2 h-5 w-5" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <p className="pt-6 text-lg font-semibold sm:text-xl">
              Start your relationship with Security Council today.
            </p>
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#0E3A8A] transition hover:bg-blue-50 sm:px-6 sm:py-3 sm:text-base">
              Review a Council-Grade Sample
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
