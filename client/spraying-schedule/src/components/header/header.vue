<template>
    <div class="header flex justify-evenly">
        <h2 class="header-title">Trang web theo dỗi lịch phun xịt phân thuốc</h2>
        <div class="header-login">
            <a href="http://">Đăng nhập</a>  
            <span>/</span>
            <a href="http://">Đăng ký</a>  
        </div>
    </div>
</template>

<script>
import { useFarmersStore } from '../../stores/farmers.ts'

export default {
  data() {
    return {
    //   store: useFarmersStore()
    }
    },
    computed : {
        showFarmer() {
            // console.log("farmer: ", this.store.getFarmers)
        }
    }
}
</script>

<style lang="scss" scoped>
    .header {
        height: 50px;
        background-color: beige;
        &-title {
        }
        &-login {
        }
    }
</style>