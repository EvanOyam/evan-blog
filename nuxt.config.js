export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   ** 改成 antd.less 配置 ant design vue 主题
   */
  css: [
    '@/assets/css/font.less',
    '@/assets/css/icon.less',
    '@/assets/css/base.less',
    'ant-design-vue/dist/antd.less',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['@/plugins/antd-ui'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    liveEdit: false,
    markdown: {
      remarkPlugins: ['remark-emoji'],
      prism: {
        theme: 'prism-themes/themes/prism-material-dark.css',
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    loaders: {
      // 修改 ant design vue 配置
      less: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            'primary-color': '#566C73',
            'link-color': '#566C73',
            'info-color': '#566C73',
            'success-color': '#55b56a',
            'processing-color': '#566C73',
            'error-color': '#e1462b',
            'highlight-color': '#e1462b',
            'warning-color': '#f9bb4b',
          },
        },
      },
    },
  },
  /**
   * 路由相关配置
   */
  router: {
    middleware: ['mobileValidator'],
  },
  /**
   * 页面加载进度条相关配置
   */
  loading: {
    color: '#566C73',
    height: '5px',
  },
  /**
   * 页面过度动画
   */
  pageTransition: 'fadeout',
  layoutTransition: 'zoom',
}
