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