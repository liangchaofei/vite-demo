import json from '@rollup/plugin-json';
import resolve  from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser'

export default [
    // {
    //     input: 'index.js',
    //     plugins: [resolve(), commonjs(), json()],
    //     output:{
    //         file: 'dist/dist.umd.js',
    //         format: 'umd',
    //         name: 'Index'
    //     }
    // },
    {
        input: 'index.js',
        external: ['react'],
        plugins: [resolve(),commonjs(), json()],
        output:{
            file: 'dist/dist.es.js',
            format: 'es',
            plugins: [terser()]
        }
    }
]