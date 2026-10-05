import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {buildSearchIndex} from './src/searchIndex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Served on a custom domain (GitHub Pages "Custom domain" setting + static/CNAME file),
// so the site lives at the domain root rather than under a /<repo>/ path.
const baseUrl = '/';

const config: Config = {
  title: 'Jan Stary',
  tagline: 'Software Architect & Software Engineer',
  favicon: 'img/favicon.ico',

  url: 'https://janstary.com',
  baseUrl,

  organizationName: 'ioannes-vetus',
  projectName: 'personal-blog',

  onBrokenLinks: 'throw',
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          routeBasePath: '/blog',
          showReadingTime: true,
          postsPerPage: 10,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
          feedOptions: {
            type: ['rss'],
            copyright: `Copyright © ${new Date().getFullYear()}`,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Jan Stary',
      items: [{to: '/blog', label: 'Blog', position: 'left'}],
    },
    footer: {
      style: 'dark',
      links: [
        {
          html: `<a href="${baseUrl}blog/rss.xml" target="_blank" rel="noopener noreferrer" title="RSS Feed" aria-label="RSS Feed" class="footer-social-link"><img src="${baseUrl}img/rss.svg" width="14" height="14" alt="RSS Feed"/></a>`,
        },
        {
          html: `<a href="https://www.linkedin.com/in/ján-starý-034626134" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn" class="footer-social-link"><img src="${baseUrl}img/linkedin.svg" width="14" height="14" alt="LinkedIn"/></a>`,
        },
        {
          html: `<a href="https://github.com/ioannes-vetus" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub" class="footer-social-link"><img src="${baseUrl}img/github.svg" width="14" height="14" alt="GitHub"/></a>`,
        },
        {
          html: `<a href="mailto:jan.stary@protonmail.com" title="E-mail" aria-label="E-mail" class="footer-social-link"><img src="${baseUrl}img/mail.svg" width="14" height="14" alt="E-mail"/></a>`,
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ján Starý`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    function searchIndexPlugin() {
      return {
        name: 'search-index',
        async postBuild({outDir}: {outDir: string}) {
          buildSearchIndex(outDir);
        },
      };
    },
  ],
};

export default config;
