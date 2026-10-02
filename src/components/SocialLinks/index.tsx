import React from 'react';
import IconSvg from '@site/src/components/IconSvg';
import DownloadCvButton from '@site/src/components/DownloadCvButton';
import {EMAIL_ICON, GITHUB_ICON, LINKEDIN_ICON} from './icons';
import styles from './styles.module.css';

export interface SocialLinksProps {
  linkedinUrl: string;
  githubUrl: string;
  email: string;
}

export default function SocialLinks({
  linkedinUrl,
  githubUrl,
  email,
}: SocialLinksProps): React.ReactElement {
  return (
    <div className={styles.row}>
      <a
        className={styles.pill}
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer">
        <IconSvg icon={LINKEDIN_ICON} size={16} />
        LinkedIn
      </a>
      <a
        className={styles.pill}
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer">
        <IconSvg icon={GITHUB_ICON} size={16} />
        GitHub
      </a>
      <a className={styles.pill} href={`mailto:${email}`}>
        <IconSvg icon={EMAIL_ICON} size={16} />
        Get in touch
      </a>
      <DownloadCvButton className={styles.pill} />
    </div>
  );
}
