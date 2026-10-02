import React from 'react';
import Hero from '@site/src/components/Hero';
import Stats, {CareerStats} from '@site/src/components/Stats';
import SocialLinks from '@site/src/components/SocialLinks';
import styles from './styles.module.css';

export interface Profile {
  readonly name: string;
  readonly role: string;
  readonly introduction: string;
  readonly email: string;
  readonly linkedinUrl: string;
  readonly githubUrl: string;
  readonly imageSrc: string;
}

export interface BioProps {
  readonly profile: Profile;
  readonly careerStats: CareerStats;
}

export default function Bio({
  profile,
  careerStats,
}: BioProps): React.ReactElement {
  return (
    <>
      <Hero src={profile.imageSrc} name={profile.name} role={profile.role} />

      <div className={styles.bioGrid}>
        <div className={styles.bioColumn}>
          <blockquote>
            “A designer knows he has achieved perfection not when there is
            nothing left to add, but when there is nothing left to take away.”
            <footer>Antoine de Saint-Exupéry</footer>
          </blockquote>
          <p>{profile.introduction}</p>
          <SocialLinks
            linkedinUrl={profile.linkedinUrl}
            githubUrl={profile.githubUrl}
            email={profile.email}
          />
        </div>
        <Stats careerStats={careerStats} />
      </div>
    </>
  );
}
