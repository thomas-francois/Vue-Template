export const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    name: "Page",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
  },
];
