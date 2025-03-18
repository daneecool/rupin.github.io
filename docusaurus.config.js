// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Shop Name',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com', // website url = dns
  baseUrl: '/test.github.io/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'facebook', // Usually your GitHub org/user name.
  //projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'jp',
    locales: ['jp'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Shop Name',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg', // change the logo image here for rupan 
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          // {
          //   to: '/blog', 
          //   label: 'App Info', 
          //   position: 'left'
          // },
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
          {
            title: 'マップ',
            items: [
              {
                label: 'カラオケ・喫茶　ルパン',
                to: 'https://www.google.com/maps?q=〒851-0121 長崎県長崎市宿町２０−３',
              },
            ],
          },
          {
            title: '電話番号',
            items: [
              {
                label: 'ルパン　電話番号',
                href: 'tel:080-1111-2222', // Fixed the colon issue in "tel"
              },
            ],
          },
          {
            title: 'その他',
            items: [
              {
                label: 'カラオケ・セピア　浜口町店',
                to: 'https://www.google.com/maps?q=8-2 Hamaguchimachi, Nagasaki, 852-8107, Japan',
              },
              {
                label: 'セピア　電話番号',
                href: 'tel:090-2858-6768', // Fixed the colon issue in "tel"
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Shop Introduction, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;