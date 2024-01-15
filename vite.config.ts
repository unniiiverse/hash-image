import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// @ts-expect-error bla
import path from 'path';
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: `${path.resolve()}/index.ts`,
      name: 'hash-image',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'reactdom'
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true
  },
  plugins: [react(), dts()],
})
