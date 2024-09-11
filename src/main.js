import Vue from 'vue'
import App from './App.vue';
import router from './router';
import '/src/plugins/vant';
//在main.js
import Vant from 'vant';
import 'vant/lib/index.css';
// import countup from "countup";

import jQuery from 'jquery';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// import qrcode from './ldcms2024/js/qrcode';
// import swiper from './ldcms2024/js/swiper.min.js';
// import scrolla from './ldcms2024/js/scrolla.jquery';

import './ldcms2024/css/animate.min.css'
import './ldcms2024/css/bootstrap.min.css'
import './ldcms2024/css/iconfont.css'
import './ldcms2024/css/media.css'
import './ldcms2024/css/public.css'
import './ldcms2024/css/styles.css'
import './ldcms2024/css/swiper.min.css'

Vue.prototype.$jQuery = jQuery
// Vue.prototype.$countup = countup
Vue.use(Vant);

Vue.config.productionTip = false

import global_ from '../src/config/global'
Vue.prototype.GLOBAL = global_;

import VueAMap from 'vue-amap'
Vue.use(VueAMap)



new Vue({
  router,
  jQuery,
  render: h => h(App)
}).$mount('#app')
  
