import type { LocaleSetting, LocaleType } from '@t/i18n';

export const LOCALE: { [key: string]: LocaleType } = {
	ZH_CN: 'zh_CN',
	EN_US: 'en',
};

export const localeSetting: LocaleSetting = {
	showPicker: true,
	// Locale
	locale: LOCALE.ZH_CN,
	// Default locale
	fallback: LOCALE.ZH_CN,
	// available Locales
	availableLocales: [LOCALE.ZH_CN, LOCALE.EN_US],
};

// locale list
export const localeList: any[] = [
	{
		label: '简体中文',
		value: LOCALE.ZH_CN,
	},
	{
		label: 'English',
		value: LOCALE.EN_US,
	},
];
