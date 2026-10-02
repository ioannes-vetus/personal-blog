import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Bio from '@site/src/components/Bio';
import BeyondCode from '@site/src/components/BeyondCode';
import Expertise from '@site/src/components/Expertise';
import Principles from '@site/src/components/Principles';
import WorkHistory from '@site/src/components/WorkHistory';
import {CAREER_STATS} from '@site/src/data/careerStats';
import {EXPERIENCES} from '@site/src/data/experiences';
import {ITEMS} from '@site/src/data/items';
import {PRINCIPLES} from '@site/src/data/principles';
import {PROFILE} from '@site/src/data/profile';
import {CAPABILITY_GROUPS} from '@site/src/data/capabilities';
import styles from './index.module.css';

export default function Home(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className={styles.main}>
        <div className={styles.content} data-search-content>
          <Bio profile={PROFILE} careerStats={CAREER_STATS} />

          <Principles principles={PRINCIPLES} />

          <WorkHistory experiences={EXPERIENCES} careerStats={CAREER_STATS} />

          <Expertise capabilityGroups={CAPABILITY_GROUPS} />

          <BeyondCode items={ITEMS} />
        </div>
      </main>
    </Layout>
  );
}
