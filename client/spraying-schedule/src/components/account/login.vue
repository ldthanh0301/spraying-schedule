<template>
  <div class="header flex justify-evenly">
    <h2 class="header-title">Trang đăng nhập</h2>
    <div class="header-login">
      <a href="./login">Đăng nhập</a>
      <span>/</span>
      <a href="./register">Đăng ký</a>
    </div>
  </div>
  <div class="login-form">
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group label="Tên đăng nhập:" label-for="username">
        <b-form-input
          id="username"
          v-model="form.username"
          type="text"
          placeholder="Nhập tên đăng nhập"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Mật khẩu:" label-for="password">
        <b-form-input
          id="password"
          v-model="form.password"
          type="password"
          placeholder="Nhập mật khẩu"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Đăng nhập</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { useAccountsStore } from "../../stores/accounts.ts";

export default {
  data() {
    return {
      store: useAccountsStore(),
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit(events) {
      events.preventDefault();
      this.store.login({username:this.form.username,password: this.form.password})
    },
  },
};
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
.login-form {
    width: 500px;
    margin: 10px auto;
    padding: 50px;
    border: 1px solid;
    border-radius: 20px ;
}
</style>
