import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.jsx'),
      name: 'select',
      formats: [ 'es', 'umd'],
      fileName: (format) => `select.${ format }.js`
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
