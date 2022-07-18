export default {
	path: '/login',
	name: 'login',
	component: () => import('@v/login/index.vue'),
	meta: {},
	props: false,
	beforeEnter: (to, from, next) => {
		// console.log(to, from);
	},
};
