import React from 'react';

const OurIntelligencePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[356px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-background-figma2.jpg')"
          }}
        />
        {/* White overlay box with text inside */}
        <div className="absolute left-[80px] w-[805px] h-[526px] bg-white/10">
          <div className="absolute left-[27px] top-[165px] w-[751px]">
            {/*<h1 className="text-[#002856] font-bold text-[56px] leading-[65px]">
              Inside the Threat Landscape We Know Best
            </h1>*/}
          </div>
        </div>
      </section>

      {/* Where We Focus Section */}
      <section className="relative w-full h-[1650px] bg-white">
        {/* Blue Background SVG */}
        <svg 
          className="absolute left-0 top-[47px] w-full h-[285px] fill-[#0050AC]" 
          width="1430" 
          height="285" 
          viewBox="0 0 1430 285"
        >
          <path d="M0 0H1430V128.419V285H0V0Z" fill="#0050AC"/>
        </svg>

        {/* Content */}
        <div className="relative z-10">
          <div className="absolute left-[102px] top-[87px] w-[336px]">
            <h2 className="text-white font-bold text-[41px] leading-[48px]">
              Where We Focus
            </h2>
          </div>
          
          <div className="absolute left-[102px] top-[139px] w-[720px]">
            <p className="text-white font-normal text-[22px] leading-[34px]">
              Our intelligence spans across critical threat zones each monitored, dissected and analyzed by real humans with precision and intent. These are the environments where blind spots begin and where Security Council brings clarity.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="absolute left-[861px] top-[35px] w-[509px] h-[364px]">
            <div className="absolute left-[10px] top-[7px] w-[472px] h-[296px] bg-black/30 rounded-br-[67px] blur-[24px]" />
            <img
              className="absolute left-[37px] top-0 w-[472px] h-[317px] rounded-br-[67px] border border-white"
              src="/images/where-we-focus-figma.jpg"
              alt=""
            />
          </div>
        </div>

        {/* First Row of Cards */}
        <div className="absolute left-[79px] top-[449px] flex gap-6 w-[1272px]">
          {/* Card 1 */}
          <div className="flex flex-col items-center gap-4 w-[408px]">
            <div className="relative w-[250px] h-[170px]">
              <div className="absolute left-0 top-0 w-[219px] h-[147px] bg-[#021E3D] rounded-br-[31px]" />
              <div className="absolute left-4 top-[9px] w-[219px] h-[147px] bg-[#074B98] rounded-br-[31px] shadow-[-12px_0_6px_0_rgba(0,0,0,0.25)]" />
              <div className="absolute left-[19px] top-[17px] w-[219px] h-[147px] bg-black/40 rounded-br-[31px] blur-[3px]" />
              <img
                className="absolute left-[31px] top-[23px] w-[219px] h-[147px] rounded-br-[31px]"
                src="/images/adversary-tracking-figma.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-3 self-stretch">
              <h3 className="text-[#002856] text-center font-bold text-[32px] leading-[38px]">
                Adversary Tracking & Threat Actor Profiling
              </h3>
              <p className="w-[400px] text-[#002856] text-center font-normal text-[22px] leading-[34px]">
                We monitor attacker ecosystems in real time, from ransomware affiliates and APT groups to low-signal threat actors operating on closed networks. Our profiling work maps motivations, infrastructure and behavioral patterns to expose risk before impact.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center gap-4 w-[408px]">
            <div className="relative w-[250px] h-[170px]">
              <div className="absolute left-0 top-0 w-[219px] h-[147px] bg-[#021E3D] rounded-br-[31px]" />
              <div className="absolute left-4 top-[9px] w-[219px] h-[147px] bg-[#074B98] rounded-br-[31px] shadow-[-12px_0_6px_0_rgba(0,0,0,0.25)]" />
              <div className="absolute left-[19px] top-[17px] w-[219px] h-[147px] bg-black/40 rounded-br-[31px] blur-[3px]" />
              <img
                className="absolute left-[31px] top-[23px] w-[219px] h-[147px] rounded-br-[31px]"
                src="/images/dark-web-figma.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-3 self-stretch">
              <h3 className="text-[#002856] text-center font-bold text-[32px] leading-[38px]">
                Dark Web Observation & Leak Intelligence
              </h3>
              <p className="w-[400px] text-[#002856] text-center font-normal text-[22px] leading-[34px]">
                Beyond indexed data dumps, we track live mentions, exposed credentials, active tokens and exploit discussions in dark web forums, encrypted channels and deep marketplaces. Leak detection is just the surface, we focus on exploitation patterns and how they map to your environment.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center gap-4 w-[408px]">
            <div className="relative w-[250px] h-[170px]">
              <div className="absolute left-0 top-0 w-[219px] h-[147px] bg-[#021E3D] rounded-br-[31px]" />
              <div className="absolute left-4 top-[9px] w-[219px] h-[147px] bg-[#074B98] rounded-br-[31px] shadow-[-12px_0_6px_0_rgba(0,0,0,0.25)]" />
              <div className="absolute left-[19px] top-[17px] w-[219px] h-[147px] bg-black/40 rounded-br-[31px] blur-[3px]" />
              <img
                className="absolute left-[31px] top-[23px] w-[219px] h-[147px] rounded-br-[31px]"
                src="/images/infrastructure-exposure-figma.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-3 self-stretch">
              <h3 className="text-[#002856] text-center font-bold text-[32px] leading-[38px]">
                Infrastructure Exposure & Attack Surface Discovery
              </h3>
              <p className="w-[400px] text-[#002856] text-center font-normal text-[22px] leading-[34px]">
                We identify vulnerable assets that are often missed: orphaned endpoints, shadow IT, forgotten cloud keys and misconfigured integrations.
