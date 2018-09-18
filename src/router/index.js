import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/',
            component: () =>
                import('@/pages/index.vue')

        },
        {
            path: '/newbie',
            component: () =>
                import('@/pages/newbie.vue')

        },
        {
            path: '/api',
            component: () =>
                import('@/pages/api.vue')

        },
        {
            path: '/about',
            component: () =>
                import('@/pages/about.vue')

        },
        {
            path: '/login',
            component: () =>
                import('@/pages/login.vue')

        },
        {
            path: '/register',
            component: () =>
                import('@/pages/register.vue')

        }
    ]
})


export default router