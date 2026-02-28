import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [
    react(),
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: ['https://autocaravecchauffeur.be'],
    }),
  ],
  site: 'https://autocaravecchauffeur.be',
  vite: {
    ssr: {
      noExternal: ['@supabase/supabase-js'],
    },
  },
});
