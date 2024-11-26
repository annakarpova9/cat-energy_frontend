import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@ui': path.resolve(__dirname, 'src/components/UI'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages-ui': path.resolve(__dirname, 'src/components/UI/pages-ui'),
    },
  },
});
