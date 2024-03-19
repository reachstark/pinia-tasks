import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from "vue-router";
import { ROUTE } from './route';

const App = () => import('../App.vue');


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: ROUTE.HOME,
        component: App,
    },
]

const index = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

export default index;
