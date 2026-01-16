import React, { useState } from 'react';
import ReportDownloadModal from '../insights/ReportDownloadModal';
import OptimizedImage from '../OptimizedImage';

const Insight6Page: React.FC = () => {

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
          Critical Infrastructure Vulnerabilities: Research Brief
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
            <h2 className="mt-4 text-xl font-bold text-[#002856]">I. Executive Summary</h2>
            <p className="mt-2 max-w-[78ch] text-base leading-7 text-slate-800 sm:max-w-[74ch] sm:text-lg sm:leading-8 md:max-w-[70ch] lg:max-w-none xl:max-w-none">
              The global cybersecurity landscape continues to intensify, with critical infrastructure sectors facing an unprecedented array of sophisticated and rapidly evolving threats. Our 12-month study, spanning 2024 to mid-2025, reveals a strategic shift by adversaries towards identity-based attacks, highly disruptive ransomware campaigns, and exploitation of complex supply chains, often amplified by the pervasive integration of Artificial Intelligence. These trends underscore a critical need for organizations to move beyond traditional perimeter defenses, focusing instead on a holistic, Zero Trust-aligned security posture that prioritizes rapid detection, robust response, and continuous adaptation to emerging TTPs.
            </p>
            <p className="mt-4 max-w-[78ch] text-base leading-7 text-slate-800 sm:max-w-[74ch] sm:text-lg sm:leading-8 md:max-w-[70ch] lg:max-w-none xl:max-w-none">
              Key findings indicate that while traditional exploits remain prevalent, the surge in stolen credentials and advanced social engineering tactics, often AI-accelerated, now represent primary initial access vectors. Critical sectors such as Financial Services and Healthcare are disproportionately targeted, experiencing significant data breaches, operational disruptions, and escalating compliance pressures. The commodification of initial access and the increasing focus on operational technology (OT) environments highlight systemic vulnerabilities that demand urgent, multi-layered defensive strategies.
            </p>
            <p className="mt-4 max-w-[78ch] text-base leading-7 text-slate-800 sm:max-w-[74ch] sm:text-lg sm:leading-8 md:max-w-[70ch] lg:max-w-none xl:max-w-none">
              To safeguard national security and economic stability, CISOs and SOC teams must prioritize the implementation of phishing-resistant MFA, comprehensive identity and access management, proactive threat hunting, and rigorous third-party risk management. Furthermore, investing in AI-driven defensive tools and fostering a culture of continuous security awareness are paramount to building resilience against the sophisticated, AI-powered attacks that define the current threat environment.
            </p>
            <h2 className="mt-4 text-xl font-bold text-[#002856]">Introduction</h2>
            <div className="relative mt-2 max-w-[78ch] sm:max-w-[74ch] md:max-w-[70ch] lg:max-w-none xl:max-w-none">
              <p className="text-base leading-7 text-slate-800 sm:text-lg sm:leading-8 blur-[3px]">
                <span>
                  The digital transformation across critical infrastructure sectors has undeniably enhanced operational efficiency and service delivery. However, this increased interconnectedness has simultaneously expanded the attack surface, making these vital systems prime targets for a diverse range of malicious actors, including nation-state adversaries, financially motivated cybercriminals, and ideologically driven hacktivists. The integrity, availability, and confidentiality of critical infrastructure—encompassing financial services, healthcare, energy, telecommunications, and government—are under persistent and escalating threat. This research brief aims to provide a comprehensive analysis of the current trends in critical infrastructure vulnerabilities and cyber threats observed from 2024 to mid-2025, offering actionable intelligence to fortify
                </span>
              </p>
              <button
                type="button"
                onClick={() => setIsReportOpen(true)}
                className="absolute left-1/2 bottom-2 z-10 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-[#0000D3] px-6 py-2.5 text-sm font-bold text-white shadow-md hover:bg-blue-800"
              >
                Download Full Report
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                  <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path d="M3 14a1 1 0 001 1h12a1 1 0 001-1v-2h-2v1H5v-1H3v2zm7-1l4-4h-3V3H9v6H6l4 4z" /></svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* Desktop Reputational Stakes section copied from WhoWeGuidePage */}
      <section className="relative hidden h-[518px] bg-[#0050AC] xl:block -mt-12">
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

export default Insight6Page;


