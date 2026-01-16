import React from 'react';
import OptimizedImage from './OptimizedImage';

const focusAreas = [
    {
        title: 'Adversary Tracking & Threat Actor Profiling',
        description:
            'We monitor attacker ecosystems in real time, from ransomware affiliates and APT groups to low-signal threat actors operating on closed networks. Our profiling work maps motivations, infrastructure and behavioral patterns to expose risk before impact.',
    },
    {
        title: 'Dark Web Observation & Leak Intelligence',
        description:
            "Beyond indexed data dumps, we track live mentions, exposed credentials, active tokens and exploit discussions in dark web forums, encrypted channels and deep marketplaces. Leak detection is just the surface, we focus on exploitation patterns and how they map to your environment.",
    },
    {
        title: 'Infrastructure Exposure & Attack Surface Discovery',
        description:
            "We identify vulnerable assets that are often missed: orphaned endpoints, shadow IT, forgotten cloud keys and misconfigured integrations. This isn't just external scanning, it's exposure mapping through the lens of how attackers think.",
    },
    {
        title: 'Insider Risk & Behavioral Anomalies',
        description:
            'Our analysts flag risk not just by roles, but by actions. From privilege drift to silent data exfiltration, we surface internal movements that could signal policy bypass or breach preparation.',
    },
    {
        title: 'Third-Party Risk Analysis',
        description:
            "Breaches don't always start within your perimeter. We assess digital interdependencies, third-party toolkits and vendor platforms for signs of indirect compromise and lateral risk exposure.",
    },
    {
        title: 'Sector-Specific Threat Intelligence',
        description:
            'Different industries face different breaches, our models are built for it. From finance and critical infrastructure to SaaS platforms and healthcare, we provide contextual intelligence that reflects your actual threat environment, not generic feeds.',
    },
];

