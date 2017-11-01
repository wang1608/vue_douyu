<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>

<script>
import flexible from "./assets/common/flexible.js";

export default {
  name: 'app',
  mounted(){
      console.log(111111111)
  }
}
</script>

<style>
@import "./assets/common/base.css";
*{padding: 0;margin: 0;
    box-sizing: border-box;
}
html,body{
    width: 100%;
    /*height: 100%;*/
}
.left{float: left;}
.right{float: right;}
</style>