This isn't just external scanning, it's exposure mapping through the lens of how attackers think
              </p>
            </div>
          </div>
        </div>

        {/* Second Row of Cards */}
        <div className="absolute left-[79px] top-[1068px] flex gap-6 w-[1272px]">
          {/* Card 4 */}
          <div className="flex flex-col items-center gap-4 w-[408px]">
            <div className="relative w-[250px] h-[170px]">
              <div className="absolute left-0 top-0 w-[219px] h-[147px] bg-[#021E3D] rounded-br-[31px]" />
              <div className="absolute left-4 top-[9px] w-[219px] h-[147px] bg-[#074B98] rounded-br-[31px] shadow-[-12px_0_6px_0_rgba(0,0,0,0.25)]" />
              <div className="absolute left-[19px] top-[17px] w-[219px] h-[147px] bg-black/40 rounded-br-[31px] blur-[3px]" />
              <img
                className="absolute left-[31px] top-[23px] w-[219px] h-[147px] rounded-br-[31px]"
                src="/images/insider-risk-figma.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-3 self-stretch">
              <h3 className="text-[#002856] text-center font-bold text-[32px] leading-[38px]">
                Insider Risk & Behavioral Anomalies
              </h3>
              <p className="w-[400px] text-[#002856] text-center font-normal text-[22px] leading-[34px]">
                Our analysts flag risk not just by roles, but by actions. From privilege drift to silent data exfiltration, we surface internal movements that could signal policy bypass or breach preparation.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col items-center gap-4 w-[408px]">
            <div className="relative w-[250px] h-[170px]">
              <div className="absolute left-0 top-0 w-[219px] h-[147px] bg-[#021E3D] rounded-br-[31px]" />
              <div className="absolute left-4 top-[9px] w-[219px] h-[147px] bg-[#074B98] rounded-br-[31px] shadow-[-12px_0_6px_0_rgba(0,0,0,0.25)]" />
              <div className="absolute left-[19px] top-[17px] w-[219px] h-[147px] bg-black/40 rounded-br-[31px] blur-[3px]" />
              <img
                className="absolute left-[31px] top-[23px] w-[219px] h-[147px] rounded-br-[31px]"
                src="/images/third-party-risk-figma.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-3 self-stretch">
              <h3 className="text-[#002856] text-center font-bold text-[32px] leading-[38px]">
                Third-Party Risk Analysis
              </h3>
              <p className="w-[400px] text-[#002856] text-center font-normal text-[22px] leading-[34px]">
                Breaches don't always start within your perimeter. We assess digital interdependencies, third-party toolkits and vendor platforms for signs of indirect compromise and lateral risk exposure.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col items-center gap-4 w-[408px]">
            <div className="relative w-[250px] h-[170px]">
              <div className="absolute left-0 top-0 w-[219px] h-[147px] bg-[#021E3D] rounded-br-[31px]" />
              <div className="absolute left-4 top-[9px] w-[219px] h-[147px] bg-[#074B98] rounded-br-[31px] shadow-[-12px_0_6px_0_rgba(0,0,0,0.25)]" />
              <div className="absolute left-[19px] top-[17px] w-[219px] h-[147px] bg-black/40 rounded-br-[31px] blur-[3px]" />
              <img
                className="absolute left-[31px] top-[23px] w-[219px] h-[147px] rounded-br-[31px]"
                src="/images/sector-specific-figma.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-3 self-stretch">
              <h3 className="text-[#002856] text-center font-bold text-[32px] leading-[38px]">
                Sector-Specific Threat Intelligence
              </h3>
              <p className="w-[400px] text-[#002856] text-center font-normal text-[22px] leading-[34px]">
                Different industries face different breaches, our models are built for it. From finance and critical infrastructure to SaaS platforms and healthcare, we provide contextual intelligence that reflects your actual threat environment, not generic feeds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="h-[442px] bg-[#0050AC] relative">
        <div className="absolute left-[110px] top-[54px] w-[691px]">
          <h2 className="text-white font-bold text-[41px] leading-[50px]">
            You Won't Fix What You Can't See. Let's Change That.
          </h2>
        </div>
        
        <div className="absolute left-[110px] top-[166px] w-[853px]">
          <p className="text-white font-normal text-[22px] leading-[34px]">
            We don't speculate. We reveal what's already at risk, mapped to the exact threat domains we operate in. Before you act, you need visibility. That's where we come in.
          </p>
        </div>

        <div className="absolute left-[110px] top-[280px] w-[425px]">
          <p className="text-white font-bold text-[22px] leading-[34px]">
            Let's begin with a private threat briefing.
          </p>
        </div>

        <button className="absolute left-[110px] top-[338px] w-[284px] h-[58px] bg-white border-2 border-white rounded flex items-center px-4 hover:bg-gray-50 transition-colors">
          <span className="text-[#002856] font-bold text-[15px]">
            Request Private Assessment
          </span>
          <svg 
            className="absolute right-4 w-6 h-6" 
            width="26" 
            height="26" 
            viewBox="0 0 26 26" 
            fill="none"
          >
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M8.49658 4.11916C10.6947 2.81808 11.7932 2.16699 13 2.16699C14.2068 2.16699 15.3053 2.81699 17.5034 4.11916L18.2466 4.55899C20.4447 5.86116 21.5432 6.51224 22.1466 7.58366C22.75 8.65616 22.75 9.95616 22.75 12.5605V13.4402C22.75 16.0434 22.75 17.3456 22.1466 18.417C21.5432 19.4884 20.4447 20.1395 18.2466 21.4406L17.5034 21.8815C15.3053 23.1826 14.2068 23.8337 13 23.8337C11.7932 23.8337 10.6947 23.1837 8.49658 21.8815L7.75342 21.4406C5.55533 20.1406 4.45683 19.4884 3.85342 18.417C3.25 17.3445 3.25 16.0445 3.25 13.4402V12.5605C3.25 9.95616 3.25 8.65508 3.85342 7.58366C4.45683 6.51224 5.55533 5.86116 7.75342 4.55899L8.49658 4.11916ZM14.0833 17.3337C14.0833 17.621 13.9692 17.8965 13.766 18.0997C13.5629 18.3029 13.2873 18.417 13 18.417C12.7127 18.417 12.4371 18.3029 12.234 18.0997C12.0308 17.8965 11.9167 17.621 11.9167 17.3337C11.9167 17.0463 12.0308 16.7708 12.234 16.5676C12.4371 16.3645 12.7127 16.2503 13 16.2503C13.2873 16.2503 13.5629 16.3645 13.766 16.5676C13.9692 16.7708 14.0833 17.0463 14.0833 17.3337ZM13 6.77116C13.2155 6.77116 13.4222 6.85676 13.5745 7.00913C13.7269 7.16151 13.8125 7.36817 13.8125 7.58366V14.0837C13.8125 14.2991 13.7269 14.5058 13.5745 14.6582C13.4222 14.8106 13.2155 14.8962 13 14.8962C12.7845 14.8962 12.5778 14.8106 12.4255 14.6582C12.2731 14.5058 12.1875 14.2991 12.1875 14.0837V7.58366C12.1875 7.36817 12.2731 7.16151 12.4255 7.00913C12.5778 6.85676 12.7845 6.77116 13 6.77116Z" 
              fill="#002856"
            />
          </svg>
        </button>

        {/* Background Element */}
        <div className="absolute left-[998px] top-[129px] w-[332px] h-[217px] border border-white" />
        <img
          className="absolute left-[1014px] top-[114px] w-[332px] h-[217px] shadow-[0_4px_8px_0_rgba(0,0,0,0.25)]"
          src="/images/cta-background-figma.jpg"
          alt=""
        />
      </section>

      {/* CTI Highlights Section */}
      <section className="h-[525px] bg-white relative">
        <div className="absolute left-[57px] top-[40px] w-[490px]">
          <h2 className="text-[#002856] font-bold text-[41px] leading-[48px]">
            CTI Highlights & Reports
          </h2>
        </div>

        <div className="absolute left-[42px] top-[119px] w-[1313px] h-[366px]">
          {/* First Row */}
          <div className="absolute left-[15px] top-[15px] w-[408px] flex flex-col gap-6">
            <h4 className="text-[#002856] font-bold text-[24px] leading-[28px]">
              How to Respond to a Credential Leak in 4 Steps
            </h4>
            <div className="flex items-center gap-2">
              <span className="text-[#0000D3] font-bold text-[18px]">Read Now</span>
              <svg className="w-4 h-4 text-[#0000D3] rotate-[-52deg]" stroke="currentColor" fill="none" viewBox="0 0 13 15">
                <path d="M0.216892 12.7516C-0.126566 13.1841 -0.0543845 13.8132 0.378114 14.1566C0.810612 14.5001 1.43965 14.4279 1.78311 13.9954L0.216892 12.7516ZM11.3218 1.51292C11.2588 0.964234 10.763 0.570478 10.2143 0.633439L1.27296 1.65945C0.72428 1.72241 0.330524 2.21824 0.393485 2.76693C0.456446 3.31561 0.952282 3.70937 1.50097 3.64641L9.44881 2.7344L10.3608 10.6822C10.4238 11.2309 10.9196 11.6247 11.4683 11.5617C12.017 11.4988 12.4107 11.0029 12.3478 10.4542L11.3218 1.51292ZM1 13.3735L1.78311 13.9954L11.1114 2.24881L10.3283 1.62692L9.54518 1.00503L0.216892 12.7516L1 13.3735Z" fill="#0000D3"/>
              </svg>
            </div>
          </div>

          <div className="absolute left-[453px] top-[15px] w-[407px] flex flex-col gap-6">
            <h4 className="text-[#002856] font-bold text-[24px] leading-[28px]">
              Tracking Ransomware Kits Across Dark Web Markets
            </h4>
            <div className="flex items-center gap-2">
              <span className="text-[#0000D3] font-bold text-[18px]">Read Now</span>
              <svg className="w-4 h-4 text-[#0000D3] rotate-[-52deg]" stroke="currentColor" fill="none" viewBox="0 0 13 15">
                <path d="M0.216892 12.7516C-0.126566 13.1841 -0.0543845 13.8132 0.378114 14.1566C0.810612 14.5001 1.43965 14.4279 1.78311 13.9954L0.216892 12.7516ZM11.3218 1.51292C11.2588 0.964234 10.763 0.570478 10.2143 0.633439L1.27296 1.65945C0.72428 1.72241 0.330524 2.21824 0.393485 2.76693C0.456446 3.31561 0.952282 3.70937 1.50097 3.64641L9.44881 2.7344L10.3608 10.6822C10.4238 11.2309 10.9196 11.6247 11.4683 11.5617C12.017 11.4988 12.4107 11.0029 12.3478 10.4542L11.3218 1.51292ZM1 13.3735L1.78311 13.9954L11.1114 2.24881L10.3283 1.62692L9.54518 1.00503L0.216892 12.7516L1 13.3735Z" fill="#0000D3"/>
              </svg>
            </div>
          </div>

          <div className="absolute left-[890px] top-[15px] w-[408px] flex flex-col gap-6">
            <h4 className="text-[#002856] font-bold text-[24px] leading-[28px]">
              Strategic Briefing: What CISOs Must Know About Emerging Threat Actors
            </h4>
            <div className="flex items-center gap-2">
              <span className="text-[#0000D3] font-bold text-[18px]">Read Now</span>
              <svg className="w-4 h-4 text-[#0000D3] rotate-[-52deg]" stroke="currentColor" fill="none" viewBox="0 0 13 15">
                <path d="M0.529392 12.7516C0.185934 13.1841 0.258115 13.8132 0.690614 14.1566C1.12311 14.5001 1.75215 14.4279 2.09561 13.9954L0.529392 12.7516ZM11.6343 1.51292C11.5713 0.964234 11.0755 0.570478 10.5268 0.633439L1.58546 1.65945C1.03678 1.72241 0.643024 2.21824 0.705985 2.76693C0.768946 3.31561 1.26478 3.70937 1.81347 3.64641L9.76131 2.7344L10.6733 10.6822C10.7363 11.2309 11.2321 11.6247 11.7808 11.5617C12.3295 11.4988 12.7232 11.0029 12.6603 10.4542L11.6343 1.51292ZM1.3125 13.3735L2.09561 13.9954L11.4239 2.24881L10.6408 1.62692L9.85768 1.00503L0.529392 12.7516L1.3125 13.3735Z" fill="#0000D3"/>
              </svg>
            </div>
          </div>

          {/* Second Row */}
          <div className="absolute left-[15px] top-[212px] w-[408px] flex flex-col gap-6">
            <h4 className="text-[#002856] font-bold text-[24px] leading-[28px]">
              Playbook: Threat Intelligence for Compliance & Legal Teams
            </h4>
            <div className="flex items-center gap-2">
              <span className="text-[#0000D3] font-bold text-[18px]">Title case</span>
              <svg className="w-4 h-4 text-[#0000D3] rotate-[-52deg]" stroke="currentColor" fill="none" viewBox="0 0 13 15">
                <path d="M0.248142 12.9391C-0.0953159 13.3716 -0.0231345 14.0007 0.409364 14.3441C0.841862 14.6876 1.4709 14.6154 1.81436 14.1829L0.248142 12.9391ZM11.353 1.70042C11.2901 1.15173 10.7942 0.757978 10.2455 0.820939L1.30421 1.84695C0.75553 1.90991 0.361774 2.40574 0.424735 2.95443C0.487696 3.50311 0.983532 3.89687 1.53222 3.83391L9.48006 2.9219L10.3921 10.8697C10.455 11.4184 10.9509 11.8122 11.4996 11.7492C12.0482 11.6863 12.442 11.1904 12.379 10.6417L11.353 1.70042ZM1.03125 13.561L1.81436 14.1829L11.1426 2.43631L10.3595 1.81442L9.57643 1.19253L0.248142 12.9391L1.03125 13.561Z" fill="#0000D3"/>
              </svg>
            </div>
          </div>

          <div className="absolute left-[453px] top-[212px] w-[408px] flex flex-col gap-6">
            <h4 className="text-[#002856] font-bold text-[24px] leading-[28px]">
              Threat Report: Breach Trends by Industry – Q2 2025
            </h4>
            <div className="flex items-center gap-2">
              <span className="text-[#0000D3] font-bold text-[18px]">Learn More</span>
              <svg className="w-4 h-4 text-[#0000D3] rotate-[-52deg]" stroke="currentColor" fill="none" viewBox="0 0 14 15">
                <path d="M0.888767 12.9391C0.545309 13.3716 0.61749 14.0007 1.04999 14.3441C1.48249 14.6876 2.11152 14.6154 2.45498 14.1829L0.888767 12.9391ZM11.9936 1.70042C11.9307 1.15173 11.4348 0.757978 10.8862 0.820939L1.94484 1.84695C1.39616 1.90991 1.0024 2.40574 1.06536 2.95443C1.12832 3.50311 1.62416 3.89687 2.17284 3.83391L10.1207 2.9219L11.0327 10.8697C11.0957 11.4184 11.5915 11.8122 12.1402 11.7492C12.6889 11.6863 13.0826 11.1904 13.0197 10.6417L11.9936 1.70042ZM1.67188 13.561L2.45498 14.1829L11.7833 2.43631L11.0002 1.81442L10.2171 1.19253L0.888767 12.9391L1.67188 13.561Z" fill="#0000D3"/>
              </svg>
            </div>
          </div>

          <div className="absolute left-[890px] top-[212px] w-[408px] flex flex-col gap-6">
            <h4 className="text-[#002856] font-bold text-[24px] leading-[28px]">
              Security Council Intelligence Brief – Executive Edition
            </h4>
            <div className="flex items-center gap-2">
              <span className="text-[#0000D3] font-bold text-[18px]">Read Now</span>
              <svg className="w-4 h-4 text-[#0000D3] rotate-[-52deg]" stroke="currentColor" fill="none" viewBox="0 0 13 15">
                <path d="M0.529392 12.9391C0.185934 13.3716 0.258115 14.0007 0.690614 14.3441C1.12311 14.6876 1.75215 14.6154 2.09561 14.1829L0.529392 12.9391ZM11.6343 1.70042C11.5713 1.15173 11.0755 0.757978 10.5268 0.820939L1.58546 1.84695C1.03678 1.90991 0.643024 2.40574 0.705985 2.95443C0.768946 3.50311 1.26478 3.89687 1.81347 3.83391L9.76131 2.9219L10.6733 10.8697C10.7363 11.4184 11.2321 11.8122 11.7808 11.7492C12.3295 11.6863 12.7232 11.1904 12.6603 10.6417L11.6343 1.70042ZM1.3125 13.561L2.09561 14.1829L11.4239 2.43631L10.6408 1.81442L9.85768 1.19253L0.529392 12.9391L1.3125 13.561Z" fill="#0000D3"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurIntelligencePage;
