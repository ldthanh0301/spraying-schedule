import { createApp} from 'vue'
//Dòng này để import vue-router
import {createRouter,createWebHistory} from 'vue-router'
import Login from "../components/account/login.vue";
import Register from "../components/account/register.vue";
import Calendar from "../components/calendar/core-index.vue";

// createApp(VueRouter)

const routes = [
    // { path: "/", component: ProCalendar },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/calendar", component: Calendar },
  ];
export default new createRouter({
    history: createWebHistory(),
  routes
})