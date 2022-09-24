<template>
	<div class="container">
		<Youtube @change="stopCurrentVideo"
		ref="youtube" 
		:autoplay="0" 
		:videoid="$t(`projects.${this.$route.params.id}.idvideo`)" :controls="1" 
		:width="600" :height="400"
		/>
	</div>
</template>

<script>
export default {
	name: 'App',
    watch: {
        $route (to, from){
            setTimeout(() => {
                this.stopCurrentVideo()
            }, 1);
        }
    },
	components: {},

	methods: {
		applyConfig() {
			this.play = Object.assign(this.play, this.temp)
		},
		playCurrentVideo() {
			this.$refs.youtube.player.playVideo()
		},
		stopCurrentVideo() {
            console.log("qwerr");
			this.$refs.youtube.player.stopVideo()
		},
		pauseCurrentVideo() {
			this.$refs.youtube.player.pauseVideo()
		},
	}
}
</script>
<style type="scss" scoped>
	.container{
		max-width: 100%;
	}
</style>