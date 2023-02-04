import VueRouter from 'vue-router'
import main from "@/pages/main";
import register from "@/pages/register";
import mainGraph from "@/components/main-graph";
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: main
        },
        {
            name : 'register',
            path: "/register",
            component: register
        },
        {
            path: "/mainGraph",
            component: mainGraph,
            name:'main-graph'
        }
    ],

})
export default router