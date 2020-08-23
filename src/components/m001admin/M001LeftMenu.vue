/* eslint-disable */
<template>
  <div>
    <div v-if="big" class="left-menu">
      <div class="top-icon">
        <b-icon @click="changeState()" icon="justify" class="icon"></b-icon>
      </div>
     
      <router-link :to="{name: 'Admin_Home'}">
        <div class="left-content">
          <b-icon icon="graph-up" class="left-icon"></b-icon>
          <div class="left-title">Tổng quan</div>
        </div>
      </router-link>
      <div class="left">
        <router-link :to="{name: 'M001AdminUser'}">
          <div class="left-content">
            <b-icon icon="person-fill" class="left-icon"></b-icon>
            <div class="left-title">Nhân viên</div>
          </div>
        </router-link>
      </div>
      <div class="left">
        <router-link :to="{name: 'M001AdminFood'}">
          <div class="left-content">
            <b-icon icon="subtract" class="left-icon"></b-icon>
            <div class="left-title">Đồ ăn</div>
          </div>
        </router-link>
      </div>
    </div>
    <div v-if="!big" @click="changeState()">
      <b-icon  icon="justify" class="show-icon"></b-icon>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "M001LeftMenu",
  data() {
    return {
      search: null,
      user: false,
      cate: false,
      heal: false,
      position: false,
      recruitment: false,
      activity: false,
      project: false,
      timekeeping: false,
      confession: false,
      question: false,
      big: true
    };
  },
  methods: {
    changeState() {
      this.big = !this.big;
    }
  }
};
</script>
<style>
.left-menu {
  /* max-width: 300px; */
  padding: 0 20px;
  height: 100vh;
  /* position: fixed; */
  background: #1e282c;
  overflow-y: auto;
}
.search {
  border-radius: 25px !important;
}
.router-link-exact-active {
  color: #0f7eb1 !important;
}
/* .router-link-active {
  color: #ffffff !important;
} */
.right-icon {
  margin-left: 20px;
  align-self: center;
}
.top-search {
  display: flex;
}
.left-content {
  color: #ffffff;
  margin: 15px 10px;
  display: flex;
  transition: linear 0.3s;
}
.left-icon {
  align-self: center;
}
.icon{
  font-size: 30px;
  color: #ffffff;
}
.show-icon{
  font-size: 30px;
  color: #353535;
  margin: 5px;
}
.top-icon{
  text-align: right;
}
.left-title {
  align-content: center;
  margin-left: 30px;
}
.left-title a {
  color: #ffffff;
}
.left-detail {
  padding: 0 !important;
  transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s;
}
.left-detail li {
  list-style: none;
  text-align: left;
  margin-left: 30px;
  color: #d3cece;
  text-transform: initial;
  transition: all linear 0.3s;
  animation: slide-in-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.left-detail li:hover {
  color: #0f7eb1 !important;
}
.left {
  animation: slide-in-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.left-content:hover {
  color: #0f7eb1 !important;
}
@keyframes slide-in-top {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@media only screen and (max-width: 47.249999em) {
  .left-title{
    margin-left: 2px;
    min-width: 100px;
  }
  .body {
    padding: 0;
  }
  .left-content{
    margin: 0;
  }

  .left{
    margin: 3px 0;
  }
}
@media only screen and (min-width: 46.25em) and (max-width: 63.9375em) {
  .left-content {
    margin: 15px 0;
  }
  .left-title {
    margin-left: 10px;
  }
  .right-icon {
    margin-left: 10px;
  }
}
</style>