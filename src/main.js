import Vue from 'vue' //导入内置的vue模块(npm的node_module里面)
import App from './App.vue' //导入当前目录的App文件为App
import router from './router' // import router 的router 一定要小写， 不要写成Router, 否则报can't match的报错
import store from './store' //vuex 状态管理
import axios from 'axios'

// 引入iView组件
import iView from 'iview'
import 'iview/dist/styles/iview.css'

// 告诉vue使用iView组件
Vue.use(iView, axios)

Vue.config.productionTip = true //true:作用是阻止 vue 在启动时生成生产提示。

// 挂在元素得两种方法：
// 方法一
// new Vue({
//   el: '#app',    //vue父实例的挂载点
//   router,    // 注入到根实例中
//   store,
//   render: h => h(App)
// })

// 方法二
new Vue({
  router,
  store,
  render: h => h(App) //渲染组件,使用导入的App,es6对象写法
}).$mount('#app')
