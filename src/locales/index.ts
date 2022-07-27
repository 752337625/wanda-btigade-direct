import type { App } from 'vue';
import type { I18n, I18nOptions } from 'vue-i18n';
import { createI18n } from 'vue-i18n';
import { localeSetting } from '@/locales/localeSetting';
import { useLocaleStore } from '@s/modules/locale';
import { setHtmlPageLang, setLoadLocalePool } from '@/locales/helper';
export let i18n: ReturnType<typeof createI18n>;
const { fallback, availableLocales } = localeSetting;
async function createI18nOptions(): Promise<I18nOptions> {
	const localeStore = useLocaleStore();
	const locale = localeStore.getLocale;
	const defaultLocale = await import(`./lang/${locale}.ts`);
	const message = defaultLocale.default?.message ?? {};
	setHtmlPageLang(locale);
	setLoadLocalePool(loadLocalePool => {
		loadLocalePool.push(locale);
	});
	return {
		legacy: false, // 让 setup 函数可以通过 t 访问
		globalInjection: true, // 让 template 可以像 vue2 那样使用 $t 来访问
		locale, //语言环境
		fallbackLocale: fallback, //预设的语言环境。
		//本地化的语言环境信息。
		messages: {
			[locale]: message,
		},
		availableLocales: availableLocales, //以词法顺序排列的 messages 中的可用语言环境列表
		//是否将根级别语言环境与组件本地化语言环境同步。
		//如果为 false，则无论根级别语言环境如何，都要为每个组件语言环境进行本地化。
		sync: true,
		//是否取消本地化失败时输出的警告。
		//如果为 true，则禁止本地化失败警告。
		silentTranslationWarn: false,
		missingWarn: false,
		//是否在回退到 fallbackLocale 或 root 时取消警告。
		//如果为 true，则仅在根本没有可用的转换时生成警告，而不是在回退时。
		silentFallbackWarn: false,
		formatFallbackMessages: false,
	};
}
async function setupI18n(app: App) {
	const options = await createI18nOptions();
	i18n = createI18n(options) as I18n;
	app.use(i18n);
}
export default setupI18n;
