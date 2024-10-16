import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import SitemapPlugin from 'vite-plugin-sitemap'; // Change to default import

export default defineConfig({
  plugins: [
    react(),
    SitemapPlugin({
      hostname: 'https://0daysecurity.io',
      
    }),
  ],
});
