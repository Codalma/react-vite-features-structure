import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import * as path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src/'),
      '@api': path.resolve(__dirname, '/src/api'),
      '@components': path.resolve(__dirname, '/src/components'),
      '@features': path.resolve(__dirname, '/src/infrastructure'),
      '@interfaces': path.resolve(__dirname, '/src/interfaces'),
      '@layouts': path.resolve(__dirname, '/src/layouts'),
      '@pages': path.resolve(__dirname, '/src/pages'),
      '@services': path.resolve(__dirname, '/src/services'),
      '@styles': path.resolve(__dirname, '/src/styles'),
      '@utils': path.resolve(__dirname, '/src/utils'),
      '@mocks': path.resolve(__dirname, '/__mocks__'),
    },
  },
  css: {
    postcss: {
      plugins: [require('autoprefixer')],
    },
  },
  build: {
    outDir: 'build',
  },
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
  },
});
