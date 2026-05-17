import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/math.js'),
      name: 'MathLib',
      fileName: (format) => `math-lib.${format}.js`,
    },
    outDir: 'dist',
  },
});
