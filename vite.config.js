import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/css/admin.scss',
        'resources/css/login.scss',
        'resources/css/register.scss',
        'resources/css/tool-modal.scss',
        'resources/css/work-party-modal.scss',
        'resources/css/worker-detail.scss',
        'resources/css/modal.css',
        'resources/css/universal-index.css',
        'resources/js/add-tool-modal.jsx',
        'resources/js/Admin.jsx',
        'resources/js/app.js',
        'resources/js/currentWorkTeams.jsx',
        'resources/js/EditExposureRecords.jsx',
        'resources/js/exposure-calculator.jsx',
        'resources/js/header.jsx',
        'resources/js/Login.jsx',
        // 'resources/js/registration-modal.jsx',
        'resources/js/ViewExposureRecords.jsx',
        'resources/js/work-party-modal.jsx',
        'resources/js/Worker.jsx',
        'resources/js/workerDropdown.jsx',

      ],
      refresh: true,
    }),
    react(),
  ],
});
