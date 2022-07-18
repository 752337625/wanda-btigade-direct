<script setup lang="ts" name="App">
	import zhCn from 'element-plus/lib/locale/lang/zh-cn';
	let locale = zhCn;
</script>
<template>
	<el-config-provider :locale="locale">
		<router-view></router-view>
	</el-config-provider>
</template>
<script lang="ts">
	export default defineComponent({
		methods: {},
	});
</script>
<style scoped></style>
