import { i18n } from './index';
import type { LocaleType } from '@t/i18n';
import { useLocaleStore } from '@s/modules/locale';
import { computed, unref } from 'vue';
import { setHtmlPageLang, loadLocalePool } from '@/locales/helper';

interface LangModule {
	message: Recordable;
	dateLocale: Recordable;
	dateLocaleName: string;
}
function setI18nLanguage(locale: LocaleType) {
	const localeStore = useLocaleStore();

	if (i18n.mode === 'legacy') {
		i18n.global.locale = locale;
	} else {
		(i18n.global.locale as any).value = locale;
	}
	localeStore.setLocaleInfo({ locale });
	setHtmlPageLang(locale);
}
export function useLocale() {
	const localeStore = useLocaleStore();
	const getLocale = computed(() => localeStore.getLocale);
	const getAntdLocale = computed((): any => {
		return i18n.global.getLocaleMessage(unref(getLocale))?.antdLocale ?? {};
	});
	async function changeLocale(locale: LocaleType) {
		const globalI18n = i18n.global;
		const currentLocale = unref(globalI18n.locale);
		if (currentLocale === locale) return locale;
		if (loadLocalePool.includes(locale)) {
			setI18nLanguage(locale);
			return locale;
		}
		//不包含则重新加载-新类型的文件
		const langModule = ((await import(`./lang/${locale}.ts`)) as any).default as LangModule;
		if (!langModule) return;
		const { message } = langModule;
		globalI18n.setLocaleMessage(locale, message); //i18n实例自带的函数
		loadLocalePool.push(locale);
		setI18nLanguage(locale);
		return locale;
	}

	return {
		getLocale,
		changeLocale,
		getAntdLocale,
	};
}
