<template>
	<span ref="elRef" :class="['iconify', $attrs.class]" :data-icon="icon" :style="getWrapStyle"></span>
</template>

<script lang="ts">
	import '@purge-icons/generated';
	import type { PropType } from 'vue';
	import { isString } from '@/utils/is';
	import { defineComponent, CSSProperties } from 'vue';
	export default defineComponent({
		name: 'IconifyIcon',
		props: {
			icon: {
				type: [String],
				default: '',
				require: true,
			},
			color: {
				type: [String],
				default: '',
			},
			size: {
				type: [String, Number] as PropType<string | number>,
				default: 16,
			},
		},
		setup(props) {
			const getWrapStyle = computed((): CSSProperties => {
				const { size, color } = props;
				let fs = size;
				if (isString(size)) {
					fs = parseInt(size as string, 10);
				}

				return {
					fontSize: `${fs}px`,
					color: color,
					display: 'inline-flex',
				};
			});
			return { getWrapStyle };
		},
	});
</script>

<style scoped lang="less">
	.m-iconify {
		vertical-align: middle;
	}
</style>
