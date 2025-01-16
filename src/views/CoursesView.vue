<template>
  <div class="bg-purple-light min-vh-100">
    <nav class="navbar navbar-expand-lg navbar-dark bg-purple-dark"></nav>

    <div class="container mt-5">
      <h2 class="text-purple mb-4">Available Courses</h2>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="course in courses" :key="course.id">
          <div class="card bg-white border-0 shadow h-100 course-card">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-purple">{{ course.name }}</h5>
              <p class="card-text flex-grow-1">{{ course.description }}</p>
              <div v-if="!userEnrolled(course)">
                <button class="btn btn-primary mt-auto w-100" @click="enroll(course)" :disabled="enrollmentStatus[course.id] !== undefined">
                    Enroll
                </button>
                  <p v-if="enrollmentStatus[course.id]" class="text-success mt-2">{{ enrollmentStatus[course.id] }}</p>
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
<script src="@/views/courseView"></script>
<style src="@/appStyle.cs"></style>