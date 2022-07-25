import type { App } from 'vue';
import type { I18n, I18nOptions } from 'vue-i18n';
import { createI18n } from 'vue-i18n';
import en from './lang/en';
import cn from './lang/zh-CN';
export let i18n: ReturnType<typeof createI18n>;
function createI18nOptions(): I18nOptions {
	return {
		legacy: false, // 让 setup 函数可以通过 t 访问
		globalInjection: true, // 让 template 可以像 vue2 那样使用 $t 来访问
		locale: 'zh-cn',
		fallbackLocale: 'zh-cn', //切换 zh-cn en-us 控制展示文字
		messages: {
			cn,
			en,
		},
		// messages: {
		// 	[locale]: message,
		//   },
		// availableLocales: availableLocales,
		sync: true, //If you don’t want to inherit locale from global scope, you need to set sync of i18n component option to false.
		silentTranslationWarn: true, // true - warning off
		missingWarn: false,
		silentFallbackWarn: true,
	};
}
function setupI18n(app: App) {
	const options = createI18nOptions();
	i18n = createI18n(options) as I18n;
	app.use(i18n);
}
export default setupI18n;
