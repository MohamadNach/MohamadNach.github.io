import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/MohamadNach.github.io/', // Seting the base to the name of the repository for Github Deployment
  plugins: [react()],
});
