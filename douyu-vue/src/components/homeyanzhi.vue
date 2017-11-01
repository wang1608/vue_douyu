<template>
	<div class="homeyanzhi">
		<div class="top">
			<span class="left hot">颜值</span>
			<span class="right change">更多</span>
		</div>
		<div class="hotlive">
			<div class="left con" v-for="(data,index) in childyanzhi">
				<img :src="data.vertical_src" alt="" class="videoimg">
				<span class="pernum">{{data.online}}</span>
				<!-- <p class="name">55555</p> -->
				<span class="title left">{{data.room_name}}</span>
                <span class="position right">{{data.anchorCity}}</span>
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
	props:["childyanzhi"]

}
</script>

<style scoped>
@import "../assets/css/homeyanzhi.css";
</style>
