// pretter没有对代码的质量进行检查的能力，其只会对代码风格按照指定的规范进行统一，避免一个项目中出现多种不同的代码风格。
/**
 * eslint-config-prettier:让所有可能会与 prettier 规则存在冲突的 eslint rule，失效，并使用prettier的规则进行代码检查。
 * 相当于，用 prettier 的规则，覆盖掉eslint:recommended 的部分规则。 后面 prettier 格式化，也会根据这个规则来。因此，不会再有冲突。注意* 要放到组后面。
 * eslint-plugin-prettier:将 prettier 的能力集成到 eslint 中。按照 prettier 的规则检查代码规范性，并进行修复。
 */
 module.exports = {
	printWidth: 120,
	semi: true, //在语句末尾打印分号。
	singleQuote: true, //使用单引号代替双引号。
	tabWidth: 2, //指定每个缩进级别的空格数。
	useTabs: true, //制表符将用于缩进。
	quoteProps: 'as-needed', //"<as-needed|consistent|preserve>"引用对象中的属性时更改。
	trailingComma: 'all', //"<es5|none|all>"在多行逗号分隔的句法结构中尽可能打印尾随逗号。
	bracketSpacing: true, //在对象文字中的括号之间打印空格。
	bracketSameLine: true, //将>多行 HTML（HTML、JSX、Vue、Angular）元素的 放在最后一行的末尾，而不是单独放在下一行（不适用于自关闭元素）。
	arrowParens: 'avoid', //"<always|avoid>"在唯一的箭头函数参数周围包含括号。
	htmlWhitespaceSensitivity: 'strict', //"<css|strict|ignore>"为 HTML、Vue、Angular 和 Handlebars 指定全局空白敏感度。
	vueIndentScriptAndStyle: true, //是否缩进Vue文件中的代码<script>和<style>标签。
	endOfLine: 'auto',
	embeddedLanguageFormatting: 'auto',
	requirePragma: false, //设置为true prettier自动格式化失效，必须在要格式化的文件头部添加vue:<!--  @prettier 、js:/***@prettier */等
	insertPragma: false,
};
