export default [
  {
    path: "/",
    component: () => import("@/views/Layouts.vue"),
    redirect: { name: "Home" },
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/about",
        name: "AboutMe",
        component: () => import("@/views/About.vue"),
      },
      {
        path: "/search/:key",
        name: "Search",
        component: () => import("@/views/Search.vue"),
      },
      {
        path: "/list",
        name: "BrandsList",
        component: () => import("@/views/BrandsList"),
      },
    ],
  },
];
