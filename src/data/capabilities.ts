import type {CapabilityGroup} from '@site/src/components/Expertise';

export const CAPABILITY_GROUPS: CapabilityGroup[] = [
  {
    title: 'Architecture & Design',
    description:
      'Designing systems that scale and stay maintainable for years.',
    accent: 'var(--brand-gold)',
    capabilities: [
      'Enterprise Architecture',
      'Distributed Systems',
      'Event-Driven Architecture',
      'Microservices',
      'Micro Frontends',
      'Disaster Recovery',
      'REST API',
      'Backend for Frontends',
      'OAuth',
    ],
  },
  {
    title: 'Coding',
    description:
      'Building and shipping the APIs and backend platforms themselves.',
    accent: 'var(--ifm-color-primary-light)',
    capabilities: ['Java', 'TypeScript', 'SQL', 'noSQL'],
  },
  {
    title: 'Platform & Tools',
    description: 'The frameworks, databases, and cloud platforms I build on.',
    accent: 'var(--ifm-color-primary-lighter)',
    capabilities: [
      'React',
      'Spring Boot',
      'Quarkus',
      'Kafka',
      'RabbitMQ',
      'Postgres',
      'MongoDB',
    ],
  },
  {
    title: 'DevOps',
    description:
      'Automating delivery pipelines and keeping systems running in production.',
    accent: 'var(--ifm-color-primary-lighter)',
    capabilities: ['Docker', 'Kubernetes', 'ArgoCD', 'Helm', 'GitOps'],
  },
  {
    title: 'Methodologies',
    description:
      'Applying the processes and practices that keep delivery predictable.',
    accent: 'var(--ifm-color-primary-lightest)',
    capabilities: ['Code Reviews', 'Agility', 'Team Topologies'],
  },
  {
    title: 'Leadership',
    description: 'Guiding teams and setting technical direction.',
    accent: 'var(--brand-gold)',
    capabilities: [
      'Mentoring',
      'Performance Reviews',
      'Technical Strategy',
      'Engineering Standards',
      'Knowledge Sharing',
    ],
  },
  {
    title: 'AI',
    description: 'Applying AI and LLM tooling to real engineering workflows.',
    accent: 'var(--ifm-color-primary-light)',
    capabilities: ['Harness engineering', 'Agentic Development'],
  },
];
