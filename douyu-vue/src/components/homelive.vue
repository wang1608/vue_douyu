<template>
	<div class="homelive">
		<div class="top">
			<span class="left hot">正在直播</span>
			<span class="right change">当前1000个直播</span>
		</div>
		<div class="hotlive">
			<div class="left con" v-for="(data,index) in childlive">
				<img :src="data.room_src" alt="" class="videoimg">
				<span class="pernum">{{data.online}}</span>
				<p class="name">{{data.nickname}}</p>
				<p class="title">{{data.room_name}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {

        }
    },
	props:['childlive']

}
</script>

<style scoped>
@import "../assets/css/homelive.css";
</style>
