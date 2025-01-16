import { createStore } from "vuex";

const store = createStore({
  state: {
    user: null,
    courses: [
      {
        id: 1,
        name: "Introduction to Vue.js",
        description:
          "Learn the fundamentals of building interactive web applications with Vue.js, a popular JavaScript framework.",
      },
      {
        id: 2,
        name: "JavaScript for Beginners",
        description:
          "Get started with the core concepts of JavaScript, the building block of modern web development.",
      },
      {
        id: 3,
        name: "Building APIs with Node.js",
        description:
          "Learn how to create powerful APIs (Application Programming Interfaces) using Node.js and Express.",
      },
    ],
    enrolledCourses: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    enrollCourse(state, course) {
      console.log(`Enrolled in course: ${course.name}`);
    },
  },
  actions: {
    login({ commit }, user) {
      commit('setUser', user);
    },
    logout({ commit }) {
      commit('setUser', null);
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
});

export default store;