import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://opencoopcontrol.org',
  base: '',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: false,
  experimental: {
    renderHtml: true,
  },
  markdown: {
    shikiConfig: {
      theme: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
      keepHTML: false,
      keepBackground: true,
      wrapLines: true,
      wrapOptions: {
        maxLineLength: 80,
      }
    },
  },
  integrations: [
    starlight({
      title: 'OpenCoopControl',
      logo: {
        src: './src/assets/coop.svg',
      },
      social: [
        { 
          label: 'GitHub',
          href: 'https://github.com/OpenCoopControl',
          icon: 'github'
        },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/getting-started/introduction/' },
            { label: 'Installation', link: '/getting-started/installation/' },
            { label: 'Hardware Setup', link: '/getting-started/hardware-setup/' },
          ],
        },
        {
          label: 'Usage Guide',
          items: [
            { label: 'Web Interface', link: '/usage-guide/web-interface/' },
            { label: 'Configuration', link: '/usage-guide/configuration/' },
            { label: 'Troubleshooting', link: '/usage-guide/troubleshooting/' },
          ],
        },
        {
          label: 'API Reference',
          items: [
            { label: 'Overview', link: '/api-reference/overview/' },
            { label: 'Endpoints', link: '/api-reference/endpoints/' },
          ],
        },
        {
          label: 'Development',
          items: [
            { label: 'Contributing', link: '/development/contributing/' },
            { label: 'Versioning', link: '/development/versioning/' },
          ],
        },
      ],
    }),
  ],
});