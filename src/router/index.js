import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/login/index.vue";
import Home from "@/views/home/index.vue";
import Layout from "@/views/layout/index.vue";
import Article from "@/views/article/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/",

    //命名路由layout有一个默认子路由，这个名字没有意义，如果有默认路由就不要给父路由起名字了
    component: Layout,
    children: [
      {
        path: "", //path为空会默认子路由渲染
        name: "home",
        component: Home
      },
      {
        path: "/article",
        name: "article",
        component: Article
      }
    ]
  }
];
const router = new VueRouter({
  routes
});

export default router;
