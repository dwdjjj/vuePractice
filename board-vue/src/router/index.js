import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function loadView(view) {
    return () => import(/* webpackChunkName: "about" */ `@/views/${view}.vue`);
}

function loadBoard(name) {
    return () => import(/* webpackChunkName: "about" */ `@/components/boardR/${name}.vue`);
}
function loadMain(contentName) {
    return () => import(/* webpackChunkName: "about" */ `@/components/main/${contentName}.vue`);
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
                path: "view/:articleno",
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
    {
        path: "/main",
        name: "main",
        component: loadView("AppMain"),
        children: [
            { path: "", name: "main1", component: loadMain("MainContent1") },
            {
                path: "2",
                name: "main2",
                component: loadMain("MainContent2"),
            },
            {
                path: ":isbn",
                name: "main3",
                component: loadMain("MainContent3"),
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
