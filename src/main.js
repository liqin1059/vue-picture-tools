import Vue from 'vue'
import App from './App.vue'

import VuePictureTools from './index.js'
Vue.use(VuePictureTools)

new Vue({
  el: '#app',
  render: h => h(App)
})
