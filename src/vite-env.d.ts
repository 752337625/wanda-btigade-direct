/// <reference types="vite/client" />

declare module '*.vue' {
	import type { DefineComponent } from 'vue';
	const component: DefineComponent<{}, {}, any>;
	export default component;
}
declare module '*.json' {
	const value: any;
	export default value;
}
interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string;
	// 更多环境变量...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
