<template>
    <div class="nav">
      <div class="nav__start">
        <img alt="Vue logo" src="../assets/logo.png" />
        <router-link to="/">{{$t("nav.home")}}</router-link>
        <router-link to="/about">{{$t("nav.about")}}</router-link>
        <!-- <router-link to="/project">{{$t("nav.project")}}</router-link> -->
        <router-link :to="{name: 'project', params: {id:'portfolio'}}">{{$t("nav.portfolio")}}</router-link>
        <router-link :to="{name: 'project', params: {id:'snake'}}">{{$t("nav.snake")}}</router-link>
        <Dropdown :datas="$tm(`test`)" />
      </div>
      <div class="nav__end">
      <p class="user-greeting">
        {{ $t("user_greeting", { name: "Adam" }) }}
      </p>
      <LocaleSwitcher />
    </div>
    </div>
  </template>

  <script>
  import LocaleSwitcher from "@/components/LocaleSwitcher"
import Dropdown from "./Dropdown.vue";
  export default {
    components: { LocaleSwitcher, Dropdown }
  }
  </script>
  
  <style scoped>
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    padding: 1rem;
    color: #fff;
    background-color: #3d536a;
  }
  .nav__start,
  .nav__end {
    display: flex;
    align-items: center;
  }
  .nav img {
    margin-right: 1rem;
    height: 20px;
  }
  .nav a {
    margin-right: 1.5rem;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
  }
  </style>