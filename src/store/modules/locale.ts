import type { LocaleSetting, LocaleType } from '@t/i18n';
import { localeSetting } from '@/locales/localeSetting';
import { createLocalStorage } from '@/utils/cache';
import { LOCALE_KEY } from '@/enums/cacheEnum';
interface LocaleState {
	localInfo: LocaleSetting;
}
const ls = createLocalStorage();
const lsLocaleSetting = (ls.get(LOCALE_KEY) || localeSetting) as LocaleSetting;
export const useLocaleStore = defineStore({
	id: 'app-locale',
	state: (): LocaleState => {
		return {
			localInfo: lsLocaleSetting,
		};
	},
	getters: {
		//获取当前系统设置国际化
		getLocale: (state): LocaleType => {
			return state.localInfo?.locale ?? 'zh_CN';
		},
	},
	actions: {
		//设置当前系统设置国际化
		setLocaleInfo(info: Partial<LocaleSetting>) {
			this.localInfo = { ...this.localInfo, ...info };
			ls.set(LOCALE_KEY, this.localInfo);
		},
		//第一次加载|或者系统刷新时,调用当前函数设置初始化国际化
		initLocale() {
			this.setLocaleInfo({
				...localeSetting,
				...this.localInfo,
			});
		},
	},
});
