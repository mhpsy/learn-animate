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
            path: '/timelines1',
            name: 'timelines1',
            component: () => import('../views/timelines1.vue')
        }
    ]
})

export default router
