import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://OpenCoopControl.github.io',
  base: '/occ',
  integrations: [
    starlight({
      title: 'OpenCoopControl',
      logo: {
        src: './src/assets/coop.svg',
      },
      social: [
        { 
          label: 'GitHub',
          link: 'https://github.com/OpenCoopControl',
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