import React from 'react';
import OptimizedImage from './OptimizedImage';

const heroCards = [
    {
        title: 'Credential Leak Intelligence: Analysis of 300+ Incidents',
        href: '#',
    },
    {
        title: 'Dark Web Ransomware Trends: 8-Month Intelligence Study',
        href: '#',
    },
    {
        title: 'Undetected Breaches: 24-Month Pattern Analysis of Stealth Attacks',
        href: '#',
    },
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

const Home: React.FC = () => (
    <main>
        {/* Section 1 - Hero */}
        <section className="relative bg-white overflow-hidden" aria-label="Temporary hero">
            <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 2xl:px-0 pt-4 sm:pt-6 2xl:pt-0 pb-12 sm:pb-16 2xl:pb-0 2xl:h-[877px]">
                {/* Top white band */}
                <div className="flex flex-col 2xl:flex-row h-auto 2xl:h-[325px] pr-0 sm:pr-6 2xl:pr-12">
                    <div className="mt-6 sm:mt-8 2xl:mt-10 max-w-full 2xl:max-w-[980px] ml-0 2xl:-ml-3">
                        <h1 className="text-[#0A2A57] text-3xl sm:text-4xl md:text-5xl 2xl:text-[56px] leading-tight 2xl:leading-[1.1] font-extrabold tracking-[-0.01em]">
                            Independent Cyber Threat Research. Trusted by Leaders. Backed by Analysts.
                        </h1>
                        <div className="mt-6">
                            <a
                                href="#"
                                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-[#0000D3] px-5 py-3 text-sm sm:text-base font-semibold text-white shadow-sm ring-1 ring-black/5 transition-colors hover:bg-blue-800"
                                aria-label="View Latest Research"
                            >
                                View Latest Research
                                <span className="translate-y-[1px]" aria-hidden>
                                    ↗
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Middle background band */}
                <div className="relative mt-10 sm:mt-12 2xl:mt-0 h-auto 2xl:h-[512px] overflow-visible">
                    {/* Full-bleed background image spanning viewport width */}
                    <div className="absolute top-0 left-1/2 z-0 h-full w-full max-w-none -translate-x-1/2">
                        <OptimizedImage
                            src="/homepage/Section 1/Background.webp"
                            alt="Executive meeting background"
                            className="h-full w-full object-cover"
                            eager
                        />
                        <div className="home-hero-overlays pointer-events-none absolute inset-0" />
                    </div>

                    {/* Primary hero panel */}
                    <div className="relative z-10 flex justify-center 2xl:block">
                    <div className="block w-full max-w-md sm:max-w-lg rounded-3xl bg-[#041A3F]/95 px-6 py-8 text-white shadow-2xl ring-1 ring-black/20 2xl:hidden">
                            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-[-0.01em]">
                                Original Intelligence, Built for Strategic Decision‑Makers
                            </h2>
                            <p className="mt-3 text-sm text-white/80">
                                Curated intelligence briefings that keep executives ahead of emerging cyber threats.
                            </p>
                            <div className="mt-6 flex flex-col gap-4">
                                {heroCards.map((card) => (
                                    <div
                                        key={card.title}
                                        className="rounded-2xl bg-white px-4 py-4 text-[#0A2A57] shadow-lg ring-1 ring-black/10"
                                    >
                                        <h3 className="text-base sm:text-lg font-semibold leading-snug">
                                            {card.title}
                                        </h3>
                                        <a
                                            href={card.href}
                                            className="mt-2 inline-flex items-center text-sm font-semibold text-[#0000D3] hover:underline"
                                        >
                                            View Report <span className="ml-1 translate-y-[1px]" aria-hidden>
                                                ↗
                                            </span>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative hidden w-full 2xl:absolute 2xl:right-[80px] 2xl:top-[-200px] 2xl:block 2xl:h-[710px] 2xl:w-[420px]">
                            <OptimizedImage
                                src="/homepage/Section 1/Rectangle 1127.webp"
                                alt="Right panel rectangle"
                                className="block h-full w-full object-cover object-top"
                                eager
                            />
                            {/* Vertical white border line on the card */}
                            <div className="pointer-events-none absolute left-4 top-78 h-[66%] w-[25px] bg-white z-20" />
                            {/* Heading on top of the blue panel */}
                            <div className="absolute top-14 left-12 right-8 pr-6 z-30">
                                <h2 className="text-white text-[36px] leading-[1.15] font-extrabold tracking-[-0.01em] max-w-[420px]">
                                    Original Intelligence, Built
                                    <br />
                                    for Strategic
                                    <br />
                                    Decision‑Makers
                                </h2>
                            </div>
                            {/* Stacked cards overlay */}
                            <div className="absolute left-20 right-6 bottom-6 w-[380px] z-30">
                                <div className="flex flex-col gap-3">
                                    {heroCards.map((card) => (
                                        <div
                                            key={card.title}
                                            className="relative bg-white/95 rounded-xl shadow-xl ring-1 ring-black/5 px-4 py-4 pr-5"
                                        >
                                            <h3 className="text-[#0A2A57] text-[22px] font-semibold leading-snug">
                                                {card.title}
                                            </h3>
                                            <a
                                                href={card.href}
                                                className="mt-2 inline-flex items-center text-[#0000D3] font-semibold text-sm hover:underline"
                                            >
                                                View Report <span className="ml-1 translate-y-[1px]" aria-hidden>
                                                    ↗
                                                </span>
                                            </a>
                                            <div className="pointer-events-none absolute top-0 right-0 hidden h-full w-[120px] rounded-r-xl bg-gradient-to-r from-transparent to-white/60 2xl:block" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom-left logo within background band */}
                    <div className="pointer-events-none hidden md:block absolute bottom-6 left-4 md:left-2 md:-translate-x-2 2xl:bottom-10 2xl:left-6 2xl:translate-x-0 z-20">
                        <OptimizedImage
                            src="/logo_sc.webp"
                            alt="Security Council logo"
                            className="w-32 sm:w-44 md:w-52 2xl:w-[420px] opacity-95 logo-white"
                            eager
                        />
                    </div>
                </div>

                {/* Bottom spacer to extend Section 1 */}
                <div className="h-10 sm:h-12 2xl:h-[60px]" />
            </div>
        </section>

        {/* Section 2 - CTI Reports */}
        <section className="relative bg-white overflow-x-clip" aria-label="Section 2">
            <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 2xl:pl-[130px] 2xl:pr-0 py-16 sm:py-20 2xl:py-0 2xl:h-[767px] bg-white">
                {/* Mobile / tablet layout */}
                <div className="flex flex-col gap-10 2xl:hidden">
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
                <div className="hidden 2xl:contents">
                    <div className="relative mx-auto w-full max-w-5xl 2xl:absolute 2xl:left-0 2xl:top-[70px] 2xl:w-[930px] 2xl:h-[617px]">
                        <OptimizedImage
                            src="/homepage/Section 2/blue Rectangle 1128.webp"
                            alt="Blue rectangle"
                            className="block h-auto w-full object-cover 2xl:h-full"
                            eager
                        />
                        {/* Card image overlay positioned within the blue rectangle */}
                        <div className="relative mx-auto mt-6 w-full max-w-md sm:max-w-lg 2xl:mt-0 2xl:absolute 2xl:left-0 2xl:top-[93px] 2xl:h-[390px] 2xl:w-[537px]">
                            <OptimizedImage
                                src="/homepage/Section 2/card image.webp"
                                alt="Card image"
                                className="block h-auto w-full object-cover 2xl:h-full"
                                eager
                            />
                        </div>
                        {/* Sky blue vertical line to the right of the image */}
                        <div
                            className="hidden 2xl:block absolute left-[504px] top-[72px] h-[430px] w-[12px] rounded-md bg-[#2DB8FF]"
                            aria-hidden
                        />
                        {/* Headline text over the image */}
                        <div className="relative mx-auto mt-6 max-w-sm text-left 2xl:absolute 2xl:left-[20px] 2xl:bottom-[150px] 2xl:mt-0 2xl:max-w-[320px]">
                            <h3 className="text-2xl sm:text-[28px] 2xl:text-[32px] font-extrabold leading-tight text-white">
                                CTI Highlights
                                <br />
                                &amp; Reports
                            </h3>
                        </div>
                    </div>
                    {/* Right-side stacked cards touching blue rectangle */}
                    <div className="relative mt-12 w-full max-w-xl 2xl:mt-0 2xl:absolute 2xl:left-[677px] 2xl:top-[120px] 2xl:h-[500px] 2xl:w-[581px] z-10">
                        <div className="flex h-auto flex-col gap-4 2xl:h-full 2xl:justify-between">
                            {ctiCards.map((card) => (
                                <div
                                    key={card.title}
                                    className="relative rounded-lg bg-white px-5 py-4 shadow-[0_12px_36px_rgba(0,0,0,0.1)] ring-1 ring-black/10"
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
                    </div>
                    {/* Bottom-right action button */}
                    <div className="mt-10 2xl:mt-0 2xl:absolute 2xl:right-[40px] 2xl:bottom-[40px]">
                        <a
                            href="#"
                            className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-md bg-[#0000D3] px-6 py-3.5 text-base font-semibold text-white shadow-md ring-1 ring-black/5 transition-colors hover:bg-blue-800"
                        >
                            Explore more Reports
                            <span className="translate-y-[1px]" aria-hidden>
                                ↗
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 3 - Why Leading Organizations Choose Security Council */}
        <section className="relative bg-white overflow-hidden" aria-label="Why choose Security Council">
            <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 2xl:px-0 py-16 sm:py-20 2xl:py-24 bg-white">
                {/* Headings row */}
                <div className="flex flex-col gap-6 2xl:flex-row 2xl:items-start 2xl:justify-between">
                    <h2 className="max-w-[500px] text-3xl sm:text-[32px] font-extrabold leading-tight text-[#0A2A57]">
                        Why Leading Organizations
                        <br />
                        Choose Security Council ?
                    </h2>
                    <div className="max-w-xl 2xl:w-[660px]">
                        <h3 className="text-xl sm:text-2xl 2xl:text-[28px] font-extrabold leading-snug text-[#0A2A57]">
                            Independent. Analytical. Uncompromised.
                        </h3>
                        <p className="mt-2 text-sm sm:text-base text-[#0A2A57]/80 leading-relaxed">
                            Security Council doesn’t lead with assumption, we lead with
                            <br className="hidden 2xl:block" />
                            research intelligence.
                        </p>
                    </div>
                </div>

                {/* Four cards */}
                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 2xl:mt-12 2xl:grid-cols-4">
                    {[0, 1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="relative rounded-xl bg-white px-6 py-6 shadow-[0_12px_36px_rgba(0,0,0,0.08)] ring-1 ring-black/10"
                        >
                            {/* Icon */}
                            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-md bg-white text-[#0A2A57] shadow-md ring-1 ring-black/10">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden
                                >
                                    <path d="M12 3L3 9l9 6 9-6-9-6zm0 8.5L5 7.5V15l7 4.5 7-4.5V7.5L12 11.5z" fill="currentColor" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-bold text-[#0A2A57]">
                                Independent and Unbiased
                            </h4>
                            <p className="mt-2 text-base font-medium leading-relaxed text-[#0A2A57]">
                                We are not tied to any product, platform, or provider. Our intelligence is neutral,
                                research-driven and free from commercial influence, a trusted source for those who
                                need facts, not sales narratives.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Section 4 - Newsletter */}
        <section className="relative bg-white overflow-hidden" aria-label="Section 4">
            <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 2xl:px-0 py-16 sm:py-20 2xl:py-0 2xl:h-[373px]">
                {/* Mobile / tablet layout */}
                <div className="flex flex-col gap-6 2xl:hidden">
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
                                    htmlFor="newsletterEmailHomeMobile"
                                    className="text-sm font-semibold text-white"
                                >
                                    Work Email
                                </label>
                                <input
                                    id="newsletterEmailHomeMobile"
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
                <div className="hidden 2xl:block">
                    <div className="absolute inset-0 z-0">
                        <OptimizedImage
                            src="/homepage/Section 4/background.webp"
                            alt=""
                            className="h-full w-full object-cover"
                            eager
                            aria-hidden="true"
                        />
                    </div>
                    {/* Newsletter overlay copied from LatestInsightPage */}
                    <div className="absolute inset-0 flex items-center justify-center px-4 z-10">
                        <div className="flex w-full max-w-6xl flex-col items-center gap-8 rounded-md border border-white/30 bg-white/55 px-4 py-8 shadow-[0_18px_50px_rgba(0,0,0,0.08)] supports-[backdrop-filter]:backdrop-blur-[3px] sm:w-[90%] sm:px-8 sm:py-10 2xl:h-[238px] 2xl:flex-row 2xl:items-center 2xl:gap-[46px] 2xl:px-[96px]">
                            <div className="w-full text-center 2xl:w-[560px] 2xl:text-left">
                                <h3 className="mb-3 text-xl sm:text-2xl 2xl:text-[32px] font-bold leading-tight 2xl:leading-[38px] text-[#002856]">
                                    Direct to your inbox
                                </h3>
                                <p className="text-sm sm:text-base 2xl:text-[18px] leading-relaxed 2xl:leading-[30px] text-black">
                                    Sign up for our newsletter with the latest insights, analysis and
                                    <br className="hidden sm:block 2xl:hidden" />
                                    <span className="sm:hidden 2xl:inline"> </span>more.
                                </p>
                            </div>
                            <div className="w-full 2xl:w-[621px]">
                                <div className="mb-2">
                                    <label
                                        htmlFor="newsletterEmailHome"
                                        className="text-sm sm:text-base 2xl:text-[15px] font-bold text-[#002856]"
                                    >
                                        Work Email
                                    </label>
                                </div>
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                                    <input
                                        id="newsletterEmailHome"
                                        type="email"
                                        className="h-[50px] w-full border border-[#757575] bg-white px-3 text-sm sm:h-[54px] sm:text-base 2xl:text-[16px]"
                                        placeholder="you@company.com"
                                        aria-label="Work Email"
                                    />
                                    <button className="flex h-[50px] w-full items-center justify-center rounded border-2 border-[#0000D3] bg-[#0000D3] text-sm font-bold text-white transition-colors hover:bg-blue-800 sm:h-[58px] sm:w-[150px] sm:text-base">
                                        Continue
                                        <svg className="ml-2 h-4 w-4 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6" viewBox="0 0 25 24" fill="none">
                                            <circle cx="12.75" cy="12" r="12" fill="white" />
                                            <path
                                                d="M6.75 10.8C6.30817 10.8 5.95 11.1582 5.95 11.6C5.95 12.0419 6.30817 12.4 6.75 12.4V11.6V10.8ZM19.3157 12.1657C19.6281 11.8533 19.6281 11.3468 19.3157 11.0344L14.2245 5.94318C13.9121 5.63076 13.4056 5.63076 13.0931 5.94318C12.7807 6.2556 12.7807 6.76213 13.0931 7.07455L17.6186 11.6L13.0931 16.1255C12.7807 16.4379 12.7807 16.9445 13.0931 17.2569C13.4056 17.5693 13.9121 17.5693 14.2245 17.2569L19.3157 12.1657ZM6.75 11.6V12.4H18.75V11.6V10.8H6.75V11.6Z"
                                                fill="#0000D3"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <p className="mt-2 text-xs sm:text-sm 2xl:text-[12px] leading-relaxed 2xl:leading-[18px] text-black">
                                    By clicking the &quot;Continue&quot; button, you are agreeing to the{' '}
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

export default Home;


