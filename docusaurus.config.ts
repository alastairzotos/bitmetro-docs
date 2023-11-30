import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'bitmetro docs',
  tagline: 'Browse the documentation for bitmetro products',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.bitmetro.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/opengraph-image.png',
    navbar: {
      title: 'bitmetro docs',
      logo: {
        alt: 'biemtro logo',
        src: 'img/bm-logo-new-white.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'personaSidebar',
          position: 'left',
          label: 'Persona',
        },
        {
          type: 'docSidebar',
          sidebarId: 'callistoSidebar',
          position: 'left',
          label: 'Callisto',
        },
        {
          type: 'docSidebar',
          sidebarId: 'charterSidebar',
          position: 'left',
          label: 'Charter',
        },

        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'bitmetro docs',
        //   items: [
        //     {
        //       label: 'Persona',
        //       to: '/docs/persona/intro',
        //     },
        //     {
        //       label: 'Callisto',
        //       to: '/docs/callisto/intro',
        //     },
        //     {
        //       label: 'Charter',
        //       to: '/docs/charter/intro',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} bitmetro`,
    },

    prism: {
      theme: prismThemes.synthwave84,
      darkTheme: prismThemes.synthwave84,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
