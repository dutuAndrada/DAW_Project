
<template>
    <div class="container mt-5">
      <h2>Available Courses</h2>
      <ul>
        <li v-for="course in courses" :key="course.id">{{ course.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        courses: [
          { id: 1, name: 'Vue.js Basics' },
          { id: 2, name: 'Advanced JavaScript' },
          { id: 3, name: 'Web Development with Bootstrap' },
        ],
      };
    },
  };
  </script>