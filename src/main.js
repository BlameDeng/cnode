import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import Cheader from './components/header'
Vue.component('c-header', Cheader)

import Cmain from './components/main'
Vue.component('c-main', Cmain)

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})