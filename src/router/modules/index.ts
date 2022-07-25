import { RouteRecordRaw } from 'vue-router';
//const modules1 = import.meta.glob('./*.ts'); 注意异步导出
const modules = import.meta.globEager('./*.ts');
const routes: Array<RouteRecordRaw> = [];
for (const path in modules) {
	routes.push(modules[path]?.default);
}
export default routes;
