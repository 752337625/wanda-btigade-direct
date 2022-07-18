export default {
	path: '/:pathMatch(.*)',
	component: () => import('@c/error/404.vue'),
};
