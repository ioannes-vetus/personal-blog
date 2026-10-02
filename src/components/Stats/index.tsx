import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface CareerStats {
  readonly years: number;
  readonly domains: number;
  readonly earliestRole: string;
  readonly latestRole: string;
}

export interface StatsProps {
  readonly careerStats: CareerStats;
}

export default function Stats({careerStats}: StatsProps): React.ReactElement {
  return (
    <div className={styles.stack}>
      <div className={clsx(styles.card, styles.cardDark)}>
        <span className={styles.value}>{careerStats.years}+</span>
        <span className={styles.label}>Years</span>
      </div>
      <div className={clsx(styles.card, styles.cardGold)}>
        <span className={styles.value}>{careerStats.domains}</span>
        <span className={styles.label}>Domains</span>
      </div>
    </div>
  );
}
