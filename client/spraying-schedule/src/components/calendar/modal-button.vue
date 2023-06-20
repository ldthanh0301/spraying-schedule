<template>
  <div id="modal">
    <div class="flex flex-col items-center justify-center p-3 min-h-full">
      <button
        @click="onToggle"
        class="bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
      >
        Thêm lịch hẹn
      </button>
    </div>
    <transition name="fade">
      <div
        v-if="isModalVisible"
        class="modal-wrap flex"
        :style="{ overflow: 'scroll' }"
      >
        <div
          @click="onToggle"
          class="absolute bg-black opacity-70 inset-0 z-0"
        ></div>
        <div
          class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
        >
          <div>
            <div class="text-center p-3 flex-auto justify-center leading-6">
              <div
                class="text-center w-100 flex justify-center m-2"
                :style="{ color: '#9f7aea' }"
              >
                <font-awesome-icon
                  :icon="['fas', 'plus']"
                  :style="{ 'font-size': '25px' }"
                />
                <h3>Thêm lịch phun xịt thuốc</h3>
              </div>
            </div>
            <b-form @submit="onSubmitForm" @reset="onReset">
              <b-form-group
                id="input-group-1"
                label="Tên chủ ruộng:"
                label-for="input-1"
                description="Hãy điền tên chủ ruộng."
              >
                <b-form-input
                  id="input-1"
                  v-model="form.name"
                  type="text"
                  placeholder="Nhập tên"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-2"
                label="Nhập địa chỉ phun thuốc:"
                label-for="input-2"
                description="Hãy điền địa chỉ."
              >
                <b-form-input
                  id="input-2"
                  v-model="form.address"
                  type="text"
                  placeholder="Nhập địa chỉ"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-keywords"
                label="Loại dịch vụ:"
                label-for="input-keywords"
                description="Hãy điền loại dịch vụ."
              >
                <b-form-input
                  id="input-keywords"
                  v-model="form.keywords"
                  type="text"
                  placeholder="Nhập loại dịch vụ"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-comment"
                label="Nhập bình luận:"
                label-for="input-comment"
                description="Hãy điền bình luận."
              >
                <b-form-input
                  id="input-comment"
                  v-model="form.comment"
                  type="text"
                  placeholder="Nhập bình luận"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-3"
                label="Chọn ngày phun thuốc:"
                label-for="input-2"
                description="Hãy chọn ngày phun thuốc"
              >
                <b-form-input
                  id="input-3"
                  v-model="form.day"
                  type="text"
                  placeholder="Hãy chọn ngày"
                  required
                ></b-form-input>
              </b-form-group>
              <v-calendar
                :attributes="attributes"
                @dayclick="onDayClick"
                :locale="{ id: $i18n.locale, masks: { weekdays: 'WWW' } }"
              />

              <!-- button control -->
              <div class="p-3 mt-2 text-center space-x-4 md:block">
                <button
                  class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100"
                >
                  Save
                </button>
                <button
                  type="submit"
                  class="mb-2 md:mb-0 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
                >
                  Close
                </button>
              </div>
            </b-form>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { DatePicker } from "v-calendar";
import AddIcon from "./assets/close-icon.vue";
import CloseIcon from "./assets/close-icon.vue";
import { useEventsStore } from "../../stores/events";
import {useToast} from 'vue-toast-notification';
const $toast = useToast();

export default {
  data() {
    return {
      store: useEventsStore(),
      form: {
        name: "",
        address: "",
        comment: "",
        day: new Date().toISOString(),
        keywords: "",
      },
      isOpen: false,
      context: null,
      text: "",
      dayPicker: null,
    };
  },

  computed: {
    isModalVisible() {
      return this.isOpen;
    },
    dates() {
      return this.form.day;
    },
    attributes() {
      return [
        {
          highlight: true,
          dates: this.form.day,
        },
      ];
    },
  },

  methods: {
    onToggle() {
      this.isOpen = !this.isOpen;
    },
    onContext(ctx) {
      this.context = ctx;
    },
    onDayClick(day) {
      this.form.day = day.date.toISOString();
    },
    onSubmitForm(event) {
      event.preventDefault();
      this.isOpen = false;
      this.store.setEvent({
        id: "cl30h76qi116501nu2dc1wnv1",
        date: this.form.day,
        comment: this.comment,
        keywords: this.form.keywords,
        name: this.form.name,
      });
      this.form.name = "";

      this.onReset(event)
      $toast.open({
        message:"Thêm lịch thành công",
        type: "success",
        position:"top-right"
      })
     
    },
    onReset(event) {
      event.preventDefault();
      this.form.day = new Date();
      this.form.name = "";
      this.form.address= "";
      this.form.comment= "";
      this.form.keywords="";
    },
  },
};
</script>
<style>
.modal-wrap {
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  top: 0;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>
