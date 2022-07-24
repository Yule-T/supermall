import Vue from "vue";
import Router from "vue-router";

const Home = () => import("views/home/Home");
const Cart = () => import("views/cart/Cart");
const Classify = () => import("views/classify/Classify");
const Profile = () => import("views/profile/Profile");

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
  }
];

const router = new Router({
  routes: routes,
  mode: "history"
});
export default router;
