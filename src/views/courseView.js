import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const courses = computed(() => store.state.courses);
    const user = computed(() => store.state.user);
    const enrolledCourses = computed(() => store.state.enrolledCourses || []);
        const logoUrl = require('@/assets/logo_purple.png')

    const userEnrolled = (course) => enrolledCourses.value.some((c) => c.id === course.id);

    const enroll = async (course) => {
      await store.dispatch('enrollCourse', course);
    };

    return { courses, userEnrolled, enroll, user, logoUrl };
  },
};
