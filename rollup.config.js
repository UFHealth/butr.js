import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
  format: 'umd',
  moduleName: 'butr',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
