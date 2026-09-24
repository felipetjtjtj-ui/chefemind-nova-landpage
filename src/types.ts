/**
 * Types for ChefeMind Landing Page & Ecosystem
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  stat: string;
  impact: string;
  iconName: string;
}

export interface HowItWorksStep {
  step: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  quantumPulse: string;
  icon: string;
  badge: string;
}

export interface EcosystemNode {
  id: string;
  name: string;
  category: string;
  status: 'online' | 'synced' | 'active';
  description: string;
  dataThroughput: string;
  color: string;
  xPercent: number;
  yPercent: number;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  tag: string;
}

export interface SalesPipelineStage {
  id: string;
  metric: string;
  label: string;
  description: string;
  conversionBoost: string;
  accentColor: string;
}

export interface DashboardMetric {
  id: string;
  label: string;
  value: string;
  change: string;
  period: string;
  positive: boolean;
}

export interface NicheItem {
  id: string;
  title: string;
  description: string;
  exampleDialogue: string;
  benefit: string;
  iconName: string;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
