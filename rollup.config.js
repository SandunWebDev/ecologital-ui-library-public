/* eslint-disable import/no-anonymous-default-export */

import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
// import css from 'rollup-plugin-import-css';
// import styles from 'rollup-plugin-styles';
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';

export default {
	input: pkg.source,
	output: [
		{
			file: pkg.main,
			format: 'cjs',
		},
		{ file: pkg.module, format: 'esm' },
	],
	plugins: [
		// styles({
		// 	mode: ['extract', 'ecologitalUILibrary.css'],
		// }),
		external(),

		babel({
			exclude: 'node_modules/**',
		}),
		// css({
		// 	output: 'ecologitalUILibrary.css',
		// 	alwaysOutput: true,
		// 	minify: true,
		// }),

		postcss({
			extract: true,
			// Or with custom file name, it will generate file relative to bundle.js in v3
			extract: 'ecologitalUILibrary.css',
			plugins: [postcssImport()],
		}),
		del({ targets: ['dist/*'] }),
	],
	external: Object.keys(pkg.peerDependencies || {}),
};
