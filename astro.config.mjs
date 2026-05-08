import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; 
export default defineConfig({
  site: 'https://JAIMES4224D.github.io',
  base: 'PaginaWeb_DevPass', 
  vite: {
    plugins: [tailwindcss()],
  },
});
