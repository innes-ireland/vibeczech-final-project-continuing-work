import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/css/login.scss',
        'resources/css/register.scss',
        'resources/css/worker-detail.scss',
        'resources/css/modal.css',
        'resources/css/universal-index.css',
        'resources/js/Admin.jsx',
        'resources/js/app.js',
        // 'resources/js/registration-modal.jsx',
        'resources/js/add-tool-modal.jsx',
        'resources/js/work-party-modal.jsx',
        'resources/js/Login.jsx',
        'resources/js/Worker.jsx',
        'resources/js/exposure-calculator.jsx',
        'resources/js/workerDropdown.jsx',
        'resources/css/tool-modal.scss',
        'resources/js/header.jsx',
        'resources/css/admin.scss',
        'resources/js/currentWorkTeams.jsx',
        'resources/css/work-party-modal.scss',

      ],
      refresh: true,
    }),
    react(),
  ],
});
