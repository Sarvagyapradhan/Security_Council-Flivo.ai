import React from 'react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: (
        <svg className="w-18 h-18 text-blue-600" fill="currentColor" viewBox="0 0 73 73">
          <path d="M63.5 55.7188H62.375V11.8438C62.375 10.9486 62.0194 10.0902 61.3865 9.45726C60.7535 8.82433 59.8951 8.46875 59 8.46875H43.25C42.3549 8.46875 41.4965 8.82433 40.8635 9.45726C40.2306 10.0902 39.875 10.9486 39.875 11.8438V21.9688H27.5C26.6049 21.9688 25.7464 22.3243 25.1135 22.9573C24.4806 23.5902 24.125 24.4486 24.125 25.3438V35.4688H14C13.1049 35.4688 12.2464 35.8243 11.6135 36.4573C10.9806 37.0902 10.625 37.9486 10.625 38.8438V55.7188H9.5C8.60489 55.7188 7.74645 56.0743 7.11351 56.7073C6.48058 57.3402 6.125 58.1986 6.125 59.0938C6.125 59.9889 6.48058 60.8473 7.11351 61.4802C7.74645 62.1132 8.60489 62.4688 9.5 62.4688H63.5C64.3951 62.4688 65.2535 62.1132 65.8865 61.4802C66.5194 60.8473 66.875 59.9889 66.875 59.0938C66.875 58.1986 66.5194 57.3402 65.8865 56.7073C65.2535 56.0743 64.3951 55.7188 63.5 55.7188ZM46.625 15.2188H55.625V55.7188H46.625V15.2188ZM30.875 28.7188H39.875V55.7188H30.875V28.7188ZM17.375 42.2188H24.125V55.7188H17.375V42.2188Z"/>
        </svg>
      ),
      title: "Compare your exposure with industry peers.",
      link: "See Industry Trends"
    },
    {
      icon: (
        <svg className="w-18 h-18 text-blue-600" fill="currentColor" viewBox="0 0 73 72">
          <path d="M69.125 35.9992C69.125 36.8944 68.7694 37.7528 68.1365 38.3857C67.5035 39.0187 66.6451 39.3742 65.75 39.3742H58.8369L48.5178 60.0096C48.2374 60.5699 47.8066 61.041 47.2737 61.3704C46.7407 61.6997 46.1265 61.8742 45.5 61.8742H45.3312C44.6768 61.8411 44.0461 61.6182 43.5162 61.2326C42.9863 60.847 42.5801 60.3155 42.3472 59.703L27.2188 20.0102L19.3212 37.4055C19.0518 37.9934 18.619 38.4916 18.0745 38.8406C17.5301 39.1896 16.8968 39.3749 16.25 39.3742H7.25C6.35489 39.3742 5.49645 39.0187 4.86351 38.3857C4.23058 37.7528 3.875 36.8944 3.875 35.9992C3.875 35.1041 4.23058 34.2457 4.86351 33.6128C5.49645 32.9798 6.35489 32.6242 7.25 32.6242H14.0759L24.4288 9.843C24.7048 9.23746 25.1538 8.72706 25.7192 8.37598C26.2846 8.0249 26.9411 7.84881 27.6063 7.86985C28.2715 7.89089 28.9156 8.10812 29.4577 8.49423C29.9997 8.88034 30.4155 9.41809 30.6528 10.0399L45.9191 50.1067L53.7322 34.4805C54.0137 33.9218 54.445 33.4523 54.9779 33.1245C55.5108 32.7967 56.1244 32.6235 56.75 32.6242H65.75C66.6451 32.6242 67.5035 32.9798 68.1365 33.6128C68.7694 34.2457 69.125 35.1041 69.125 35.9992Z"/>
        </svg>
      ),
      title: "Threat Actor Attribution with Analyst-Backed Severity Ratings",
      link: "View Intelligence Assessment"
    },
    {
      icon: (
        <svg className="w-18 h-18 text-blue-600" fill="currentColor" viewBox="0 0 73 73">
          <path d="M61.3878 22.5525L45.6378 6.8025C45.3244 6.48868 44.9522 6.23971 44.5424 6.06984C44.1327 5.89997 43.6935 5.81252 43.25 5.8125H16.25C14.7582 5.8125 13.3274 6.40513 12.2725 7.46002C11.2176 8.51492 10.625 9.94566 10.625 11.4375V60.9375C10.625 62.4293 11.2176 63.8601 12.2725 64.915C13.3274 65.9699 14.7582 66.5625 16.25 66.5625H56.75C58.2418 66.5625 59.6726 65.9699 60.7275 64.915C61.7824 63.8601 62.375 62.4293 62.375 60.9375V24.9375C62.375 24.0431 62.0199 23.1853 61.3878 22.5525ZM45.5 16.2188L51.9688 22.6875H45.5V16.2188ZM17.375 59.8125V12.5625H38.75V26.0625C38.75 26.9576 39.1056 27.8161 39.7385 28.449C40.3715 29.0819 41.2299 29.4375 42.125 29.4375H55.625V59.8125H17.375ZM48.875 37.3125C48.875 38.2076 48.5194 39.066 47.8865 39.699C47.2535 40.3319 46.3951 40.6875 45.5 40.6875H27.5C26.6049 40.6875 25.7464 40.3319 25.1135 39.699C24.4806 39.066 24.125 38.2076 24.125 37.3125C24.125 36.4174 24.4806 35.5589 25.1135 34.926C25.7464 34.2931 26.6049 33.9375 27.5 33.9375H45.5C46.3951 33.9375 47.2535 34.2931 47.8865 34.926C48.5194 35.5589 48.875 36.4174 48.875 37.3125ZM48.875 48.5625C48.875 49.4576 48.5194 50.316 47.8865 50.949C47.2535 51.5819 46.3951 51.9375 45.5 51.9375H27.5C26.6049 51.9375 25.7464 51.5819 25.1135 50.949C24.4806 50.316 24.125 49.4576 24.125 48.5625C24.125 47.6674 24.4806 46.809 25.1135 46.176C25.7464 45.5431 26.6049 45.1875 27.5 45.1875H45.5C46.3951 45.1875 47.2535 45.5431 47.8865 46.176C48.5194 46.809 48.875 47.6674 48.875 48.5625Z"/>
        </svg>
      ),
      title: "Research Briefs Tailored for SOC, Legal, and Board-Level Decisioning",
      link: "Access Latest Briefs"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:flex-row">
        <div className="lg:w-1/2">
          <h2 className="mb-6 text-3xl font-bold leading-tight text-blue-900 sm:text-4xl">
            Original Intelligence, Built for Strategic Decision-Makers
          </h2>
          <p className="text-base leading-7 text-blue-900 sm:text-lg">
            Security Council delivers independent cybersecurity research and threat actor analysis tailored for CISOs, legal advisors, SOC leads and board members. Our intelligence helps organizations assess risk, understand adversary behavior and align security strategy with real-world threats.
          </p>
        </div>

        <div className="flex-1 space-y-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-start gap-4 rounded-2xl bg-white p-6 shadow-sm sm:flex-row sm:gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                {feature.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-blue-900 sm:text-xl">
                  {feature.title}
                </h3>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900 sm:text-base">
                  {feature.link}
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l10-10M17 7H7v10" />
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

export default FeaturesSection;
