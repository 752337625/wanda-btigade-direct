module.exports = {
	root: true,
	parser: 'vue-eslint-parser', //vue-eslint-parser
	parserOptions: {
		parser: '@typescript-eslint/parser' /* 解析ts语法 */,
		ecmaVersion: 2020,
		sourceType: 'module',
		jsxPragma: 'React',
		ecmaFeatures: {
			globalReturn: false,
			impliedStrict: false,
			jsx: true,
			tsx: true,
		},
	},
	globals: {
		// IDB: 'writable',
		// appPromptEvent: 'writable',
		// BeforeInstallPromptEvent: 'readonly',
	},
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es6: true,
	},
	/**
	 * plugins：定义了该eslint文件所依赖的插件
	 * prettier->eslint-plugin-prettier
	 * @typescript-eslint->@typescript-eslint/eslint-plugin
	 * vue->eslint-plugin-vue
	 * import->eslint-plugin-import
	 */
	plugins: ['vue', '@typescript-eslint', 'import', 'prettier'],
	/**
	 * extends：定义文件集成子规则
	 * eslint:recommended 启动eslint默认规则 再vue-vben-admin 项目中没有对当前插件进行添加。如果添加进去就会造成默认规则开启.
	 * 但是我们可以对指定的一些规则在rules进行添加 例如：'no-var': 'error', //禁止使用var。当前建议添加多多的进行学习
	 * prettier->eslintF-config-prettier 避免与eslint规则冲突，提高prettier规则权重
	 * plugin:vue/vue3-recommended->eslint-plugin-vue
	 * plugin:@typescript-eslint/recommended->@typescript-eslint/eslint-plugin
	 * eslintrc-auto-import.json 文件默认在根目录，可以在pulgin->index.ts 文件中修改位置 './eslintrc-auto-import.json'
	 */
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'./.eslintrc-auto-import.json',
	],
	rules: {
		/**
		 * eslint:recommended
		 */
		'no-useless-escape': 'off',
		'prettier/prettier': 'error',
		'no-var': 'error', //禁止使用var
		eqeqeq: 'error', //要求使用 === 和 !==
		'no-irregular-whitespace': 'error', //这禁止掉 空格报错检查
		/**
		 * vue
		 */
		'vue/script-setup-uses-vars': 'error', // 解决 注意该script非ts表示<script setup>中定义变量在<template>使用no-unused-vars问题
		'vue/valid-template-root': 'error', //<template> </template>在没有子元素下不异常
		'vue/no-mutating-props': 'off', //eslint不建议子元素通过v-model修改父元素传的props值
		/**
		 * @typescript-eslint
		 */
		'@typescript-eslint/no-unused-vars': ['off'], //解决<script setup lang="ts"> <script lang="ts">中定义变量在<template>使用no-unused-vars问题
		'@typescript-eslint/no-var-requires': ['off'], //解决requires异常
		'@typescript-eslint/no-explicit-any': ['off'], //解决ts 无法使用any异常
		'@typescript-eslint/ban-types': ['off'], //解决error  Don't use `{}` as a type. `{}` actually means "any non-nullish value".
	},
};
