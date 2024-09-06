import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json'

export default {
  input: 'index.js',
  output: {
    file: 'dist/app.js',
    format: 'es',
    sourcemap: true,
  },
  external: ['mysql2'],
  plugins: [
    resolve(),
    commonjs(),
    json(),
  ]
};