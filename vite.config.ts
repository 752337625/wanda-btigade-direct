import type { UserConfig, ConfigEnv } from 'vite';
import { resolve } from 'path'; //必须要引入resolve
import { loadEnv } from 'vite';
import { createVitePlugins } from './build/vite/plugin';
import { createProxy } from './build/vite/proxy';
import { wrapperEnv } from './build/utils';
export default ({ command, mode }: ConfigEnv): UserConfig => {
	const root = process.cwd();
	const env = loadEnv(mode, root);
	const viteEnv = wrapperEnv(env);
	const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY } = viteEnv;
	const isBuild = command === 'build';
	return {
		root,
		base: VITE_PUBLIC_PATH,
		define: {
			// setting vue-i18-next
			// Suppress warning
			// __INTLIFY_PROD_DEVTOOLS__: false,
			// __APP_INFO__: JSON.stringify(__APP_INFO__),
		},
		server: {
			https: true,
			host: true,
			port: VITE_PORT,
			proxy: createProxy(VITE_PROXY),
		},
		resolve: {
			//修改alias为数组，添加vue-i18n目的：控制台vue-i18n警告
			alias: [
				{
					find: 'vue-i18n',
					replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
				},
				{
					find: '@',
					replacement: resolve(__dirname, 'src'),
				},
				{
					find: '@c',
					replacement: resolve(__dirname, 'src/components'),
				},
				{
					find: '@t',
					replacement: resolve(__dirname, 'types'),
				},
				{
					find: '@ac',
					replacement: resolve(__dirname, 'src/assets/css'),
				},
				{
					find: '@v',
					replacement: resolve(__dirname, 'src/views'),
				},
				{
					find: '@cf',
					replacement: resolve(__dirname, 'src/config'),
				},
				{
					find: '@s',
					replacement: resolve(__dirname, 'src/store'),
				},
			],
			//mainFields: ['module', 'jsnext:main', 'jsnext'],
			//extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
			//preserveSymlinks:false
		},
		css: {
			preprocessorOptions: {
				less: {
					modifyVars: {},
					javascriptEnabled: true,
				},
			},
		},
		json: {
			//namedExports: true,
			//stringify:true
		},
		build: {
			target: 'es2015',
			cssTarget: 'chrome80',
			//cssCodeSplit: true,
			//polyfillModulePreload:true,
			//outDir: 'dist',
			sourcemap: isBuild ? false : 'inline',
			assetsInlineLimit: 0, //禁止将文件转base64
			minify: 'terser',
			terserOptions: {
				compress: {
					drop_console: true,
					drop_debugger: true,
					pure_funcs: ['console.log', 'debugger'],
				},
				format: {
					comments: false,
				},
			},
			chunkSizeWarningLimit: 500,
			rollupOptions: {},
		},
		plugins: createVitePlugins(viteEnv, isBuild),
		optimizeDeps: {
			exclude: [],
			include: ['element-plus/lib/locale/lang/zh-cn'],
		},
	};
};
