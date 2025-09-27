import React, { useEffect, useRef } from 'react';

// (cards removed from header to avoid homepage layout changes)

const CTIHighlights: React.FC = () => {
  const reports = [
    {
      title: "Credential Leak Intelligence: Analysis of 300+ Incidents",
      link: "View Report"
    },
    {
      title: "Dark Web Ransomware Trends: 8-Month Intelligence Study",
      link: "Read Research Findings"
    },
    {
      title: "Emerging Cyber Regulations: Global Risk Analysis for Legal & Compliance Leaders",
      link: "Read Compliance Brief"
    },
    {
      title: "Undetected Breaches: 24-Month Pattern Analysis of Stealth Attacks",
      link: "Explore Full Report"
    },
    {
      title: "Executive Threat Brief: Weekly Intelligence for Board-Level Security Oversight",
      link: "Download Weekly Brief"
    },
    {
      title: "Sector Spotlight: Breach Trends Across Finance, Healthcare & Infrastructure",
      link: "View Sector Report"
    }
  ];

  const featuredReports = [
    {
      title: "AI-Powered Threats: 12-Month Research Analysis",
      link: "View Research Findings",
      background: "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url('/reports/ai-powered-threats.jpg')"
    },
    {
      title: "Emerging Threat Actor Analysis: Real-Time Intelligence Report",
      link: "Read Intelligence Brief",
      background: "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url('/reports/emerging-threat-actor.jpg')"
    },
    {
      title: "Threat Intelligence Methodology: Our Research Approach",
      link: "View Research Process",
      background: "url('/reports/threat-intelligence-methodology.jpg')"
    }
  ];

  const FeaturedCard: React.FC<{ title: string; link: string; background: string }> = ({ title, link, background }) => {
    const cardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const el = cardRef.current;
      if (el) {
        el.style.backgroundImage = background;
      }
    }, [background]);

    return (
      <div
        ref={cardRef}
        className="relative h-[420px] overflow-hidden rounded-2xl bg-cover bg-center sm:h-[500px] lg:h-[550px]"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <h3 className="mb-3 text-2xl font-semibold leading-9 text-white sm:mb-4 sm:text-3xl">
            {title}
          </h3>
          <a href="#" className="inline-flex items-center text-base font-semibold text-white transition-colors hover:text-gray-200 sm:text-lg">
            {link}
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 17l10-10M17 7H7v10" />
            </svg>
          </a>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl">CTI Highlights & Reports</h2>
          <div className="relative w-full max-w-xs sm:max-w-sm">
            <label htmlFor="cti-function" className="sr-only">Choose your function</label>
            <select id="cti-function" title="Choose your function" className="w-full appearance-none border-b-2 border-gray-400 bg-white px-4 py-2 pr-8 text-sm text-gray-700 focus:border-blue-600 focus:outline-none">
              <option>Choose your function</option>
              <option>CISO</option>
              <option>SOC Manager</option>
              <option>Legal Counsel</option>
              <option>Board Member</option>
            </select>
            <svg className="pointer-events-none absolute right-0 top-3 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Report Grid */}
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reports.map((report, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold leading-7 text-blue-900 sm:text-xl">
                {report.title}
              </h3>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900 sm:text-base">
                {report.link}
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l10-10M17 7H7v10" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="mb-12 flex items-center justify-center space-x-2 sm:mb-16">
          <span className="text-base font-semibold text-blue-700 sm:text-lg">View More</span>
          <svg className="h-4 w-4 rotate-90 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Featured Reports */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredReports.map((report, index) => (
            <FeaturedCard key={index} title={report.title} link={report.link} background={report.background} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Deprecated helper (kept commented to avoid re-add)
/* const ArticleHighlightCard: React.FC<{ title: string; link: string; image: string }> = ({ title, link, image }) => (
  <article className="group relative flex h-[420px] flex-col overflow-hidden rounded-3xl bg-black shadow-[0_25px_55px_rgba(0,0,0,0.35)] sm:h-[460px]">
    <img
      src={image}
      alt={title}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/95" aria-hidden="true" />
    <div className="relative flex flex-1 flex-col justify-between p-6 sm:p-7">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold uppercase tracking-wide text-white/70 sm:text-xl">
          {title}
        </h3>
        <button type="button" className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white">
          {link}
          <ArrowIcon />
        </button>
      </div>
      <div className="space-y-4 pt-10">
        <h3 className="text-2xl font-semibold leading-snug text-white sm:text-3xl">
          {title}
        </h3>
        <button type="button" className="inline-flex items-center gap-2 text-base font-semibold text-white transition-colors hover:text-white/90">
          {link}
          <ArrowIcon />
        </button>
      </div>
    </div>
  </article>
); */

// icon removed to satisfy lint rules

export default CTIHighlights;
