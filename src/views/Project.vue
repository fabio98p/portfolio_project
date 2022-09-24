<template>
	<section id="project">
		<div>
			<header>
				<h1>{{ $t(`projects.${this.$route.params.id}.title`) }}</h1>
				<div class="tags">
					<div class="tag" :class="tag.source" v-for="tag in $tm(`projects.${this.$route.params.id}.tags`)">
						{{ tag.source }}
					</div>
				</div>
			</header>
			<main>
				<div class="subtitle">
					<h2>{{ $t(`projects.${this.$route.params.id}.subtitle`) }}</h2>
					<div class="border"></div>
					<button @click="ChangeDescription">{{description}}</button>
				</div>
				<div class="content">
					<!-- <YoutubePlayer class="player" /> -->
                    <Carousel :datas="$tm(`projects.${this.$route.params.id}.images`)" class="carousel" />
					<p v-if="description == 'description'">{{ $t(`projects.${this.$route.params.id}.description`) }}</p>
					<p v-else>{{ $t(`projects.${this.$route.params.id}.technicaldescription`) }}</p>
				</div>
                
				<a :href="$t(`projects.${this.$route.params.id}.githublink`)">
					<font-awesome-icon icon="fa-brands fa-github" />
				</a>
			</main>
		</div>
	</section>
</template>
<script>
import YoutubePlayer from '../components/YoutubePlayer.vue'
import Carousel from '@/components/Carousel.vue'
export default {
	name: 'project',
	components: { YoutubePlayer, Carousel },
	data() {
		return {
			images: ['ciccio', 'pino', 'filberto'],
			imagesaaaa: this.$tm(`projects.${this.$route.params.id}.tags`),
			description: 'technicaldescription'
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
	width: 70%;
	margin: 0 auto;
	background-color: lightblue;

	display: flex;
	align-items: center;
	justify-content: center;
	header {
		h1 {
			font-size: 60px;
			margin-bottom: 10px;
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
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 60%;
			.border{
				background-color: $black;
				height: 2px;
				flex-grow: 2;
				margin: 0 20px;
			}
		}
		.content{
			display: flex;
			align-items: top;
			.player{
				min-width: 60%;
			}
			p {
				font-size: 19px;
				width: 40%;
				margin-top: 0;
			}
		}
        .carousel{
            width: 60%;
        }
	}
}
</style>
