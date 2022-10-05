<template>
	<section id="project">
		<div>
			<header>
				<h1>{{ $t('projectview.title', {project: project.id.source}) }}</h1>
				<div class="languages">
					<div class="language" :class="language.source" v-for="language in project.languages">
						<router-link :to="{ name: 'language', params: { id: `${language.source}` } }" class="link">{{ language.source }}</router-link>
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
				<div class="contributors" v-if="project.contributors">
					<h3>
                        {{ project.contributors.listintroduction.source }}
                    </h3>
					<ul>
                        <li v-for="e in project.contributors.list">
                            <a :href="e.link.source">{{e.title.source}}</a>
                        </li>
                    </ul>
				</div>
                <div class="links" v-if="project.links">
					<h3>
                        {{ project.links.listintroduction.source }}
                    </h3>
					<ul>
                        <li v-for="e in project.links.list">
                            <a :href="e.link.source">{{e.title.source}}</a>
                        </li>
                    </ul>
				</div>
                <!-- <font-awesome-icon icon="fa-brands fa-github" /> -->
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
			imagesaaaa: this.$tm(`projects.${this.$route.params.id}.languages`),
			description: 'description'
		}
	},
	watch: {
		$route(to, from) {
			this.project = this.$tm('projects').filter(project => project.id.source == this.$route.params.id)[0]
		}
	},
	methods: {
		debugMethod() {
            debugger
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
		.languages {
			display: flex;
			flex-wrap: wrap;
			.language {
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
        .contributors,
        .links{
            ul{
                padding-left: 25px;
                li{
                    list-style-type: disc
                }
            }
        }
	}
}
</style>
