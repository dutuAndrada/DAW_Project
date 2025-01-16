<template>
  <div class="bg-purple-light min-vh-100">
    <nav class="navbar navbar-expand-lg navbar-dark bg-purple-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/"> <img :src="logoUrl" alt="Logo" height="100" class="d-inline-block align-top"></router-link>
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

    <div class="container mt-5 bg-white rounded shadow p-4">
      <h2 class="text-purple mb-4">Your Profile</h2>

      <template v-if="user">
        <p class="text-purple">Email: {{ user.email }}</p>

        <div v-if="enrolledCourses.length > 0">
          <h3 class="text-purple mt-4">Enrolled Courses</h3>
          <div class="row">
            <div class="col-md-4 mb-3" v-for="course in enrolledCourses" :key="course.id">
              <div class="card bg-white border-0 shadow">
                <div class="card-body">
                  <h5 class="card-title text-purple">{{ course.name }}</h5>
                  <p class="card-text">{{ course.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <p class="text-purple">You are not enrolled in any courses yet.</p>
        </div>
        <button class="btn btn-danger mt-3" @click="logout">Logout</button>
      </template>

      <template v-else>
        <img :src="imagePath" alt="Not logged in" class="img-fluid mb-3" style="max-width: 300px;">
        <p class="text-purple">You are not logged in. Please log in to view your profile.</p>
        <router-link to="/login" class="btn btn-primary">Login</router-link>
      </template>
    </div>
  </div>
</template>

<script src="@/views/profileView">
</script>
<style src="@/css/styles.css"></style>