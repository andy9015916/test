import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Hello2 from "@/components/Hello2";
import A1 from "@/components/A1";
import A2 from "@/components/A2";
import A3 from "@/components/A3";
import A4 from "@/components/A4";
import A5 from "@/components/A5";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/Hello2",
      name: "Hello",
      component: Hello2
    },
    {
      path: "/A1",
      name: "A1",
      component: A1
    },
    {
      path: "/A2",
      name: "A2",
      component: A2
    },
    {
      path: "/A3",
      name: "A3",
      component: A3
    },
    {
      path: "/A4",
      name: "A4",
      component: A4
    },
    {
      path: "/A5",
      name: "A5",
      component: A5
    }
  ]
});
