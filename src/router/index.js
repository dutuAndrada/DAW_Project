import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import CoursesView from "../views/CoursesView.vue";
import ProfileView from "../views/ProfileView.vue";
import LoginUser from "../components/LoginUser.vue";
import RegisterUser from "../components/RegisterUser.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/courses", name: "Courses", component: CoursesView },
  { path: "/profile", name: "Profile", component: ProfileView },
  { path: "/login", name: "Login", component: LoginUser },
  { path: "/register", name: "Register", component: RegisterUser },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
