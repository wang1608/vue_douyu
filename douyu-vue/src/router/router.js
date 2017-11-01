import Vue from "vue";
import VueRouter from "vue-router";


// import Home from './components/home.vue'
// import Finance from './components/finance.vue'
// import Video from './components/video.vue'
            // 当打包构建应用时，Javascript 包会变得非常大，影响页面加载。
            // 如果我们能把不同路由对应的组件分割成不同的代码块，
            // 然后当路由被访问的时候才加载对应组件，这样就更加高效了

//懒加载

// const editTime = resolve => require(['./components/editTime.vue'], resolve);
const Home = resolve => require(['../components/home.vue'], resolve);
const Detail = resolve => require(['../components/detail.vue'], resolve);
const Homesearch = resolve => require(['../components/homesearch.vue'], resolve);
const Homemore = resolve => require(['../components/homemore.vue'], resolve);






//配置路径
const routes = [
    { path: '/home', component: Home ,name:"home"},
    { path: '/homesearch', component: Homesearch ,name:"homesearch"},
    { path: '/homemore', component: Homemore ,name:"homemore"},
    { path: '/detail/:id', component: Detail ,name:"detail"},
    { path:'/',redirect:'/home'}
];




const router = new VueRouter({
  mode:"history",
  routes // （缩写）相当于 routes: routes
});

export default router  //要记得导出router  哪个页面需要router.push都要引入router
