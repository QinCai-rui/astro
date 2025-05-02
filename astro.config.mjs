// @ts-check
import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [react()],

  vite: {
    server: {
      allowedHosts: ['astro.qincai.xyz']
    }
  },

  adapter: cloudflare(),
  output: "server",
});
