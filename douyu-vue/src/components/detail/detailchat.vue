<template>

        <div class="detailchat" >
			<div class="systemmsg">
				<span class="one">系统消息</span>
				<span>斗鱼官方倡导绿色直播，对直播内容进行24小时在线巡查。</span>
			</div>
			<p class="dm-item"><span class="username">111：</span>我我我我</p>
			<p class="dm-item"><span class="username">111：</span>我我我我</p>
			<p class="dm-item"><span class="username">111：</span>我我我我</p>
			<p class="dm-item"><span class="username">111：</span>我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我</p>
			<p class="dm-item"><span class="username">111：</span>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>

			<p class="dm-item"><span class="username">111：</span>aaaaaaa</p>

			<div class="chatgift">
				<span class="one left">弹幕</span>
				<span class="two left">分享</span>
				<span class="thr left">送礼</span>
				<span class="fou right">打开斗鱼看高清</span>
			</div>
        </div>

</template>

<script>
import URL from "../../filter/address.js";

export default {
    name: 'detailchat',
    data () {
        return {

        }
    },
    mounted(){
        this.$http.get(URL.url+'/detailchat',{params:{id:this.$route.params.id}}).then(res=>{
            // console.log(res.data.data)
        })
        .catch(err=>{

        })
    }
}
</script>


<style scoped>
@import "../../assets/css/detail/detailchat.css";
</style>
