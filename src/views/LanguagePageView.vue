<template>
	<div id="language_page_view">
		<h1>{{$t('languageview.title', {language: this.$route.params.id})}}</h1>
		<ul v-if="projects.length != 0">
			<li v-for="project of projects">
				<ProjectCard :project="project"></ProjectCard>
			</li>
		</ul>
        <div class="no_project" v-else>{{$t('languagepage.noproject', {language: this.$route.params.id})}}</div>
	</div>
</template>
<script>
import ProjectCard from '@/components/Cards/ProjectCard.vue'
export default {
	name: 'languagePageView',
	components: { ProjectCard },
	data() {
		return {
			projects: this.$tm('projects').filter(project => project.languages.filter(language => language.source == this.$route.params.id).length >= 1)
		}
	},
    watch: {
        $route (to, from){
            setTimeout(() => {
                this.projects = this.$tm('projects').filter(project => project.languages.filter(language => language.source == this.$route.params.id).length >= 1)
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
#language_page_view {
	background-color: green;
    .no_project{
        font-size: 25px;
    }
}
</style>
