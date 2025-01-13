import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@src': '/src',
            '@a1-app': '/src/a1-app',
            '@a2-pages': '/src/a2-pages',
            '@a3-widgets': '/src/a3-widgets',
            '@a4-features': '/src/a4-features',
            '@a5-entities': '/src/a5-entities',
            '@a6-shared': '/src/a6-shared',
        },
    },
});
