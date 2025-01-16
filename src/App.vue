<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/courses">Courses</router-link>
      <router-link to="/profile">Profile</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style src ="@\appStyle.cs"></style>