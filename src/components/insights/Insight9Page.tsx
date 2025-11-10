import React, { useState } from 'react';
import ReportDownloadModal from '../insights/ReportDownloadModal';
import OptimizedImage from '../OptimizedImage';

const Insight9Page: React.FC = () => {

  const [isReportOpen, setIsReportOpen] = useState(false);
  return (

    <div className="bg-white">
      {/* Copied from AIThreatsPage: hero section */}
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="w-full lg:w xl:w">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start">
              <div className="flex-1">
                <h1 className="mb-2 max-w-[34ch] text-3xl font-extrabold leading-tight tracking-tight text-[#002856] sm:max-w-[32ch] sm:text-4xl md:max-w-[30ch] md:text-5xl lg:max-w-[28ch] xl:max-w-[24ch]">
          Outsmart Threats Before They Strike with Proactive Pre-Breach Intelligence
        </h1>

                <p className="text-sm text-slate-600 sm:text-base">
                  By Cyber Security Experts
                  <span className="mx-2 text-slate-400">|</span>
                  Late 2024 - Mid 2025
                </p>
              </div>
              <div className="relative mt-2 w-full sm:w-auto lg:mt-0 lg:w-[360px]">
                <div className="pointer-events-none absolute -top-2 -left-2 h-[calc(100%+0px)] w-[calc(100%+0px)] border border-[#00285633]"></div>
                <OptimizedImage
                  src="/images/aiimg1.webp"
                  alt="Dark web code screenshot indicating threat activity"
                  className="relative z-10 w-full rounded-sm border border-[#D0D7E2] shadow-sm"
                  eager
                />
                <div className="absolute bottom-2 left-2 right-2 z-20 rounded bg-black/60 px-2 py-1 text-[10px] font-medium leading-3 text-white">
                  Analyst‑Verified | Risk Score: 8.9 | Source: Dark Web Market X-74
                </div>
              </div>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-[#002856] sm:text-[28px]">Meta Description:</h2>
            <p className="mt-3 max-w-[78ch] text-base leading-7 text-slate-800 sm:max-w-[74ch] sm:text-lg sm:leading-8 md:max-w-[70ch] lg:max-w-none xl:max-w-none">
              Discover how pre-breach intelligence helps organisations detect cyber threats early, prevent attacks, and stay ahead with proactive AI-driven cybersecurity strategies.
            </p>
            <p className="mt-4 max-w-[78ch] text-base leading-7 text-slate-800 sm:max-w-[74ch] sm:text-lg sm:leading-8 md:max-w-[70ch] lg:max-w-none xl:max-w-none">
              In today’s threat landscape attackers do more than probe and hit. They study your footprint, test your responses, and adapt inside minutes. By 2025 AI in cybersecurity is no longer experimental. It helps defenders, and it helps attackers. That shift means the old model of wait for an alert then respond is no longer enough.
            </p>
            <p className="mt-4 max-w-[78ch] text-base leading-7 text-slate-800 sm:max-w-[74ch] sm:text-lg sm:leading-8 md:max-w-[70ch] lg:max-w-none xl:max-w-none">
              Pre-breach intelligence changes the frame. It looks for the early signs, tracks dark web chatter, and maps exposed assets so teams see risk before it becomes an incident. Combined with AI-powered cybersecurity tools and focused cyber threat intelligence, it gives security leaders time to act with clarity. In this post we will explain what pre-breach intelligence actually does, how attackers use stealth techniques today, and practical steps your team can take to get ahead.
            </p>
          </div>
        </div>
      </section>


      <section className="mx-auto w-full max-w-7xl px-4 py-2 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="w-full lg:w-[95%]">
            <h2 className="text-3xl font-bold leading-tight text-[#002856] sm:text-[28px]">What Is Pre-Breach Intelligence (And Why It Matters Now)</h2>
            <p className="mt-4 text-base leading-7 text-slate-800 sm:text-lg sm:leading-8">
              Cybersecurity has always focused on defence, but in 2025, that approach alone isn't enough. Attackers are now using AI-powered cybersecurity tools to predict, adapt, and strike faster than ever. That's where pre-breach intelligence steps in. It's a proactive form of cyber threat intelligence that detects weak spots long before a breach happens.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-800 sm:text-lg sm:leading-8">
              Instead of waiting for alerts, pre-breach intelligence looks for early warning signs hidden in global threat networks and dark web activity. It focuses on uncovering potential risks before they become full-scale attacks.
            </p>
            <p className="mt-6 ml-8 text-base font-semibold text-black sm:text-lg">Here's what it does in practice:</p>
            <div className="relative ml-12 mt-4 w-[80%]">
              <ul className="mb-12 list-disc space-y-3 pl-6 text-xl leading-7 sm:text-2xl sm:leading-8">
                <li className="text-[rgba(0,40,86,1)] font-semibold">Collects data from hacker forums, dark web listings, and underground channels.</li>
                <li className="text-[rgba(0,40,86,1)] font-semibold blur-[2px] select-none">Identifies exposed assets, leaked credentials, or vulnerabilities tied to your organisation.</li>
                <li className="text-[rgba(0,40,86,1)] font-semibold blur-[3px] opacity-90 select-none">Correlates patterns from multiple threat sources to predict who might target you next.</li>
                <li className="text-[rgba(0,40,86,1)] font-semibold blur-[4px] opacity-70 select-none">Equips cybersecurity teams with insights to act before attackers make their move.</li>
              </ul>
              <div className="pointer-events-auto absolute left-1/2 top-[calc(100%-3rem)]">
                <button
                  type="button"
                  onClick={() => setIsReportOpen(true)}
                  className="inline-flex items-center gap-2 rounded-[8px] bg-[#082BFF] px-8 py-2.5 text-base font-bold text-white shadow-[0_8px_24px_rgba(8,43,255,0.22)] transition-transform duration-200 hover:scale-[1.02]"
                >
                  Download Full Report
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 14a1 1 0 001 1h12a1 1 0 001-1v-2h-2v1H5v-1H3v2zm7-1l4-4h-3V3H9v6H6l4 4z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Desktop Reputational Stakes section copied from WhoWeGuidePage */}
      <section className="relative hidden h-[518px] bg-[#0050AC] xl:block -mt-20">
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
              <path fillRule="evenodd" clipRule="evenodd" d="M8.49658 4.11867C10.6947 2.81759 11.7932 2.1665 13 2.1665C14.2068 2.1665 15.3053 2.8165 17.5034 4.11867L18.2466 4.5585C20.4447 5.86067 21.5432 6.51175 22.1466 7.58317C22.75 8.65567 22.75 9.95567 22.75 12.56V13.4397C22.75 16.0429 22.75 17.3451 22.1466 18.4165C21.5432 19.4879 20.4447 20.139 18.2466 21.4401L17.5034 21.881C15.3053 23.1821 14.2068 23.8332 13 23.8332C11.7932 23.8332 10.6947 23.1832 8.49658 21.881L7.75342 21.4401C5.55533 20.1401 4.45683 19.4879 3.85342 18.4165C3.25 17.344 3.25 16.044 3.25 13.4397V12.56C3.25 9.95567 3.25 8.65459 3.85342 7.58317C4.45683 6.51175 5.55533 5.86067 7.75342 4.5585L8.49658 4.11867ZM14.0833 17.3332C14.0833 17.6205 13.9692 17.896 13.766 18.0992C13.5629 18.3024 13.2873 18.4165 13 18.4165C12.7127 18.4165 12.4371 18.3024 12.234 18.0992C12.0308 17.896 11.9167 17.6205 11.9167 17.3332C11.9167 17.0459 12.0308 16.7703 12.234 16.5671C12.4371 16.364 12.7127 16.2498 13 16.2498C13.2873 16.2498 13.5629 16.364 13.766 16.5671C13.9692 16.7703 14.0833 17.0459 14.0833 17.3332ZM13 6.77067C13.2155 6.77067 13.4222 6.85627 13.5745 7.00865C13.7269 7.16102 13.8125 7.36768 13.8125 7.58317V14.0832C13.8125 14.2987 13.7269 14.5053 13.5745 14.6577C13.4222 14.8101 13.2155 14.8957 13 14.8957C12.7845 14.8957 12.5778 14.8101 12.4255 14.6577C12.2731 14.5053 12.1875 14.2987 12.1875 14.0832V7.58317C12.1875 7.36768 12.2731 7.16102 12.4255 7.00865C12.5578 6.85627 12.7845 6.77067 13 6.77067Z" />
            </svg>
          </button>
        </div>
        {/* Background Image */}
        <div className="absolute right-[98px] top-[179px] w-[332px] h-[217px] border border-white"></div>
        <OptimizedImage className="absolute right-[82px] top-[164px] w-[332px] h-[217px] shadow-lg" src="/who-we-guide/backgrounds/reputational-stakes.webp" alt="" />
      </section>

      {/* More Insights duplicated at page end */}
      <section className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-0 mt-12 mb-12">
        <h2 className="mb-6 text-2xl sm:text-3xl lg:text-[41px] font-bold text-[#002856]">More Insights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[27px]">
          <div className="w-full max-w-[400px] lg:max-w-[402px] h-auto lg:h-[476px] bg-white border border-[#002856]/56 rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 flex flex-col">
            <h4 className="text-lg sm:text-xl lg:text-[24px] font-bold text-[#002856] leading-tight lg:leading-[28px] mb-3 sm:mb-4 min-h-[3rem] lg:min-h-[56px]">Dark Web Ransomware Trends: 8-Month Intelligence Study</h4>
            <div className="flex items-start gap-1 mb-3 sm:mb-4">
              <span className="text-sm sm:text-base lg:text-[16px] text-[#002856]/56">Posted:</span>
              <span className="text-sm sm:text-base lg:text-[16px] text-[#002856]/56 ml-1">June 28, 2025</span>
            </div>
            <p className="text-sm sm:text-lg lg:text-[20px] leading-relaxed lg:leading-[28px] text-[#002856] mb-4 sm:mb-6 flex-grow">Strategic review of ransomware operations across the dark web, revealing group shifts, affiliate dynamics and AI‑driven extortion trends impacting critical sectors and global incident response.</p>
            <div className="flex items-start gap-1 mb-4 sm:mb-6">
              <span className="text-sm sm:text-base lg:text-[16px] text-[#002856] font-medium">Source:</span>
              <span className="text-sm sm:text-base lg:text-[16px] text-[#002856]/56 ml-1">Dr. Sarah Chen, Threat Intelligence Lead</span>
            </div>
            <button onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); }} className="flex items-center gap-2 text-sm sm:text-base lg:text-[18px] font-bold text-[#0000D3] hover:text-blue-800 transition-colors mt-auto">View Ransomware Group Insights<svg className="w-3 sm:w-4 h-3 sm:h-4 flex-shrink-0" viewBox="0 0 13 14" fill="none"><path d="M0.216892 12.2514C-0.126566 12.6839 -0.0543845 13.3129 0.378114 13.6564C0.810612 13.9999 1.43965 13.9277 1.78311 13.4952L1 12.8733L0.216892 12.2514ZM11.3218 1.01267C11.2588 0.46399 10.763 0.0702337 10.2143 0.133195L1.27296 1.1592C0.72428 1.22216 0.330524 1.718 0.393485 2.26668C0.456446 2.81537 0.952282 3.20913 1.50097 3.14616L9.44881 2.23416L10.3608 10.182C10.4238 10.7307 10.9196 11.1244 11.4683 11.0615C12.017 10.9985 12.4107 10.5027 12.3478 9.954L11.3218 1.01267ZM1 12.8733L1.78311 13.4952L11.1114 1.74856L10.3283 1.12668L9.54518 0.504789L0.216892 12.2514L1 12.8733Z" fill="#0000D3" /></svg></button>
          </div>
          <div className="w-full max-w-[400px] lg:max-w-[402px] h-auto lg:h-[476px] bg-white border border-[#002856]/56 rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 flex flex-col">
            <h4 className="text-lg sm:text-xl lg:text-[24px] font-bold text-[#002856] leading-tight lg:leading-[28px] mb-3 sm:mb-4 min-h-[3rem] lg:min-h-[56px]">AI‑Powered Threats: 12‑Month Research Analysis</h4>
            <div className="flex items-start gap-1 mb-3 sm:mb-4">
              <span className="text-sm sm:text-base lg:text-[16px] text-[#002856]/56">Posted:</span>
              <span className="text-sm sm:text-base lg:text-[16px] text-[#002856]/56 ml-1">July 15, 2025</span>
            </div>
            <p className="text-sm sm:text-lg lg:text-[20px] leading-relaxed lg:leading-[28px] text-[#002856] mb-4 sm:mb-6 flex-grow">Comprehensive analysis of key AI‑driven cyber threats observed over the past year, including social engineering, polymorphic malware, AI‑as‑a‑Service and attacks targeting AI systems.</p>
            <div className="flex items-start gap-1 mb-4 sm:mb-6">
              <span className="text-sm sm:text-base lg:text-[16px] text-[#002856] font-medium">Source:</span>
              <span className="text-sm sm:text-base lg:text-[16px] text-[#002856]/56 ml-1">Fei‑Fei Li, Senior Analyst</span>
            </div>
            <button onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); }} className="flex items-center gap-2 text-sm sm:text-base lg:text-[18px] font-bold text-[#0000D3] hover:text-blue-800 transition-colors mt-auto">Access Full AI Threat Intelligence<svg className="w-3 sm:w-4 h-3 sm:h-4 flex-shrink-0" viewBox="0 0 13 14" fill="none"><path d="M0.216892 12.2514C-0.126566 12.6839 -0.0543845 13.3129 0.378114 13.6564C0.810612 13.9999 1.43965 13.9277 1.78311 13.4952L1 12.8733L0.216892 12.2514ZM11.3218 1.01267C11.2588 0.46399 10.763 0.0702337 10.2143 0.133195L1.27296 1.1592C0.72428 1.22216 0.330524 1.718 0.393485 2.26668C0.456446 2.81537 0.952282 3.20913 1.50097 3.14616L9.44881 2.23416L10.3608 10.182C10.4238 10.7307 10.9196 11.1244 11.4683 11.0615C12.017 10.9985 12.4107 10.5027 12.3478 9.954L11.3218 1.01267ZM1 12.8733L1.78311 13.4952L11.1114 1.74856L10.3283 1.12668L9.54518 0.504789L0.216892 12.2514L1 12.8733Z" fill="#0000D3" /></svg></button>
          </div>
          <div className="w-full max-w-[400px] lg:max-w-[402px] h-auto lg:h-[476px] bg-white border border-[#002856]/56 rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 flex flex-col">
            <h4 className="text-lg sm:text-xl lg:text-[24px] font-bold text-[#002856] leading-tight lg:leading-[28px] mb-3 sm:mb-4 min-h-[3rem] lg:min-h-[56px]">Credential Leak Intelligence: Analysis of 300+ Incidents</h4>
            <div className="flex items-start gap-1 mb-3 sm:mb-4">
              <span className="text-sm sm:text-base lg:text-[16px] text-[#002856]/56">Posted:</span>
              <span className="text-sm sm:text-base lg:text-[16px] text-[#002856]/56 ml-1">June 10, 2025</span>
            </div>
            <p className="text-sm sm:text-lg lg:text-[20px] leading-relaxed lg:leading-[28px] text-[#002856] mb-4 sm:mb-6 flex-grow">Credential‑based attacks across cloud, VPN and identity systems, revealing breach patterns and the growing impact of infostealer malware.</p>
            <div className="flex items-start gap-1 mb-4 sm:mb-6">
              <span className="text-sm sm:text-base lg:text-[16px] text-[#002856] font-medium">Source:</span>
              <span className="text-sm sm:text-base lg:text-[16px] text-[#002856]/56 ml-1">Michael Rodriguez, Security Researcher</span>
            </div>
            <button onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); }} className="flex items-center gap-2 text-sm sm:text-base lg:text-[18px] font-bold text-[#0000D3] hover:text-blue-800 transition-colors mt-auto">View Credential Compromise Patterns<svg className="w-3 sm:w-4 h-3 sm:h-4 flex-shrink-0" viewBox="0 0 13 14" fill="none"><path d="M0.216892 12.2514C-0.126566 12.6839 -0.0543845 13.3129 0.378114 13.6564C0.810612 13.9999 1.43965 13.9277 1.78311 13.4952L1 12.8733L0.216892 12.2514ZM11.3218 1.01267C11.2588 0.46399 10.763 0.0702337 10.2143 0.133195L1.27296 1.1592C0.72428 1.22216 0.330524 1.718 0.393485 2.26668C0.456446 2.81537 0.952282 3.20913 1.50097 3.14616L9.44881 2.23416L10.3608 10.182C10.4238 10.7307 10.9196 11.1244 11.4683 11.0615C12.017 10.9985 12.4107 10.5027 12.3478 9.954L11.3218 1.01267ZM1 12.8733L1.78311 13.4952L11.1114 1.74856L10.3283 1.12668L9.54518 0.504789L0.216892 12.2514L1 12.8733Z" fill="#0000D3" /></svg></button>
          </div>
        </div>
      </section>

      <ReportDownloadModal open={isReportOpen} onClose={() => setIsReportOpen(false)} />
    </div>
  );
};

export default Insight9Page;



