import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Avatar from '@site/src/components/Avatar';
import Experience, {type ExperienceItem} from '@site/src/components/Experience';
import styles from './index.module.css';

const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Innovatrics',
    role: 'Enterprise Architect',
    start: new Date(2026, 3),
    location: 'Bratislava, Slovakia',
    description:
      'Defining and driving the architecture operating model across Innovatrics, establishing decentralised decision-making processes, architecture decision records (ADRs) and alignment tools.Facilitating the standardization of engineering practices company-wide, defining AI governance through harness engineering. Participating in a cross-functional workgroup analyzing and optimizing team topology across the organization.',
    skills: [
      'Enterprise Architecture',
      'Distributed Systems',
      'Software Architecture',
      'Software Engineering',
      'Team Leadership',
    ],
  },
  {
    company: 'Innovatrics',
    role: 'Engineering Manager & Tech Lead',
    start: new Date(2026, 0),
    location: 'Bratislava, Slovakia',
    description:
      'Leading the evolution of Innovatrics’ core biometric platform. Driving the technical direction of a large-scale  backend platform that underpins all Innovatrics solutions, powering digital identity, border control, and secure onboarding systems deployed in 80+ countries. Acting as both Team Lead and Tech Lead for a 10-member backend team, guiding architecture and system design, and mentoring engineers through design sessions, code reviews, and regular 1:1s, while actively shaping engineering culture through knowledge sharing, best practices, and continuous improvement.',
    skills: [
      'API Design',
      'Distributed Systems',
      'Software Architecture',
      'Software Engineering',
      'Team Leadership',
    ],
  },
  {
    company: 'Innovatrics',
    role: 'Staff Software Engineer',
    start: new Date(2025, 9),
    end: new Date(2025, 11),
    location: 'Bratislava, Slovakia',
    description: '',
    skills: [
      'API Design',
      'Distributed Systems',
      'Software Architecture',
      'Software Engineering',
      'Team Leadership',
    ],
  },
  {
    company: 'Indra Avitech',
    role: 'Software Architect & Staff Software Engineer',
    start: new Date(2023, 11),
    end: new Date(2025, 8),
    location: 'Bratislava, Slovakia',
    description:
      'Working on the digital evolution of European air traffic management as part of the Integrated Network Management (iNM) program. Leading the design, development, and maintenance of a robust internal platform that serves as the backbone for a majority of software products. Collaborating closely with product owners, technical leads, architects, and stakeholders to define requirements, provide strategic technical insights, and ensure seamless integration of components. Additionally, fostering a strong back-end development culture by leading knowledge-sharing sessions, presenting innovative solutions, and promoting best practices.',
    skills: [
      'API Design',
      'Distributed Systems',
      'Software Architecture',
      'Software Engineering',
      'Team Leadership',
    ],
  },
  {
    company: 'SmartFactory',
    role: 'Senior Software Engineer',
    start: new Date(2022, 4),
    end: new Date(2023, 10),
    location: 'Limerick, Ireland',
    description:
      'Working on Software as a Service (SaaS) product that helps digitalise the production, logistics and utility sectors using Industrie 4.0 technology. Actively collaborating with the system architect to address key challenges including database model optimization, application performance tuning, REST API design, code quality improvements, mentorship of junior developers, accelerating delivery cycles, and reducing production incidents.',
    skills: [
      'API Design',
      'Software Architecture',
      'Software Engineering',
      'Team Leadership',
    ],
  },
  {
    company: 'Stavia',
    role: 'Co-Founder & Senior Software Engineer',
    start: new Date(2021, 1),
    end: new Date(2023, 1),
    location: 'Bratislava, Slovakia',
    description:
      'Working on Stavia application that helps real estate developers and construction companies build better, faster, and more effective on a variety of scales. Building the frontend and backend application from the scratch. Working closely with other team members to solve issues e.g. designing robust REST API for web and mobile application, supporting offline mode, implementing complex file management tool, designing better UX/UI, implementing customizanble workflow, ... Integrating with multiple third-party application like MailGun, Auth0, OneSignal and Azure Blob Storage.',
    skills: [
      'API Design',
      'Software Architecture',
      'Software Engineering',
      'Team Leadership',
    ],
  },
  {
    company: 'Aardwark',
    role: 'Senior Software Engineer',
    start: new Date(2021, 6),
    end: new Date(2022, 3),
    location: 'Prague, Czechia',
    description:
      'Working on multi-module application for Eurowag. Leading a team mainly responsible for toll order module & vehicle module. In charge of enforcing better development practices across entire project. Closely working with other teams to tackle issues e.g. scrum utilization, improving code quality (frontend & backend), cross module communication (micro-frontend architecture), speed up delivery, decreasing number of production incidents, ...',
    skills: [
      'API Design',
      'Distributed Systems',
      'Software Architecture',
      'Software Engineering',
      'Team Leadership',
    ],
  },
  {
    company: 'Aardwark',
    role: 'Software Engineer',
    start: new Date(2020, 8),
    end: new Date(2021, 5),
    location: 'Bratislava, Slovakia',
    description:
      'Working on project within Identity and Access Management department (IAM) of SwissRe. I was in charge of leading frontend development. Working closely with architect to solve issues like preparing frontend stack, designing REST API, optimizing performance of frontend application (lazy loading, windowing, ...), implementing backend-for-frontend (BFF), integrating OAuth 2.0, preparing CI/CD pipelines, improving docker utilization, ...',
    skills: ['API Design', 'Software Engineering', 'Team Leadership'],
  },
  {
    company: 'Aardwark',
    role: 'Software Engineer',
    start: new Date(2019, 7),
    end: new Date(2020, 7),
    location: 'Prague, Czechia',
    description:
      'Building new version of a multi-module back office application for Škoda Auto. Working on multiple modules as full-stack developer. Highly participated on solving multiple issues e.g. improve code quality (frontend & backend), designing REST API (sorting, filtering, ..), multi level security, cross module communication, docker utilization, ...',
    skills: [
      'API Design',
      'Distributed Systems',
      'Software Architecture',
      'Software Engineering',
    ],
  },
  {
    company: 'Aardwark',
    role: 'Software Engineer',
    start: new Date(2018, 3),
    end: new Date(2019, 6),
    location: 'Bratislava, Slovakia',
    description: 'Working on multiple intern projects.',
    skills: ['API Design', 'Software Engineering'],
  },
  {
    company: 'Planeat',
    role: 'Software Engineer',
    start: new Date(2017, 6),
    end: new Date(2018, 1),
    location: 'Bratislava, Slovakia',
    description:
      'Working on professional nutrition web application designed to assist nutritionists and personal trainers in creating customized nutrition plans for their clients. My primary responsibility was designing and implementing the administrative dashboard, which enabled efficient user management, role-based access control, and reporting features across the platform.',
    skills: ['API Design', 'Software Engineering'],
  },
];

