<template>
	<div id="youtubePlayer" ref="youtubePlayer">
		<Youtube @change="stopCurrentVideo" ref="youtube" :autoplay="0" :videoid="idVideo" :controls="1" :width="width" :height="height" :key="componentKey" />
	</div>
</template>

<script>
export default {
	name: 'youtubePlayer',
	watch: {
		$route(to, from) {
			setTimeout(() => {
				this.stopCurrentVideo()
			}, 1)
		}
	},
	data() {
		return {
			width: 856,
			height: 481.5,
		}
	},
	mounted() {
        window.addEventListener('resize', (event) => this.setPlayerSize())
        this.setPlayerSize()
	},
	components: {},
	props: {
		idVideo: String
	},
	methods: {
		applyConfig() {
			this.play = Object.assign(this.play, this.temp)
		},
		playCurrentVideo() {
			this.$refs.youtube.player.playVideo()
		},
		stopCurrentVideo() {
			this.$refs.youtube.player.stopVideo()
		},
		pauseCurrentVideo() {
			this.$refs.youtube.player.pauseVideo()
		},
        setPlayerSize(){
            this.width = this.$refs.youtubePlayer.offsetWidth
            this.height = this.$refs.youtubePlayer.offsetWidth * 9 / 16
            this.$refs.youtube.player.setSize(this.width, this.height)
        },
	}
}
</script>
<style type="scss" scoped>
.youtubePlayer {
	max-width: 100%;
}
</style>
