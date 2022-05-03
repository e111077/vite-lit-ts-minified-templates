import { defineConfig } from 'vite'
import minifyLitTemplates from 'rollup-plugin-minify-html-literals';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/my-element.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  },
  plugins: [
    {
      ...minifyLitTemplates(),
      enforce: 'post'
    }
  ]
})
