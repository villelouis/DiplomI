import Vue from 'vue'
import axios from 'axios'

import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ru-RU'
Vue.use(Element,{ locale })

import App from './App'
import router from './router'

import store from './store/mainapi.js'
Vue.prototype.$store = store;

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
