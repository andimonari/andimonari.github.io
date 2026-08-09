import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import { remarkReadingTime } from './src/utils/readingTime.mjs';

export default defineConfig({
  site: 'https://andimonari.github.io',
  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [react()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});


