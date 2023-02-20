import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由
const routes: RouteRecordRaw[] = [
    {
        path: "/login",
        component: () => import("../views/login/index.vue")
    },
    {
        path: '/',
        component: () => import("../views/main/index.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;