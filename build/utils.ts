// Read all environment variable configuration files to process.env
export function wrapperEnv(envConf: Recordable): ViteEnv {
	const ret: any = {};
	for (const envName of Object.keys(envConf)) {
		let realName = envConf[envName].replace(/\\n/g, '\n');
		realName = realName === 'true' ? true : realName === 'false' ? false : realName;

		if (envName === 'VITE_PORT') realName = Number(realName);
		if (envName === 'VITE_PROXY' && realName) {
			try {
				realName = JSON.parse(realName.replace(/'/g, '"'));
			} catch (error) {
				realName = '';
			}
		}
		ret[envName] = realName;
		if (typeof realName === 'string') process.env[envName] = realName;
		if (typeof realName === 'object') process.env[envName] = JSON.stringify(realName);
	}
	return ret;
}

/**
 * 设计到npm\pnpm 启动指令：cross-env NODE_ENV=production、cross-env REPORT=true等
 */
export function isReportMode(): boolean {
	return process.env.REPORT === 'true';
}

/**
 * @description: {string} 应用运行的模式。
 * @returns:
 * @example:
 */
export function getEnv(): string {
	return import.meta.env.MODE;
}

/**
 * @description: {boolean} 应用是否运行在开发环境 (永远与 import.meta.env.PROD相反)。
 * @returns:
 * @example:
 */
export function isDevMode(): boolean {
	return import.meta.env.DEV;
}

/**
 * @description: {boolean} 应用是否运行在生产环境。
 * @returns:
 * @example:
 */
export function isProdMode(): boolean {
	return import.meta.env.PROD;
}

/**
 * @description: {string} 部署应用时的基本 URL。他由base 配置项决定。
 * @returns:
 * @example:
 */
export function getBaseUrl(): string {
	return import.meta.env.BASE_URL;
}
