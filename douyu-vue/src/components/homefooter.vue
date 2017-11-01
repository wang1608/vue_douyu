<template>
	<div class="homefooter">
		<p class="one">
			<span class="gotop"></span>
			<span @click="Gotop()">返回顶部</span>
		</p>
		<p class="download">下载客户端</p>
		<p id="phone">客服热线：123456789</p>
		<p>武汉斗鱼网络科技有限公司</p>
		<p>湖北省武汉市东湖开发区光谷软件园F4栋8楼</p>
		<p>版权所有 © www.douyu.com 鄂ICP备15011961号-1</p>
	</div>
</template>

<script>
export default {
    name: 'homefooter',
    data () {
        return {

        }
    },
	methods:{
		Gotop(){
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0
		}
	}

}
</script>

<style scoped>
@import "../assets/css/homefooter.css";
</style>
