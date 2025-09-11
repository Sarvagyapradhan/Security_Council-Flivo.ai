import React from 'react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      image: "/features/independent-unbiased.jpg",
      title: "Independent and Unbiased",
      description: "We are not tied to any product, platform, or provider. Our intelligence is neutral, research-driven and free from commercial influence, a trusted source for those who need facts, not sales narratives."
    },
    {
      image: "/features/data-rich-insights.jpg",
      title: "Data-Rich, Research-Led Insights",
      description: "Our findings are built on proprietary research, threat landscape telemetry and active adversary mapping, providing high-context insights that go beyond surface-level indicators or recycled reports."
    },
    {
      image: "/features/strategic-decision-makers.jpg",
      title: "Built for Strategic Decision-Makers",
      description: "From CISOs and CIOs to government security teams, we equip leadership with intelligence that's not just technical, it's strategic, contextual and designed to shape executive response."
    },
    {
      image: "/features/global-threat-visibility.jpg",
      title: "Global Threat Visibility. Local Relevance.",
      description: "We monitor cross-border threat trends, cybercriminal economies and geopolitical risks, then distill what matters to your sector, your region and your infrastructure."
    },
    {
      image: "/features/confidential-trusted.jpg",
      title: "Confidential. Trusted. Discreet.",
      description: "We don't operate in the open. Our briefings, advisories and simulations are confidential, high-trust and often NDA-governed. You won't find them published and that's the point."
    },
    {
      image: "/features/bold-enough.jpg",
      title: "Bold Enough to Say What Others Won't",
      description: "We speak plainly about the risks others downplay. We uncover overlooked attack surfaces, challenge false assurance and reveal hard truths, even when they're uncomfortable."
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex">
          {/* Left Content */}
          <div className="flex-1 pr-16">
            <h2 className="text-blue-900 text-3xl font-bold mb-6">
              Why Leading Organizations Choose Security Council ?
            </h2>
            <h3 className="text-blue-900 text-2xl font-semibold mb-8">
              Independent. Analytical. Uncompromised.
            </h3>
            <p className="text-blue-900 text-xl leading-8">
              Security Council doesn't lead with assumption, we lead with research intelligence. We're an intelligence-first research authority, trusted by executive teams, national defense agencies and cybersecurity leaders to deliver clarity in moments where uncertainty is the norm.
              <br /><br />
              When visibility fails and dashboards go quiet, organizations turn to us, not just to protect them, but to expose what protection has missed.
            </p>
          </div>

          {/* Right Features Grid */}
          <div className="flex-1 space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-10">
                {/* Image with Blue Background */}
                <div className="relative flex-shrink-0">
                  <div className="w-35 h-24 bg-blue-600 rounded-tr-2xl"></div>
                  <div className="absolute top-1 left-1 w-35 h-24 bg-black/40 rounded-tr-2xl blur-sm"></div>
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="absolute top-0 left-3 w-35 h-24 object-cover rounded-tr-2xl"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-blue-900 text-lg font-semibold mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-blue-900 text-lg leading-7">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex items-center justify-between">
          <div className="flex-1 max-w-4xl">
            <h3 className="text-blue-900 text-4xl font-bold mb-6">
              Ready for Clarity Over Assumptions?
            </h3>
            <p className="text-blue-900 text-xl font-semibold leading-8 mb-8">
              When standard visibility isn't enough and conventional approaches fall short, Security Council delivers the intelligence and evidence to act with confidence, exposing what others miss, discreetly and with full strategic context.
            </p>
            <button className="bg-blue-700 text-white px-6 py-3 rounded text-sm font-semibold hover:bg-blue-800 flex items-center">
              <span>Request a Confidential Briefing</span>
              <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </button>
          </div>

          {/* Right Side Images */}
          <div className="flex space-x-4">
            <img src="/team/member-1.jpg" alt="Team member" className="w-24 h-60 object-cover border-2 border-white" />
            <img src="/team/member-2.jpg" alt="Team member" className="w-24 h-60 object-cover border-2 border-white" />
            <img src="/team/member-3.jpg" alt="Team member" className="w-24 h-60 object-cover border-2 border-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
