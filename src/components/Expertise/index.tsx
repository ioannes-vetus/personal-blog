import React from 'react';
import type {ExperienceItem} from '@site/src/components/Experience';
import {groupSkills} from '@site/src/data/capabilities';
import styles from './styles.module.css';

export interface ExpertiseProps {
  readonly items: ExperienceItem[];
  readonly email: string;
}

export default function Expertise({
  items,
  email,
}: ExpertiseProps): React.ReactElement {
  const groups = groupSkills(items);

  return (
    <div className={styles.panel}>
      <span className={styles.eyebrow}>Capabilities</span>
      <h1 className={styles.heading}>What I work with</h1>
      <p className={styles.intro}>
        The stack changes from project to project — these are the areas I keep
        coming back to.
      </p>

      <div className={styles.rows}>
        {groups.map((group) => (
          <div key={group.title} className={styles.row}>
            <div className={styles.rowLabel}>
              <span
                className={styles.accentBar}
                style={{background: group.accent}}
                aria-hidden="true"
              />
              <div>
                <h3 className={styles.rowTitle}>{group.title}</h3>
                {group.description && (
                  <p className={styles.rowDescription}>{group.description}</p>
                )}
              </div>
            </div>
            <ul className={styles.pills}>
              {group.skills.map((skill) => (
                <li key={skill} className={styles.pill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.closing}>
        <p className={styles.closingText}>
          I help teams architect and ship systems that hold up under real usage.
        </p>
        <a className={styles.cta} href={`mailto:${email}`}>
          Get in touch <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
