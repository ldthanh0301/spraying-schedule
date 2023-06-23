import { defineStore } from "pinia";
import axios from "axios";
import { urlServer } from "./constant.ts";
import { useToast } from "vue-toast-notification";
import router from "../router"

const $toast = useToast();

export const useAccountsStore = defineStore("accounts", {
  state: () => ({ account: null }),
  getters: {
    account: (state) => state.account,
  },
  actions: {
    async register(data = {}) {
      try {
        console.log("register data: ", data);
        await axios.post(urlServer + "/account", data).then((res) => {
          if (res.status == 200) {
            $toast.open({
              message: "Tạo tài khoản thành công",
              type: "success",
              position: "top-right",
            });
          }
          console.log("ggg:", res);
        }).catch((err) => {
          console.log("err: ", err.response.data);
          $toast.open({
            message: err.response.data.message,
            type: "error",
            position: "top-right",
          });
        });
      } catch (error) {
        return error;
      }
    },
    async login(data = {}) {
      try {
        console.log("login data: ", data);
        await axios
          .post(urlServer + "/account/login", data)
          .then((res) => {
            if (res.status == 200) {
              $toast.open({
                message: "Đăng nhập thành công",
                type: "success",
                position: "top-right",
              });
              // chuyển qua gia diện chính
              router.push({path:"/calendar"})
            }
            console.log("ggg:", res);
          })
          .catch((err) => {
            console.log("err: ", err.response.data);
            $toast.open({
              message: err.response.data.message,
              type: "error",
              position: "top-right",
            });
          });
      } catch (error) {
        return error;
      }
    },
  },
});
