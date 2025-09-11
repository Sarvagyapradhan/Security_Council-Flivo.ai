import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-blue-600">
      {/* First Testimonial */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-6 flex items-center">
          {/* Left Content */}
          <div className="flex-1 pr-12">
            <h2 className="text-white text-4xl font-medium leading-tight mb-16">
              "Security Council's research provides the independent threat intelligence analysis we need for strategic decision-making."
            </h2>
            <div className="space-y-2">
              <p className="text-white text-sm font-bold">Ananya Iyer</p>
              <p className="text-white text-sm">Head of Cyber Risk</p>
              <p className="text-white text-sm">QuantaEdge</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <div className="space-y-7">
              <h3 className="text-white text-3xl font-semibold leading-10">
                Research Case Study: Early Threat Detection Analysis
              </h3>
              <p className="text-white text-lg leading-8">
                A major financial institution used Security Council to detect executive credential leaks on the dark web. The alert arrived hours before wider circulation, helping the team secure access and avoid reputational damage.
              </p>
              <a href="#" className="inline-flex items-center text-white font-semibold text-lg hover:text-gray-200">
                See Client Story
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l10-10M17 7H7v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Second Case Study */}
      <div className="bg-blue-600 pb-16">
        <div className="max-w-7xl mx-auto px-6 flex items-center">
          {/* Left Image */}
          <div className="flex-1 pr-12">
            <img
              src="/testimonials/healthcare-case-study.jpg"
              alt="Healthcare case study visualization"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <div className="space-y-7">
              <h3 className="text-white text-3xl font-semibold leading-10">
                Healthcare Threat Intelligence: Compliance Research Findings
              </h3>
              <p className="text-white text-lg leading-8">
                Using Security Council's disclosure-ready reports, a healthcare provider identified dark web exposure of patient record mentions and took immediate action — helping fulfill internal audit and HIPAA documentation requirements.
              </p>
              <a href="#" className="inline-flex items-center text-white font-semibold text-lg hover:text-gray-200 mb-8">
                See Client Story
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l10-10M17 7H7v10" />
                </svg>
              </a>
              <p className="text-white text-2xl leading-10 mb-8">
                Start your relationship with Security Council today.
              </p>
              <button className="bg-white text-blue-700 px-6 py-3 rounded text-sm font-semibold hover:bg-gray-100 flex items-center">
                <span>Review a Council-Grade Sample</span>
                <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
