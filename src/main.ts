import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
Vue.config.productionTip = false
/* import { Component } from "vue-property-decorator";
Component.registerHooks(["beforeRouteUpdate"]); */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
