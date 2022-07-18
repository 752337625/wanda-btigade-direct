# 项目ESlint检测问题说明
很慢，耐心等待。异常可能是假的

# unplugin-auto-import 说明

每次重新启动都会重新生成 auto-imports.d.ts eslintrc-auto-import.json components.d.ts 三个文件，导致每次都要重新提交。为此将这三个文件添加到.gitignore 文件中。因为使用远远大于配置修改。

所以如果对配置进行修改：例如 AutoImport 函数 imports: ['vue', 'vue-router', 'pinia'], resolvers 进行了添加要删除.gitignore 中的 auto-imports.d.ts eslintrc-auto-import.json 配置， 这时就可提交提交 auto-imports.d.ts eslintrc-auto-import.json 俩个文件，最后再还原.gitignore。Components 函数也是类似，对 resolvers 数组修改后重复上提到的步骤。

# vue-i18n 说明

vue-i18 高版本导出类型与现在"vue-i18n": "^9.1.9"不同，建议使用当前版本
