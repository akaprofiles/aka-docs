import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "AKA Profiles",
  tagline: "Access without Identity",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://www.akaprofiles.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "neilck", // Usually your GitHub org/user name.
  projectName: "aka-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/akaprofiles-social-card.png",
    navbar: {
      title: "AKA Profiles",
      logo: {
        alt: "AKA Profiles Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        { to: "https://app.akaprofiles.com", label: "App", position: "left" },
        {
          to: "https://coracle.social/groups/naddr1qvzqqqyx7cpzp8ypk43npavn7z853ufmp8lhzclnyhg3aez0sw99jh9saf736g3kqqgrwvpexgmrwvf5xqmrydfnxyurgq7yjfj/notes",
          label: "Support",
          position: "left",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/akaprofiles/nostr-badges",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      /*
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
    */
      copyright: `Copyright © ${new Date().getFullYear()} MetaRep Labs, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
