// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/* -------------------------------------------------- */
/* 1️⃣  环境检测 / 动态变量                             */
/* -------------------------------------------------- */
// 环境检测逻辑
const IS_GITHUB_ACTIONS = process.env.GITHUB_ACTIONS === 'true';
const IS_GITHUB_PAGES = process.env.GITHUB_PAGES === 'true' || IS_GITHUB_ACTIONS;
const IS_LOCAL_DEV = process.env.NODE_ENV === 'development';
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// 部署环境判断
const DEPLOY_ENV = process.env.DEPLOY_ENV || 
  (IS_GITHUB_ACTIONS ? 'github' : 
   IS_LOCAL_DEV ? 'local' : 'production');

// URL 配置（优先级：环境变量 > 自动检测 > 默认值）
const BASE_URL = process.env.BASE_URL || 
  (IS_GITHUB_PAGES ? '/wiki-test/' : '/');

const SITE_URL = process.env.SITE_URL || 
  (IS_GITHUB_PAGES ? 'https://zhenglingpeng.github.io' : 
   IS_LOCAL_DEV ? 'http://localhost:3000' : 'http://42.194.138.11');

// 调试信息
console.log('🔧 部署环境检测:');
console.log(`  - GITHUB_ACTIONS: ${IS_GITHUB_ACTIONS}`);
console.log(`  - GITHUB_PAGES: ${IS_GITHUB_PAGES}`);
console.log(`  - NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`  - DEPLOY_ENV: ${DEPLOY_ENV}`);
console.log(`  - BASE_URL: ${BASE_URL}`);
console.log(`  - SITE_URL: ${SITE_URL}`);

/** @type {import('@docusaurus/types').Config} */
const config = {
  /* -------------------------------------------------- */
  /* 2️⃣  站点信息                                       */
  /* -------------------------------------------------- */
  title: 'CamThink',
  tagline:
    'Through detailed documentation, practical tutorials, and active community support, we help developers leverage open hardware for AI project development and innovation.',
  favicon: 'img/favicon.ico',

  /* GitHub / Cloudflare 共用（由上方动态注入） */
  url: SITE_URL,
  baseUrl: BASE_URL,


  /* GitHub Pages 部署 (org/user & repo) — 不在 GitHub 可忽略 */
  organizationName: 'zhenglingpeng',
  projectName: 'wiki-test',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  /* -------------------------------------------------- */
  /* 3️⃣  国际化                                         */
  /* -------------------------------------------------- */
  i18n: {
    defaultLocale: 'en',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': { htmlLang: 'zh-Hans', label: '中文' },
      en:       { htmlLang: 'en-US',   label: 'English' },
    },
  },

  /* -------------------------------------------------- */
  /* 4️⃣  插件 / 主题                                     */
  /* -------------------------------------------------- */
  plugins: [
    'docusaurus-plugin-image-zoom',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en', 'zh'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/',
        indexDocs: true,
        indexBlog: false,
        docsDir: 'docs',
      },
    ],
    [ '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/',
            to: '/docs',
          },
        ],
      }
    ]
  ],
  markdown: { mermaid: true },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: undefined,  // 关闭 “编辑此页”
          routeBasePath: '/docs',
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],

  /* -------------------------------------------------- */
  /* 5️⃣  主题配置 (Navbar / Footer / Prism …)           */
  /* -------------------------------------------------- */
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/Camthink-logo.png',
      navbar: {
        title: '',
        logo: {
          alt: 'CamThink',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
          href: '/docs',
        },
        items: [
          // { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Docs' },
          { href: 'https://github.com/camthink-ai',            position: 'right', label: 'GitHub' },
          { type: 'localeDropdown',                            position: 'right' },
        ],
      },
      zoom: {
        selector: '.markdown img:not(.no-zoom), article img:not(.no-zoom), .theme-doc-markdown img:not(.no-zoom)',
        background: { light: 'rgba(255, 255, 255, 0.9)', dark: 'rgba(0, 0, 0, 0.8)' },
        config: { margin: 24, scrollOffset: 0 },
      },
      mermaid: { theme: { light: 'neutral', dark: 'forest' } },
      colorMode: { defaultMode: 'light', disableSwitch: false, respectPrefersColorScheme: true },
      footer: {
        style: 'dark',
        links: [
          { title: 'Wiki',      items: [{ label: 'Wiki', to: '/docs/Welcome' }] },
          { title: 'Community', items: [
              { label: 'Discord', href: 'https://discord.com/invite/6TZb2Y8WKx' },
              { label: 'X',       href: 'https://x.com/CamThinkAI' },
            ],
          },
          { title: 'More',      items: [{ label: 'GitHub', href: 'https://github.com/camthink-ai' }] },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CamThink.ai All rights reserved.`,
      },
      prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
    }),
};

export default config;