import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        const user = computed(() => store.state.user);
        const courses = computed(() => store.state.courses);
        const enrolledCourses = computed(() => store.state.enrolledCourses || []);
        const enrollmentStatus = ref({});

        const userEnrolled = (course) => {
            return enrolledCourses.value.includes(course.id);
        };

        const enroll = async (course) => {
            if (!user.value) {
                router.push('/login');
                return;
            }

            if (userEnrolled(course)) {
                return; 
            }

            try {
                await store.dispatch('enrollCourse', course);
                enrollmentStatus.value[course.id] = 'Successfully enrolled';

                setTimeout(() => {
                    enrollmentStatus.value[course.id] = null
                }, 3000)

            } catch (error) {
                console.error("Error enrolling in course:", error);
                alert("A apărut o eroare la înscrierea la curs. Te rugăm să încerci din nou mai târziu.");
            }
        };

        return { courses, userEnrolled, enroll, user, enrollmentStatus };
    },
};