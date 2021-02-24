/* eslint-disable import/no-anonymous-default-export */

import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import css from 'rollup-plugin-import-css';
import styles from 'rollup-plugin-styles';

export default {
	input: pkg.source,
	output: [
		{ file: pkg.main, format: 'cjs' },
		{ file: pkg.module, format: 'esm' },
	],
	plugins: [
		external(),

		babel({
			exclude: 'node_modules/**',
		}),
		// css({
		// 	output: 'ecologitalUILibrary.css',
		// 	alwaysOutput: true,
		// 	minify: true,
		// }),

		del({ targets: ['dist/*'] }),
		styles({
			mode: ['extract', 'ecologitalUILibrary.css'],
		}),
	],
	external: Object.keys(pkg.peerDependencies || {}),
};
