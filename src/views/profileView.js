import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const user = computed(() => store.state.user);
    const enrolledCoursesDetails = computed(() => store.getters.enrolledCoursesDetails); // Aici am adăugat getter-ul
    const imagePath = require('@/assets/error_robot.jpeg');
    const logoUrl = require('@/assets/logo_purple.png');

    const logout = async () => {
      await store.dispatch('logout');
      router.push('/login');
    };

    return { user, enrolledCoursesDetails, imagePath, logout, logoUrl }; // Am adăugat enrolledCoursesDetails la obiectul returnat
  },
};
