import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import formatDate from './helpers/formatDate'
Vue.use(formatDate)

Vue.config.productionTip = false

import Cheader from './components/header'
Vue.component('c-header', Cheader)

import Cmain from './components/main'
Vue.component('c-main', Cmain)

import Cfooter from './components/footer'
Vue.component('c-footer', Cfooter)

import Csider from './components/sider'
Vue.component('c-sider', Csider)

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})