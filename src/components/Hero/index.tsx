import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export interface HeroProps {
  src: string;
  name: string;
  role: string;
}

export default function Hero({src, name, role}: HeroProps): React.ReactElement {
  const resolvedSrc = useBaseUrl(src);
  const firstName = name.split(' ')[0];

  return (
    <div className={styles.hero}>
      <img className={styles.image} src={resolvedSrc} alt={name} />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&rsquo;m {firstName}.</h1>
        <p className={styles.tagline}>{role}</p>
      </div>
    </div>
  );
}
