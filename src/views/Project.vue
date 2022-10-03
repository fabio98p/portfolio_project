<template>
	<section id="project">
		<div>
			<header>
				<h1>{{ project.main.title.source }}</h1>
				<div class="tags">
					<div class="tag" :class="tag.source" v-for="tag in project.tags">
						<router-link :to="{ name: 'tag', params: { id: `${tag.source}` } }" class="link">{{ tag.source }}</router-link>
					</div>
				</div>
			</header>
			

			<main>
				<div class="subtitle">
					<h2>{{ project.main.subtitle.source }}</h2>
					<div class="border"></div>
					<button @click="ChangeDescription">
						{{ description == 'description' ? 'Mostra descrizione tecnica' : 'Mostra descrizione' }}
					</button>
				</div>
				<div class="content">
					<SteamCarousel :medias="project.main.images" class="carousel" />
					<p v-if="description == 'description'">{{ project.main.description.source }}</p>
					<p v-else>{{ project.main.technicaldescription.source }}</p>
				</div>

				<a :href="project.main.githublink.source">
					<font-awesome-icon icon="fa-brands fa-github" />
				</a>
			</main>
		</div>
	</section>
</template>
<script>
import YoutubePlayer from '../components/YoutubePlayer.vue'
import SteamCarousel from '@/components/Carousel/SteamCarousel.vue'
export default {
	name: 'project',
	components: { YoutubePlayer, SteamCarousel },
	data() {
		return {
			project: this.$tm('projects').filter(project => project.id.source == this.$route.params.id)[0],
			imagesaaaa: this.$tm(`projects.${this.$route.params.id}.tags`),
			description: 'description'
		}
	},
	watch: {
		$route(to, from) {
			this.project = this.$tm('projects').filter(project => project.id.source == this.$route.params.id)[0]
		}
	},
	methods: {
		forceRerender() {
			stopVideo()
			console.log(this.componentKey)
			this.componentKey += 1
		},
		test() {
			console.log(this.imagesaaaa)
		},
		ChangeDescription() {
			if (this.description == 'technicaldescription') {
				this.description = 'description'
			} else {
				this.description = 'technicaldescription'
			}
		}
	}
}
</script>
<style scoped lang="scss">
@import '../master.scss';
#project {
	background-color: lightblue;
    padding-top: 40px;
	// display: flex;
	// align-items: center;
	// justify-content: center;
    padding-bottom: 100px;
	header {
        margin-bottom: 50px;
		h1 {
			font-size: 60px;
			margin: 0 0 10px 0;
			color: $black;
		}
		.tags {
			display: flex;
			flex-wrap: wrap;
			.tag {
				width: 60px;
				height: 30px;
				border-radius: 15px;
				margin-right: 10px;

				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
	main {
		.subtitle {
            font-size: 28px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.border {
				background-color: $black;
				height: 2px;
				flex-grow: 2;
				margin: 0 20px;
			}
			button {
				border-radius: 10px;
				border: 2px solid grey;
				background-color: bisque;
				padding: 3px 10px;
			}
		}
		.content {
			display: flex;
            justify-content: space-between;
			align-items: top;
			.carousel {
				width: 60%;
			}
			p {
				font-size: 20px;
				width: 35%;
				margin-top: 0;
                line-height: 30px;
			}
		}
	}
}
</style>
