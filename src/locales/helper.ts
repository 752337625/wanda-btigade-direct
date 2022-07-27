import type { LocaleType } from '@t/i18n';

export const loadLocalePool: LocaleType[] = [];
export function setLoadLocalePool(cb: (loadLocalePool: LocaleType[]) => void) {
	cb(loadLocalePool);
}
export function setHtmlPageLang(locale: LocaleType) {
	document.querySelector('html')?.setAttribute('lang', locale);
}
export function genMessage(langs: Record<string, Record<string, any>>, prefix = 'lang') {
	console.log(langs);
	const obj: Recordable = {};
	Object.keys(langs).forEach(key => {
		const langFileModule = langs[key].default; //默认对象
		let fileName = key.replace(`./${prefix}/`, '').replace(/^\.\//, '');
		const lastIndex = fileName.lastIndexOf('.'); //获取.的字符串下标
		fileName = fileName.substring(0, lastIndex); //去掉.ts
		const keyList = fileName.split('/'); //分数组
		const moduleName = keyList.shift(); //删除第一个，返回第一个
		const objKey = keyList.join('.'); //

		if (moduleName) {
			if (objKey) {
				obj[moduleName] = {};
				obj[moduleName][objKey] = langFileModule || {};
			} else {
				obj[moduleName] = langFileModule || {};
			}
		}
	});
	return obj;
}
