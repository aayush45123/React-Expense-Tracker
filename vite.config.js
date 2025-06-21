// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/React-Expense-Tracker/', // 👈 Required for GitHub Pages
  plugins: [react()],
});
