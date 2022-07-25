import { createApp } from 'vue';
import App from './App.vue';
import 'virtual:svg-icons-register';
import setupRouter from './router';
import setupStore from './store';
// import setupI18n from './locales';
import '@ac/index.css';
async function bootstrap() {
	const app = createApp(App);
	setupRouter(app);
	setupStore(app);
	// await setupI18n(app);
	app.mount('#app');
}
bootstrap();
