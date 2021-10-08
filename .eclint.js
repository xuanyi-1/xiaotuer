module.exports = {
  root: true,
  parser: 'babel-eslint', // 解析器，这里我们使用babel-eslint
  parserOptions: {
    sourceType: 'module' // 类型为module，因为代码使用了使用了ECMAScript模块
  },
  env: {
    browser: true // 预定义的全局变量，这里是浏览器环境
  },
  plugins: [
    'html' // 插件，此插件用于识别文件中的js代码，没有MIME类型标识没有script标签也可以识别到，因此拿来识别.vue文件中的js代码
  ],
  // add your custom rules here
  rules: {
    // 这里写自定义规则
    semi: 0,
    'no-multi-spaces': 'off'
  }
}
