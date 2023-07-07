<template>
    <div class="header flex justify-evenly">
        <h2 class="header-title">Trang web theo dỗi lịch phun xịt phân thuốc</h2>
         <!-- <div  class="header-login">
            <a href="./login">Đăng nhập</a>  
            <span>/</span>
            <a href="./register">Đăng ký</a>  
        </div>  -->
        <div>
            <b-dropdown text="Tùy chọn">
                <b-dropdown-item href="/profile">Thông tin cá nhân</b-dropdown-item>
                <b-dropdown-item @click="logoutEvent">Đăng xuất</b-dropdown-item>
              </b-dropdown>
        </div>
    </div>
</template>

<script>
import { useFarmersStore } from '../../stores/farmers.ts'
import { useAccountsStore } from "../../stores/accounts.ts";
export default {
  data() {
    return {
     accountStore :useAccountsStore(),
    //   store: useFarmersStore()
    }
    },
    methods: {
        logoutEvent: function () {
            this.accountStore.logout()
        }
    }
}
</script>

<style lang="scss" scoped>
    .header {
        background-color: #78c2ad;
        z-index: 100;
        padding: 15px;
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
        &-title {
            color: white;
        }
        &-login {
        }
    }
</style>