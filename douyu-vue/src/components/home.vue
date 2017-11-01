<template>
    <div class="home" >
        <loading v-show='Load'></loading>
        <Homeheader></Homeheader>
        <Homeswiper :childswiper='homeswiper'></Homeswiper>
        <Homehot :childhot='homehot'></Homehot>
        <Homelive :childlive='homelive'></Homelive>
        <Homeyanzhi :childyanzhi='homeyanzhi'></Homeyanzhi>
        <Homearrlist :childarrlist='homearrlist'></Homearrlist>
        <Homecate></Homecate>
        <Homefooter></Homefooter>
        <a class="fixlogo" v-show="fixlogo"></a>
    </div>
</template>

<script>
import Homeheader from './homeheader.vue';
import Homeswiper from './homeswiper.vue';
import Homehot from './homehot.vue';
import Homeyanzhi from './homeyanzhi.vue';
import Homelive from './homelive.vue';
import Homearrlist from './homearrlist.vue';
import Homefooter from './homefooter.vue';
import Homecate from './homecate.vue';
// import Axiosapi from '../filter/axiosapi.js';
import URL from "../filter/address.js";

export default {
    name: 'home',
    data () {
        return {
            homeswiper:[],   //首页轮播
            homehot:[],      //首页最热
            homelive:[],     //首页正在直播
            homeyanzhi:[],   //首页颜值
            homearrlist:[],  //首页其他
            Load:false,
            fixlogo:true
        }
    },
    components: {
        Homeswiper,
        Homehot,
        Homeyanzhi,
        Homelive,
        Homearrlist,
        Homefooter,
        Homecate,
        Homeheader
    },
    methods:{
        Homescroll(){
            var scrollTop =window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            var Topheight=document.getElementById('phone').offsetTop;//元素距离页面顶端的高度
            var client=document.documentElement.clientHeight;        //可见区域的高度
            // console.log(document.documentElement.scrollHeight)    //整个页面的高度
            if((Topheight-scrollTop)<client){
                this.fixlogo=false
            }else{
                this.fixlogo=true
            }

        }
    },
    created() {
        this.Load=true

  },
    mounted(){
        this.$http.get(URL.url+"/home").then(res=>{
        	   console.log(res.data)
        		this.homeswiper=res.data.banner;
                this.homehot=res.data.hotList,
        		this.homelive=res.data.liveList,
        		this.homeyanzhi=res.data.yzList,
        		this.homearrlist=res.data.mixList
                this.Load=false
        }).catch(err=>{

        });
        window.addEventListener('scroll', this.Homescroll)
        // console.log(document.documentElement.clientWidth)  //网页可见区域宽
        // console.log(document.documentElement.clientHeight) //网页可见区域高
        // console.log(document.documentElement.offsetWidth)  //网页可见区域宽(包括边线的宽)
        // console.log(document.documentElement.offsetHeight) //网页可见区域高(包括边线的高)
        // console.log(document.documentElement.scrollWidth)  //网页正文全文宽
        // console.log(document.documentElement.scrollHeight) //网页正文全文高
        // console.log(document.documentElement.scrollTop)    //网页被卷去的高
        // console.log(document.documentElement.scrollLeft)   //网页被卷去的左
        // console.log(window.screenTop)    //网页正文部分上：
        // console.log(window.screenLeft)   //网页正文部分左：
        // console.log(window.screen.height)//屏幕分辨率的高：
        // console.log(window.screen.width) //屏幕分辨率的宽：
        // console.log(window.screen.availHeight) //屏幕可用工作区高度：
        // console.log(window.screen.availWidth)  //屏幕可用工作区宽度：
        //
        // console.log(document.getElementsByTagName('body')[0].style)

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/home.css";
</style>
