
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Courses from "../views/CoursesView.vue";
import Profile from "../views/ProfileView.vue";
import Login from "../components/LoginUser.vue";
import Register from "../components/RegisterUser.vue";
import Dashboard from "../components/DashboardUser.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/courses", name: "Courses", component: Courses },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
