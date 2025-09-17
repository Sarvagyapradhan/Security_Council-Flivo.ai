import React, { useState } from 'react';

const LatestInsightPage: React.FC = () => {
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  const researchData = [
    {
      title: "Dark Web Ransomware Trends: 8-Month Intelligence Study",
      date: "June 28, 2025",
      description: "Strategic review of ransomware operations across the dark web, revealing group shifts, affiliate dynamics and AI-driven extortion trends impacting critical sectors and global incident response.",
      source: "Dr. Sarah Chen, Threat Intelligence Lead",
      link: "View Ransomware Group Insights"
    },
    {
      title: "AI-Powered Threats: 12-Month Research Analysis",
      date: "July 15, 2025",
      description: "Comprehensive analysis of key AI-driven cyber threats observed over the past year, including social engineering, polymorphic malware, AI-as-a-Service and attacks targeting AI systems.",
      source: "Fei-Fei Li, Senior Analyst",
      link: "Access Full AI Threat Intelligence"
    },
    {
      title: "Credential Leak Intelligence: Analysis of 300+ Incidents",
      date: "June 10, 2025",
      description: "In-depth examination of credential-based attacks across cloud, VPN and identity systems, revealing key breach patterns, MFA bypass tactics and the growing impact of infostealer malware.",
      source: "Michael Rodriguez, Security Researcher",
      link: "View Credential Compromise Patterns"
    },
    {
      title: "Healthcare Threat Landscape: Q2 2025 Assessment",
      date: "June 10, 2025",
      description: "Critical assessment of emerging cyber threats targeting healthcare systems, including ransomware, data extortion, cloud abuse and the exploitation of legacy infrastructure across global health networks.",
      source: "Michael Rodriguez, Security Researcher",
      link: "Download Healthcare Threat Insights"
    },
    {
      title: "Financial Sector Risk Analysis: Emerging Threats",
      date: "June 10, 2025",
      description: "Strategic review of cyber threats, identity attacks and AI-driven fraud impacting global financial systems, based on a 12-month intelligence study.",
      source: "Michael Rodriguez, Security Researcher",
      link: "Access Financial Threat Briefing"
    },
    {
      title: "Critical Infrastructure Vulnerabilities: Research Brief",
      date: "June 10, 2025",
      description: "Advanced research into cyber risks targeting energy, transport and water systems, with analysis of exploit trends, access brokers and attack surface exposures across critical infrastructure sectors.",
      source: "Michael Rodriguez, Security Researcher",
      link: "Access Financial Threat Briefing"
    },
    {
      title: "Emerging Cyber Regulations: Global Analysis",
      date: "June 28, 2025",
      description: "Critical assessment of new and upcoming cybersecurity laws worldwide, examining compliance demands, cross-border enforcement and their impact on corporate security strategy.",
      source: "Teresa Walsh Chief Intelligence Officer FS-ISAC",
      link: "Read Global Regulation Brief"
    },
    {
      title: "Weekly Threat Intelligence Brief – August 2025",
      date: "June 28, 2025",
      description: "Comprehensive analysis of recent cyber incidents, ransomware activity, phishing campaigns and emerging exploits, providing leadership teams with timely, actionable intelligence for rapid decision-making.",
      source: "Teresa Walsh Chief Intelligence Officer FS-ISAC",
      link: "View Weekly Threat Brief"
    }
  ];

  const filterButtons = [
    "All Research",
    "Threat Actor Studies",
    "Industry Analysis", 
    "Emerging Threats",
    "Intelligence Briefs"
  ];

  const metrics = [
    { value: "500+", label: "Reports Published", image: "/latest-insights/metrics/reports-published.jpg" },
    { value: "15+", label: "Analysts", image: "/latest-insights/metrics/analysts.jpg" },
    { value: "24", label: "Countries Studied", image: "/latest-insights/metrics/countries-studied.jpg" },
    { value: "Updated Weekly", label: "", image: "/latest-insights/metrics/updated-weekly.jpg" }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div 
        className="h-[467px] relative bg-cover bg-center bg-gray-400"
        style={{
          backgroundImage: "url('/latest-insights/backgrounds/hero-background.jpg')"
        }}
      >
        <div className="absolute left-20 w-[805px] h-[535px] bg-white/10 border border-[#002856]">
          <div className="px-6 py-10">
            {/*<h1 className="text-[56px] font-bold leading-[65px] text-[#002856] mb-6">
              Research Hub: Intelligence You Can Act On
            </h1>
            <p className="text-[22px] leading-[34px] text-[#002856] max-w-[720px]">
              The Security Council Research Hub delivers independent, analyst-grade intelligence on global cyber threats, emerging risks and sector-specific vulnerabilities. Here you'll find in-depth reports, trend analyses and strategic assessments designed for executive decision-making. As a trusted authority, we provide actionable, data-driven insights that cut through noise, empowering leaders to anticipate, prepare and respond with confidence.
            </p>*/}
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-[#FEFEFE] min-h-[2028px] relative">
        {/* Blue Header */}
        <div className="w-full h-[277px] bg-[#0050AC] relative">
          <div className="absolute left-[179px] top-[41px]">
            <h2 className="text-[41px] font-bold leading-[48px] text-white">
              Latest Cybersecurity Research & Intelligence Reports
            </h2>
          </div>

          {/* Search Bar */}
          <div className="absolute left-[298px] top-[116px] w-[830px] h-[66px] bg-white rounded-[26px] border border-[#B1B1B1] shadow-lg flex items-center px-3">
            <svg className="w-10 h-10 ml-3" viewBox="0 0 40 40" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M17.5014 3.33252C15.2424 3.33271 13.0162 3.87313 11.0085 4.90868C9.00081 5.94423 7.26989 7.44488 5.96013 9.28544C4.65036 11.126 3.79975 13.2531 3.47925 15.4893C3.15874 17.7254 3.37765 20.0058 4.1177 22.1402C4.85774 24.2745 6.09748 26.2009 7.73346 27.7587C9.36944 29.3165 11.3542 30.4605 13.5223 31.0952C15.6903 31.7299 17.9786 31.8369 20.1964 31.4074C22.4142 30.9778 24.4971 30.0241 26.2714 28.6259L32.3581 34.7125C32.6724 35.0161 33.0934 35.1841 33.5304 35.1803C33.9674 35.1765 34.3854 35.0012 34.6944 34.6922C35.0034 34.3832 35.1787 33.9652 35.1825 33.5282C35.1863 33.0912 35.0183 32.6702 34.7147 32.3559L28.6281 26.2692C30.2747 24.1802 31.3 21.6699 31.5866 19.0254C31.8731 16.3809 31.4094 13.7092 30.2484 11.316C29.0875 8.9228 27.2762 6.90478 25.0219 5.49291C22.7676 4.08103 20.1613 3.33234 17.5014 3.33252ZM6.66807 17.4992C6.66807 14.626 7.80943 11.8705 9.84108 9.83886C11.8727 7.80722 14.6282 6.66585 17.5014 6.66585C20.3746 6.66585 23.1301 7.80722 25.1617 9.83886C27.1934 11.8705 28.3347 14.626 28.3347 17.4992C28.3347 20.3724 27.1934 23.1279 25.1617 25.1595C23.1301 27.1912 20.3746 28.3325 17.5014 28.3325C14.6282 28.3325 11.8727 27.1912 9.84108 25.1595C7.80943 23.1279 6.66807 20.3724 6.66807 17.4992Z" fill="#002856" fillOpacity="0.48"/>
            </svg>
            <input 
              type="text" 
              placeholder={"Search Reports \"Dark Web Ransomware Trends\""}
              className="flex-1 text-[28px] text-[#002856]/48 placeholder-[#002856]/48 outline-none ml-4"
            />
          </div>

          {/* Filter Buttons */}
          <div className="absolute left-[162px] top-[210px] flex gap-[33px] items-center">
            {filterButtons.map((button, index) => (
              <button 
                key={index}
                className="bg-[#0050AC] border border-[#D1D1D1] rounded-[20px] px-4 py-2 text-white text-[20px] shadow-md hover:bg-blue-700 transition-colors"
              >
                {button}
              </button>
            ))}
          </div>
        </div>

        {/* Insights Section Header */}
        <div className="absolute left-[84px] top-[326px] flex items-center gap-3">
          <h3 className="text-[41px] font-bold text-[#002856]">Insights</h3>
        </div>

        {/* Sort Dropdown */}
        <div className="absolute left-[1193px] top-[326px] w-[144px]">
          <div className="relative">
            <button 
              onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
              className="w-full h-[48px] bg-white border border-[#002C60] rounded-lg px-3 flex items-center justify-between shadow-lg"
            >
              <span className="text-[20px] text-[#002856]/78">Sort By</span>
              <svg className="w-6 h-6 text-[#002856]/78" viewBox="0 0 25 25" fill="currentColor">
                <path d="M13.0762 15.985C12.9356 16.1255 12.745 16.2043 12.5462 16.2043C12.3475 16.2043 12.1568 16.1255 12.0162 15.985L6.01621 9.98501C5.87576 9.84438 5.79688 9.65376 5.79688 9.45501C5.79688 9.25626 5.87576 9.06563 6.01621 8.92501H19.0762C19.2167 9.06563 19.2956 9.25626 19.2956 9.45501C19.2956 9.65376 19.2167 9.84438 19.0762 9.98501L13.0762 15.985Z"/>
              </svg>
            </button>
            
            {sortDropdownOpen && (
              <div className="absolute top-[60px] left-0 w-full bg-white border border-[#002C60] shadow-lg z-50">
                {['Latest', 'Analyst', 'Topic', 'Most Downloaded'].map((option, index) => (
                  <button
                    key={index}
                    className="w-full h-[29px] px-3 text-[16px] text-[#002856]/78 hover:bg-gray-50 border-b border-[#C3C3C3] last:border-b-0 text-left"
                    onClick={() => setSortDropdownOpen(false)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Research Cards Grid */}
        <div className="absolute left-[84px] top-[422px] w-[1260px]">
          <div className="grid grid-cols-3 gap-x-[27px] gap-y-[40px]">
            {researchData.map((item, index) => (
              <div key={index} className="w-[402px] h-[476px] bg-white border border-[#002856]/56 rounded-[20px] p-6 flex flex-col">
                <h4 className="text-[24px] font-bold text-[#002856] leading-[28px] mb-4 min-h-[56px]">
                  {item.title}
                </h4>

                <div className="flex items-start gap-1 mb-4">
                  <span className="text-[16px] text-[#002856]/56">Posted:</span>
                  <span className="text-[16px] text-[#002856]/56 ml-1">{item.date}</span>
                </div>

                <p className="text-[20px] leading-[28px] text-[#002856] mb-6 flex-grow">
                  {item.description}
                </p>

                <div className="flex items-start gap-1 mb-6">
                  <span className="text-[16px] text-[#002856] font-medium">Source:</span>
                  <span className="text-[16px] text-[#002856]/56 ml-1">{item.source}</span>
                </div>

                <button className="flex items-center gap-2 text-[18px] font-bold text-[#0000D3] hover:text-blue-800 transition-colors mt-auto">
                  {item.link}
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 13 14" fill="none">
                    <path d="M0.216892 12.2514C-0.126566 12.6839 -0.0543845 13.3129 0.378114 13.6564C0.810612 13.9999 1.43965 13.9277 1.78311 13.4952L1 12.8733L0.216892 12.2514ZM11.3218 1.01267C11.2588 0.46399 10.763 0.0702337 10.2143 0.133195L1.27296 1.1592C0.72428 1.22216 0.330524 1.718 0.393485 2.26668C0.456446 2.81537 0.952282 3.20913 1.50097 3.14616L9.44881 2.23416L10.3608 10.182C10.4238 10.7307 10.9196 11.1244 11.4683 11.0615C12.017 10.9985 12.4107 10.5027 12.3478 9.954L11.3218 1.01267ZM1 12.8733L1.78311 13.4952L11.1114 1.74856L10.3283 1.12668L9.54518 0.504789L0.216892 12.2514L1 12.8733Z" fill="#0000D3"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="absolute left-[661px] top-[1986px] flex items-center gap-3">
          <span className="text-[18px] font-bold text-[#0000D3]">View More</span>
          <svg className="w-4 h-5 text-[#0000D3] transform rotate-90" viewBox="0 0 16 18" fill="none">
            <path d="M8.70312 1.37305C8.70312 0.820762 8.25541 0.373047 7.70312 0.373047C7.15084 0.373047 6.70312 0.820762 6.70312 1.37305H7.70312H8.70312ZM6.99602 17.0802C7.38654 17.4707 8.01971 17.4707 8.41023 17.0802L14.7742 10.7162C15.1647 10.3257 15.1647 9.6925 14.7742 9.30198C14.3837 8.91145 13.7505 8.91145 13.36 9.30198L7.70312 14.9588L2.04627 9.30198C1.65575 8.91145 1.02258 8.91145 0.632057 9.30198C0.241533 9.6925 0.241533 10.3257 0.632057 10.7162L6.99602 17.0802ZM7.70312 1.37305H6.70312L6.70312 16.373H7.70312H8.70312L8.70312 1.37305H7.70312Z" fill="#0000D3"/>
          </svg>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="h-[286px] bg-[#FEFEFE] flex items-center justify-center py-6">
        <div className="w-[1313px] h-[238px] bg-[#F3F3F3] flex items-center px-[96px]">
          <div className="flex gap-[46px] w-full items-center">
            <div className="w-[560px]">
              <h3 className="text-[32px] font-bold text-[#002856] mb-3 leading-[38px]">Direct to your inbox</h3>
              <p className="text-[18px] text-black leading-[30px]">
                Sign up for our newsletter with the latest insights, analysis and<br />
                more.
              </p>
            </div>

            <div className="w-[621px]">
              <div className="mb-2">
                <label className="text-[15px] font-bold text-[#002856]">Work Email</label>
              </div>
              <div className="flex">
                <input
                  type="email"
                  className="w-[451px] h-[54px] border border-[#757575] bg-white px-3 text-[16px]"
                  placeholder=""
                />
                <button className="w-[125px] h-[58px] bg-[#0000D3] border-2 border-[#0000D3] text-white rounded flex items-center justify-center hover:bg-blue-800 transition-colors ml-4 -mt-1">
                  <span className="text-[15px] font-bold mr-2">Continue</span>
                  <svg className="w-6 h-6" viewBox="0 0 25 24" fill="none">
                    <circle cx="12.75" cy="12" r="12" fill="white"/>
                    <path d="M6.75 10.8C6.30817 10.8 5.95 11.1582 5.95 11.6C5.95 12.0419 6.30817 12.4 6.75 12.4V11.6V10.8ZM19.3157 12.1657C19.6281 11.8533 19.6281 11.3468 19.3157 11.0344L14.2245 5.94318C13.9121 5.63076 13.4056 5.63076 13.0931 5.94318C12.7807 6.2556 12.7807 6.76213 13.0931 7.07455L17.6186 11.6L13.0931 16.1255C12.7807 16.4379 12.7807 16.9445 13.0931 17.2569C13.4056 17.5693 13.9121 17.5693 14.2245 17.2569L19.3157 12.1657ZM6.75 11.6V12.4H18.75V11.6V10.8H6.75V11.6Z" fill="#0000D3"/>
                  </svg>
                </button>
              </div>
              <p className="text-[12px] text-black mt-2 leading-[18px] max-w-[606px]">
                By clicking the "Continue" button, you are agreeing to the{' '}
                <span className="text-[#0000D3]">Security Council Terms of Use</span>{' '}
                and <span className="text-[#0000D3]">Privacy Policy.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="bg-[#0050AC] py-10">
        <div className="text-center mb-8">
          <h2 className="text-[41px] font-bold text-white">METRICS SECTION</h2>
        </div>

        <div className="flex justify-center gap-6 px-20">
          {metrics.map((metric, index) => (
            <div key={index} className="w-[299px] h-[282px] relative border border-white">
              <img
                src={metric.image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-[56px] font-bold text-white text-shadow-lg mb-2 text-center">
                  {metric.value}
                </div>
                {metric.label && (
                  <div className="text-[24px] font-bold text-white text-center text-shadow-lg">
                    {metric.label}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Divider */}
      <div className="w-[1257px] h-[3px] bg-[#EEE] mx-auto"></div>
    </div>
  );
};

export default LatestInsightPage;
