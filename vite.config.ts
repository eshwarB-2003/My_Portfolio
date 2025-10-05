import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/My_Portfolio/',
   build: {
    outDir: 'dist', // 👈 ensures output is in 'dist'
  },
});

