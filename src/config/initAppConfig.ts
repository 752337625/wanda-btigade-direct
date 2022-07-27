import { useLocaleStore } from '@s/modules/locale';

export function initAppConfigStore() {
	const localeStore = useLocaleStore();

	//初始化设置
	localeStore.initLocale();
}
