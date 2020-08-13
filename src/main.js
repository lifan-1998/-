import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';//引入组件
import 'element-ui/lib/theme-chalk/index.css'//引入样式

//使用组件
Vue.use(ElementUI);
import {Tabs} from "element-ui"
Vue.use(Tabs)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
