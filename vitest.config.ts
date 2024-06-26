import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals:true,
    setupFiles:'test/setup.ts'
  },
  plugins: [react()]
});
