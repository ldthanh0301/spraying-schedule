import { defineStore } from "pinia";
import axios from "axios";

export const useFarmersStore = defineStore("farmers", {
  state: () => ({ farmers: [] }),
  getters: {
    farmers: (state) => state.farmers,
  },
  actions: {
    async getFarmers() {
      try {
         await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        ).then(res=> {
          this.$state.farmers = res.data
          console.log("ggg:",this.$state.farmers)
        })
      } catch (error) {
        return error;
      }
    },
  },
});
