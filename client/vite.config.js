import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Capstone-project/',
  plugins: [react()],
  server: { port: 5173 }
});
