import React from 'react';
import OptimizedImage from './OptimizedImage';

type HeroSectionProps = {
  onNavigate?: (page: string) => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-[#1E3A8A]">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div className="order-2 flex flex-col gap-6 rounded-lg border-4 border-[#3985DE] bg-white p-6 shadow-lg sm:p-8 lg:order-1 lg:border-x-[20px] lg:border-y-4">
          <h1 className="text-3xl font-bold leading-tight text-[#002856] sm:text-4xl lg:text-[52px] lg:leading-[58px]">
            Independent Cyber Threat Research. Trusted by Leaders. Backed by Analysts.
          </h1>
          <button
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#0000D3] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-800 sm:w-auto sm:text-lg"
            onClick={() => onNavigate?.('latest-insight')}
          >
            View Latest Research
            <svg className="h-5 w-5" fill="white" stroke="white" strokeWidth={3} viewBox="0 0 19 20">
              <path d="M1.82534 16.8982C1.31015 17.547 1.41842 18.4905 2.06717 19.0057C2.71592 19.5209 3.65947 19.4126 4.17466 18.7639L1.82534 16.8982ZM16.9279 1.9979C16.8335 1.17487 16.0897 0.584239 15.2667 0.67868L1.85473 2.21769C1.03171 2.31213 0.441071 3.05589 0.535512 3.87891C0.629954 4.70194 1.37371 5.29258 2.19673 5.19813L14.1185 3.83012L15.4865 15.7519C15.581 16.5749 16.3247 17.1656 17.1477 17.0711C17.9708 16.9767 18.5614 16.2329 18.467 15.4099L16.9279 1.9979ZM3 17.8311L4.17466 18.7639L16.6124 3.10173L15.4377 2.1689L14.2631 1.23607L1.82534 16.8982L3 17.8311Z" fill="white"/>
            </svg>
          </button>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative w-full max-w-[420px] overflow-hidden rounded-xl border-8 border-white shadow-2xl sm:max-w-[520px] lg:max-w-[620px]">
            <OptimizedImage
              src="/hero/background.webp"
              alt="Security professionals working"
              className="h-full w-full object-cover"
              eager
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
