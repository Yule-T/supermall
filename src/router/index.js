import Vue from "vue";
import Router from "vue-router";

const Home = () => import("views/home/Home");
const Cart = () => import("views/cart/Cart");
const Classify = () => import("views/classify/Classify");
const Profile = () => import("views/profile/Profile");
const Detail = () => import("views/detail/Detail");

Vue.use(Router);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/classify",
    component: Classify
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/detail/:iid",
    component: Detail
  }
];

const router = new Router({
  // base: '/supmall/',
  routes: routes,
  mode: "history"
});
export default router;
