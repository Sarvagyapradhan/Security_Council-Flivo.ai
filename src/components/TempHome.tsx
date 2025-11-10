import React from 'react';
import OptimizedImage from './OptimizedImage';

const TempHome: React.FC = () => (
    <main>
        {/* Spacers for fixed UtilityNav and MainNav to avoid overlap */}

    
        {/* Section 1 - precise bands: 1440x903 container */}
		<section className="relative bg-white overflow-hidden" aria-label="Temporary hero">
			<div className="relative mx-auto w-[1440px] h-[877px]">
                {/* Top white band (325px) with headline/CTA */}
                <div className="h-[325px] pl-0 pr-12 sm:pl-0 sm:pr-10 lg:pl-0 lg:pr-12 flex items-start">
                    <div className="mt-10 max-w-[980px] -ml-1 sm:-ml-2 lg:-ml-3">
                        <h1 className="text-[#0A2A57] text-[56px] leading-[1.1] font-extrabold tracking-[-0.01em]">
                            Independent Cyber Threat Research. Trusted by Leaders. Backed by Analysts.
                        </h1>
                        <div className="mt-6">
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 rounded-md bg-[#0000D3] px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-black/5 transition-colors hover:bg-blue-800"
                                aria-label="View Latest Research"
                            >
                                View Latest Research
                                <span className="translate-y-[1px]" aria-hidden>↗</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Middle background band (exact 512px) */}
                <div className="relative h-[512px] overflow-visible">
                    {/* Full-bleed background image spanning viewport width */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-screen max-w-none z-0">
                        <OptimizedImage
                            src="/homepage/Section 1/Background.webp"
                            alt="Executive meeting background"
                            className="h-full w-full object-cover "
                            eager
                        />
                        <div className="absolute inset-0 pointer-events-none home-hero-overlays" />
                    </div>

                    {/* Right rectangle placeholder (added as requested) */}
					<div className="absolute right-[80px] top-[-200px] w-[420px] h-[710px] overflow-visible z-10">
                        <picture>
                            <source srcSet="/homepage/Section 1/Rectangle 1127.webp" type="image/webp" />
                            <source srcSet="/homepage/Section 1/Rectangle 1127.webp" type="image/webp" />
                            <img
                                src="/homepage/Section 1/Rectangle 1127.webp"
                                alt="Right panel rectangle"
                                className="block w-full h-full object-cover object-top"
                                loading="eager"
                                decoding="async"
                                fetchPriority="high"
                            />
                        </picture>
						{/* Vertical white border line on the card */}
						<div className="pointer-events-none absolute left-4 top-84 h-full w-[25px] bg-white z-20" />
						{/* Heading on top of the blue panel */}
						<div className="absolute top-14 left-12 right-8 z-30 pr-6">
							<h2 className="text-white text-[36px] leading-[1.15] font-extrabold tracking-[-0.01em] max-w-[420px]">
								Original Intelligence, Built
								<br />
								for Strategic
								<br />
								Decision‑Makers
							</h2>
						</div>
						{/* Stacked cards overlay */}
						<div className="absolute left-20 right-6 w-[380px] bottom-6 z-30">
							<div className="flex flex-col gap-3">
								<div className="relative bg-white/95 rounded-xl shadow-xl ring-1 ring-black/5 px-4 py-4 pr-5">
									<h3 className="text-[#0A2A57] text-[22px] font-semibold leading-snug">
										Credential Leak Intelligence: Analysis of 300+ Incidents
									</h3>
									<a href="#" className="mt-2 inline-flex items-center text-[#0000D3] font-semibold text-sm hover:underline">
										View Report <span className="ml-1 translate-y-[1px]" aria-hidden>↗</span>
									</a>
									<div className="pointer-events-none absolute top-0 right-0 h-full w-[120px] bg-gradient-to-r from-transparent to-white/60 rounded-r-xl" />
								</div>
								<div className="relative bg-white/95 rounded-xl shadow-xl ring-1 ring-black/5 px-4 py-4 pr-5">
									<h3 className="text-[#0A2A57] text-[22px] font-semibold leading-snug">
										Dark Web Ransomware Trends: 8-Month Intelligence Study
									</h3>
									<a href="#" className="mt-2 inline-flex items-center text-[#0000D3] font-semibold text-sm hover:underline">
										View Report <span className="ml-1 translate-y-[1px]" aria-hidden>↗</span>
									</a>
									<div className="pointer-events-none absolute top-0 right-0 h-full w-[120px] bg-gradient-to-r from-transparent to-white/60 rounded-r-xl" />
								</div>
								<div className="relative bg-white/95 rounded-xl shadow-xl ring-1 ring-black/5 px-4 py-4 pr-5">
									<h3 className="text-[#0A2A57] text-[22px] font-semibold leading-snug">
										Undetected Breaches: 24-Month Pattern Analysis of Stealth Attacks
									</h3>
									<a href="#" className="mt-2 inline-flex items-center text-[#0000D3] font-semibold text-sm hover:underline">
										View Report <span className="ml-1 translate-y-[1px]" aria-hidden>↗</span>
									</a>
									<div className="pointer-events-none absolute top-0 right-0 h-full w-[120px] bg-gradient-to-r from-transparent to-white/60 rounded-r-xl" />
								</div>
							</div>
						</div>
                    </div>

                    {/* Bottom-left logo within background band */}
                    <div className="pointer-events-none absolute bottom-10 left-0 -translate-x-10 z-20">
                        <OptimizedImage
                            src="/logo_sc.webp"
                            alt="Security Council logo"
                            className="w-[420px] opacity-95 logo-white"
                            eager
                        />
                    </div>
                </div>

				{/* Bottom spacer to extend Section 1 by ~60px */}
				<div className="h-[60px]" />
            </div>
		</section>

		{/* Section 2 - 1440x767 all white */}
		<section className="relative bg-white overflow-hidden" aria-label="Section 2">
			<div className="relative mx-auto w-[1440px] h-[767px] bg-white">
				{/* Blue rectangle image positioned from left edge */}
				<div className="absolute left-[-130px] top-[70px] w-[930px] h-[617px]">
					<img
						src="/homepage/Section 2/blue Rectangle 1128.webp"
						alt="Blue rectangle"
						className="block w-full h-full object-cover"
						loading="eager"
						decoding="async"
						fetchPriority="high"
					/>
					{/* Card image overlay positioned within the blue rectangle */}
					<div className="absolute left top-[93px] w-[537px] h-[390px]">
						<img
							src="/homepage/Section 2/card image.webp"
							alt="Card image"
							className="block w-full h-full object-cover"
							loading="eager"
							decoding="async"
							fetchPriority="high"
						/>
					</div>
					{/* Sky blue vertical line to the right of the image */}
					<div className="absolute left-[535px] top-[72px] w-[12px] h-[430px] bg-[#2DB8FF] rounded-md" aria-hidden />
					{/* Headline text over the image */}
					<div className="absolute left-[20px] bottom-[150px] max-w-[320px]">
						<h3 className="text-white text-[32px] font-extrabold leading-tight">CTI Highlights
							<br />& Reports</h3>
					</div>
				</div>
				{/* Right-side stacked cards touching blue rectangle */}
				<div className="absolute left-[677px] top-[120px] w-[581px] h-[500px] z-10">
					<div className="flex flex-col gap-[20px] h-full justify-between">
						{/* Card 1 */}
						<div className="relative bg-white rounded-lg shadow-[0_12px_36px_rgba(0,0,0,0.5)] ring-1 ring-black/10 px-5 py-4">
							<p className="text-[#0A2A57] text-[20px] font-bold leading-snug">Credential Leak Intelligence: Analysis of 300+ Incidents</p>
							<a href="#" className="mt-2 inline-flex items-center text-[#0000D3] font-semibold text-[16px] hover:underline">View Report <span className="ml-1 translate-y-[1px]" aria-hidden>↗</span></a>
						</div>
						{/* Card 2 */}
						<div className="relative bg-white rounded-lg shadow-[0_12px_36px_rgba(0,0,0,0.5)] ring-1 ring-black/10 px-5 py-4">
							<p className="text-[#0A2A57] text-[20px] font-bold leading-snug">Dark Web Ransomware Trends: 8‑Month Intelligence Study</p>
							<a href="#" className="mt-2 inline-flex items-center text-[#0000D3] font-semibold text-[16px] hover:underline">View Report <span className="ml-1 translate-y-[1px]" aria-hidden>↗</span></a>
						</div>
						{/* Card 3 */}
						<div className="relative bg-white rounded-lg shadow-[0_12px_36px_rgba(0,0,0,0.5)] ring-1 ring-black/10 px-5 py-4">
							<p className="text-[#0A2A57] text-[20px] font-bold leading-snug">Credential Leak Intelligence: Analysis of 300+ Incidents</p>
							<a href="#" className="mt-2 inline-flex items-center text-[#0000D3] font-semibold text-[16px] hover:underline">View Report <span className="ml-1 translate-y-[1px]" aria-hidden>↗</span></a>
						</div>
						{/* Card 4 */}
						<div className="relative bg-white rounded-lg shadow-[0_12px_36px_rgba(0,0,0,0.5)] ring-1 ring-black/10 px-5 py-4">
							<p className="text-[#0A2A57] text-[20px] font-bold leading-snug">Credential Leak Intelligence: Analysis of 300+ Incidents</p>
							<a href="#" className="mt-2 inline-flex items-center text-[#0000D3] font-semibold text-[16px] hover:underline">View Report <span className="ml-1 translate-y-[1px]" aria-hidden>↗</span></a>
						</div>
					</div>
				</div>
				{/* Bottom-right action button */}
				<div className="absolute right-[40px] bottom-[40px]">
					<a href="#" className="inline-flex items-center gap-3 rounded-md bg-[#0000D3] px-6 py-3.5 text-base font-semibold text-white shadow-md ring-1 ring-black/5 hover:bg-blue-800">
						Explore more Reports <span className="translate-y-[1px]" aria-hidden>↗</span>
					</a>
				</div>
			</div>
		</section>

		{/* Section 3 - Why Leading Organizations Choose Security Council (1440x583) */}
		<section className="relative bg-white overflow-hidden" aria-label="Why choose Security Council">
			<div className="relative mx-auto w-[1440px] h-[583px] bg-white">
				{/* Headings row */}
				<div className="px-6 lg:px-0 pt-10 flex items-start justify-between">
					<h2 className="max-w-[500px] text-[#0A2A57] text-[32px] font-extrabold leading-tight">
						Why Leading Organizations
						<br />Choose Security Council ?
					</h2>
					<div className="w-[660px]">
						<h3 className="text-[#0A2A57] text-[28px] font-extrabold leading-snug">Independent. Analytical. Uncompromised.</h3>
						<p className="mt-2 text-[#0A2A57]/80 text-[14px] leading-relaxed">
							Security Council doesn’t lead with assumption, we lead with
							<br />research intelligence.
						</p>
					</div>
				</div>

				{/* Four cards */}
				<div className="mt-8 px-6 lg:px-0 grid grid-cols-4 gap-6">
					{[0,1,2,3].map((i) => (
						<div key={i} className="relative bg-white rounded-xl shadow-[0_12px_36px_rgba(0,0,0,0.08)] ring-1 ring-black/10 px-6 py-6">
							{/* Icon */}
							<div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-md bg-white shadow-md ring-1 ring-black/10 text-[#0A2A57]">
								<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
									<path d="M12 3L3 9l9 6 9-6-9-6zm0 8.5L5 7.5V15l7 4.5 7-4.5V7.5L12 11.5z" fill="currentColor"/>
								</svg>
							</div>
							<h4 className="text-[#0A2A57] text-[18px] font-bold">Independent and Unbiased</h4>
							<p className="mt-2 text-[#0A2A57] text-[16px] leading-relaxed font-medium">
								We are not tied to any product, platform, or provider. Our
								intelligence is neutral, research-driven and free from commercial
								influence, a trusted source for those who need facts, not sales
								narratives.
							</p>
						</div>
					))}
				</div>
			</div>
		</section>

		{/* Section 4 - 1440x373 background image cover */}
		<section className="relative bg-white overflow-hidden" aria-label="Section 4">
			<div className="relative mx-auto w-[1440px] h-[373px]">
				<div className="absolute inset-0 bg-[url('/homepage/Section 4/background.webp')] bg-cover bg-center" aria-hidden />
				{/* Newsletter overlay copied from LatestInsightPage */}
				<div className="absolute inset-0 flex items-center justify-center px-4">
					<div className="w-[95%] sm:w-[90%] lg:w-[1313px] h-auto lg:h-[238px] bg-white/55 supports-[backdrop-filter]:backdrop-blur-[3px] border border-white/30 shadow-[0_18px_50px_rgba(0,0,0,0.08)] flex items-center px-4 sm:px-8 lg:px-[96px]">
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
									<label htmlFor="newsletterEmailHome" className="text-sm sm:text-base lg:text-[15px] font-bold text-[#002856]">Work Email</label>
								</div>
								<div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
									<input
										id="newsletterEmailHome"
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
			</div>
		</section>

		{/* Section 5 temporarily disabled */}
    </main>
);

export default TempHome;


