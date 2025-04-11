import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://opencoopcontrol.org',
  integrations: [
    starlight({
      title: 'OpenCoopControl',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
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
        },
        sr: {
          label: 'Српски',
          lang: 'sr',
          sidebar: [
            {
              label: 'Почетак',
              items: [
                { label: 'Увод', link: '/sr/getting-started/introduction/' },
                { label: 'Инсталација', link: '/sr/getting-started/installation/' },
                { label: 'Подешавање хардвера', link: '/sr/getting-started/hardware-setup/' },
              ],
            },
            {
              label: 'Упутство за употребу',
              items: [
                { label: 'Веб интерфејс', link: '/sr/usage-guide/web-interface/' },
                { label: 'Конфигурација', link: '/sr/usage-guide/configuration/' },
                { label: 'Решавање проблема', link: '/sr/usage-guide/troubleshooting/' },
              ],
            },
            {
              label: 'API Референца',
              items: [
                { label: 'Преглед', link: '/sr/api-reference/overview/' },
                { label: 'Ендпоинти', link: '/sr/api-reference/endpoints/' },
              ],
            },
            {
              label: 'Развој',
              items: [
                { label: 'Допринос', link: '/sr/development/contributing/' },
                { label: 'Верзионисање', link: '/sr/development/versioning/' },
              ],
            },
          ],
        },
      },
      logo: {
        src: './src/assets/coop.svg',
      },
      social: [
        {
          label: 'GitHub',
          href: 'https://github.com/OpenCoopControl',
          icon: 'github',
        },
      ],
    }),
  ],
});
