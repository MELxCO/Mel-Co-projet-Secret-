
export interface Guarantee {
  id: string;
  title: string;
  description: string;
  problem: string;
  coverage: string[];
  whyIndispensable: string;
  examples: { scenario: string; cost: string }[];
  priceInfo: string;
  documents: string[];
}

export interface InsurancePack {
  id: string;
  name: string;
  description: string;
  items: string[];
  ctaText: string;
  isPopular?: boolean;
}

export interface NavItem {
  label: string;
  path: string;
}
