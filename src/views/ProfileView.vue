/* eslint-disable */
<template>
    <div class="container mt-5">
      <h2>Your Profile</h2>
      <p>Email: {{ user.email }}</p>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      user() {
        return this.$store.state.user;
      },
    },
  };
  </script>