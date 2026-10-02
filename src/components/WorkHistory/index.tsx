import React, {useState} from 'react';
import clsx from 'clsx';
import type {Experience} from '@site/src/components/Experiences';
import Experiences from '@site/src/components/Experiences';
import styles from './styles.module.css';
import {CareerStats} from '@site/src/components/Stats';

export interface WorkHistoryProps {
  readonly experiences: Experience[];
  readonly careerStats: CareerStats;
}

export default function WorkHistory({
  experiences,
  careerStats,
}: WorkHistoryProps): React.ReactElement {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className={styles.section}>
      <span className={styles.eyebrow}>Experience</span>
      <h1 className={styles.heading}>Where I&rsquo;ve been</h1>
      <p className={styles.intro}>
        {careerStats.years}+ years across start-ups, scale-ups and enterprises —
        from {careerStats.earliestRole} to {careerStats.latestRole}.
      </p>
      <div className={styles.toggleRow}>
        <button
          type="button"
          className={styles.toggleButton}
          onClick={() => setShowHistory((current) => !current)}
          aria-expanded={showHistory}>
          {showHistory ? 'Hide work history' : 'Show work history'}
          <span
            className={clsx(
              styles.toggleIcon,
              showHistory && styles.toggleIconOpen,
            )}
            aria-hidden="true">
            ⌄
          </span>
        </button>
      </div>
      {showHistory && (
        <div className={styles.history}>
          <Experiences experiences={experiences} />
        </div>
      )}
    </div>
  );
}
