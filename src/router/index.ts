//使用home作为路由不生效
import { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import list from './modules';
const routes: Array<RouteRecordRaw> = list;
const router = createRouter({
	history: createWebHashHistory(),
	routes,
});
//全局前置守卫
router.beforeEach((to, from) => {
	console.log(1);
});
//全局解析守卫
router.beforeResolve((to, from) => {
	console.log(2);
});
//全局后置钩子
router.afterEach((to, from) => {
	console.log(3);
});

export default function setupRouter(app: App) {
	app.use(router);
}

export { router };
