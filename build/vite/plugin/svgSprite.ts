import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

export function configSvgIconsPlugin(isBuild: boolean) {
	const svgIconsPlugin = createSvgIconsPlugin({
		iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
		svgoOptions: isBuild,
		// 指定symbolId格式
		symbolId: 'icon-[dir]-[name]',
	});
	return svgIconsPlugin;
}
