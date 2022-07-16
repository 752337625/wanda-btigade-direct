import { defineStore } from 'pinia';
const useMainStore = defineStore('main', {
	state: () => {
		return {
			count: 0,
			main: 1,
		};
	},
});

export default useMainStore;
