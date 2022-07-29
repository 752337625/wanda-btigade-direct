import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
//import { configStyleImportPlugin } from './styleImport';
import mkcert from 'vite-plugin-mkcert'; // success 提供有效的https证书
import legacy from '@vitejs/plugin-legacy';
import { configHtmlPlugin } from './html'; // success
import windiCSS from 'vite-plugin-windicss'; // success
import { configSvgIconsPlugin } from './svgSprite'; // 将svg转为组件
import { configCompressPlugin } from './compress'; // success
import { configImageminPlugin } from './imagemin'; // success
import { configVisualizerConfig } from './visualizer'; // successF
import { configPwaConfig } from './pwa'; // success
//使vue脚本设置语法支持 name 属性。<script lang="ts" setup name="App"></script>
import vueSetupExtend from 'vite-plugin-vue-setup-extend'; // success
import autoImport from 'unplugin-auto-import/vite'; // success
import components from 'unplugin-vue-components/vite'; // success
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'; // success
// AndDesignVueResolve,VantResolve,NutuiResolve,AntdResolve
// import styleImport, { ElementPlusResolve, } from 'vite-plugin-style-import'
//最常用的场景就是监听 vite.config.js 和 .env.development 文件，
//我们知道，修改 vite 配置文件和环境配置文件，是需要重启 vite 才会生效，通过这个插件，我们将从反复重启中解脱出来。
import viteRestart from 'vite-plugin-restart';
import Banner from 'vite-plugin-banner';
import pkg from '../../../package.json';
// import OptimizationPersist from 'vite-plugin-optimize-persist';
// import PkgConfig from 'vite-plugin-package-config';
import vuejsx from '@vitejs/plugin-vue-jsx';
import purgeIcons from 'vite-plugin-purge-icons';
export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
	const { VITE_USE_IMAGEMIN, VITE_LEGACY, VITE_BUILD_COMPRESS, VIT_BEUILD_COMPRESS_DELETE_ORIGIN_FILE, VITE_USE_PWA } =
		viteEnv;
	const vitePlugins: (PluginOption | PluginOption[])[] = [
		vue(),
		vuejsx(),
		mkcert(),
		vueSetupExtend(),
		//这里注意
		autoImport({
			dts: 'types/auto-imports.d.ts', // 生成配置文件，如果是ts项目，通常我们会把声明文件放在根目录/types中，注意，这个文件夹需要先建好，否则可能导致等下无法往里生成auto-imports.d.ts文件
			imports: ['vue', 'vue-router', 'pinia', 'vue-i18n'],
			eslintrc: {
				enabled: true, // 默认false, true启用。生成一次就可以，避免每次工程启动都生成，一旦生成配置文件之后，最好把enable关掉，即改成false。否则这个文件每次会在重新加载的时候重新生成，这会导致eslint有时会找不到这个文件。当需要更新配置文件的时候，再重新打开
				filepath: './.eslintrc-auto-import.json', // 生成json文件,可以不配置该项，默认就是将生成在根目录
				globalsPropValue: true,
			},
			resolvers: [ElementPlusResolver()], //提供解决Element取消手动import问题
		}),
		components({
			dts: 'types/components.d.ts', // 生成配置文件，如果是ts项目，通常我们会把声明文件放在根目录/types中，注意，这个文件夹需要先建好，否则可能导致等下无法往里生成components.d.ts文件
			resolvers: [ElementPlusResolver()], // 组件按需引入，例如Element2.x的按需引入方式。后采用AutoImport取消import
		}),
		viteRestart({
			restart: ['.env', '.env.development', 'vite.config.ts'],
		}),
		//is build
		Banner(
			`/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * description: ${pkg.description}\n * author: ${pkg.author}\n * homepage: ${pkg.homepage}\n */`,
		),
	];
	// vite-plugin-purge-icons
	vitePlugins.push(purgeIcons());
	// vite-plugin-windicss
	vitePlugins.push(windiCSS());
	// vite-plugin-style-import
	// vitePlugins.push(configStyleImportPlugin(isBuild));
	// vite-plugin-html
	vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));
	// vite-plugin-svg-icons
	vitePlugins.push(configSvgIconsPlugin(isBuild));
	// rollup-plugin-visualizer
	vitePlugins.push(configVisualizerConfig());
	// vitejs/plugin-legacy
	VITE_LEGACY && isBuild && vitePlugins.push(legacy());
	// vite-plugin-imagemin
	VITE_USE_IMAGEMIN && isBuild && vitePlugins.push(configImageminPlugin());
	// vite-plugin-compression
	isBuild && vitePlugins.push(configCompressPlugin(VITE_BUILD_COMPRESS, VIT_BEUILD_COMPRESS_DELETE_ORIGIN_FILE));
	// vite-plugin-pwa
	VITE_USE_PWA && isBuild && vitePlugins.push(configPwaConfig(viteEnv));
	return vitePlugins;
}
