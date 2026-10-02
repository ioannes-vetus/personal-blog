import React from 'react';
import IconSvg, {type IconDefinition} from '@site/src/components/IconSvg';
import styles from './styles.module.css';

export interface BeyondCodeItem {
  readonly icon: IconDefinition;
  readonly title: string;
  readonly description: string;
}

export interface BeyondCodeProps {
  readonly items: BeyondCodeItem[];
}

export default function BeyondCode({
  items,
}: BeyondCodeProps): React.ReactElement {
  return (
    <div className={styles.section}>
      <span className={styles.eyebrow}>Beyond Code</span>
      <h1 className={styles.heading}>The rest of the operating system</h1>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.title} className={styles.card}>
            <div className={styles.iconBadge} aria-hidden="true">
              <IconSvg icon={item.icon} size={20} />
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
