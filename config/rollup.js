import { terser } from "rollup-plugin-terser"

export default {
	input: 'src/scripts/index.js',
	output: [
		{
			file: 'public/scripts/index.js',
			format: 'iife',
		}
	],
	// plugins: [terser()]
}