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
      <h2 class="text-purple mb-4">Available Courses</h2>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="course in courses" :key="course.id">
          <div class="card bg-white border-0 shadow h-100">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-purple">{{ course.name }}</h5>
              <p class="card-text flex-grow-1">{{ course.description }}</p>
              <div v-if="!userEnrolled(course)">
                <button class="btn btn-primary mt-auto w-100" @click="enroll(course)">Enroll</button>
              </div>
              <div v-else>
                <span class="badge bg-success mt-auto w-100">Enrolled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
</script>

<style scoped>
.bg-purple {
  background-color: #673ab7;
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