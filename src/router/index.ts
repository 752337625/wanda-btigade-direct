//使用home作为路由不生效
import { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import list from './modules';
const routes: Array<RouteRecordRaw> = list;
const router = createRouter({
	history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
	routes,
	strict: true, // 默认为 false，意味着默认情况下，路由 /users 同时匹配 /users 和 /users/。
	scrollBehavior: () => ({ left: 0, top: 0 }),
});
//全局前置守卫
router.beforeEach((to, from, next) => {
	// console.log(1);
});
//全局解析守卫
router.beforeResolve((to, from, next) => {
	// console.log(2);
});
//全局后置钩子:不会改变导航本身,它们对于分析、更改页面标题、声明页面等辅助功能以及许多其他事情都很有用。
router.afterEach((to, from, failure) => {
	// console.log(3);
});

export default function setupRouter(app: App) {
	app.use(router);
}

export { router };
