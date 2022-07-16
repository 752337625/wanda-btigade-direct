import type { App } from 'vue';
import type { I18n, I18nOptions } from 'vue-i18n';
import { createI18n } from 'vue-i18n';
import en from './lang/en';
import cn from './lang/zh-CN';
export let i18n: ReturnType<typeof createI18n>;
function createI18nOptions(): Promise<I18nOptions> {
	return {
		// legacy: false,
		locale: 'cn', //默认显示的语言
		// fallbackLocale: fallback,
		messages: {
			cn: cn,
			en: en,
		},
		// availableLocales: availableLocales,
		// sync: true, //If you don’t want to inherit locale from global scope, you need to set sync of i18n component option to false.
		// silentTranslationWarn: true, // true - warning off
		// missingWarn: false,
		// silentFallbackWarn: true,
	};
}
function setupI18n(app: App) {
	const options = createI18nOptions();
	// i18n = createI18n(options) as I18n;
	app.use(i18n);
}
export default setupI18n;
