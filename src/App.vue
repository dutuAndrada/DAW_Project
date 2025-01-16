<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/courses">CoursesView</router-link>
      <router-link to="/profile">ProfileView</router-link>
      <router-link to="/login">LoginUser</router-link>
      <router-link to="/register">RegisterUser</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
nav {
  margin-bottom: 20px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b983;
}
nav a.router-link-active {
  font-weight: bold;
  color: #35495e;
}
</style>
