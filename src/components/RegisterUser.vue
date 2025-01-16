<template>
  <div class="container mt-5 bg-purple-light rounded shadow p-4">
    <h2 class="text-purple mb-4">Register</h2>
    <form @submit.prevent="handleRegister">
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
      <div class="mb-3">
        <label for="confirmPassword" class="form-label text-purple">Confirm Password</label>
        <input
          type="password"
          v-model="confirmPassword"
          class="form-control"
          id="confirmPassword"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    handleRegister() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      // Handle registration logic here - call an API or store in a database
      console.log("User registered:", this.email);
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