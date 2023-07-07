import { defineStore } from "pinia";
import axios from "axios";
import { urlServer } from "./constant.ts";
import { useToast } from "vue-toast-notification";
import router from "../router";
import { LOCAL_STORAGE_TOKEN_NAME } from "../stores/constant";
import setAuthToken from "../ultils/setAuthToken.js";
const $toast = useToast();

export const useAccountsStore = defineStore("accounts", {
  state: () => ({ account: {}, isAuth: 0 }),
  getters: {
    getAccount() {
      console.log("state: ", this.account);
      const account = this.account;
      return account;
    },
    getAuth() {
      return this.isAuth;
    },
  },
  actions: {
    async register(data = {}) {
      try {
        console.log("register data: ", data);
        await axios
          .post(urlServer + "/account", data)
          .then((res) => {
            if (res.status == 200) {
              $toast.open({
                message: "Tạo tài khoản thành công",
                type: "success",
                position: "top-right",
              });
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
              localStorage.setItem(
                LOCAL_STORAGE_TOKEN_NAME,
                res.data.accessToken
              );
              // Set account
              if (res.data.account) {
                this.account = res.data.account;
                console.log("account: ", this.account);
              }
              this.isAuth = 1;
              // chuyển qua gia diện chính
              router.push({ path: "/calendar" });
            }
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
    async loadAccount() {
      try {
        if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
          setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
          console.log("token: ", localStorage[LOCAL_STORAGE_TOKEN_NAME]);
          await axios
            .get(urlServer + "/account/")
            .then((res) => {
              // Set account
              if (res.data.account) {
                this.account = res.data.account;
              }
            })
            .catch((err) => {
              console.log("err: ", err.response.data);
              $toast.open({
                message: err.response.data.message,
                type: "error",
                position: "top-right",
              });
            });
            this.isAuth = 1;
        } else {
          router.push("./login");
        }
      } catch (error) {
        return error;
      }
    },
    logout() {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
      setAuthToken(null);
      router.push("/login");
      this.isAuth = 0;
    },
  },
});
