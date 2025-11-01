import React from 'react';
import OptimizedImage from './OptimizedImage';

const AIThreatsPage: React.FC = () => {
  const dangerPoints = [
    {
      title: 'Real-Time Adaptation',
      body:
        'Unlike static malware or scripted phishing, AI-driven attacks learn from each countermeasure. Machine learning models analyze your defenses and generate evasion-ready flows—changing payloads, timing and botnet routing in minutes.',
    },
    {
      title: 'Scale at Speed',
      body:
        'With AI automation, attackers can launch thousands of customized attacks instantly. Phishing campaigns receive hyper-personalized content, vulnerability scans run on autopilot and infrastructure rotates faster than blocklists can adapt.',
    },
    {
      title: 'Deepfake & Deception',
      body:
        'Attackers use AI to synthesize realistic voice, video and text impersonation. These deepfakes create convincing executive approvals, vendor requests and incident notifications that short-circuit traditional training-based defenses.',
    },
    {
      title: 'Evasion & Stealth',
      body:
        'AI systems probe security tools—learning which behaviors trigger alerts and rapidly adjusting tactics to stay under the radar. This cat‑and‑mouse engine erodes the effectiveness of signature-based detections.',
    },
    {
      title: 'Resource Efficiency',
      body:
        'What once required large teams now needs only an AI model and minimal human oversight. This lowers the barrier to entry, enabling smaller groups to mount sophisticated campaigns once limited to well‑funded adversaries.',
    },
  ];

  const deployPoints = [
    {
      title: 'Autonomous Vulnerability Mapping',
      body:
        'AI-driven scanners crawl network perimeters and public repositories to identify weaknesses within minutes. Rather than manually probing each endpoint, attackers deploy models that prioritize high‑value targets and best paths to entry.',
    },
    {
      title: 'Hyper‑Personalized Phishing',
      body:
        'Generative AI tools craft emails that mimic an organization’s tone, language and writing behaviors. By analyzing public profiles and communications, these tools generate convincing messages—complete with personalized subject lines and context—that bypass standard spam filters and trick unsuspecting employees.',
    },
    {
      title: 'Deepfake Impersonation',
      body:
        'Voice and video synthesis allow threat actors to spoof executives, creating calls or video messages that pressure staff into urgent actions, credentials or wire transfers. These deepfakes weaponize social engineering at executive precision.',
    },
    {
      title: 'Adaptive Malware',
      body:
        'AI models guide the construction of polymorphic malware and sandbox‑aware payloads, modifying behavior on‑device to avoid detection and maximize persistence. The result: toolkits that evolve faster than static rules can keep up.',
    },
  ];

  const fightBackPoints = [
    {
      title: 'Strengthen Situational Awareness with Strategic Intelligence',
      body:
        'Stay on top of long‑term cyber trends and emerging risk factors through expert‑led insights. By leveraging threat intelligence, executive briefings and industry‑specific reporting, security teams can proactively act, not react.',
    },
    {
      title: 'Understand Adversaries with Tactical & Operational Intelligence',
      body:
        'Know your enemy. Tactical insights from threat actor playbooks, techniques and procedures (TTPs) help you spot early warning signs, while operational intelligence reveals attack motivations, timelines and network patterns. This context allows faster, more effective decisions.',
    },
    {
      title: 'Go Deeper with Technical Threat Intelligence & Forensic Analysis',
      body:
        'Voice and video synthesis allow threat actors to spoof executives, creating calls or video messages that pressure staff into rapid decisions, creating links or rapid actions. Learn more about IP reputation feeds to enable faster threat hunting, detailed malware analyses, code‑level research that identify attacker infrastructure and Digital Forensics.',
    },
    {
      title: 'Monitor the Dark Web with AI‑Powered Detection',
      body:
        'Analyst teams can detect credential leaks, ransomware listings and stolen datasets long before they hit your network. By combining real‑time dark web monitoring with analyst alerts, organizations can act on advanced intelligence before attacks materialize.',
    },
    {
      title: 'Act Faster with Custom Reports & Incident Response Support',
      body:
        "Generic feeds don't aid live incident response. Tailored risk assessments, vulnerability-specific guidance and direct analyst support help teams move fast. Custom action reports and incident response coordination help teams move when hours matter most.",
    },
  ];

  const ctiReports = [
    {
      title: 'How to Respond to a Credential Leak in 4 Steps',
      link: 'Read Now',
    },
    {
      title: 'Tracking Ransomware Kits Across Dark Web Markets',
      link: 'Read Now',
    },
    {
      title: 'Strategic Briefing: What CISOs Must Know About Emerging Threat Actors',
      link: 'Read Now',
    },
    {
      title: 'Playbook: Threat Intelligence for Compliance & Legal Teams',
      link: 'Title case',
    },
    {
      title: 'Threat Report: Breach Trends by Industry – Q2 2025',
      link: 'Learn More',
    },
    {
      title: 'Security Council Intelligence Brief – Executive Edition',
      link: 'Read Now',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="w-full lg:w xl:w">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start">
              <div className="flex-1">
                <h1 className="mb-2 max-w-[34ch] text-3xl font-extrabold leading-tight tracking-tight text-[#002856] sm:max-w-[32ch] sm:text-4xl md:max-w-[30ch] md:text-5xl lg:max-w-[28ch] xl:max-w-[24ch]">
                  The Rise of AI‑Powered Threats:
                  <br className="hidden sm:block" />
                  What Security Teams Need to Know
                </h1>
                <p className="text-sm text-slate-600 sm:text-base">
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
            <p className="max-w-[78ch] text-base leading-7 text-slate-800 sm:max-w-[74ch] sm:text-lg sm:leading-8 md:max-w-[70ch] lg:max-w-none xl:max-w-none">
              Artificial Intelligence is no longer just a defensive ally, it’s 2025 and over 70% of enterprises have faced AI-driven cyberattacks. By automating attacks, mimicking legitimate users and rapidly adapting to countermeasures, AI-powered threats are rewriting the rules of engagement. Think phishing emails so convincing they fool even the sharpest employees or malware that slips past defenses like a ghost. Artificial intelligence (AI) isn’t just powering innovation; it’s arming cybercriminals with tools that are faster, smarter and sneakier than ever. In this post, we’ll uncover what makes these threats so dangerous, examine the tactics in play today and outline how security teams can fight back before it’s too late.
            </p>
          </div>
          {/* Removed the separate image column; merged placeholder above */}
        </div>
      </section>

      {/* Why AI‑Powered Threats Are a Growing Danger */}
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5 lg:col-span-4" >
            <div className="mb-4 flex items-center gap-3">
              <h2 className="text-2xl font-bold leading-tight text-[#002856] sm:text-3xl">
                Why AI‑Powered Threats Are a Growing Danger
              </h2>
              <OptimizedImage src="/images/warning.webp" alt="Warning icon" className="h-24 w-24 sm:h-32 sm:w-32" />
            </div>
          </div>
          <div className="md:col-span-7 lg:col-span-8 pl-4 lg:pl-8" style={{ borderLeft: '1px solid #0000008F' }}>
            <ol className="space-y-6">
              {dangerPoints.map((p, i) => (
                <li key={p.title} className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#002856] sm:text-lg">{p.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-700 sm:text-base">{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Today How Cybercriminals Deploy AI‑Powered Attacks in 2025 */}
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="mb-3 text-2xl font-bold text-[#002856] sm:text-3xl">Today How Cybercriminals Deploy AI‑Powered Attacks in 2025</h2>
        <p className="mb-6 max-w-[80ch] text-sm leading-7 text-slate-700 sm:text-base lg:max-w-[74ch] xl:max-w-[70ch]">
          Attackers are already harnessing AI across multiple stages of the attack lifecycle, turning once‑manual tasks
          into high‑speed, scalable operations.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {deployPoints.map((p, i) => (
            <div key={p.title} className="flex items-start gap-4 rounded-xl bg-white">
              <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="text-base font-semibold text-[#002856] sm:text-lg">{p.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-700 sm:text-base">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How Security Teams Can Fight Back */}
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-2xl font-bold text-[#002856] sm:text-3xl">How Security Teams Can Fight Back</h2>
        <p className="mb-6 max-w-4xl text-sm leading-7 text-slate-700 sm:text-base">
          AI-powered threats demand new tactical defenses; they require intelligence which is fast, layered and tailored. Here's how security teams can fight back before it's too late:
        </p>
        <ol className="space-y-6">
          {fightBackPoints.map((p, i) => (
            <li key={p.title} className="flex items-start gap-4">
              <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="text-base font-semibold text-[#002856] sm:text-lg">{p.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-700 sm:text-base">{p.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm leading-7 text-slate-700 sm:text-base">
          AI‑powered threats aren’t coming—they’re already shaping the threat landscape. While cyber attacks are executed
          at societal scale, the means to do that are no longer out of reach. Success now depends on access to tailored,
          high‑fidelity intelligence; the ability to identify weak signals; and direct collaboration with analysts who
          provide action‑ready guidance when it matters most.
        </p>
      </section>

      {/* CTA - Want to explore more? */}
      <section className="bg-[#0050AC]">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-7 lg:col-span-8">
              <h3 className="mb-3 text-2xl font-bold leading-snug text-white sm:text-3xl">Want to explore more?</h3>
              <p className="max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
                Request a Private Consultation to explore how Security Council’s custom reporting, dark web monitoring
                and analyst‑driven insights can help your team stay ahead of AI‑powered threats.
              </p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#002856] transition-colors hover:bg-gray-100 sm:text-base">
                Request Private Assessment
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17l10-10M17 7H7v10" />
                </svg>
              </button>
            </div>
            <div className="md:col-span-5 lg:col-span-4">
              {/* Image placeholder */}
              <div className="flex h-40 w-full items-center justify-center rounded-xl border-2 border-dashed border-white/60 bg-white/10 sm:h-48 md:h-56">
                <div className="text-center">
                  <p className="text-sm font-semibold text-white/90">CTA Image Placeholder</p>
                  <p className="text-xs text-white/70">(Set image URL later)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTI Highlights & Reports */}
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h3 className="mb-6 text-xl font-bold text-[#002856] sm:text-2xl">CTI Highlights & Reports</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ctiReports.map((r) => (
            <div key={r.title} className="space-y-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <h4 className="text-base font-semibold leading-6 text-[#002856] sm:text-lg">{r.title}</h4>
              <button className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900 sm:text-base">
                {r.link}
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17l10-10M17 7H7v10" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AIThreatsPage;

