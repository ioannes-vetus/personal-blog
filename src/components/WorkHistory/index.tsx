import React, {useState} from 'react';
import clsx from 'clsx';
import Experience from '@site/src/components/Experience';
import type {ExperienceItem} from '@site/src/components/Experience';
import {computeCareerStats} from '@site/src/data/careerStats';
import styles from './styles.module.css';

export interface WorkHistoryProps {
  readonly items: ExperienceItem[];
}

export default function WorkHistory({
  items,
}: WorkHistoryProps): React.ReactElement {
  const [showHistory, setShowHistory] = useState(false);
  const careerStats = computeCareerStats(items);

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
          <Experience items={items} />
        </div>
      )}
    </div>
  );
}
