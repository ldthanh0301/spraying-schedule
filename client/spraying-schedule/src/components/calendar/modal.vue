<template>
    
    <button
        @click="visible=true" 
        class="text-71717A py-0dt375 px-4 inline-flex font-medium text-sm leading-5 flex-shrink-0 items-center justify-center hover:opacity-80 active:animate-pulse cursor-pointer rounded-md bg-14-165-233 text-white hover:opacity-90">Thêm sự kiện</button>

  <div class="modal-wrapper bg-F4F4F5" v-if="visible">

    <h2>{{ title }}</h2>

    <p>{{ text }}</p>

    <div class="modal-buttons">

      <button class="modal-button" @click="hide">Close</button>

      <button class="modal-button" @click="confirm">Confirm</button>

    </div>

  </div>

</template>





<script>

export default {

  data() {

    return {

      // variable that shows/hides modal

      visible: false, 

      title: 'Thêm lịch phun thuốc',

      text: ''

    }

  },

  methods: {

    hide() {

      // method for closing modal

      this.visible = false;

    },

    confirm() {

      // confirm code will be here soon(TM)

    }

  }

}

</script>



<style scoped>



.modal-wrapper {

  position: fixed;

  top: 50%;

  left: 50%;

  transform: translate(-50%, -50%);

  width: 300px;

  height: 200px;

  z-index: 1000;



  border-radius: 2px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

}



.modal-buttons {

  position: absolute;

  bottom: 0;

  left: 0;

  right: 0; 

  display: flex;

}



.modal-button {

  flex-grow: 1;

}

</style>