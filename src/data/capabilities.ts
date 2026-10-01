import type {ExperienceItem} from '@site/src/components/Experience';

export const CATEGORY_ORDER = [
  'Architecture & Design',
  'Coding',
  'Platform & Tools',
  'DevOps',
  'Methodologies',
  'Leadership',
  'AI',
];

export const CATEGORY_BY_SKILL: Record<string, string> = {
  // Architecture & Design
  'Enterprise Architecture': 'Architecture & Design',
  'Distributed Systems': 'Architecture & Design',
  'Event-Driven Architecture': 'Architecture & Design',
  Microservices: 'Architecture & Design',
  'Micro Frontends': 'Architecture & Design',
  'Disaster Recovery': 'Architecture & Design',

  // Coding
  'REST API': 'Coding',
  'Backend for Frontends': 'Coding',
  Java: 'Coding',
  TypeScript: 'Coding',
  SQL: 'Coding',
  noSQL: 'Coding',
  OAuth: 'Coding',

  // Platform & Tools
  React: 'Platform & Tools',
  'Spring Boot': 'Platform & Tools',
  Quarkus: 'Platform & Tools',
  Kafka: 'Platform & Tools',
  RabbitMQ: 'Platform & Tools',

  // DevOps
  Docker: 'DevOps',
  Kubernetes: 'DevOps',
  ArgoCD: 'DevOps',

  // Methodologies
  'Code Reviews': 'Methodologies',
  Scrum: 'Methodologies',
  Scrumban: 'Methodologies',
  'Team Topologies': 'Methodologies',

  // Leadership
  Mentoring: 'Leadership',
  'Performance Reviews': 'Leadership',
  'Technical Strategy': 'Leadership',
  'Engineering Standards': 'Leadership',
  'Knowledge Sharing': 'Leadership',

  // AI
  'Harness engineering': 'AI',
  'Agentic Development': 'AI',
};

export const CATEGORY_META: Record<
  string,
  {description: string; accent: string}
> = {
  'Architecture & Design': {
    description:
      'Designing systems that scale and stay maintainable for years.',
    accent: 'var(--brand-gold)',
  },
  Coding: {
    description:
      'Building and shipping the APIs and backend platforms themselves.',
    accent: 'var(--ifm-color-primary-light)',
  },
  'Platform & Tools': {
    description: 'The frameworks, databases, and cloud platforms I build on.',
    accent: 'var(--ifm-color-primary-lighter)',
  },
  DevOps: {
    description:
      'Automating delivery pipelines and keeping systems running in production.',
    accent: 'var(--ifm-color-primary-lighter)',
  },
  Methodologies: {
    description:
      'Applying the processes and practices that keep delivery predictable.',
    accent: 'var(--ifm-color-primary-lightest)',
  },
  Leadership: {
    description: 'Guiding teams and setting technical direction.',
    accent: 'var(--brand-gold)',
  },
  AI: {
    description: 'Applying AI and LLM tooling to real engineering workflows.',
    accent: 'var(--ifm-color-primary-light)',
  },
  Other: {
    description: '',
    accent: 'var(--brand-gold)',
  },
};

export interface SkillGroup {
  readonly title: string;
  readonly description: string;
  readonly accent: string;
  readonly skills: string[];
}

export function groupSkills(items: ExperienceItem[]): SkillGroup[] {
  const seen = new Map<string, string>();
  for (const item of items) {
    for (const skill of item.skills ?? []) {
      seen.set(skill, CATEGORY_BY_SKILL[skill] ?? 'Other');
    }
  }

  const byCategory = new Map<string, string[]>();
  for (const [skill, category] of seen) {
    const list = byCategory.get(category) ?? [];
    list.push(skill);
    byCategory.set(category, list);
  }

  return [...CATEGORY_ORDER, 'Other']
    .filter((category) => byCategory.has(category))
    .map((category) => ({
      title: category,
      skills: byCategory.get(category)!.sort(),
      ...CATEGORY_META[category],
    }));
}
