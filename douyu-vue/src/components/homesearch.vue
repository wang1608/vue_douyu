<template>
    <div class="homesearch">
		<div class="sea_header">
			<input type="text" name=""  placeholder="搜索主播/房间/分类" class="left">
			<button type="button" name="button" class="left">搜索</button>
		</div>
		<p class="recent">最近热搜</p>
		<div class="sealist">
			<div class="sealist_left left">
				<p>
					<span class="number left">1</span>
					<span class="left">ESL</span>
				</p>
			</div>
			<div class="sealist_right left">
				<p>
					<span class="number left">6</span>
					<span class="left">1111</span>
				</p>
			</div>
		</div>
    </div>
</template>

<script>
export default {
    name: 'homesearch',
    data () {
        return {

        }
    }
}
</script>


<style scoped>
@import "../assets/css/homesearch.css";
</style>
