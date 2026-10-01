import React from 'react';
import Hero from '@site/src/components/Hero';
import Stats from '@site/src/components/Stats';
import SocialLinks from '@site/src/components/SocialLinks';
import type {ExperienceItem} from '@site/src/components/Experience';
import styles from './styles.module.css';

export interface BioProps {
  readonly src: string;
  readonly name: string;
  readonly role: string;
  readonly introduction: string;
  readonly linkedinUrl: string;
  readonly githubUrl: string;
  readonly email: string;
  readonly items: ExperienceItem[];
}

export default function Bio({
  src,
  name,
  role,
  introduction,
  linkedinUrl,
  githubUrl,
  email,
  items,
}: BioProps): React.ReactElement {
  return (
    <>
      <Hero src={src} name={name} role={role} />

      <div className={styles.bioGrid}>
        <div className={styles.bioColumn}>
          <blockquote>
            “A designer knows he has achieved perfection not when there is
            nothing left to add, but when there is nothing left to take away.”
            <footer>Antoine de Saint-Exupéry</footer>
          </blockquote>
          <p>{introduction}</p>
          <SocialLinks
            linkedinUrl={linkedinUrl}
            githubUrl={githubUrl}
            email={email}
          />
        </div>
        <Stats items={items} />
      </div>
    </>
  );
}
