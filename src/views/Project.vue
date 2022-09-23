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
			<body>
				<div class="subtitle">
					<h2>{{ $t(`projects.${this.$route.params.id}.subtitle`) }}</h2>
					<button @click="ChangeDescription">{{description}}</button>
				</div>
				<p v-if="description == 'description'">{{ $t(`projects.${this.$route.params.id}.description`) }}</p>
				<p v-else>{{ $t(`projects.${this.$route.params.id}.technicaldescription`) }}</p>
				<a :href="$t(`projects.${this.$route.params.id}.githublink`)">
					<font-awesome-icon icon="fa-brands fa-github" />
				</a>
				<button @click="test">log</button>
				<YoutubePlayer />
				<Carousel :datas="$tm(`projects.${this.$route.params.id}.images`)" />
			</body>
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
	body {
		.subtitle {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		p {
			font-size: 22px;
		}
	}
}
</style>
