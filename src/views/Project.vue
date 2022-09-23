<template>
	<section id="project">
		<h1>{{ $t(`projects.${this.$route.params.id}.name`) }}</h1>
        <div v-for=" tag in $tm(`projects.${this.$route.params.id}.tags`)">
            {{tag.source}}
        </div>
		<h1>{{ $t(`projects.${this.$route.params.id}.title`) }}</h1>
		<h1>{{ $t(`projects.${this.$route.params.id}.description`) }}</h1>
		<h1>{{ $t(`projects.${this.$route.params.id}.technicaldescription`) }}</h1>
		<a :href="$t(`projects.${this.$route.params.id}.githublink`)">
			<font-awesome-icon icon="fa-brands fa-github" />
		</a>
        <button @click="test">log</button>
        <YoutubePlayer />
        <Carousel :datas="$tm(`projects.${this.$route.params.id}.images`)" />

	</section>
</template>
<script>
import YoutubePlayer from "../components/YoutubePlayer.vue";
import Carousel from "@/components/Carousel.vue";
export default {
	name: 'project',
	components: { YoutubePlayer, Carousel },
	data() {
		return {
            images: ["ciccio", "pino", "filberto"],
            imagesaaaa: this.$tm(`projects.${this.$route.params.id}.tags`),
			componentKey: 0
		}
	},
	methods: {
		forceRerender() {
            stopVideo()
            console.log(this.componentKey);
			this.componentKey += 1
		},
        test(){
            console.log(this.imagesaaaa);
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
