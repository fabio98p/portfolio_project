<template>
    <Youtube @change="stopCurrentVideo" ref="youtube" :autoplay="0" :videoid="$t(`projects.${this.$route.params.id}.idvideo`)" :controls="1" />
</template>

<script>
export default {
	name: 'App',
    watch: {
        $route (to, from){
            setTimeout(() => {
                this.stopCurrentVideo()
                console.log("pippo");
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
