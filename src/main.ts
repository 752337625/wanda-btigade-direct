import { createApp } from 'vue';
import App from './App.vue';
import 'virtual:svg-icons-register';
import setupRouter from './router';
import setupStore from './store';
import setupI18n from './locales';
import '@ac/index.css';
import { initAppConfigStore } from '@cf/initAppConfig';
async function bootstrap() {
	const app = createApp(App);

	setupStore(app);

	//初始化系统默认配置
	initAppConfigStore();

	setupRouter(app);

	//国际化
	await setupI18n(app);

	app.mount('#app');
}
bootstrap();
