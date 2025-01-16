import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const user = computed(() => store.state.user);
    const courses = computed(() => store.state.courses);
    const enrolledCourses = computed(() => store.state.enrolledCourses || []);

    const userEnrolled = (course) => {
      return enrolledCourses.value.some((c) => c.id === course.id);
    };

    const enroll = async (course) => {
      if (!user.value) {
        // Redirect to login if not logged in
        router.push('/login');
        return;
      }
      try {
        await store.dispatch('enrollCourse', course);
      } catch (error) {
        console.error("Error enrolling in course:", error);
        alert("A apărut o eroare la înscrierea la curs. Te rugăm să încerci din nou mai târziu.");
      }
    };

    return { courses, userEnrolled, enroll };
  },
};