import { defineStore } from "pinia";
import axios from "axios";
import { urlServer } from "./constant";
import { useToast } from "vue-toast-notification";
import router from "../router"

const $toast = useToast();
export const useFarmersStore = defineStore("farmers", {
  state: () => ({ farmers: [] }),
  getters: {
    farmers: (state) => state.farmers,
  },
  actions: {
    async updateProfile(data = {}) {
      try {
        console.log("data: ", data);
        await axios.post(urlServer + "/farmer", data).then((res) => {
          if (res.status == 200) {
            $toast.open({
              message: "Cập nhật thông tin thành công",
              type: "success",
              position: "top-right",
            });
          }
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
    },}
});
