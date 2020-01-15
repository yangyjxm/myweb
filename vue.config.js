const PROXYROOT = 'http://111.229.251.142:8888/'
const PROXYROOT_NGINX = 'http://111.229.251.142/'
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  // webpack 配置，键值对象时会合并配置，为方法时会改写配置
  configureWebpack: (config) => {},
  // webpack 链接 API，用于生成和修改 webapck 配置
  chainWebpack: (config) => {
    // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
    config.optimization
      .splitChunks({
        cacheGroups: {}
      })

    // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
    config.module
      .rule('eslint')
      .exclude
      .add('/Users/maybexia/Downloads/FE/community_built-in/src/lib')
      .end()
  },

  devServer: {
    disableHostCheck: true,
    host: 'localhost',
    port: '1109',
    proxy: {
      '/api': {
        target: PROXYROOT_NGINX,
        changeOrigin: true
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    },

    before: app => {}
  },

  // 构建时开启多进程处理 babel 编译
  parallel: require('os').cpus().length > 1,

  // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  // 第三方插件配置
  pluginOptions: {}
}
