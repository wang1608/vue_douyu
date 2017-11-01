<template>

        <div class="detailabout" >
            <div class="aboutlist" v-for="(data,index) in aboutcon">
                <img :src="data.room_src" alt="" class="left">
                <div class="left aboutinfo">
                    <p>{{data.nickname}}</p>
                    <p>{{data.online}}</p>
                    <p class="room">{{data.room_name}}</p>
                </div>
            </div>
        </div>

</template>

<script>
import URL from "../../filter/address.js";
export default {
    name: 'detailabout',
    data () {
        return {
            aboutcon:[]
        }
    },
    mounted(){
        this.$http.get(URL.url+'/detailabout',{params:{id:this.$route.params.id}}).then(res=>{
            // console.log(res.data.data);
            this.aboutcon=res.data.data
        })
        .catch(err=>{

        })
    }
}
</script>


<style scoped>
@import "../../assets/css/detail/detailabout.css";
</style>
