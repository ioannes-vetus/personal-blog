import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Bio from '@site/src/components/Bio';
import Expertise from '@site/src/components/Expertise';
import WorkHistory from '@site/src/components/WorkHistory';
import {EXPERIENCE, INTRODUCTION, PROFILE} from '@site/src/data/profile';
import styles from './index.module.css';

export default function Home(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className={styles.main}>
        <div className={styles.content} data-search-content>
          <Bio
            src="/img/me.jpeg"
            name={PROFILE.name}
            role={PROFILE.role}
            introduction={INTRODUCTION}
            linkedinUrl={PROFILE.linkedinUrl}
            githubUrl={PROFILE.githubUrl}
            email={PROFILE.email}
            items={EXPERIENCE}
          />

          <WorkHistory items={EXPERIENCE} />

          <Expertise items={EXPERIENCE} email={PROFILE.email} />
        </div>
      </main>
    </Layout>
  );
}
