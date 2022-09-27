<template>
	<div id="tagPageView">
		<h1>Questa e' la pagina {{ this.$route.params.id }} e di seguito satanno esposti tutti i progetti {{ this.$route.params.id }}</h1>
		<ul>
			<li v-for="project of projects">
				<ProjectCard :project="project"></ProjectCard>
			</li>
		</ul>
	</div>
</template>
<script>
import ProjectCard from '@/components/Cards/ProjectCard.vue'
export default {
	name: 'tagPageView',
	components: { ProjectCard },
	data() {
		return {
			projects: this.$tm('projects').filter(project => project.tags.filter(tag => tag.source == this.$route.params.id).length >= 1)
		}
	},
    watch: {
        $route (to, from){
            setTimeout(() => {
                this.projects = this.$tm('projects').filter(project => project.tags.filter(tag => tag.source == this.$route.params.id).length >= 1)
            }, 1);
        }
    },
	methods: {
		MethodTest() {
			console.log("funzio");
		}
	}
}
</script>
<style scoped lang="scss">
#tagPageView {
	background-color: green;
}
</style>
