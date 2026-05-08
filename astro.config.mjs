import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jaimes4224d.github.io',
  base: '/PaginaWeb_DevPass',
  vite: {
    plugins: [tailwindcss()],
  },
});
