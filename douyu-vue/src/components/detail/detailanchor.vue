<template>

        <div class="detailanchor" v-scroll='Scroll'>
			<div class="anchor" v-if="anchorcon.length!=0">
				<img :src="anchorcon.roomInfo.avatar" alt="" class="left anchor_img">
				<div class="left">
					<p class="anchorname">{{anchorcon.roomInfo.nickname}}</p>
					<p class="anchorcate">
						<span class="cate">{{anchorcon.roomInfo.cate2Name}}</span>
						<span>{{anchorcon.roomInfo.online}}人观看</span>
					</p>
				</div>
				<div class="right">
					<img src="" alt="">
					<span>关注</span>
				</div>
			</div>
			<div class="anchortime"  v-if="anchorcon.length!=0">{{anchorcon.roomInfo.notice}}</div>
			<div class="videoabout">相关视频</div>
			<div class="videoaboutlist">
				<div class="left ancvideo" v-for="(data,index) in anchorcon.videoList">
					<img :src="data.video_pic" alt="" class="ancimg">
					<p class="anctitle">{{data.title}}</p>
					<p class="anccon">
						<span class="left">{{data.view_num}}</span>
						<span class="right">{{data.duration}}</span>
					</p>
				</div>
			</div>
			<div class="anchorfooter">
				<div class="anchoropen"></div>
			</div>
        </div>

</template>

<script>
import URL from "../../filter/address.js";

export default {
    name: 'detailanchor',
    data () {
        return {
            anchorcon:[]
        }
    },
    mounted(){
        this.$http.get(URL.url+'/detailanchor',{params:{id:this.$route.params.id}}).then(res=>{
            console.log(res.data.data)
            this.anchorcon=res.data.data
        })
        .catch(err=>{

        })
    },
    methods:{
        Scroll(e,el){
            // console.log(e,el)
        }
    }
}
</script>


<style scoped>
@import "../../assets/css/detail/detailanchor.css";
</style>
