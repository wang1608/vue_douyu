
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import VueRouter from "vue-router";
import resource from "vue-resource";
import vueFilter from 'vue-filter';
import axios from 'axios';
Vue.prototype.$http = axios


// --------全局组件--------
import loading from './components/common/loading'
Vue.use(loading)

// ---------滚动事件--------
import vuescroll from 'vue-scroll'
Vue.use(vuescroll)

// import store from './store/store.js';

//---------高德定位-----------
// import AMap from 'vue-amap';
// import { lazyAMapApiLoaderInstance } from 'vue-amap';
// Vue.use(AMap);
// AMap.initAMapApiLoader({
//   key: 'e71cfd4d83e985abde3bcb841cc9e2cc',
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.Geolocation']
// });

//------mint-ui轮播--------
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import 'mint-ui/lib/style.css'

// import { Swipe, SwipeItem } from 'vue-swipe';
// require('vue-swipe/dist/vue-swipe.css');


Vue.config.devtools = true
//-------全局过滤器-----------
import * as custom from './filter/filter.js'

// Object.keys(custom).forEach(key => {
//   Vue.filter(key, custom[key])
// })




// Vue.config.productionTip = false
// 导入所有的过滤器变量
// import * as custom from './filter/peoplenum.js'
// import * as imgicon from './filter/imgicon.js'
// // 导出的是对象，可以直接通过key和value来获得过滤器的名和过滤器的方法
// Object.keys(custom).forEach(key => {
//     Vue.filter(key, custom[key])
// })
// Object.keys(imgicon).forEach(key => {
//     Vue.filter(key, imgicon[key])
// })


Vue.use(VueRouter);
// Vue.use(resource);
//---------------vue-swipe
// Vue.component('swipe', Swipe);
// Vue.component('swipe-item', SwipeItem);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  // flexible,
  template: '<App/>',
  components: { App }
})
