/* 
  该文件是整个项目的入口文件
*/
// 引入Vue，'vue'默认引用的是vue.runtime.esm.js，是一个残缺版的Vue，没有模板解析器compiler，可自行更改为原装的vue.js
import Vue from 'vue'
// import Vue from 'vue/dist/vue'     // 如果使用完整的vue（包括vue核心和模板解析器），那么最后项目交给webpack打包的时候也会将模板解析器打包进去，就没有必要了

// 引入App组件
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建vue实例对象
new Vue({
  el: '#app',
  // template: `<h1>你好啊</h1>`,
  // components: {App},

  /* 
  render(createElement) {
    // 函数createElement的参数为标签名和标签内容
    return createElement('h1', 'hello')
  }
  render函数内没用到this，则可以简化为箭头函数，且只有一个参数和一句函数体且需要return 
  可简写为如下形式：
  render: createElement => createElement('h1', '你好啊')
  */
  render: h => h(App)

})

/* new Vue({
  // 将App放入容器中
  render: h => h(App),
}).$mount('#app') */
