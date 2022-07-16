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
			alias: {
				'@': resolve(__dirname, 'src'), //把src改为@
				'@t': resolve(__dirname, 'types'), //把ypes改为#
			},
			//mainFields: ['module', 'jsnext:main', 'jsnext'],
			//extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
			//preserveSymlinks:false
		},
		css: {},
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
			include: [],
		},
	};
};
