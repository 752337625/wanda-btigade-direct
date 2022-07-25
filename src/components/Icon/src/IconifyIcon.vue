<template>
	<span :style="{ fontSize: size }">
		<span class="iconify m-iconify" :data-icon="icon"></span>
	</span>
</template>

<script lang="ts">
	import '@purge-icons/generated'; // <-- This
	import { defineComponent } from 'vue';
	export default defineComponent({
		name: 'IconifyIcon',
		props: {
			icon: { type: String, required: true },
			size: { type: String, default: '18' },
		},

		setup() {
			return {};
		},
	});
</script>

<style scoped lang="less">
	.m-iconify {
		vertical-align: middle;
	}
</style>
