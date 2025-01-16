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

<style>
/* Import a monospace font (optional, but recommended) */
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap'); /* Example: Roboto Mono */

nav {
  margin-bottom: 20px;
  background-color: #f8f9fa; /* Optional: Light background for the nav */
  padding: 10px; /* Optional: Add some padding */
  border-bottom: 1px solid #eee; /* Optional: Add a subtle border */
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #673ab7; /* Purple color */
  font-family: 'Roboto Mono', monospace; /* Monospace font */
  font-weight: 400; /* Normal font weight by default */
  transition: color 0.3s ease, font-weight 0.3s ease; /* Smooth transitions */
}

nav a:hover {
  color: #512da8; /* Darker purple on hover */
}

nav a.router-link-active {
  font-weight: 700; /* Bold font weight for active link */
  color: #311b92; /* Even darker purple for active link */
}
</style>