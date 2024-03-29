import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: [
        'text', 'json', 'html'
      ]
    },
    watch: true,
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.jsx'),
      name: 'select',
      formats: [ 'es', 'umd'],
      fileName: (format) => `select.${ format }.js`,
      copyPublicDir: false,
    }
  },
  rollupOptions: {
    external: ['react', 'react-dom'], 
    output: {
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      }
    }
  }
})
