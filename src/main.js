import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from "./utils/http";

Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
	vuetify,
	router,
	store,
	render: h => h(App)
}).$mount('#app')
