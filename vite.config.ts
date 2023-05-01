/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  server: {
    host: true,
    port: 3000,
    watch: {
      ignored: ['**/coverage/**'],
    },
  },
  build: {
    outDir: './dist',
    sourcemap: 'hidden',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      provider: 'c8',
      all: true,
      reporter: 'text',
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/cypress/**',
        'src/main.tsx',
        '**/server.ts',
        '**/entry-client.tsx',
        '**/entry-server.tsx',
      ],
    },
  },
});
