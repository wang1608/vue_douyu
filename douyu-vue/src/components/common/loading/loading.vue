<template>
    <div class="loading">
		<img src="../../../assets/images/loading.gif" alt="">
    </div>
</template>

<script>

export default {
    name: 'loading',
    data () {
        return {

        }
    },
}
</script>


<style scoped>
.loading{
	width: 100%;
	height: 100%;
	position: fixed;
	top:0;
	left: 0;
    z-index: 10;
    background: #afa
}
.loading img{
	width: 1.67rem;
	height: 2.67rem;
	margin: 6rem  auto;
    display: block;
}
</style>
