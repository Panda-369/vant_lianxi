import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';

import axios from 'axios';
Vue.prototype.axios=axios;
Vue.use(Vant);
import './config/rem'
import animated from 'animate.css'  //animate.css动画样式
Vue.use(animated)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
