import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: '../api/wwwroot',
    emptyOutDir: true
  },
  plugins: [react()],
})
