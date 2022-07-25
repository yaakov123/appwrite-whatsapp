import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import Application from "./pages/Application.vue";
import { account } from "./api";

const routes: RouteRecordRaw[] = [
  { path: "/login", component: Login, name: "login" },
  {
    path: "/register",
    component: Register,
    name: "register",
  },
  { path: "/app", component: Application, name: "app" },
];

const router = createRouter({ history: createWebHistory(), routes });

const accountRoutes = ["login", "register"];
router.beforeEach(async (to, from, next) => {
  const name = to.name as string;

  try {
    const session = await account.getSession("current");
    to.meta.session = session;
    if (accountRoutes.includes(name)) {
      return next({ name: "app" });
    }
  } catch {
    if (!accountRoutes.includes(name)) {
      console.log("here");
      return next({ name: "login" });
    }
  }

  next();
});

createApp(App).use(router).mount("#app");
