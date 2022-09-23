<template>
	<section id="project">
		<h1>{{ $t(`projects.${this.$route.params.id}.name`) }}</h1>
		<h1>{{ $t(`projects.${this.$route.params.id}.title`) }}</h1>
		<h1>{{ $t(`projects.${this.$route.params.id}.description`) }}</h1>
		<h1>{{ $t(`projects.${this.$route.params.id}.technicaldescription`) }}</h1>
		<a :href="$t(`projects.${this.$route.params.id}.githublink`)">
			<font-awesome-icon icon="fa-brands fa-github" />
		</a>
        
        <YoutubePlayer />

	</section>
</template>
<script>
import YoutubePlayer from "../components/YoutubePlayer.vue";
export default {
	name: 'project',
	components: { YoutubePlayer },
	data() {
		return {
            autoplay: 0,
			componentKey: 0
		}
	},
	methods: {
		forceRerender() {
            stopVideo()
            console.log(this.componentKey);
			this.componentKey += 1
		}
	}
}
</script>
<style scoped lang="scss">
#project {
	h1 {
		color: cadetblue;
	}
}
</style>
