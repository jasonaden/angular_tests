var rollup = require('rollup');
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var uglify = require('rollup-plugin-uglify');

export default {
  entry: 'dist/app.module.js',
  dest: 'dist/dist.js',
  sourceMap: false,
  format: 'iife',
  plugins: [
    nodeResolve({jsnext: true, module: true}),
    commonjs({
      include: ['node_modules/rxjs/**'],
    }),
    uglify()
  ],
  moduleName: 'update_dependencies'
}