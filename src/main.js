// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import 'iview/dist/styles/iview.css'
import { Button, Table, Input,Icon } from 'iview';

Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Input', Input);
Vue.component('Icon', Icon );
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
