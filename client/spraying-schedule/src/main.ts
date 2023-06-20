import { createApp } from "vue";
import App from "./App.vue";

// for tailwind
import "./assets/index.scss";

// import plugin
import { ProCalendar } from "./index";
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
//calendar
import VCalendar from 'v-calendar';
import { createPinia } from "pinia";

//toast 
import 'vue-toast-notification/dist/theme-sugar.css';
const pinia = createPinia();



const app = createApp(App);

// app.use(ToastPlugin);

app.use(pinia);
app.use(createPinia);
app.use(ProCalendar);
app.use(BootstrapVue3)
app.use(VCalendar)
app.mount("#app");