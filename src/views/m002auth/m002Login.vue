<template>
  <div class="login">
    <!-- <b-avatar class="avatar"></b-avatar> -->
    
    <b-form-input class="email" v-model="phone" placeholder="phone"></b-form-input>
    <b-form-input
      class="email"
      type="password"
      v-model="password"
      :placeholder="$t('login.password')"
    ></b-form-input>
    <div class="login-text">
      <div>{{$t("login.forgot-password")}}</div>
      <div @click="backToHome()">{{$t("navbar.home")}}</div>
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
      password: null
    };
  },
  methods: {
    backToHome() {
      this.$router.push({ name: "Home" });
    },
    login() {
      var data = {
        phone: this.phone,
        password: this.password
      };
      LoginService.login(data).then(res => {
        console.log(res);
        sessionStorage.setItem("token", res.data.token);
        this.$router.push({ name: "Admin_Home" });
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