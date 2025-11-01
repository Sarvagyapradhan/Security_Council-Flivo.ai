import React from 'react';
import OptimizedImage from './OptimizedImage';

const ThreatActorPage: React.FC = () => {
  // Section data for the follow-up block
  const breachPoints = [
    {
      lead: 'Fileless malware',
      rest: ' that leaves no disk trace',
    },
    {
      lead: 'AI-generated payloads',
      rest: ' that evade traditional sandboxing',
    },
    {
      lead: 'Living-off-the-land techniques',
      rest: ' that use your own admin tools',
    },
    {
      lead: 'Tactics mimicking legitimate user behaviour',
      rest: ' down to session timing',
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="w-full lg:w xl:w">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start">
              <div className="flex-1">
                <h1 className="mb-2 max-w-[34ch] text-[28px] font-extrabold leading-tight tracking-tight text-[#002856] sm:max-w-[32ch] sm:text-[34px] md:max-w-[30ch] md:text-[40px] lg:max-w-[28ch] xl:max-w-[24ch]">
                  The Breach You’ll Never
                  <br className="hidden sm:block" />
                  Detect:
                  <br className="hidden sm:block" />
                  What Every Cybersecurity
                  <br className="hidden sm:block" />
                  Leader Is Missing
                </h1>
                <p className="text-sm text-slate-600 sm:text-base md:text-lg">
                  By Cyber Security Experts
                  <span className="mx-2 text-slate-400">|</span>
                  July 15 2025
                </p>
              </div>
              {/* Hero image with decorative outline and caption */}
              <div className="relative mt-2 w-full sm:w-auto lg:mt-0 lg:w-[360px]">
                {/* decorative rectangle outline behind the image */}
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
            {/* Section kicker heading */}
            <h3
              className="inline-block rounded px-3 py-2 text-[#002856] font-semibold text-[23.8px] leading-[28px]"
              style={{ letterSpacing: 0, fontFamily: 'Inter' }}
            >
            The Comfort of Coverage, The Reality of Breach
            </h3>
            <p className="max-w-[78ch] text-base leading-7 text-slate-800 sm:max-w-[74ch] sm:text-lg sm:leading-8 md:max-w-[70ch] lg:max-w-none xl:max-w-none">
            Most cybersecurity leaders feel confident in their coverage. They’ve invested in top-tier firewalls, endpoint detection, SIEM dashboards and perhaps even an XDR suite. Everything is logging, alerting and correlating, until one day, it isn’t.
Because the breach that changes everything won’t trigger an alert. It won’t match a known pattern. And it won’t show up until the damage is done.
The truth is harsh but simple, Your current cybersecurity tools are not built to detect the next breach.
            </p>
          </div>
          {/* Removed the separate image column; merged placeholder above */}
        </div>
      </section>

      {/* Big Section 1 */}
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div>
          {/* Heading + paragraph */}
          <div className="mb-4">
            <h2 className="text-[28px] font-extrabold leading-tight text-[#002856] sm:text-[34px] md:text-[40px]">
              Real Intelligence Comes Before the Alert
            </h2>
            <p className="mt-3 max-w-[80ch] text-base leading-7 text-slate-800 sm:text-lg sm:leading-8">
              If you’re waiting for your tools to warn you, you’re already late. What’s needed now is not just
              protection, but <span className="font-semibold">pre‑breach intelligence</span>.
            </p>
          </div>
          {/* Bullets */}
          <div className="mb-4">
            <p className="text-[13px] text-slate-600">This means:</p>
            <ul className="mt-3 ml-6 list-disc space-y-3 text-[17px] sm:text-lg text-slate-900">
              <li><span className="font-semibold text-[#0B3B73]">Profiling threat actors</span> before they target you</li>
              <li><span className="font-semibold text-[#0B3B73]">Mapping exposed assets</span> even if they’re not in your active inventory</li>
              <li><span className="font-semibold text-[#0B3B73]">Monitoring dark web ecosystems</span> for chatter tied to your business</li>
              <li><span className="font-semibold text-[#0B3B73]">Tracking breach patterns across industries</span> to predict what’s coming next</li>
            </ul>
          </div>
          {/* Closing */}
          <div>
            <p className="max-w-[80ch] text-base leading-7 text-slate-800 sm:text-lg sm:leading-8">
              This kind of foresight doesn’t live inside your stack; it lives outside it, in the intelligence layer few
              organizations prioritize. At <span className="font-semibold">Security Council</span>, we operate at this
              level, quietly guiding security leaders through what their tools can’t see.
            </p>
          </div>
        </div>
      </section>

      {/* Big Section 2 */}
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div>
          {/* Heading + paragraph */}
          <div className="mb-4">
            <h2 className="text-[28px] font-extrabold leading-tight text-[#002856] sm:text-[34px] md:text-[40px]">
              Why This Matters Now: Breaches Have Become Stealthy and Strategic
            </h2>
            <p className="mt-3 max-w-[80ch] text-base leading-7 text-slate-800 sm:text-lg sm:leading-8">
              We are no longer in an era of smash‑and‑grab cybercrime. Advanced attackers now play the long game:
            </p>
          </div>
          {/* Bullets */}
          <div className="mb-4">
            <ul className="ml-6 list-disc space-y-3 text-[17px] sm:text-lg text-slate-900">
              <li><span className="font-semibold text-[#0B3B73]">They infiltrate quietly</span></li>
              <li><span className="font-semibold text-[#0B3B73]">Move laterally</span> over weeks or months</li>
              <li><span className="font-semibold text-[#0B3B73]">Exploit trust instead of code</span></li>
              <li><span className="font-semibold text-[#0B3B73]">Exfiltrate slowly and deliberately</span></li>
            </ul>
          </div>
          {/* Closing */}
          <div>
            <p className="max-w-[80ch] text-base leading-7 text-slate-800 sm:text-lg sm:leading-8">
              The dwell time—between breach and detection—often stretches beyond <span className="font-semibold">180
              days</span> for advanced persistent threats. That’s months of undetected access, all while your dashboards
              stay green. Security is no longer about taller walls; it’s about seeing over the horizon before the enemy
              arrives.
            </p>
          </div>
        </div>
      </section>

      {/* Big Section 3 */}
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div>
          {/* Heading + paragraph */}
          <div className="mb-4">
            <h2 className="text-[28px] font-extrabold leading-tight text-[#002856] sm:text-[34px] md:text-[40px]">
              The Wake‑Up Call: Is Anyone Watching What Your Tools Aren’t?
            </h2>
            <p className="mt-3 max-w-[80ch] text-base leading-7 text-slate-800 sm:text-lg sm:leading-8">
              Most CISOs don’t suffer from a lack of tools; they suffer from a false sense of visibility. Every dollar
              spent on another detection product widens the stack but doesn’t always deepen the intelligence. Ask
              yourself:
            </p>
          </div>
          {/* Bullets */}
          <div className="mb-4">
            <ul className="ml-6 list-disc space-y-3 text-[17px] sm:text-lg text-slate-900">
              <li>Are you tracking who’s talking about your company in hacker forums?</li>
              <li>Can you see cross‑sector threat trends before they hit your region?</li>
              <li>Do you know what a breach would look like if it didn’t use malware?</li>
              <li>Is your team receiving alerts, or are they receiving foresight?</li>
            </ul>
          </div>
          {/* Closing */}
          <div>
            <p className="max-w-[80ch] text-base leading-7 text-slate-800 sm:text-lg sm:leading-8">
              It’s not the alert that should worry you; it’s the breach that never triggers one.
            </p>
          </div>
        </div>
      </section>
      {/* Next Section: Heading + paragraph (same div), then points+image (same div), then closing paragraph */}
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-md bg-white py-6 lg:py-8">
          {/* 1) Heading and paragraph in the same div */}
          <div className="mb-6">
            <h2 className="text-[28px] font-extrabold leading-tight text-[#002856] sm:text-[34px] md:text-[40px]">
              Your Cyber Tools Are Designed to See the Past,
              <br className="hidden sm:block" />
              {' '}Not the Present
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-800 sm:text-lg sm:leading-8">
              Security technology, no matter how advanced, has one fatal flaw: it’s retrospective. Whether it’s your EDR
              stack analyzing behaviors, your SIEM correlating logs, or your threat feeds updating indicators, these
              systems are fundamentally trained on what has already happened. But the attackers have evolved. Modern
              breaches leverage:
            </p>
          </div>

          {/* 2) Points and image together */}
          <div className="mb-6 flex flex-col items-start gap-10 lg:flex-row lg:items-start">
            {/* Points */}
            <div className="lg:w-3/5">
              <ul className="ml-6 list-disc space-y-4 text-[17px] sm:text-lg">
                {breachPoints.map((p) => (
                  <li key={p.lead} className="pl-2">
                    <span className="font-semibold text-[#0B3B73]">{p.lead}</span>
                    <span className="text-slate-900">{p.rest}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Image removed per request - will add later */}
          </div>

          {/* 3) Closing paragraph in another div */}
          <div className="bg-slate-50 p-5 rounded-md">
            <p className="text-[15px] leading-7 text-slate-800 sm:text-base">
              What happens when an attacker never drops a file, never triggers a rule and never acts outside the bounds
              of a typical user?
            </p>
            <p className="mt-2 text-[15px] font-semibold text-[#002856] sm:text-base">
              Your tools remain quiet. And your breach remains invisible.
            </p>
          </div>
        </div>
      </section>

      {/* Silent Risks Section (matches uploaded style) */}
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* OUTER WRAPPER - covers all inner divs */}
        <div>
          {/* 1) Heading + paragraph in the same div */}
          <div className="mb-4">
            <h2 className="text-[28px] font-extrabold leading-tight text-[#002856] sm:text-[34px] md:text-[40px]">
              The Silent Risks: What CISOs Often Miss
            </h2>
            <p className="mt-3 max-w-[80ch] text-base leading-7 text-slate-800 sm:text-lg sm:leading-8">
              Even the most mature cybersecurity programs carry blind spots, not because of negligence, but
              {' '}<span className="whitespace-nowrap">because of the limits</span>
              <br className="hidden sm:block" />
              {' '}of traditional visibility. Some of the most dangerous exposures today include:
            </p>
          </div>

          {/* 2) Points (separate div) */}
          <div className="mb-3">
            <ul className="ml-6 list-disc space-y-3 text-[17px] sm:text-lg text-slate-900">
              <li>
                <span className="font-semibold text-[#0B3B73]">Expired OAuth tokens</span> that remain active through third‑party integrations
              </li>
              <li>
                <span className="font-semibold text-[#0B3B73]">Unmonitored SaaS tools</span> installed by departments without IT oversight
              </li>
              <li>
                <span className="font-semibold text-[#0B3B73]">Insider threats</span> operating within their privilege boundaries
              </li>
              <li>
                <span className="font-semibold text-[#0B3B73]">Dark web chatter</span> discussing your infrastructure or leaked credentials
              </li>
              <li>
                <span className="font-semibold text-[#0B3B73]">Cross‑org campaign patterns</span> that no single SOC team can observe alone
              </li>
            </ul>
          </div>

          {/* 3) Closing line (separate div) */}
          <div>
            <p className="mt-3 max-w-[80ch] text-base leading-7 text-slate-800 sm:text-lg sm:leading-8">
              Security teams are overwhelmed with noise, while attackers exploit the silence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThreatActorPage;

