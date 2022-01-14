import {
  AdminHomePage,
  Article,
  ComRequest,
  Experts,
  HomePage,
} from "./routes";

const routes = [
  { path: "/", component: HomePage },
  { path: "/articles/:id", component: Article },
  { path: "/expert", component: Experts },
  { path: "/requests", component: ComRequest },
  { path: "/admin", component: AdminHomePage },
];

export default routes.map((route) => {
  return {
    ...route,
    component: route.component,
  };
});
