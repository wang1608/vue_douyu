<template>
    <div class="detail">
        <div class="detailvideo">

        </div>
        <div class="detailcon">
            <div class="tabclick">
                <span class="left cur" v-for="(data,index) in tabclick" :class="tabindex==index?'tabstyle':''" @click="Tabclick(index)">{{data.name}}</span>
                <!-- ******聊天******* -->
                <Detailchat v-show='tabindex==0'></Detailchat>
                <!-- ******主播******* -->
                <Detailanchor v-show='tabindex==1'></Detailanchor>
                <!-- *******主播相关****** -->
                <Detailabout v-show='tabindex==2'></Detailabout>
            </div>




        </div>
    </div>
</template>

<script>
import Detailchat from './detail/detailchat.vue';
import Detailanchor from './detail/detailanchor.vue';
import Detailabout from './detail/detailabout.vue';
import URL from "../filter/address.js";
export default {
    name: 'detail',
    data () {
        return {
            tabclick:[{name:'聊天'},{name:'主播'},{name:'相关直播'}],
            tabindex:0
        }
    },
    mounted() {


    },
    methods:{
        Tabclick(index){
            this.tabindex=index
        }
    },
    components: {
      Detailchat,
      Detailanchor,
      Detailabout
    }
}
</script>


<style scoped>
@import "../assets/css/detail/detail.css";
</style>
