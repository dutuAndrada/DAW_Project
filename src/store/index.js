import { createStore } from "vuex";

const store = createStore({
  state: {
    user: null,
    courses: [
      { id: 1, name: "Introduction to Vue.js", description: "Learn Vue.js" },
      { id: 2, name: "JavaScript for Beginners", description: "Learn JavaScript" },
      { id: 3, name: "Building APIs with Node.js", description: "Learn Node.js APIs" },
    ],
    enrolledCourses: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    enrollCourse(state, courseId) {
      if (!state.enrolledCourses.includes(courseId)) {
        state.enrolledCourses.push(courseId);
      }
    },
  },
  actions: {
    enrollCourse({ commit }, course) {
      commit('enrollCourse', course.id); 
    },
    login({ commit }, user) {
      commit('setUser', user);
    },
    logout({ commit }) {
      commit('setUser', null);
    },
  },
    getters: {
        enrolledCoursesDetails: (state) => {
            return state.enrolledCourses.map(courseId => {
                return state.courses.find(course => course.id === courseId);
            }).filter(course => course !== undefined); 
        }
    }
});

export default store;