// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-px-to-viewport": {    //把px单位转换为vw、vh、vmin或者vmax这样的视窗单位，也是vw适配方案的核心插件之一。
    	viewportWidth: 375,    //视窗的宽度
    	viewportHeight: 667,   //视窗的高度
    	unitPrecision: 5,    //将px转化为视窗单位值的小数位数
    	viewportUnit: 'vw',    //指定要转换成的视窗单位值
    	selectorBlackList: ['ignore', 'tab_bar', 'tab_bar_item'],    //指定不转换视窗单位值得类，可以自定义，可以无限添加
    	minPixelValue: 1,    //小于等于1px不转换为视窗单位
    	mediaQuery: false,   //允许在媒体查询中使用px
      // exclude: [/TabBar/]
    },
  }
}
