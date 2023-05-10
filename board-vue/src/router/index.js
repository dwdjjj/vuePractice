import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function loadView(view) {
    return () => import(/* webpackChunkName: "about" */ `@/views/${view}.vue`);
}

function loadBoard(name) {
    return () => import(/* webpackChunkName: "about" */ `@/components/boardR/${name}.vue`);
}

const routes = [
    {
        path: "/index.html",
        name: "index",
        component: loadView("AppBoard"),
        redirect: "/",
    },
    {
        path: "/board",
        name: "board",
        component: loadView("AppRouteBoard"),
        redirect: "/board/list",
        children: [
            {
                path: "list",
                name: "boardlist",
                component: loadBoard("BoardList"),
            },
            {
                path: "write",
                name: "boardwrite",
                component: loadBoard("BoardWrite"),
            },
            {
                path: "view/:no",
                name: "boardview",
                component: loadBoard("BoardView"),
            },
            {
                path: "modify",
                name: "boardmodify",
                component: loadBoard("BoardModify"),
            },
            {
                path: "delete",
                name: "boarddelete",
                component: loadBoard("BoardDelete"),
            },
        ],
    },
    {
        path: "/login",
        name: "login",
        component: loadView("AppUser"),
    },
    // {
    //     path: "/about",
    //     name: "about",
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    // },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
