import React from 'react';
import styles from './styles.module.css';

export interface PrinciplesProps {
  readonly principles: string[];
}

export default function Principles({
  principles,
}: PrinciplesProps): React.ReactElement {
  return (
    <div className={styles.panel}>
      <span className={styles.eyebrow}>Principles</span>
      <h1 className={styles.heading}>Principles I actually work by</h1>
      <div className={styles.grid}>
        {principles.map((principle) => (
          <div key={principle} className={styles.card}>
            <p className={styles.text}>{principle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
