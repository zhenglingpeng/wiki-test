// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CamThink',
  tagline: 'Through detailed documentation, practical tutorials, and active community support, we help developers leverage open hardware for AI project development and innovation.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CamThink', // Usually your GitHub org/user name.
  projectName: 'CamThink-WiKi', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': {
        htmlLang: 'zh-Hans',
        label: '中文',
      },
      en: {
        htmlLang: 'en-US',
        label: 'English',
      },
    },
  },

  // 添加插件
  plugins: [
    'docusaurus-plugin-image-zoom',
  ],
  
  // 启用Mermaid支持
  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:undefined,
          routeBasePath: 'docs',
        },
        blog: false, // Blog menu will not be displayed
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'CamThink',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/camthink-ai',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      // 图片缩放插件配置
      zoom: {
        selector: '.markdown img:not(.no-zoom), article img:not(.no-zoom), .theme-doc-markdown img:not(.no-zoom)',
        background: {
          light: 'rgba(255, 255, 255, 0.9)',
          dark: 'rgba(0, 0, 0, 0.8)'
        },
        config: {
          margin: 24,
          scrollOffset: 0,
        }
      },
      // Mermaid配置
      mermaid: {
        theme: { light: 'neutral', dark: 'forest' },
      },
      // 颜色模式配置
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              {
                label: 'Wiki',
                to: '/docs/Quick_Guide',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/6TZb2Y8WKx',
              },
              {
                label: 'X',
                href: 'https://x.com/CamThinkAI',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/camthink-ai',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CamThink.ai All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
