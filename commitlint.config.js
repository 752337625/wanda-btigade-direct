module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2, //代表必须输入
			'always',
			[
				'feat', //  新增新特性,新功能
				'fix', // 修复bug
				'refactor', // 代码重构，没有加新功能或者修复bug
				'docs', // 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等
				'chore', // 工具等 其他修改, 比如构建流程命令, 依赖管理dent.
				'merge', // 仅进行分支合并.
				'perf', // 优化相关，比如提升性能、体验
				'revert', // 回滚到上一个版本
				'style', //  仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑、css 修改
				'test', //  测试用例，包括单元测试、集成测试等
				'ci', //修改CI配置文件和脚本
				'css', //只修改css样式
			],
		],
		'header-max-length': [0, 'always', 2], //header 最长72
	},
};

/* 
<type>(<scope>): <subject>
< 空一行 >
<body>
< 空一行 >
<footer></footer> 
*/
//scope: commit 影响的范围, 比如: route, component, utils, build...
//subject: commit 的概述, 建议符合  50/72 formatting
//body: commit 具体修改内容, 可以分为多行, 建议符合 50/72 formatting
//footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.
