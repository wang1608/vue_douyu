<template>
	<div class="homehot">
		<div class="top">
			<span class="left hot">最热</span>
			<span class="right change" @click="Change()">换一换</span>
		</div>
		<div class="hotlist" v-if="childhot.length!=0">
			<div class="left con" v-for="(item,index) in childhot[changeindex].data" :key='item.online' @click="Godetail(item.room_id)">
				<img :src="item.room_src" alt="" class="videoimg">
				<span class="pernum">{{item.online}}</span>
				<p class="name">{{item.nickname}}</p>
				<p class="title">{{item.room_name}}</p>
			</div>
		</div>
	</div>
</template>

<script>
import router from '../router/router.js';
export default {
    name: 'home',
    data () {
        return {
			changeindex:0
        }
    },
	props:['childhot'],
	methods:{
		Change(){
			this.changeindex++;
			if(this.changeindex>=4){
				this.changeindex=0
			}
		},
		Godetail(id){
			router.push({name:'detail',params:{id:id}})
		}
	}

}
</script>

<style scoped>
@import "../assets/css/homehot.css";
</style>
