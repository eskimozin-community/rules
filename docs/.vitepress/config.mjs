import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Eskimozin Community",
  description: "Rules for the eskimozin community",
  lang: 'pt-BR',
  base: "/rules/",
  // File path to the logo in the public directory
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  themeConfig: {
    siteTitle: "Eskimozin Community - Rules",
    titleTemplate: ":title - Eskimozin Community - Rules",
    // File path to the logo in the public directory
    logo: "favicon.ico",
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Contato', link: '/contact' },
      { text: 'Resumo', link: '/resume' },
    ],

    sidebar: [
      {
        text: 'Navegue',
        items: [
          { text: 'Contato', link: '/contact' },
          { text: 'PDF', link: '/pdf' },
          { text: 'Regras', link: '/rules' },
          { text: 'Resumo', link: '/resume' },
        ]
      },
      {
        text: 'Outros',
        items: [
          // { text: 'Repositório', link: 'https://github.com/eskimozin-community/rules' },
          { text: 'Links do eskimo', link: 'https://linktr.ee/eskimozin' },
        ]
      }
    ],

    lastUpdated: {
      text: 'Modificado em',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/eskimozin-community/rules' }
    ],

    footer: {
      message: 'Developed with ❤️ using <a href="https://vitepress.dev" target="_blank" rel="noreferrer noopener">VitePress</a>',
      copyright: 'Copyright &copy; 2024'
    },
  }
})
