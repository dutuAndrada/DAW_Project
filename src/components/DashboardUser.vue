<template>
    <div class="container mt-5">
      <h2>Welcome to your Dashboard!</h2>
      <p>You are logged in.</p>
      <button class="btn btn-danger" @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        this.$store.dispatch('logout');
        this.$router.push('/');
      },
    },
  };
  </script>