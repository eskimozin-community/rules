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
    siteTitle: "Regras da Comunidade",
    titleTemplate: ":title - Eskimozin Community - Rules",
    // File path to the logo in the public directory
    logo: "favicon.ico",
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Regras', link: '/rules' },
      { text: 'Contato', link: '/contact' },
    ],

    sidebar: [
      {
        text: 'Navegue',
        items: [
          { text: 'Regras para o Discord', link: '/discord-rules' },
          { text: 'Regras para a Twitch', link: '/twitch-rules' },
          { text: 'Contato', link: '/contact' },
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

    footer: {
      message: 'Developed with ❤️ using <a href="https://vitepress.dev" target="_blank" rel="noreferrer noopener">VitePress</a>',
      copyright: 'Copyright &copy; 2024'
    },
  }
})
