<template>
  <div class="container mt-5 bg-purple-light rounded shadow p-4">
    <h2 class="text-purple mb-4">Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label for="email" class="form-label text-purple">Email</label>
        <input
          type="email"
          v-model="email"
          class="form-control"
          id="email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label text-purple">Password</label>
        <input
          type="password"
          v-model="password"
          class="form-control"
          id="password"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      if (this.email && this.password) {
        this.$store.dispatch("login", { email: this.email });
        this.$router.push("/profile");
      }
    },
  },
};
</script>

<style scoped>
.bg-purple-light {
  background-color: #d1c4e9;
}
.text-purple {
  color: #673ab7;
}
</style>