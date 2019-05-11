import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/landing',
            name: 'landing-page',
            component: require('@/components/LandingPage').default
        },
        {
            path: '/',
            name: 'Table',
            component: require('@/components/Table').default
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
