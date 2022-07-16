# unplugin-auto-import 说明
每次重新启动都会重新生成 auto-imports.d.ts eslintrc-auto-import.json components.d.ts 三个文件，导致每次都要重新提交。为此将这、三个文件添加到.gitignore 文件中。因为使用远远大于配置修改。

所以如果对配置进行修改：例如AutoImport函数 imports: ['vue', 'vue-router', 'pinia'], resolvers进行了添加。要修改.gitignore 提交auto-imports.d.ts eslintrc-auto-import.json俩个文件后，再还原.gitignore。Components函数也是类似，对resolvers数组添加。
