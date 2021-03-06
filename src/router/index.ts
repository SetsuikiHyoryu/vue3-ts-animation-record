import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/study",
    name: "Study",
    component: () =>
      import(/** webpackChunkName: "study" */ "../views/study/Study.vue"),
  },
  {
    path: "/studysetup",
    name: "StudySetup",
    component: () =>
      import(
        /** webpackChunkName: "studysetup" */ "../views/study/StudySetup.vue"
      ),
  },
  {
    path: "/studyts",
    name: "StudyTypeScript",
    component: () =>
      import(
        /** webpackChunkName: "studyts" */ "../views/study/StudyTypeScript.vue"
      ),
  },
  {
    path: "/studyconnect",
    name: "StudyFrontConnectBack",
    component: () =>
      import(
        /** webpackChunkName: "studyconnect" */ "../views/study/StudyFrontConnectBack.vue"
      ),
  },

  // NOTE: 懶加載
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
