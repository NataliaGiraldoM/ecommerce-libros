// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',        // SSR por defecto para el catálogo
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()]
  }
});