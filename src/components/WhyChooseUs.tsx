import React from 'react';
import OptimizedImage from './OptimizedImage';

interface WhyChooseUsProps {
  onBriefingClick?: () => void;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onBriefingClick }) => {
  const features = [
    {
      image: "/features/independent-unbiased.webp",
      title: "Independent and Unbiased",
      description: "We are not tied to any product, platform, or provider. Our intelligence is neutral, research-driven and free from commercial influence, a trusted source for those who need facts, not sales narratives."
    },
    {
      image: "/features/data-rich-insights.webp",
      title: "Data-Rich, Research-Led Insights",
      description: "Our findings are built on proprietary research, threat landscape telemetry and active adversary mapping, providing high-context insights that go beyond surface-level indicators or recycled reports."
    },
    {
      image: "/features/strategic-decision-makers.webp",
      title: "Built for Strategic Decision-Makers",
      description: "From CISOs and CIOs to government security teams, we equip leadership with intelligence that's not just technical, it's strategic, contextual and designed to shape executive response."
    },
    {
      image: "/features/global-threat-visibility.webp",
      title: "Global Threat Visibility. Local Relevance.",
      description: "We monitor cross-border threat trends, cybercriminal economies and geopolitical risks, then distill what matters to your sector, your region and your infrastructure."
    },
    {
      image: "/features/confidential-trusted.webp",
      title: "Confidential. Trusted. Discreet.",
      description: "We don't operate in the open. Our briefings, advisories and simulations are confidential, high-trust and often NDA-governed. You won't find them published and that's the point."
    },
    {
      image: "/features/bold-enough.webp",
      title: "Bold Enough to Say What Others Won't",
      description: "We speak plainly about the risks others downplay. We uncover overlooked attack surfaces, challenge false assurance and reveal hard truths, even when they're uncomfortable."
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl">
              Why Leading Organizations Choose Security Council
            </h2>
            <h3 className="text-xl font-semibold text-blue-900 sm:text-2xl">
              Independent. Analytical. Uncompromised.
            </h3>
            <p className="text-base leading-7 text-blue-900 sm:text-lg">
              Security Council doesn’t lead with assumption, we lead with research intelligence. We’re an intelligence-first research authority, trusted by executive teams, national defense agencies and cybersecurity leaders to deliver clarity in moments where uncertainty is the norm.
            </p>
            <p className="text-base leading-7 text-blue-900 sm:text-lg">
              When visibility fails and dashboards go quiet, organizations turn to us—not just to protect them, but to expose what protection has missed.
            </p>
          </div>

          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center gap-4 rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm sm:flex-row sm:items-start">
                <div className="relative flex h-20 w-20 items-center justify-center">
                  <div className="h-20 w-20 rounded-tr-2xl bg-blue-600" />
                  <div className="absolute top-1 left-1 h-20 w-20 rounded-tr-2xl bg-black/40 blur-sm" />
                  <OptimizedImage
                    src={feature.image}
                    alt={feature.title}
                    className="absolute inset-y-0 left-3 h-20 w-20 rounded-tr-2xl object-cover"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <h4 className="text-lg font-semibold text-blue-900">
                    {feature.title}
                  </h4>
                  <p className="text-sm leading-6 text-blue-900 sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 rounded-2xl bg-blue-900 px-6 py-10 text-white lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4 lg:max-w-3xl">
            <h3 className="text-2xl font-bold sm:text-3xl">Ready for Clarity Over Assumptions?</h3>
            <p className="text-sm leading-6 sm:text-base">
              When standard visibility isn’t enough and conventional approaches fall short, Security Council delivers the intelligence and evidence to act with confidence—exposing what others miss, discreetly and with full strategic context.
            </p>
            <button 
              onClick={onBriefingClick}
              className="inline-flex items-center justify-center gap-2 rounded border-2 border-white bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#002856]"
            >
              Request a Confidential Briefing
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center gap-4">
            {[1, 2, 3].map((member) => (
              <OptimizedImage
                key={member}
                src={`/team/member-${member}.webp`}
                alt={`Team member ${member}`}
                className="h-48 w-20 rounded-xl border-2 border-white object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
