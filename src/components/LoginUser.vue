<template>
  <div class="bg-purple-light min-vh-100">
    <nav class="navbar navbar-expand-lg navbar-dark bg-purple-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img :src="logoUrl" alt="Logo" height="100" class="d-inline-block align-top">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="bg-white rounded shadow p-4">
            <h2 class="text-purple mb-4">Login</h2>
            <form @submit.prevent="handleLogin">
              <div class="mb-3">
                <label for="email" class="form-label text-purple">Email</label>
                <input type="email" v-model="email" class="form-control" id="email" required />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label text-purple">Password</label>
                <input type="password" v-model="password" class="form-control" id="password" required />
              </div>
              <div v-if="loginError" class="alert alert-danger">{{ loginError }}</div> <button type="submit" class="btn btn-primary w-100">Login</button>
              <p class="mt-3 text-center">Don't have an account? <router-link to="/register">Register</router-link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        const user = computed(() => store.state.user);
        const logoUrl = require('@/assets/logo_purple.png');
        const email = ref('');
        const password = ref('');
        const loginError = ref(null);

        const handleLogin = async () => {
          loginError.value = null;
          try {
            await store.dispatch("login", { email: email.value, password: password.value });
            router.push("/profile");
          } catch (error) {
            loginError.value = error.message || "Credentiale incorecte.";
          }
        };

        return { email, password, handleLogin, user, logoUrl, loginError };
    },
};
</script>


<style scoped>
.bg-purple {
  background-color: #673ab7; /* Deep Purple */
}
.bg-purple-dark {
    background-color: #512da8;
}
.bg-purple-light {
    background-color: #d1c4e9;
}
.text-purple {
    color: #673ab7;
}
</style>