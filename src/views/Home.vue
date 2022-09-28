<template>
	<div id="homepage">
		<h1 @click="aaa" class="name">{{ $t('home.name') }}</h1>
		<div class="selfdescription">{{ $t('home.selfdescription') }}</div>
		<div class="mainsproject">
			<h2>{{ $t('home.mainsproject.introduction') }}</h2>
			<!-- <ul>
				<li v-for="project of projects">
					<ProjectCard :project="project"></ProjectCard>
				</li>
			</ul> -->
            <ProjectCardCarousel :projects="projects" />
		</div>
	</div>
</template>
<script>
import ProjectCard from '@/components/Cards/ProjectCard.vue'
import ProjectCardCarousel from '@/components/Carousel/ProjectCardCarousel.vue'
export default {
	name: 'home',
	components: {
    ProjectCard,
    ProjectCardCarousel
},
    data() {
		return {
			projects: this.$tm('projects').filter(project => this.$tm(`home.mainsproject.list`).filter( projectname => projectname.source == project.id.source)),
		}
	},
	methods: {
		aaa(a) {
            debugger
			console.log(a)
		}
	}
}
</script>
<style scoped lang="scss">
#homepage {
	background-color: lightblue;
    min-height: 100%;

	.name {
		margin: 0 0 30px 0;
		padding-top: 30px;
		text-align: center;
		color: white;
		font-size: 110px;
		text-shadow: 0 1px 0 #cccccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbbbbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaaaaa, 0 6px 1px rgba(0, 0, 0, 0.1),
			0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25),
			0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
	}
	.selfdescription {
		width: 90%;
		margin: 0 auto;
		font-size: 23px;
	}
    .mainsproject{
        margin-top: 80px;
        ul {
            padding-left: 0;
            li {
                margin: 10px;
                list-style: none;
            }
        }
    }
}
</style>
