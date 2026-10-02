import React from 'react';
import styles from './styles.module.css';

export const CAPABILITIES = [
  'Agentic Development',
  'Agility',
  'ArgoCD',
  'Backend for Frontends',
  'Code Reviews',
  'Disaster Recovery',
  'Distributed Systems',
  'Docker',
  'Engineering Standards',
  'Enterprise Architecture',
  'Event-Driven Architecture',
  'GitOps',
  'Harness engineering',
  'Helm',
  'Java',
  'Kafka',
  'Knowledge Sharing',
  'Kubernetes',
  'Mentoring',
  'Micro Frontends',
  'Microservices',
  'MongoDB',
  'noSQL',
  'OAuth',
  'Performance Reviews',
  'Postgres',
  'Quarkus',
  'RabbitMQ',
  'React',
  'REST API',
  'Scrum',
  'Scrumban',
  'Spring Boot',
  'SQL',
  'Team Topologies',
  'Technical Strategy',
  'TypeScript',
] as const;

export type Capability = (typeof CAPABILITIES)[number];

export interface CapabilityGroup {
  readonly title: string;
  readonly description: string;
  readonly accent: string;
  readonly capabilities: Capability[];
}

export interface ExpertiseProps {
  readonly capabilityGroups: CapabilityGroup[];
}

export default function Expertise({
  capabilityGroups,
}: ExpertiseProps): React.ReactElement {
  return (
    <div className={styles.panel}>
      <span className={styles.eyebrow}>Capabilities</span>
      <h1 className={styles.heading}>What I work with</h1>
      <p className={styles.intro}>
        The stack changes from project to project — these are the areas I keep
        coming back to.
      </p>

      <div className={styles.rows}>
        {capabilityGroups.map((capabilityGroup) => (
          <div key={capabilityGroup.title} className={styles.row}>
            <div className={styles.rowLabel}>
              <span
                className={styles.accentBar}
                style={{background: capabilityGroup.accent}}
                aria-hidden="true"
              />
              <div>
                <h3 className={styles.rowTitle}>{capabilityGroup.title}</h3>
                {capabilityGroup.description && (
                  <p className={styles.rowDescription}>
                    {capabilityGroup.description}
                  </p>
                )}
              </div>
            </div>
            <ul className={styles.pills}>
              {capabilityGroup.capabilities.map((capability) => (
                <li key={capability} className={styles.pill}>
                  {capability}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