const focusAreaIcons: React.ReactNode[] = [
    (
        <svg
            key="shield"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
        >
            <path
                d="M12 3L5 6V11C5 15.4183 8.13401 19.4022 12 21C15.866 19.4022 19 15.4183 19 11V6L12 3Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10 12L11.5 13.5L14 11"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    (
        <svg
            key="radar"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
        >
            <path
                d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
            <path
                d="M12 7V12L15 15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
    ),
    (
        <svg
            key="network"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
        >
            <circle cx="12" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="6" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="18" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.6" />
            <path d="M10.5 6.8L7.5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M13.5 6.8L16.5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M8.5 17H15.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    ),
    (
        <svg
            key="insight"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
        >
            <path
                d="M12 5C7.58172 5 4 8.13401 4 12C4 15.866 7.58172 19 12 19C16.4183 19 20 15.866 20 12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
            <path
                d="M12 9V12L14 14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
    ),
    (
        <svg
            key="risk"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
        >
            <path
                d="M4 17L9 12L13 15L20 8"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M16 8H20V12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 21H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    ),
    (
        <svg
            key="sectors"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
        >
            <path
                d="M4 7H10V4H4V7ZM14 7H20V4H14V7ZM14 20H20V11H14V20ZM4 20H10V11H4V20Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
        </svg>
    ),
];

const ctiCards = [
    {
        title: 'Credential Leak Intelligence: Analysis of 300+ Incidents',
        href: '#',
    },
    {
        title: 'Dark Web Ransomware Trends: 8‑Month Intelligence Study',
        href: '#',
    },
    {
        title: 'Credential Leak Intelligence: Analysis of 300+ Incidents',
        href: '#',
    },
    {
        title: 'Credential Leak Intelligence: Analysis of 300+ Incidents',
        href: '#',
    },
];

const NewIntelligentPage: React.FC = () => (
    <main className="bg-white">
        {/* Section 1 - Hero */}
        <section className="relative bg-white overflow-hidden" aria-label="Inside the Threat Landscape">
            <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-0 h-auto lg:h-[865px]">
                {/* Top white section with heading */}
                <div className="relative bg-white py-12 sm:py-16 lg:py-20 lg:h-[288px] flex items-center">
                    <div className="mx-auto w-full">
                        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0A2A57]">
                            Inside the Threat Landscape
                            <br />
                            We Know Best
                        </h1>
                    </div>
                </div>

                {/* Bottom section with background image and logo overlay */}
                <div className="relative mt-0 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[577px] overflow-visible pb-[40px]">
                    {/* Full-bleed background image spanning viewport width */}
                    <div className="absolute top-0 left-1/2 z-0 h-[calc(100%-30px)] w-screen max-w-none -translate-x-1/2">
                        <OptimizedImage
                            src="/Our Intelligence/background.jpg"
                            alt="Business meeting"
                            className="h-full w-full object-cover"
                            eager
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.4),rgba(0,0,0,0.4))]" />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,211,0)_0%,rgba(0,0,211,0.2)_100%)]" />
                    </div>

                    {/* Bottom-left logo within background band - same as home page */}
                    <div className="pointer-events-none hidden md:block absolute bottom-6 left-4 md:left-0 md:-translate-x-6 lg:bottom-10 lg:-translate-x-10 z-20">
                        <OptimizedImage
                            src="/logo_sc.webp"
                            alt="Security Council logo"
                            className="w-32 sm:w-44 md:w-52 lg:w-[420px] opacity-95 logo-white"
                            eager
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* Section 2 - Where We Focus */}
        <section className="relative isolate overflow-hidden min-h-[800px] sm:min-h-[900px] lg:min-h-[1000px]" aria-label="Where We Focus">
            <div className="absolute inset-0 z-0 h-full w-full">
                <OptimizedImage
                    src="/Our Intelligence/Section2/background.jpg"
                    alt="Executive team reviewing intelligence data"
                    className="h-full w-full object-cover"
                    eager
                />
            </div>
            <div className="absolute inset-0 z-10 bg-[linear-gradient(0deg,rgba(0,0,0,0.45),rgba(0,0,0,0.45))]" />
            <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,211,0)_0%,rgba(0,0,211,0.45)_100%)]" />
            <div className="relative z-20 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-0 py-16 sm:py-20 lg:py-24 text-white">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                        Where We Focus
                    </h2>
                </div>
                <div className="mt-4 -mx-4 sm:-mx-6 lg:mx-0 w-full lg:w-screen lg:max-w-none lg:relative lg:left-1/2 lg:-translate-x-1/2 rounded-lg px-6 pt-4 pb-4 sm:px-8 sm:pt-5 sm:pb-6" style={{ backgroundColor: 'rgba(0, 40, 86, 1)' }}>
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white">
                            Our intelligence spans across critical threat zones each monitored, dissected and analyzed by real
                            humans with precision and intent. These are the environments where blind spots begin and where
                            Security Council brings clarity.
                        </p>
                        <div className="mt-4">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold shadow-lg transition-colors hover:bg-gray-100 sm:text-base"
                                style={{ color: 'rgba(0, 40, 86, 1)' }}
                            >
                                Explore more Reports
                                <span aria-hidden className="translate-y-[1px]">
                                    ↗
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 grid gap-6 sm:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {focusAreas.map(({ title, description }, index) => (
                        <article
                            key={title}
                            className="flex h-full flex-col gap-4 rounded-lg p-6 sm:p-8 text-white"
                            style={{ backgroundColor: 'rgba(46, 145, 208, 1)' }}
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#2DB8FF] text-white">
                                {focusAreaIcons[index % focusAreaIcons.length]}
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl sm:text-2xl font-bold leading-tight text-white">
                                    {title}
                                </h3>
                                <p className="text-base leading-relaxed text-white/80">
                                    {description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>

        {/* Section 3 - CTI Reports */}
        <section className="relative bg-white overflow-hidden" aria-label="CTI Highlights">
            <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-0 py-16 sm:py-20 lg:py-24 bg-white">
                {/* Mobile / tablet layout */}
                <div className="flex flex-col gap-10 lg:hidden">
                    <div className="relative overflow-hidden rounded-3xl bg-[#031B3E] px-6 py-8 text-white sm:px-8 sm:py-10">
                        <OptimizedImage
                            src="/homepage/Section 2/blue Rectangle 1128.webp"
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover"
                            eager
                            aria-hidden="true"
                        />
                        <div className="absolute inset-0 bg-[#031B3E]/75" aria-hidden />
                        <div className="relative flex flex-col gap-6">
                            <div>
                                <h3 className="text-2xl sm:text-[28px] font-extrabold leading-tight">
                                    CTI Highlights
                                    <br />
                                    &amp; Reports
                                </h3>
                                <div className="mt-3 h-[6px] w-16 rounded-full bg-[#2DB8FF]" />
                            </div>
                            <div className="relative overflow-hidden rounded-2xl border border-white/20">
                                <OptimizedImage
                                    src="/homepage/Section 2/card image.webp"
                                    alt="Threat intelligence briefing snapshot"
                                    className="h-full w-full object-cover"
                                    eager
                                />
                            </div>
                            <p className="text-sm sm:text-base leading-relaxed text-white/85">
                                Curated intelligence briefings that keep executives ahead of emerging cyber threats.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        {ctiCards.map((card) => (
                            <div
                                key={card.title}
                                className="relative rounded-2xl bg-white px-5 py-4 shadow-[0_12px_36px_rgba(0,0,0,0.1)] ring-1 ring-black/10"
                            >
                                <p className="text-[#0A2A57] text-base sm:text-lg font-bold leading-snug">
                                    {card.title}
                                </p>
                                <a
                                    href={card.href}
                                    className="mt-2 inline-flex items-center text-sm sm:text-base font-semibold text-[#0000D3] hover:underline"
                                >
                                    View Report <span className="ml-1 translate-y-[1px]" aria-hidden>
                                        ↗
                                    </span>
                                </a>
                            </div>
                        ))}
                    </div>

                    <div>
                        <a
                            href="#"
                            className="inline-flex w-full items-center justify-center gap-3 rounded-md bg-[#0000D3] px-6 py-3.5 text-base font-semibold text-white shadow-md ring-1 ring-black/5 transition-colors hover:bg-blue-800"
                        >
                            Explore more Reports
                            <span className="translate-y-[1px]" aria-hidden>
                                ↗
                            </span>
                        </a>
                    </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
                    <div className="relative w-[calc(100%+150px)] h-[617px] -ml-10">
                        <OptimizedImage
                            src="/homepage/Section 2/blue Rectangle 1128.webp"
                            alt="Blue rectangle"
                            className="block h-full w-full object-cover rounded-2xl"
                            eager
                        />
                        {/* Card image overlay positioned within the blue rectangle */}
                        <div className="absolute left-0 top-[93px] h-[390px] w-[537px]">
                            <OptimizedImage
                                src="/homepage/Section 2/card image.webp"
                                alt="Card image"
                                className="block h-full w-full object-cover rounded-xl"
                                eager
                            />
                        </div>
                        {/* Sky blue vertical line to the right of the image */}
                        <div
                            className="absolute left-[528px] top-[72px] h-[430px] w-[12px] rounded-md bg-[#2DB8FF]"
                            aria-hidden
                        />
                        {/* Headline text over the image */}
                        <div className="absolute left-[20px] bottom-[150px] max-w-[320px]">
                            <h3 className="text-[32px] font-extrabold leading-tight text-white">
                                CTI Highlights
                                <br />
                                &amp; Reports
                            </h3>
                        </div>
                    </div>
                    {/* Right-side stacked cards */}
                    <div className="flex flex-col gap-4 justify-between h-[617px] pt-16 ml-4">
                        <div className="flex flex-col gap-4">
                            {ctiCards.map((card) => (
                                <div
                                    key={card.title}
                                    className="relative rounded-lg bg-white px-5 py-4 shadow-[0_12px_36px_rgba(0,0,0,0.1)] ring-1 ring-black/10 max-w-[530px]"
                                >
                                    <p className="text-[#0A2A57] text-base sm:text-lg font-bold leading-snug">
                                        {card.title}
                                    </p>
                                    <a
                                        href={card.href}
                                        className="mt-2 inline-flex items-center text-sm sm:text-base font-semibold text-[#0000D3] hover:underline"
                                    >
                                        View Report <span className="ml-1 translate-y-[1px]" aria-hidden>
                                            ↗
                                        </span>
                                    </a>
                                </div>
                            ))}
                        </div>
                        {/* Bottom action button */}
                        <div className="flex justify-end max-w-[530px]">
                            <a
                                href="#"
                                className="inline-flex w-auto items-center justify-center gap-3 rounded-md bg-[#0000D3] px-6 py-3.5 text-base font-semibold text-white shadow-md ring-1 ring-black/5 transition-colors hover:bg-blue-800"
                            >
                                Explore more Reports
                                <span className="translate-y-[1px]" aria-hidden>
                                    ↗
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 4 - Newsletter */}
        <section className="relative bg-white overflow-hidden" aria-label="Newsletter sign-up">
            <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-0 py-16 sm:py-20 lg:py-0 lg:h-[373px]">
                {/* Mobile / tablet layout */}
                <div className="flex flex-col gap-6 lg:hidden">
                    <div className="relative overflow-hidden rounded-3xl bg-[#031B3E] px-6 py-10 text-white sm:px-8">
                        <OptimizedImage
                            src="/homepage/Section 4/background.webp"
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover"
                            eager
                            aria-hidden="true"
                        />
                        <div className="absolute inset-0 bg-[#031B3E]/75" aria-hidden />
                        <div className="relative flex flex-col gap-6">
                            <div className="text-center sm:text-left">
                                <h3 className="mb-3 text-2xl font-bold leading-tight text-white">
                                    Direct to your inbox
                                </h3>
                                <p className="text-sm sm:text-base leading-relaxed text-white/85">
                                    Sign up for our newsletter with the latest insights, analysis and more.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <label
                                    htmlFor="newsletterEmailNewMobile"
                                    className="text-sm font-semibold text-white"
                                >
                                    Work Email
                                </label>
                                <input
                                    id="newsletterEmailNewMobile"
                                    type="email"
                                    className="h-[52px] w-full rounded-md border border-white/40 bg-white/90 px-3 text-sm text-[#002856] placeholder:text-[#25416D]/70 focus:border-white focus:outline-none"
                                    placeholder="you@company.com"
                                    aria-label="Work Email"
                                />
                                <button className="inline-flex h-[52px] w-full items-center justify-center rounded-md bg-white text-sm font-bold text-[#0000D3] transition-colors hover:bg-[#E7E9FF]">
                                    Continue
                                    <svg className="ml-2 h-4 w-4" viewBox="0 0 25 24" fill="none">
                                        <circle cx="12.75" cy="12" r="12" fill="#0000D3" />
                                        <path
                                            d="M6.75 10.8C6.30817 10.8 5.95 11.1582 5.95 11.6C5.95 12.0419 6.30817 12.4 6.75 12.4V11.6V10.8ZM19.3157 12.1657C19.6281 11.8533 19.6281 11.3468 19.3157 11.0344L14.2245 5.94318C13.9121 5.63076 13.4056 5.63076 13.0931 5.94318C12.7807 6.2556 12.7807 6.76213 13.0931 7.07455L17.6186 11.6L13.0931 16.1255C12.7807 16.4379 12.7807 16.9445 13.0931 17.2569C13.4056 17.5693 13.9121 17.5693 14.2245 17.2569L19.3157 12.1657ZM6.75 11.6V12.4H18.75V11.6V10.8H6.75V11.6Z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-xs leading-relaxed text-white/70">
                                By clicking the "Continue" button, you are agreeing to the Security Council Terms of
                                Use and Privacy Policy.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden lg:block">
                    <div className="absolute inset-0 z-0">
                        <OptimizedImage
                            src="/homepage/Section 4/background.webp"
                            alt=""
                            className="h-full w-full object-cover"
                            eager
                            aria-hidden="true"
                        />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center px-4 z-10">
                        <div className="flex w-full max-w-6xl flex-col items-center gap-8 rounded-md border border-white/30 bg-white/55 px-4 py-8 shadow-[0_18px_50px_rgba(0,0,0,0.08)] supports-[backdrop-filter]:backdrop-blur-[3px] sm:w-[90%] sm:px-8 sm:py-10 lg:h-[238px] lg:flex-row lg:items-center lg:gap-[46px] lg:px-[96px]">
                            <div className="w-full text-center lg:w-[560px] lg:text-left">
                                <h3 className="mb-3 text-xl sm:text-2xl lg:text-[32px] font-bold leading-tight lg:leading-[38px] text-[#002856]">
                                    Direct to your inbox
                                </h3>
                                <p className="text-sm sm:text-base lg:text-[18px] leading-relaxed lg:leading-[30px] text-black">
                                    Sign up for our newsletter with the latest insights, analysis and
                                    <br className="hidden sm:block lg:hidden" />
                                    <span className="sm:hidden lg:inline"> </span>more.
                                </p>
                            </div>
                            <div className="w-full lg:w-[621px]">
                                <div className="mb-2">
                                    <label
                                        htmlFor="newsletterEmailNew"
                                        className="text-sm sm:text-base lg:text-[15px] font-bold text-[#002856]"
                                    >
                                        Work Email
                                    </label>
                                </div>
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                                    <input
                                        id="newsletterEmailNew"
                                        type="email"
                                        className="h-[50px] w-full border border-[#757575] bg-white px-3 text-sm sm:h-[54px] sm:text-base lg:text-[16px]"
                                        placeholder="you@company.com"
                                        aria-label="Work Email"
                                    />
                                    <button className="flex h-[50px] w-full items-center justify-center rounded border-2 border-[#0000D3] bg-[#0000D3] text-sm font-bold text-white transition-colors hover:bg-blue-800 sm:h-[58px] sm:w-[150px] sm:text-base">
                                        Continue
                                        <svg className="ml-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" viewBox="0 0 25 24" fill="none">
                                            <circle cx="12.75" cy="12" r="12" fill="white" />
                                            <path
                                                d="M6.75 10.8C6.30817 10.8 5.95 11.1582 5.95 11.6C5.95 12.0419 6.30817 12.4 6.75 12.4V11.6V10.8ZM19.3157 12.1657C19.6281 11.8533 19.6281 11.3468 19.3157 11.0344L14.2245 5.94318C13.9121 5.63076 13.4056 5.63076 13.0931 5.94318C12.7807 6.2556 12.7807 6.76213 13.0931 7.07455L17.6186 11.6L13.0931 16.1255C12.7807 16.4379 12.7807 16.9445 13.0931 17.2569C13.4056 17.5693 13.9121 17.5693 14.2245 17.2569L19.3157 12.1657ZM6.75 11.6V12.4H18.75V11.6V10.8H6.75V11.6Z"
                                                fill="#0000D3"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <p className="mt-2 text-xs sm:text-sm lg:text-[12px] leading-relaxed lg:leading-[18px] text-black">
                                    By clicking the "Continue" button, you are agreeing to the{' '}
                                    <span className="text-[#0000D3]">Security Council Terms of Use</span> and{' '}
                                    <span className="text-[#0000D3]">Privacy Policy.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
);

export default NewIntelligentPage;
