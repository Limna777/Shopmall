import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
//安装自定义的插件
Vue.use(toast);

//使用fastclick解决移动端的300ms延迟
fastclick.attach(document.body);

//使用懒加载的插件
Vue.use(VueLazyload, {
  loading:require('./assets/img/common/Limna.png')
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
