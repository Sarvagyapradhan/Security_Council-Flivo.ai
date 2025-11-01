import React from 'react';
import OptimizedImage from './OptimizedImage';

const focusAreas = [
  {
    title: 'Adversary Tracking & Threat Actor Profiling',
    description:
      'We monitor attacker ecosystems in real time, from ransomware affiliates and APT groups to low-signal threat actors operating on closed networks. Our profiling work maps motivations, infrastructure and behavioral patterns to expose risk before impact.',
    image: '/images/adversary-tracking-figma.webp',
    alt: 'Analyst monitoring adversaries'
  },
  {
    title: 'Dark Web Observation & Leak Intelligence',
    description:
      "Beyond indexed data dumps, we track live mentions, exposed credentials, active tokens and exploit discussions in dark web forums, encrypted channels and deep marketplaces. Leak detection is just the surface, we focus on exploitation patterns and how they map to your environment.",
    image: '/images/dark-web-figma.webp',
    alt: 'Dark web intelligence visualization'
  },
  {
    title: 'Infrastructure Exposure & Attack Surface Discovery',
    description:
      "We identify vulnerable assets that are often missed: orphaned endpoints, shadow IT, forgotten cloud keys and misconfigured integrations. This isn't just external scanning, it's exposure mapping through the lens of how attackers think.",
    image: '/images/infrastructure-exposure-figma.webp',
    alt: 'Infrastructure exposure map'
  },
  {
    title: 'Insider Risk & Behavioral Anomalies',
    description:
      'Our analysts flag risk not just by roles, but by actions. From privilege drift to silent data exfiltration, we surface internal movements that could signal policy bypass or breach preparation.',
    image: '/images/insider-risk-figma.webp',
    alt: 'Insider risk monitoring'
  },
  {
    title: 'Third-Party Risk Analysis',
    description:
      "Breaches don't always start within your perimeter. We assess digital interdependencies, third-party toolkits and vendor platforms for signs of indirect compromise and lateral risk exposure.",
    image: '/images/third-party-risk-figma.webp',
    alt: 'Third-party risk assessment'
  },
  {
    title: 'Sector-Specific Threat Intelligence',
    description:
      'Different industries face different breaches, our models are built for it. From finance and critical infrastructure to SaaS platforms and healthcare, we provide contextual intelligence that reflects your actual threat environment, not generic feeds.',
    image: '/images/sector-specific-figma.webp',
    alt: 'Sector specific briefing'
  }
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

const OurIntelligencePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#002856]">
      {/* Hero */}
      <section className="relative overflow-hidden mb-0 sm:mb-[4.00rem] bg-white">
        <OptimizedImage
          src="/images/hero-background-figma2.webp"
          alt="Abstract intelligence background"
          className="w-full object-cover object-[100%_50%] md:object-center h-[180px] sm:h-[240px] md:h-[340px] lg:h-[360px] transform scale-[3.6] sm:scale-[2.8] md:scale-100"
          eager
        />
      </section>

      {/* Mobile Hero Heading */}
      <div className="sm:hidden relative px-4 py-4 flex items-center justify-center bg-white">
        <h2 className="text-center text-[#002856] font-bold text-2xl leading-tight max-w-sm">
          Inside the Threat Landscape We Know Best
        </h2>
      </div>

      {/* Where We Focus */}
      <section className="relative overflow-visible pb-10 pt-4 sm:pb-14 sm:pt-10 lg:pb-16">
        <div className="absolute inset-x-0 top-0 h-[480px] bg-[#0050AC] sm:h-[260px] lg:h-[300px]" />

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8">
          <div className="grid gap-8 text-left sm:gap-10 md:grid-cols-[2.4fr_minmax(420px,1fr)] md:items-center md:gap-14 lg:grid-cols-[3fr_minmax(520px,1fr)] lg:gap-20">
            <div className="order-2 md:order-1 flex mt-8 sm:-mt-12 md:-mt-28 px-4 sm:px-4 md:pl-8 flex-col text-white w-full max-w-[1600px]">
              <h2 className="-mt-[35px] text-center md:text-left text-2xl font-bold sm:text-[42px] md:text-[46px]">Where We Focus</h2>
              <p className="mt-3 sm:mt-2 mx-auto md:mx-0 text-center md:text-left max-w-full sm:max-w-[780px] md:max-w-[920px] lg:max-w-[1000px] xl:max-w-[1080px] text-sm text-white/90 leading-relaxed sm:text-lg md:text-xl">
                Our intelligence spans across critical threat zones—each monitored, dissected and analyzed by real humans with precision and intent
                <span className="md:hidden">. </span>
                <span className="hidden md:inline">,</span>
                <br className="hidden md:block" />
                These are the environments where blind spots begin and where
                <br className="hidden md:block" />
                Security Council brings clarity.
              </p>
            </div>

            <div className="flex-1 order-1 md:order-2">
              <div className="relative mx-auto w-full overflow-hidden rounded-tr-[48px] rounded-bl-[48px] shadow-[0_18px_45px_rgba(0,0,0,0.25)] max-w-[320px] sm:max-w-[590px] md:max-w-[740px] lg:max-w-[890px] translate-y-0 sm:-translate-y-12 sm:translate-x-4 md:-translate-y-16 md:translate-x-8">
                <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-tr-[48px] rounded-bl-[48px] bg-black/30 blur-2xl" />
                <OptimizedImage
                  src="/images/where-we-focus-figma.webp"
                  alt="Security analysts collaborating"
                  className="relative z-10 w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          <div className="relative mt-0 sm:mt-4 xl:mt-8">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
              {focusAreas.map(({ title, description, image, alt }) => (
                <article
                  key={title}
                  className="flex flex-col items-center text-center md:items-start md:text-left h-full border-b border-r border-gray-200 p-8"
                >
                  {/* Image */}
                  <div className="relative w-full max-w-[320px] md:max-w-none">
                    <div className="relative mx-auto aspect-[250/170] w-full max-w-[320px] md:mx-0 md:max-w-sm">
                      {/* Shadow layer */}
                      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-tr-[32px] rounded-bl-[32px] bg-black/40" />
                      {/* Blue layer */}
                      <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-tr-[32px] rounded-bl-[32px] bg-[#0050AC]" />
                      {/* Image */}
                      <OptimizedImage
                        src={image}
                        alt={alt}
                        className="relative z-10 w-full h-full object-cover rounded-tr-[32px] rounded-bl-[32px]"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="mt-6 flex flex-col gap-3 flex-1">
                    <h3 className="text-lg font-bold leading-snug sm:text-xl md:text-[20px] text-[#002856]">
                      {title}
                    </h3>
                    <p className="text-sm text-[#002856]/80 sm:text-base md:text-[15px] leading-relaxed">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0050AC] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-[42px] md:leading-tight">
              You Won't Fix What You Can't See. Let's Change That.
            </h2>
            <p className="mt-4 text-base text-white/90 sm:text-lg">
              We don't speculate. We reveal what's already at risk, mapped to the exact threat domains we operate in. Before you act, you need visibility. That's where we come in.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-white/80 sm:text-base">
              Let's begin with a private threat briefing.
            </p>
            <button className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded border-2 border-white bg-white px-6 py-3 text-sm font-bold text-[#002856] transition hover:bg-gray-100 sm:w-auto sm:text-base">
              Request Private Assessment
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.49658 4.11916C10.6947 2.81808 11.7932 2.16699 13 2.16699C14.2068 2.16699 15.3053 2.81699 17.5034 4.11916L18.2466 4.55899C20.4447 5.86116 21.5432 6.51224 22.1466 7.58366C22.75 8.65616 22.75 9.95616 22.75 12.5605V13.4402C22.75 16.0434 22.75 17.3456 22.1466 18.417C21.5432 19.4884 20.4447 20.1395 18.2466 21.4406L17.5034 21.8815C15.3053 23.1826 14.2068 23.8337 13 23.8337C11.7932 23.8337 10.6947 23.1837 8.49658 21.8815L7.75342 21.4406C5.55533 20.1406 4.45683 19.4884 3.85342 18.417C3.25 17.3445 3.25 16.0445 3.25 13.4402V12.5605C3.25 9.95616 3.25 8.65508 3.85342 7.58366C4.45683 6.51224 5.55533 5.86116 7.75342 4.55899L8.49658 4.11916ZM14.0833 17.3337C14.0833 17.621 13.9692 17.8965 13.766 18.0997C13.5629 18.3029 13.2873 18.417 13 18.417C12.7127 18.417 12.4371 18.3029 12.234 18.0997C12.0308 17.8965 11.9167 17.621 11.9167 17.3337C11.9167 17.0463 12.0308 16.7708 12.234 16.5676C12.4371 16.3645 12.7127 16.2503 13 16.2503C13.2873 16.2503 13.5629 16.3645 13.766 16.5676C13.9692 16.7708 14.0833 17.0463 14.0833 17.3337ZM13 6.77116C13.2155 6.77116 13.4222 6.85676 13.5745 7.00913C13.7269 7.16151 13.8125 7.36817 13.8125 7.58366V14.0837C13.8125 14.2991 13.7269 14.5058 13.5745 14.6582C13.4222 14.8106 13.2155 14.8962 13 14.8962C12.7845 14.8962 12.5778 14.8106 12.4255 14.6582C12.2731 14.5058 12.1875 14.2991 12.1875 14.0837V7.58366C12.1875 7.36817 12.2731 7.16151 12.4255 7.00913C12.5778 6.85676 12.7845 6.77116 13 6.77116Z"
                  fill="#002856"
                />
              </svg>
            </button>
          </div>

          <div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-lg border border-white/40 shadow-xl sm:max-w-sm md:mx-0">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-lg border border-white/30" />
            <OptimizedImage
              src="/images/cta-background-figma.webp"
              alt="Security briefing discussion"
              className="relative z-10 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
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
    </div>
  );
};

export default OurIntelligencePage;
