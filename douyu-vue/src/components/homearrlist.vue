<template>
	<div class="homearrlist" >
		<div class="box11" v-for="(item,index) in childarrlist">
			<div class="top">
				<img :src="item.icon" alt="" class="left topicon">
				<span class="left hot">{{item.tabName}}</span>
				<div class="catebox left">
					<span class="cate left" v-for="(item2,index) in item.cate2Info">{{item2.cate2Name}}</span>
				</div>
				<span class="right change">更多</span>
			</div>
			<div class="arrlist" v-for="(data,index) in item.data">
				<div class="left con">
					<img :src="data.room_src" alt="" class="videoimg">
					<span class="pernum">{{data.online}}</span>
					<p class="name">{{data.nickname}}</p>
					<span class="title left">{{data.room_name}}</span>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    name: 'homearrlist',
    data () {
        return {

        }
    },
	props:["childarrlist"]

}
</script>

<style scoped>
@import "../assets/css/homearrlist.css";
</style>