export default function Home(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className={styles.main}>
        <div className={styles.content} data-search-content>
          <Avatar
            src="/img/me.jpeg"
            name="Ján Starý"
            role="Software Architect & Software Engineer"
            linkedinUrl="https://www.linkedin.com/in/ján-starý-034626134"
            githubUrl="https://github.com/ioannes-vetus"
            email="jan.stary@protonmail.com"
          />

          <h1>About</h1>
          <blockquote>
            “A designer knows he has achieved perfection not when there is
            nothing left to add, but when there is nothing left to take away.”
            <footer>Antoine de Saint-Exupéry</footer>
          </blockquote>

          <p>
            Passionate and experienced Software Architect & Software Engineer,
            enthusiastic about engaging in in-depth discussions on software
            engineering debates. Experience creating APIs, architecting and
            implementing object-oriented and distributed systems in different
            domains. Strong focus on clean, modular and maintainable code
            resulting in design elegance and software that lasts for years.
            Considers the team spirit as very important part of the development
            process. I always try to learn from the people I work with, but I
            like to pass on my knowledge to others too. My specialties include
            API design, Software/System Architecture, Software Engineering.
          </p>

          <h2>Experience</h2>
          <Experience items={EXPERIENCE} />
        </div>
      </main>
    </Layout>
  );
}
