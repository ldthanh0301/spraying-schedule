import { createApp } from "vue";
//Dòng này để import vue-router
import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/account/login.vue";
import Register from "../components/account/register.vue";
import Calendar from "../components/calendar/core-index.vue";
import InfoCalendar from "../components/calendar/calendar-info.vue";
import HomeView from "../views/Home.vue";
import Home from "../components/layout/Home.vue";
import ProfileView from "../views/Profile.vue";
import { LOCAL_STORAGE_TOKEN_NAME } from "../stores/constant";
// createApp(VueRouter)

const routes = [
  {
    path: "/",
    component: HomeView,
    children: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "profile",
        component: ProfileView,
      }, {
        path: "calendar",
        component: Calendar,
      },
      {
        path: "calendar/:id",
        component:InfoCalendar,
        props: true
      }
    ],
  },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  
  // { path: "/calendar", component: Calendar },
];
let router= new createRouter({
  history: createWebHistory(),
  routes,
});

// GOOD
router.beforeEach((to, from, next) => {
  console.log("to: ", to)
  const accenToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME);

  if (to.fullPath== "/" ) {
    next();
  }
  if (to.fullPath !== "/login" && !accenToken) {
      next('/login');
  }
  if (to.fullPath === '/login' && accenToken) {

      next('/calendar');
  }
  next();
})
export default router;