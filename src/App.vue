<template>
	<el-select v-model="value" placeholder="Select" @change="changeHandle">
		<el-option
			v-for="item in options"
			:key="item.value"
			:label="item.label"
			:value="item.value"
			:disabled="item.disabled" />
	</el-select>
	<div> {{ t('sys.login.signInDesc') }} </div>
	<!-- <el-config-provider :locale="locale">
		<router-view></router-view>
	</el-config-provider> -->
</template>
<script setup lang="ts">
	import { i18n } from '@/locales/index';
	import { useI18n } from 'vue-i18n';
	import { localeList } from '@/locales/localeSetting';
	import { useLocale } from '@/locales/useLocale';
	import type { LocaleType } from '@t/i18n';
	let { t } = useI18n();
	const { changeLocale, getLocale } = useLocale();
	const value = ref('');
	const options = localeList;
	let changeHandle = (v: LocaleType | string) => {
		// i18n.global.locale = v;
		changeLocale(v as LocaleType);
	};
	// import zhCn from 'element-plus/lib/locale/lang/zh-cn';
	// let locale = zhCn;
</script>
<style scoped></style>
