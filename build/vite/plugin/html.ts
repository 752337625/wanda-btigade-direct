import type { PluginOption } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
export function configHtmlPlugin(env: ViteEnv, isBuild: boolean) {
	const { VITE_GLOB_APP_TITLE } = env;
	const htmlPlugin: PluginOption[] = createHtmlPlugin({
		minify: isBuild, //压缩
		inject: {
			// 直接在html中可以使用的变量
			data: {
				title: VITE_GLOB_APP_TITLE,
			},
			tags: [],
		},
	});
	return htmlPlugin;
}
