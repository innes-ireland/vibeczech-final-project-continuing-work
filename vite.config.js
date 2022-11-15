import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/css/app.css',
        'resources/css/login.scss',
        'resources/css/modal.css',
        'resources/css/universal-index.css',
        'resources/js/app.js',
        'resources/js/registration-modal.jsx',
        'resources/js/add-tool-modal.jsx',
        'resources/js/work-party-modal.jsx'
      ],
      refresh: true,
    }),
    react(),
  ],
});
