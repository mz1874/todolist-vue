import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import router from "@/router";
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI)
Vue.use(VueRouter)

new Vue({
    el: "#app",
    render: h => h(App),
    store,
    router:router
})
