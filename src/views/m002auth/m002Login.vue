<template>
  <div class="login">
    <!-- <b-avatar class="avatar"></b-avatar> -->
    
    <b-form-input class="email" v-model="phone" placeholder="Số điện thoại"></b-form-input>
    <b-form-input
      class="email"
      type="password"
      v-model="password"
      :placeholder="$t('login.password')"
    ></b-form-input>
    <div class="error">
      <div v-if="error" class="alert-danger">{{error}}</div>
    </div>
    <button @click="login()" type="button" class="btn btn-danger login-bn">{{$t("slide.login")}}</button>
  </div>
</template>
<script>
/* eslint-disable */
import LoginService from "../../../api/loginApi";
export default {
  name: "M002Login",
  data() {
    return {
      phone: null,
      password: null,
      error: null,
    };
  },
  methods: {
    backToHome() {
      this.$router.push({ name: "Home" });
    },
    login() {
      if(!this.phone){
        this.error = "Vui lòng nhập số điện thoại";
        return;
      }
      if(!this.password){
        this.error = "Vui lòng thêm mật khẩu";
        return;
      }
      var data = {
        phone: this.phone,
        password: this.password
      };
      LoginService.login(data).then(res => {
        console.log(res);
        sessionStorage.setItem("token", res.data.token);
        this.$router.push({ name: "Admin_Home" });
      }).catch(err => {
        console.log(err.response);
      });
      
    }
  }
};
</script>
<style>
.login {
  max-width: 600px;
  margin: 100px auto;
  background: rgb(185, 181, 181);
  padding: 30px;
  border-radius: 8px;
}
.avatar {
  width: 6.5em !important;
  height: 6.5em !important;
}
.login .form-control {
  margin: 15px 0;
  border-radius: 25px;
}
.login-text {
  display: flex;
  justify-content: space-around;
  color: #df2f29 !important;
  font-weight: bold;
  text-transform: uppercase;
}
.login-bn {
  margin: 15px 0;
}
.email::after {
  content: "OK ";
  background: rgb(95, 86, 86);
  color: red;
}
button::after {
  content: " ";
  background: rgb(95, 86, 86);
  color: red;
  border-right: 12px;
}
</style>