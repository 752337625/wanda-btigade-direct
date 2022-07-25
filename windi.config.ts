import { defineConfig } from 'vite-plugin-windicss';
// import { primaryColor } from './build/config/themeConfig';
export default defineConfig({
	darkMode: 'class',
	plugins: [],
	//配置 purge 选项指定所有的 pages 和 components 文件，使得 Tailwind 可以在生产构建中对未使用的样式进行摇树优化。
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	variants: {},
	theme: {
		extend: {},
	},
});
