import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import Cheader from './components/header'
Vue.component('c-header', Cheader)
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})