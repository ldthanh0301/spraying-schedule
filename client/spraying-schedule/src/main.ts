import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"

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


import FutureSlider from 'vue-future-slider'
import 'vue-future-slider/dist/vue-future-slider.css'

const pinia = createPinia();



const app = createApp(App);

// app.use(ToastPlugin);

app.use(pinia);
app.use(createPinia);
app.use(ProCalendar);
app.use(router);
app.use(BootstrapVue3)
app.use(VCalendar)
app.use(FutureSlider);

app.mount("#app");
