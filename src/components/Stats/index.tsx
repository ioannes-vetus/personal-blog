import React from 'react';
import clsx from 'clsx';
import type {ExperienceItem} from '@site/src/components/Experience';
import {computeCareerStats} from '@site/src/data/careerStats';
import styles from './styles.module.css';

export interface StatsProps {
  readonly items: ExperienceItem[];
}

export default function Stats({items}: StatsProps): React.ReactElement {
  const stats = computeCareerStats(items);

  return (
    <div className={styles.stack}>
      <div className={clsx(styles.card, styles.cardDark)}>
        <span className={styles.value}>{stats.years}+</span>
        <span className={styles.label}>Years</span>
      </div>
      <div className={clsx(styles.card, styles.cardGold)}>
        <span className={styles.value}>{stats.roles}</span>
        <span className={styles.label}>Roles Held</span>
      </div>
      <div className={clsx(styles.card, styles.cardGreen)}>
        <span className={styles.value}>{stats.domains}</span>
        <span className={styles.label}>Domains</span>
      </div>
    </div>
  );
}
