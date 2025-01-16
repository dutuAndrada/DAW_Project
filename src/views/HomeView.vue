<template>
  <div class="bg-purple-light min-vh-100">
    <nav class="navbar navbar-expand-lg navbar-dark bg-purple-dark">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img :src="logoUrl" alt="Logo" height="100" class="d-inline-block align-top">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Courses</a>
            </li>
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

    <header class="py-5 text-center text-white bg-purple">
      <div class="container">
        <h1>Welcome to the Learning Platform</h1>
        <p class="lead">Explore courses and enhance your skills!</p>
        <button class="btn btn-lg btn-outline-light">Get Started</button>
      </div>
    </header>

    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card bg-purple-light border-0 shadow">
              <div class="card-body text-center">
                <i class="fas fa-book fa-3x text-purple mb-3"></i>
                <h5 class="card-title">Diverse Courses</h5>
                <p class="card-text">Choose from a wide range of courses.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card bg-purple-light border-0 shadow">
              <div class="card-body text-center">
                <i class="fas fa-user-graduate fa-3x text-purple mb-3"></i>
                <h5 class="card-title">Expert Instructors</h5>
                <p class="card-text">Learn from experienced professionals.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card bg-purple-light border-0 shadow">
              <div class="card-body text-center">
                <i class="fas fa-chart-line fa-3x text-purple mb-3"></i>
                <h5 class="card-title">Track Your Progress</h5>
                <p class="card-text">Monitor your learning journey.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="py-3 bg-purple-dark text-white text-center">
      <div class="container">
        <p>&copy; 2023 Learning Platform. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faUserGraduate, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBook, faUserGraduate, faChartLine)

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    FontAwesomeIcon
  },
  data() {
    return {
      logoUrl:require('@/assets/logo_purple.png'), 
    };
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