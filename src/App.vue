<script setup lang="ts" name="App">
	let locale = ref('zh');
</script>
<template>
	<el-config-provider :locale="locale"> 555</el-config-provider>
</template>
<script lang="ts">
	export default defineComponent({
		methods: {},
	});
</script>
<style scoped></style>
