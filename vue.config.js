// vue.config.js 自己添加的配置
module.exports = {
  configureWebpack: {
    resolve: {
      // 别名的配置
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}