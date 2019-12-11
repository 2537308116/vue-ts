import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Search , Button , Tab , Tabs } from 'vant';
Vue.use(Search).use(Button).use(Tab).use(Tabs);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
