export function normalizeTitle(input: string): string {
  return input
    .toLowerCase()
    .replace(/\u2013|\u2014|\u2015|\u2212/g, '-')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

const knownInsightRoutes: Record<string, string> = {
  [normalizeTitle('Dark Web Ransomware Trends: 8-Month Intelligence Study')]: 'insight-1',
  [normalizeTitle('AI-Powered Threats: 12-Month Research Analysis')]: 'insight-2',
  [normalizeTitle('Credential Leak Intelligence: Analysis of 300+ Incidents')]: 'insight-3',
  [normalizeTitle('Healthcare Threat Landscape: Q2 2025 Assessment')]: 'insight-4',
  [normalizeTitle('Financial Sector Risk Analysis: Emerging Threats')]: 'insight-5',
  [normalizeTitle('Critical Infrastructure Vulnerabilities: Research Brief')]: 'insight-6',
  [normalizeTitle('Emerging Cyber Regulations: Global Analysis')]: 'insight-7',
  [normalizeTitle('Emerging Cyber Regulations: Global Risk Analysis for Legal & Compliance Leaders')]: 'insight-7',
  [normalizeTitle('Weekly Threat Intelligence Brief – August 2025')]: 'insight-8',
  [normalizeTitle('Outsmart Threats Before They Strike with Proactive Pre-Breach Intelligence')]: 'insight-9',
};

export function getInsightRouteForTitle(title: string | undefined | null): string | undefined {
  if (!title) return undefined;
  return knownInsightRoutes[normalizeTitle(title)];
}

export function registerInsightRoute(title: string, route: string): void {
  knownInsightRoutes[normalizeTitle(title)] = route;
}

