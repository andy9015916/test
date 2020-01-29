import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Hello2 from "@/components/Hello2";
import A from "@/components/A";
import B from "@/components/B";
import C from "@/components/C";
import D from "@/components/D";
import E from "@/components/E";
import F from "@/components/F";
import G from "@/components/G";
import H from "@/components/H";
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
      path: "/A",
      name: "A",
      component: A
    },
    {
      path: "/B",
      name: "B",
      component: B
    },
    {
      path: "/C",
      name: "C",
      component: C
    },
    {
      path: "/D",
      name: "D",
      component: D
    },
    {
      path: "/E",
      name: "E",
      component: E
    },
    {
      path: "/F",
      name: "F",
      component: F
    },
    {
      path: "/G",
      name: "G",
      component: G
    },
    {
      path: "/H",
      name: "H",
      component: H
    }
  ]
});
