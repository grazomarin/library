/* eslint-disable */
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['google', 'eslint:recommended'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'import/no-cycle': [0, { maxDepth: 1 }],
		semi: [2, 'always'],
		indent: [2, 'tab'],
		'linebreak-style': [2, 'windows'],
		'no-tabs': [1, { allowIndentationTabs: true }],
		'no-shadow': [1, { builtinGlobals: true }],
		'no-use-before-define': [1, { functions: false }],
		'no-unused-expressions': [0, { allowTernary: true }],
		'require-jsdoc': [0],
		'max-len': [1, { code: 100 }],
	},
};
