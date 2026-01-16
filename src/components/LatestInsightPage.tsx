import React, { useMemo, useState } from 'react';
import { getInsightRouteForTitle } from './insightRoutes';
import OptimizedImage from './OptimizedImage';

interface LatestInsightPageProps {
  onNavigate?: (page: string) => void;
}

const LatestInsightPage: React.FC<LatestInsightPageProps> = ({ onNavigate }) => {
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All Research');
  const [selectedSort, setSelectedSort] = useState<'Latest' | 'Analyst' | 'Topic' | 'Most Downloaded'>('Topic');

  const researchData = useMemo(() => ([
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
    },
    {
      title: "Outsmart Threats Before They Strike with Proactive Pre-Breach Intelligence",
      date: "June 10, 2025",
      description: "Discover how pre-breach intelligence helps organisations detect cyber threats early, prevent attacks, and stay ahead with proactive AI-driven cybersecurity strategies.",
      source: "Michael Rodriguez, Security Researcher",
      link: "Access pre-breach intelligence"
    }
  ]), []);

  const filterButtons = [
    "All Research",
    "Threat Actor Studies",
    "Industry Analysis", 
    "Emerging Threats",
    "Intelligence Briefs"
  ];

  const splitFilterButtons = (() => {
    const midPoint = Math.ceil(filterButtons.length / 2);
    return [
      filterButtons.slice(0, midPoint),
      filterButtons.slice(midPoint)
    ].filter((group) => group.length > 0);
  })();

  const deriveCategory = (title: string): string => {
    const t = title.toLowerCase();
    if (t.includes('weekly') || t.includes('brief')) return 'Intelligence Briefs';
    if (t.includes('threat actor')) return 'Threat Actor Studies';
    if (t.includes('sector') || t.includes('industry') || t.includes('healthcare') || t.includes('financial') || t.includes('infrastructure')) return 'Industry Analysis';
    if (t.includes('emerging') || t.includes('ransomware') || t.includes('ai-powered') || t.includes('credential')) return 'Emerging Threats';
    return 'All Research';
  };

  type InsightItem = typeof researchData[number] & { category: string };

  const filteredSortedData: InsightItem[] = useMemo(() => {
    const withCategory: InsightItem[] = researchData.map((item) => ({ ...item, category: deriveCategory(item.title) }));
    const q = searchQuery.trim().toLowerCase();
    const matchesQuery = (item: InsightItem) =>
      q === '' || item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q) || item.source.toLowerCase().includes(q);
    const matchesFilter = (item: InsightItem) => activeFilter === 'All Research' || item.category === activeFilter;
    const filtered = withCategory.filter((i) => matchesQuery(i) && matchesFilter(i));
    const parseDate = (d: string) => new Date(d).getTime() || 0;
    filtered.sort((a, b) => {
      switch (selectedSort) {
        case 'Analyst':
          return a.source.localeCompare(b.source);
        case 'Topic':
          return a.category.localeCompare(b.category) || b.title.localeCompare(a.title);
        case 'Most Downloaded':
          return parseDate(b.date) - parseDate(a.date);
        case 'Latest':
        default:
          return parseDate(b.date) - parseDate(a.date);
      }
    });
    return filtered;
  }, [researchData, searchQuery, activeFilter, selectedSort]);

  const metrics = [
    { value: "500+", label: "Reports Published", image: "/latest-insights/metrics/reports-published.webp" },
    { value: "15+", label: "Analysts", image: "/latest-insights/metrics/analysts.webp" },
    { value: "24", label: "Countries Studied", image: "/latest-insights/metrics/countries-studied.webp" },
    { value: "Updated Weekly", label: "", image: "/latest-insights/metrics/updated-weekly.webp" }
  ];

  return (
    <div className="w-full">
{/* Hero Section */}
<div
  className="relative w-full h-[60vh] min-h-[400px] max-h-[700px] bg-cover bg-center latest-insights-hero"
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/20"></div>

  {/* Content Box */}
  <div className="absolute inset-0 flex justify-center lg:justify-start items-start lg:items-stretch px-4 sm:px-10 lg:px-20 py-6 sm:py-8">
    <div className="w-full h-auto lg:h-full max-w-[94%] sm:max-w-[92%] md:max-w-[780px] lg:max-w-[860px] xl:max-w-[940px] 2xl:max-w-[1000px] bg-[#FFFFFFE5] p-5 sm:p-8 lg:p-10 shadow-lg border-l-0 lg:border-l-4 border-[#0050AC] flex items-center text-center lg:text-left">
      <div className="w-full">
        <h1 className="text-[30px] leading-[38px] sm:text-[42px] sm:leading-tight lg:text-[52px] font-bold text-[#002856] mb-4">
          Research Hub: Intelligence You Can Act On
        </h1>
        <p className="text-[15px] leading-[26px] sm:text-[18px] sm:leading-relaxed lg:text-[20px] text-gray-700">
          The Security Council Research Hub delivers independent, analyst-grade
          intelligence on global cyber threats, emerging risks and sector-specific
          vulnerabilities. Here you’ll find in-depth reports, trend analyses and
          strategic assessments designed for executive decision-making. As a trusted
          authority, we provide actionable, data-driven insights that cut through
          noise, empowering leaders to anticipate, prepare and respond with confidence.
        </p>
      </div>
    </div>
  </div>
</div>


      {/* Main Content Section */}
      <div className="bg-[#FEFEFE] relative mt-0 pb-16 sm:pb-24 lg:pb-32">
        {/* Blue Header */}
        <div className="w-full bg-[#0050AC] relative flex flex-col items-center justify-center px-4 sm:px-8 lg:px-20 py-10 sm:py-12 lg:py-16 gap-4 sm:gap-6 lg:gap-8">
          {/* Title - Centered */}
          <div className="text-center px-2">
            <h2 className="text-xl sm:text-3xl lg:text-[41px] font-bold leading-tight text-white">
              Latest Cybersecurity Research & Intelligence Reports
            </h2>
          </div>

          {/* Search Bar - Centered */}
          <div className="w-full max-w-[900px]">
            <div className="w-full h-[50px] sm:h-[58px] lg:h-[66px] bg-white rounded-[18px] sm:rounded-[22px] lg:rounded-[26px] border border-[#B1B1B1] shadow-lg flex items-center px-3 sm:px-4">
              <svg className="w-6 sm:w-7 lg:w-10 h-6 sm:h-7 lg:h-10 ml-1 sm:ml-2" viewBox="0 0 40 40" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M17.5014 3.33252C15.2424 3.33271 13.0162 3.87313 11.0085 4.90868C9.00081 5.94423 7.26989 7.44488 5.96013 9.28544C4.65036 11.126 3.79975 13.2531 3.47925 15.4893C3.15874 17.7254 3.37765 20.0058 4.1177 22.1402C4.85774 24.2745 6.09748 26.2009 7.73346 27.7587C9.36944 29.3165 11.3542 30.4605 13.5223 31.0952C15.6903 31.7299 17.9786 31.8369 20.1964 31.4074C22.4142 30.9778 24.4971 30.0241 26.2714 28.6259L32.3581 34.7125C32.6724 35.0161 33.0934 35.1841 33.5304 35.1803C33.9674 35.1765 34.3854 35.0012 34.6944 34.6922C35.0034 34.3832 35.1787 33.9652 35.1825 33.5282C35.1863 33.0912 35.0183 32.6702 34.7147 32.3559L28.6281 26.2692C30.2747 24.1802 31.3 21.6699 31.5866 19.0254C31.8731 16.3809 31.4094 13.7092 30.2484 11.316C29.0875 8.9228 27.2762 6.90478 25.0219 5.49291C22.7676 4.08103 20.1613 3.33234 17.5014 3.33252ZM6.66807 17.4992C6.66807 14.626 7.80943 11.8705 9.84108 9.83886C11.8727 7.80722 14.6282 6.66585 17.5014 6.66585C20.3746 6.66585 23.1301 7.80722 25.1617 9.83886C27.1934 11.8705 28.3347 14.626 28.3347 17.4992C28.3347 20.3724 27.1934 23.1279 25.1617 25.1595C23.1301 27.1912 20.3746 28.3325 17.5014 28.3325C14.6282 28.3325 11.8727 27.1912 9.84108 25.1595C7.80943 23.1279 6.66807 20.3724 6.66807 17.4992Z" fill="#002856" fillOpacity="0.48"/>
            </svg>
              <input
                type="text"
                placeholder={"Search Reports \"Dark Web Ransomware Trends\""}
                className="flex-1 text-base sm:text-lg lg:text-[26px] text-[#002856]/48 placeholder-[#002856]/48 outline-none ml-2 sm:ml-3"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Filter Buttons - Centered in horizontal row */}
          <div className="w-full max-w-[900px]">
            <div className="hidden lg:flex flex-nowrap justify-center items-center gap-3 lg:gap-[24px] px-1 sm:px-3 pb-1" role="tablist" aria-label="Filter categories" aria-orientation="horizontal">
              {filterButtons.map((button, index) => (
                <button
                  key={`desktop-${index}`}
                  type="button"
                  role="tab"
                  className={`flex-shrink-0 border border-[#D1D1D1] rounded-[20px] px-4 py-2 text-sm lg:text-[20px] shadow-md transition-colors whitespace-nowrap ${activeFilter === button ? 'bg-[#0000D3] text-white' : 'bg-[#0C5ACC] text-white/90 hover:bg-blue-700'}`}
                  onClick={() => setActiveFilter(button)}
                >
                  {button}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-2 w-full px-1 sm:px-3 lg:hidden" role="tablist" aria-label="Filter categories (mobile)" aria-orientation="horizontal">
              {splitFilterButtons.map((group, groupIndex) => (
                <div key={`mobile-group-${groupIndex}`} className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {group.map((button, index) => (
                    <button
                      key={`mobile-${groupIndex}-${index}`}
                      type="button"
                      role="tab"
                      className={`min-w-[108px] sm:min-w-[130px] border border-[#D1D1D1] rounded-[16px] px-3 py-2 text-xs sm:text-sm shadow-md transition-colors text-center whitespace-nowrap ${activeFilter === button ? 'bg-[#0000D3] text-white' : 'bg-[#0C5ACC] text-white/90 hover:bg-blue-700'}`}
                      onClick={() => setActiveFilter(button)}
                    >
                      {button}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Insights Section Header and Sort Controls */}
        <div className="w-full max-w-[1280px] px-4 sm:px-8 lg:px-0 mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 mt-6 sm:mt-8 lg:mt-10">
          <h3 className="text-2xl sm:text-3xl lg:text-[41px] font-bold text-[#002856]">Insights</h3>

          {/* Sort Dropdown */}
          <div className="w-full sm:max-w-[240px] lg:w-[192px] lg:ml-auto">
            <div className="relative">
              <button
                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                className="w-full h-[40px] sm:h-[45px] lg:h-[48px] bg-white border border-[#002C60] rounded-lg px-2 sm:px-3 flex items-center justify-between shadow-lg"
              >
                <span className="text-sm sm:text-lg lg:text-[20px] text-[#002856]/78 whitespace-nowrap overflow-hidden text-ellipsis">{selectedSort}</span>
                <svg className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-[#002856]/78" viewBox="0 0 25 25" fill="currentColor">
                  <path d="M13.0762 15.985C12.9356 16.1255 12.745 16.2043 12.5462 16.2043C12.3475 16.2043 12.1568 16.1255 12.0162 15.985L6.01621 9.98501C5.87576 9.84438 5.79688 9.65376 5.79688 9.45501C5.79688 9.25626 5.87576 9.06563 6.01621 8.92501H19.0762C19.2167 9.06563 19.2956 9.25626 19.2956 9.45501C19.2956 9.65376 19.2167 9.84438 19.0762 9.98501L13.0762 15.985Z"/>
                </svg>
              </button>

              {sortDropdownOpen && (
                <div className="absolute top-[50px] sm:top-[55px] lg:top-[60px] left-0 w-full bg-white border border-[#002C60] shadow-lg z-50">
                  {(['Latest', 'Analyst', 'Topic', 'Most Downloaded'] as const).map((option, index) => (
                    <button
                      key={index}
                      className="w-full h-[25px] sm:h-[28px] lg:h-[29px] px-2 sm:px-3 text-sm sm:text-base lg:text-[16px] text-[#002856]/78 hover:bg-gray-50 border-b border-[#C3C3C3] last:border-b-0 text-left"
                      onClick={() => { setSelectedSort(option); setSortDropdownOpen(false); }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Research Cards Grid */}
        <div className="w-full max-w-[1280px] px-4 sm:px-8 lg:px-0 mx-auto mt-4 sm:mt-6 lg:mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[27px] justify-items-center lg:justify-items-stretch place-items-center lg:place-items-stretch">
            {filteredSortedData.map((item, index) => (
              <div key={index} className="w-full max-w-[400px] lg:max-w-[402px] h-auto lg:h-[476px] bg-white border border-[#002856]/56 rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 flex flex-col">
                <h4 className="text-lg sm:text-xl lg:text-[24px] font-bold text-[#002856] leading-tight lg:leading-[28px] mb-3 sm:mb-4 min-h-[3rem] lg:min-h-[56px]">
                  {item.title}
                </h4>

                <div className="flex items-start gap-1 mb-3 sm:mb-4">
                  <span className="text-sm sm:text-base lg:text-[16px] text-[#002856]/56">Posted:</span>
                  <span className="text-sm sm:text-base lg:text-[16px] text-[#002856]/56 ml-1">{item.date}</span>
                </div>

                <p className="text-sm sm:text-lg lg:text-[20px] leading-relaxed lg:leading-[28px] text-[#002856] mb-4 sm:mb-6 flex-grow">
                  {item.description}
                </p>

                <div className="flex items-start gap-1 mb-4 sm:mb-6">
                  <span className="text-sm sm:text-base lg:text-[16px] text-[#002856] font-medium">Source:</span>
                  <span className="text-sm sm:text-base lg:text-[16px] text-[#002856]/56 ml-1">{item.source}</span>
                </div>

                <button
                  className="flex items-center gap-2 text-sm sm:text-base lg:text-[18px] font-bold text-[#0000D3] hover:text-blue-800 transition-colors mt-auto"
                  onClick={() => {
                    const absoluteIndex = researchData.findIndex((d) => d.title === item.title);
                    const route = getInsightRouteForTitle(item.title) || `insight-${absoluteIndex + 1}`;
                    onNavigate?.(route);
                  }}
                >
                  {item.link}
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 flex-shrink-0" viewBox="0 0 13 14" fill="none">
                    <path d="M0.216892 12.2514C-0.126566 12.6839 -0.0543845 13.3129 0.378114 13.6564C0.810612 13.9999 1.43965 13.9277 1.78311 13.4952L1 12.8733L0.216892 12.2514ZM11.3218 1.01267C11.2588 0.46399 10.763 0.0702337 10.2143 0.133195L1.27296 1.1592C0.72428 1.22216 0.330524 1.718 0.393485 2.26668C0.456446 2.81537 0.952282 3.20913 1.50097 3.14616L9.44881 2.23416L10.3608 10.182C10.4238 10.7307 10.9196 11.1244 11.4683 11.0615C12.017 10.9985 12.4107 10.5027 12.3478 9.954L11.3218 1.01267ZM1 12.8733L1.78311 13.4952L11.1114 1.74856L10.3283 1.12668L9.54518 0.504789L0.216892 12.2514L1 12.8733Z" fill="#0000D3"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* View More Button (moved to follow the grid) */}
          <div className="flex items-center justify-center gap-3 mt-8 sm:mt-10 lg:mt-12">
            <span className="text-sm sm:text-base lg:text-[18px] font-bold text-[#0000D3]">View More</span>
            <svg className="w-4 h-4 text-[#0000D3]" viewBox="0 0 16 16" fill="none">
              <path d="M4 6L8 10L12 6" stroke="#0000D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        
      </div>

      {/* Newsletter Section */}
      <div className="h-auto sm:h-[286px] bg-[#FEFEFE] flex items-center justify-center py-6">
        <div className="w-[95%] sm:w-[90%] lg:w-[1313px] h-auto lg:h-[238px] bg-[#F3F3F3] flex items-center px-4 sm:px-8 lg:px-[96px]">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[46px] w-full items-center lg:items-center">
            <div className="w-full lg:w-[560px] text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-[#002856] mb-2 sm:mb-3 leading-tight lg:leading-[38px]">Direct to your inbox</h3>
              <p className="text-sm sm:text-base lg:text-[18px] text-black leading-relaxed lg:leading-[30px]">
                Sign up for our newsletter with the latest insights, analysis and<br className="hidden sm:block lg:hidden" />
                <span className="sm:hidden lg:inline"> </span>more.
              </p>
            </div>

              <div className="w-full lg:w-[621px]">
              <div className="mb-2">
                <label htmlFor="newsletterEmail" className="text-sm sm:text-base lg:text-[15px] font-bold text-[#002856]">Work Email</label>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
                <input
                  id="newsletterEmail"
                  type="email"
                  className="w-full sm:w-[451px] h-[50px] sm:h-[54px] border border-[#757575] bg-white px-3 text-sm sm:text-base lg:text-[16px]"
                  placeholder="you@company.com"
                  aria-label="Work Email"
                />
                <button className="w-full sm:w-[125px] h-[50px] sm:h-[58px] bg-[#0000D3] border-2 border-[#0000D3] text-white rounded flex items-center justify-center hover:bg-blue-800 transition-colors sm:ml-4 -mt-1">
                  <span className="text-sm sm:text-base lg:text-[15px] font-bold mr-2">Continue</span>
                  <svg className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" viewBox="0 0 25 24" fill="none">
                    <circle cx="12.75" cy="12" r="12" fill="white"/>
                    <path d="M6.75 10.8C6.30817 10.8 5.95 11.1582 5.95 11.6C5.95 12.0419 6.30817 12.4 6.75 12.4V11.6V10.8ZM19.3157 12.1657C19.6281 11.8533 19.6281 11.3468 19.3157 11.0344L14.2245 5.94318C13.9121 5.63076 13.4056 5.63076 13.0931 5.94318C12.7807 6.2556 12.7807 6.76213 13.0931 7.07455L17.6186 11.6L13.0931 16.1255C12.7807 16.4379 12.7807 16.9445 13.0931 17.2569C13.4056 17.5693 13.9121 17.5693 14.2245 17.2569L19.3157 12.1657ZM6.75 11.6V12.4H18.75V11.6V10.8H6.75V11.6Z" fill="#0000D3"/>
                  </svg>
                </button>
              </div>
              <p className="text-xs sm:text-sm lg:text-[12px] text-black mt-2 leading-relaxed lg:leading-[18px] max-w-full lg:max-w-[606px]">
                By clicking the "Continue" button, you are agreeing to the{' '}
                <span className="text-[#0000D3]">Security Council Terms of Use</span>{' '}
                and <span className="text-[#0000D3]">Privacy Policy.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="bg-[#0050AC] py-8 sm:py-10">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-[41px] font-bold text-white px-4">METRICS SECTION</h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4 sm:px-8 lg:px-20">
          {metrics.map((metric, index) => (
            <div key={index} className="w-[280px] sm:w-[299px] h-[250px] sm:h-[282px] relative border border-white">
              <OptimizedImage
                src={metric.image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-3xl sm:text-4xl lg:text-[56px] font-bold text-white text-shadow-lg mb-1 sm:mb-2 text-center">
                  {metric.value}
                </div>
                {metric.label && (
                  <div className="text-lg sm:text-xl lg:text-[24px] font-bold text-white text-center text-shadow-lg">
                    {metric.label}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Divider */}
      <div className="w-[90%] sm:w-[95%] lg:w-[1257px] h-[3px] bg-[#EEE] mx-auto"></div>
    </div>
  );
};

export default LatestInsightPage;
