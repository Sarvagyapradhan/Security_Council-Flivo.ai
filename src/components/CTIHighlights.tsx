import React from 'react';

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

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-blue-900 text-4xl font-bold">CTI Highlights & Reports</h2>
          <div className="relative">
            <select className="appearance-none border-b-2 border-gray-400 bg-white px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:border-blue-600">
              <option>Choose your function</option>
              <option>CISO</option>
              <option>SOC Manager</option>
              <option>Legal Counsel</option>
              <option>Board Member</option>
            </select>
            <svg className="absolute right-0 top-3 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Report Grid */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          {reports.map((report, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-blue-900 text-xl font-semibold leading-7">
                {report.title}
              </h3>
              <a href="#" className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-900">
                {report.link}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l10-10M17 7H7v10" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="flex justify-center items-center space-x-3 mb-16">
          <span className="text-blue-700 font-semibold text-lg">View More</span>
          <svg className="w-4 h-4 text-blue-700 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Featured Reports */}
        <div className="grid grid-cols-3 gap-8">
          {featuredReports.map((report, index) => (
            <div 
              key={index} 
              className="h-[550px] bg-cover bg-center rounded-lg relative overflow-hidden"
              style={{ backgroundImage: report.background }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white text-3xl font-semibold leading-10 mb-4">
                  {report.title}
                </h3>
                <a href="#" className="inline-flex items-center text-white font-semibold text-lg hover:text-gray-200">
                  {report.link}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 17l10-10M17 7H7v10" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTIHighlights;
