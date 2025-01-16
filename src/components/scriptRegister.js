import { ref, computed } from 'vue';
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
    const confirmPassword = ref('');
    const registrationError = ref(null);

    const handleRegister = async () => {
      registrationError.value = null;
      if (password.value !== confirmPassword.value) {
        registrationError.value = "Parolele nu se potrivesc!";
        return;
      }

      try {
        await store.dispatch('register', { email: email.value, password: password.value });
        router.push('/login');
      } catch (error) {
        registrationError.value = error.message || "Eroare la înregistrare.";
      }
    };

    return { email, password, confirmPassword, handleRegister, logoUrl, user, registrationError };
  },
};