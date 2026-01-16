import React, { useState } from 'react';
import UtilityNav from './UtilityNav';
import MainNav from './MainNav';
import Footer from './Footer';
import RequestPopup from './RequestPopup';
import ContactPopup from './ContactPopup';
import OptimizedImage from './OptimizedImage';

const INITIAL_FORM_STATE = {
  email: '',
  jobTitle: '',
  firstName: '',
  companyName: '',
  lastName: '',
  jobFunction: '',
  phone: '',
  countryRegion: '',
};

const RequestLandingPage: React.FC = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Copied content sources
  const whyChooseFeatures = [
    {
      image: "/features/independent-unbiased.webp",
      title: "Independent and Unbiased",
      description:
        "We are not tied to any product, platform, or provider. Our intelligence is neutral, research-driven and free from commercial influence, a trusted source for those who need facts, not sales narratives.",
    },
    {
      image: "/features/data-rich-insights.webp",
      title: "Data-Rich, Research-Led Insights",
      description:
        "Our findings are built on proprietary research, threat landscape telemetry and active adversary mapping, providing high-context insights that go beyond surface-level indicators or recycled reports.",
    },
    {
      image: "/features/strategic-decision-makers.webp",
      title: "Built for Strategic Decision-Makers",
      description:
        "From CISOs and CIOs to government security teams, we equip leadership with intelligence that's not just technical, it's strategic, contextual and designed to shape executive response.",
    },
    {
      image: "/features/global-threat-visibility.webp",
      title: "Global Threat Visibility. Local Relevance.",
      description:
        "We monitor cross-border threat trends, cybercriminal economies and geopolitical risks, then distill what matters to your sector, your region and your infrastructure.",
    },
    {
      image: "/features/confidential-trusted.webp",
      title: "Confidential. Trusted. Discreet.",
      description:
        "We don't operate in the open. Our briefings, advisories and simulations are confidential, high-trust and often NDA-governed. You won't find them published and that's the point.",
    },
    {
      image: "/features/bold-enough.webp",
      title: "Bold Enough to Say What Others Won't",
      description:
        "We speak plainly about the risks others downplay. We uncover overlooked attack surfaces, challenge false assurance and reveal hard truths, even when they're uncomfortable.",
    },
  ];

  const highlights = [
    {
      title: 'How to Respond to a Credential Leak in 4 Steps',
      action: 'Read Now'
    },
    {
      title: 'Tracking Ransomware Kits Across Dark Web Markets',
      action: 'Read Now'
    },
    {
      title: 'Strategic Briefing: What CISOs Must Know About Emerging Threat Actors',
      action: 'Read Now'
    },
    {
      title: 'Playbook: Threat Intelligence for Compliance & Legal Teams',
      action: 'Title case'
    },
    {
      title: 'Threat Report: Breach Trends by Industry – Q2 2025',
      action: 'Learn More'
    },
    {
      title: 'Security Council Intelligence Brief – Executive Edition',
      action: 'Read Now'
    }
  ];

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsRequestOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <RequestPopup isOpen={isRequestOpen} onClose={() => setIsRequestOpen(false)} />
      <UtilityNav />
      <MainNav currentPage="request" onNavigate={() => {}} isAtTop />

      <main>
            <section className="relative isolate flex items-center justify-center w-screen min-h-[883px] -mt-[100px] sm:-mt-[108px] lg:-mt-[116px] px-0 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <OptimizedImage
                  src="/Page Components/Background.webp"
                  alt=""
                  className="h-full w-full object-cover"
                  eager
                  aria-hidden="true"
                />
              </div>
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.68)] z-10" />

          <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-start gap-8 px-2 sm:px-4 py-12 text-left lg:gap-10 lg:py-20">
            <div className="max-w-4xl space-y-3 text-white">
              <h1 className="text-[32px] font-extrabold leading-tight tracking-[-0.02em] sm:text-[44px] sm:leading-[52px] lg:text-[54px] lg:leading-[60px]">
                <span className="block">Actionable, objective insight</span>
                <span className="block">and expert guidance for</span>
                <span className="block">executives and their teams</span>
              </h1>
              <p className="text-[18px] font-semibold text-white/90 sm:text-[20px] lg:text-[22px]">
                Achieve your mission-critical priorities.
              </p>
            </div>

            <div className="w-full">
              <div className="mx-auto w-full max-w-[1180px] rounded-md border border-white/25 bg-[#0C5ACC] p-6 shadow-[0_24px_60px_-18px_rgba(0,0,0,0.6)] sm:p-8 lg:p-18">
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
                  <div className="space-y-4 text-white">
                    <h2 className="text-[22px] font-extrabold leading-[28px] sm:text-[24px]">
                      Ready for Clarity Over Assumptions?
                    </h2>
                    <p className="text-[13px] leading-6 text-white/95 sm:text-[14px]">
                      We don’t speculate. We reveal what’s already at risk, mapped to the exact threat domains we operate in. Before you act, you need visibility. That’s where we come in. Executive-level briefing clarity, designed for rapid decision-making.
                    </p>

                    <div className="space-y-2 text-white">
                      <h3 className="text-[18px] font-bold">Or give us a call</h3>
                      <p className="text-[18px] font-semibold">+44 (0) 33 3060 3806</p>
                      <p className="text-[14px]">8 a.m. – 7 p.m. ET</p>
                      <p className="text-[14px]">8 a.m. – 5 p.m. GMT</p>
                      <p className="text-[14px] font-semibold">Monday through Friday</p>
                    </div>
                  </div>

                  <form className="grid gap-3 sm:grid-cols-2" onSubmit={handleSubmit}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email ID"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-[44px] w-full rounded-sm border border-white/70 bg-white px-3 text-[13px] text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D2F7A] sm:text-[14px]"
                      required
                    />
                    <input
                      type="text"
                      name="jobTitle"
                      placeholder="Job Title"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="h-[44px] w-full rounded-sm border border-white/70 bg-white px-3 text-[13px] text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D2F7A] sm:text-[14px]"
                      required
                    />

                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="h-[44px] w-full rounded-sm border border-white/70 bg-white px-3 text-[13px] text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D2F7A] sm:text-[14px]"
                      required
                    />
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="h-[44px] w-full rounded-sm border border-white/70 bg-white px-3 text-[13px] text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D2F7A] sm:text-[14px]"
                      required
                    />

                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-white/70 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D2F7A] sm:text-base"
                      required
                    />
                    <div className="relative">
                      <select
                        name="jobFunction"
                        value={formData.jobFunction}
                        onChange={handleInputChange}
                        className="h-[44px] w-full appearance-none rounded-sm border border-white/70 bg-white px-3 pr-9 text-[13px] text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D2F7A] sm:text-[14px]"
                        required
                        aria-label="Job Function"
                      >
                        <option value="">Job Function</option>
                        <option value="executive">Executive</option>
                        <option value="security">Security</option>
                        <option value="it">IT</option>
                        <option value="operations">Operations</option>
                        <option value="other">Other</option>
                      </select>
                      <svg
                        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0D2F7A]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.185l3.71-3.954a.75.75 0 011.08 1.04l-4.24 4.52a.75.75 0 01-1.08 0l-4.24-4.52a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="h-[44px] w-full rounded-sm border border-white/70 bg-white px-3 text-[13px] text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D2F7A] sm:text-[14px]"
                      required
                    />
                    <div className="relative">
                      <select
                        name="countryRegion"
                        value={formData.countryRegion}
                        onChange={handleInputChange}
                        className="h-[44px] w-full appearance-none rounded-sm border border-white/70 bg-white px-3 pr-9 text-[13px] text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D2F7A] sm:text-[14px]"
                        required
                        aria-label="Country/Territory/Region"
                      >
                        <option value="">Country/Territory/Region</option>
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="ca">Canada</option>
                        <option value="au">Australia</option>
                        <option value="in">India</option>
                        <option value="other">Other</option>
                      </select>
                      <svg
                        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0D2F7A]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.185l3.71-3.954a.75.75 0 011.08 1.04l-4.24 4.52a.75.75 0 01-1.08 0l-4.24-4.52a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-sm border border-white/40 bg-white px-5 py-2.5 text-[13px] font-bold text-[#0B3B86] shadow-sm transition-colors hover:bg-[#EEF4FF]"
                      >
                        Become a Client
                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 + CTA (copied from WhyChooseUs) */}
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
                {whyChooseFeatures.map((feature) => (
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

        {/* Section 3 (Who We Guide — exact content) */}
        <section className="relative hidden h-[518px] bg-[#0050AC] xl:block">
          <div className="absolute left-[110px] top-[43px]">
            <h2 className="text-white text-[41px] font-bold leading-[50px] mb-8 w-[1053px]">
              When the stakes are reputational, not just technical. Exposure becomes a matter
              of timing and trust.
            </h2>
            
            <p className="text-white text-[22px] leading-[34px] mb-8 w-[853px]">
              We guide advisory boards, compliance heads and risk committees across industries
              where context matters most, from financial services and healthcare to critical
              infrastructure, SaaS, defense and more
            </p>
            
            <p className="text-white text-[22px] font-bold leading-[34px] mb-12 w-[785px]">
              This is intelligence that clarifies not just what happened, but what could.
            </p>
            
            <button className="inline-flex items-center gap-2 bg-white text-[#002856] px-4 py-4 rounded border-2 border-white font-bold text-[15px] hover:bg-gray-50 transition-colors w-[284px] h-[58px]">
              <span>Request Private Assessment</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 26 26">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.49658 4.11867C10.6947 2.81759 11.7932 2.1665 13 2.1665C14.2068 2.1665 15.3053 2.8165 17.5034 4.11867L18.2466 4.5585C20.4447 5.86067 21.5432 6.51175 22.1466 7.58317C22.75 8.65567 22.75 9.95567 22.75 12.56V13.4397C22.75 16.0429 22.75 17.3451 22.1466 18.4165C21.5432 19.4879 20.4447 20.139 18.2466 21.4401L17.5034 21.881C15.3053 23.1821 14.2068 23.8332 13 23.8332C11.7932 23.8332 10.6947 23.1832 8.49658 21.881L7.75342 21.4401C5.55533 20.1401 4.45683 19.4879 3.85342 18.4165C3.25 17.344 3.25 16.044 3.25 13.4397V12.56C3.25 9.95567 3.25 8.65459 3.85342 7.58317C4.45683 6.51175 5.55533 5.86067 7.75342 4.5585L8.49658 4.11867ZM14.0833 17.3332C14.0833 17.6205 13.9692 17.896 13.766 18.0992C13.5629 18.3024 13.2873 18.4165 13 18.4165C12.7127 18.4165 12.4371 18.3024 12.234 18.0992C12.0308 17.896 11.9167 17.6205 11.9167 17.3332C11.9167 17.0459 12.0308 16.7703 12.234 16.5671C12.4371 16.364 12.7127 16.2498 13 16.2498C13.2873 16.2498 13.5629 16.364 13.766 16.5671C13.9692 16.7703 14.0833 17.0459 14.0833 17.3332ZM13 6.77067C13.2155 6.77067 13.4222 6.85627 13.5745 7.00865C13.7269 7.16102 13.8125 7.36768 13.8125 7.58317V14.0832C13.8125 14.2987 13.7269 14.5053 13.5745 14.6577C13.4222 14.8101 13.2155 14.8957 13 14.8957C12.7845 14.8957 12.5778 14.8101 12.4255 14.6577C12.2731 14.5053 12.1875 14.2987 12.1875 14.0832V7.58317C12.1875 7.36768 12.2731 7.16102 12.4255 7.00865C12.5578 6.85627 12.7845 6.77067 13 6.77067Z"/>
              </svg>
            </button>
          </div>
          <div className="absolute right-[98px] top-[179px] w-[332px] h-[217px] border border-white"></div>
          <OptimizedImage className="absolute right-[82px] top-[164px] w-[332px] h-[217px] shadow-lg"
            src="/who-we-guide/backgrounds/reputational-stakes.webp" alt="" />   
        </section>

        {/* Section 4 - copied from OurIntelligencePage highlights */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
            <h2 className="text-3xl font-bold sm:text-4xl">CTI Highlights &amp; Reports</h2>
            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12 xl:grid-cols-3">
              {highlights.map(({ title, action }) => (
                <article key={title} className="flex flex-col gap-4">
                  <h3 className="text-xl font-semibold sm:text-2xl">{title}</h3>
                  <button className="group inline-flex items-center gap-3 text-sm font-bold text-[#0000D3] sm:text-base">
                    {action}
                    <svg
                      className="h-5 w-5 -rotate-[52deg] transition group-hover:translate-x-1"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 13 15"
                    >
                      <path
                        d="M0.216892 12.7516C-0.126566 13.1841 -0.0543845 13.8132 0.378114 14.1566C0.810612 14.5001 1.43965 14.4279 1.78311 13.9954L0.216892 12.7516ZM11.3218 1.51292C11.2588 0.964234 10.763 0.570478 10.2143 0.633439L1.27296 1.65945C0.72428 1.72241 0.330524 2.21824 0.393485 2.76693C0.456446 3.31561 0.952282 3.70937 1.50097 3.64641L9.44881 2.7344L10.3608 10.6822C10.4238 11.2309 10.9196 11.6247 11.4683 11.5617C12.017 11.4988 12.4107 11.0029 12.3478 10.4542L11.3218 1.51292ZM1 13.3735L1.78311 13.9954L11.1114 2.24881L10.3283 1.62692L9.54518 1.00503L0.216892 12.7516L1 13.3735Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer onContactClick={() => setIsContactOpen(true)} />
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        showTrigger={false}
      />
    </div>
  );
};

export default RequestLandingPage;
