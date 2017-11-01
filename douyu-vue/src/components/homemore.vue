<template>
    <div class="homemore">
		<Homemoreheader></Homemoreheader>
		<div class="title">
			<img src="../assets/images/playicon.png" alt="">
			<span>全部</span>
		</div>
		<div class="homemorelist">
			<div class="morecon left">
				<img src="https://rpic.douyucdn.cn/acrpic/171027/2124270_1149.jpg" alt="">
				<span class="name">我们</span>
				<span class="pernum">pernum</span>
				<p class="contitle">啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
			</div>
		</div>
		<Getmore></Getmore>
		<homefooter></homefooter>
    </div>
</template>

<script>
import Homemoreheader from './homemoreheader.vue';
import Getmore from './common/getmore.vue'
import Homefooter from './homefooter.vue'
export default {
    name: 'homemore',
    data () {
        return {

        }
    },
	components: {
	  Homemoreheader,
	  Getmore,
	  Homefooter
	}
}
</script>


<style scoped>
@import "../assets/css/homemore.css";
</style>
