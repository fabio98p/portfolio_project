<template>
    <div class="nav">
      <div class="nav__start">
        <img alt="Vue logo" src="../assets/logo.png" />
        <router-link to="/">{{$t("nav.home")}}</router-link>
        <router-link to="/about">{{$t("nav.about")}}</router-link>
        <router-link :to="{name: 'tag', params: {id: 'html'}}" class="link">html</router-link>
        <router-link :to="{name: 'tag', params: {id: 'css'}}" class="link">css</router-link>
        <router-link :to="{name: 'tag', params: {id: 'vue'}}" class="link">vue</router-link>
        <Dropdown :datas="$tm(`test`)" />
      </div>
      <div class="nav__end">
      <p class="user-greeting">
        {{ $t("user_greeting", { name: "Adam" }) }}
      </p>
      <LocaleSwitcher />
      <DarkModeSwitch />
    </div>
    </div>
  </template>

  <script>
  import LocaleSwitcher from "@/components/LocaleSwitcher"
import Dropdown from "./Dropdown.vue";
import DarkModeSwitch from "./DarkModeSwitch.vue";
  export default {
    components: { LocaleSwitcher, Dropdown, DarkModeSwitch }
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
    background-color: var(--bg-navbar);
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