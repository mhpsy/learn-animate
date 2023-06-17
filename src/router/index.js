import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/about.vue')
        },
        {
            path: '/userScroll1',
            name: 'userScroll1',
            component: () => import('../views/useScrollTrigger1.vue')
        },
        {
            path: '/userScroll2',
            name: 'userScroll2',
            component: () => import('../views/useScrollTrigger2.vue')
        },
        {
            path: '/userScroll3',
            name: 'userScroll3',
            component: () => import('../views/useScrollTrigger3.vue')
        },
        {
            path: '/timelines1',
            name: 'timelines1',
            component: () => import('../views/timelines.vue')
        },
        {
            path: '/controlling',
            name: 'controlling',
            component: () => import('../views/controlling.vue')
        },
        {
            path: '/keyframes',
            name: 'keyframes',
            component: () => import('../views/keyframes.vue')
        },
        {
            path: '/keyframes1',
            name: 'keyframes1',
            component: () => import('../views/keyframes1.vue')
        },
        {
            path: '/keyframes2',
            name: 'keyframes2',
            component: () => import('../views/keyframes2.vue')
        },
        {
            path: '/svg1',
            name: 'svg1',
            component: () => import('../views/svg1.vue')
        }

    ]
})

export default router
