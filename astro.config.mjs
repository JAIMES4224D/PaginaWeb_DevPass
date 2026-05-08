import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // La configuración que usamos antes

export default defineConfig({
  site: 'https://JAIMES4224D.github.io',
  base: 'PaginaWeb_DevPass', // IMPORTANTE: Nombre exacto de tu repo en GitHub
  vite: {
    plugins: [tailwindcss()],
  },
});
