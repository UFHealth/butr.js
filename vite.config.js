import { defineConfig } from 'vite'

export default defineConfig({
  root: './example',
  build: {
    lib: {
      entry: './src/butr.js',
      name: 'Butr',
      fileName: 'butr'
    },
    rollupOptions: {

    },
    target: 'es2015'
  }
})
