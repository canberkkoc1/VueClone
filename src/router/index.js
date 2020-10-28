import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/direct",
    name: "Direct",
    component: () =>
      import(/* webpackChunkName: "direct" */ "../views/direct/direct.vue"),
  },
  {
    path: "/explore",
    name: "Explore",
    component: () =>
      import(/* webpackChunkName: "explore" */ "../views/explore/explore.vue"),
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/profile"),
    children: [
      {
        path: "/profile",
        name: "Post",
        component: () =>
          import(/* webpackChunkName: "profile" */ "../views/profile/post.vue"),
      },
      {
        path: "/profile/igtv",
        name: "Post",
        component: () =>
          import(/* webpackChunkName: "profile" */ "../views/profile/igtv.vue"),
      },
      {
        path: "/profile/save",
        name: "Post",
        component: () =>
          import(/* webpackChunkName: "profile" */ "../views/profile/save.vue"),
      },
      {
        path: "/profile/tag",
        name: "Post",
        component: () =>
          import(/* webpackChunkName: "profile" */ "../views/profile/tags.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
