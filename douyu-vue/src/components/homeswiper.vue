<template>
    <div class="homeswiper">
		<mt-swipe :auto="4000">
		  	<mt-swipe-item v-for="(data,index) in childswiper" :key='index'>
		  	    <img :src="data.pic_url" alt="" class="homeimg" @click="Godetail(data.id)">
		  	</mt-swipe-item>

		</mt-swipe>
    </div>
</template>

<script>
import Axiosapi from '../filter/axiosapi.js';
import router from '../router/router.js';
export default {
    name: 'home',
    data () {
        return {

        }
    },
    props:['childswiper'],
    created(){
        // console.log(this.childswiper)
    },
    methods:{
        Godetail(caid){
            router.push({name:'detail',params:{id:caid}})
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/homeswiper.css";

</style>
