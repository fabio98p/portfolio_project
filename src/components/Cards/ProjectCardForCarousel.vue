<template>
	<router-link :to="{ name: 'project', params: { id: `${project.card.route.source}` } }">
		<div id="projectCard">
			<div class="container">
				<h1>{{ project.card.title.source }}</h1>
				<div class="tags">
					<div class="tag" :class="tag.source" v-for="tag in project.tags">
						<router-link :to="{ name: 'tag', params: { id: `${tag.source}` } }" class="link">{{ tag.source }}</router-link>
					</div>
				</div>
				<div>{{ project.card.shortdescription.source }}</div>
			</div>
		</div>
	</router-link>
</template>
<script>
export default {
	name: 'projectCard',
	components: {},
	data() {
		return {
			dataTest: 'Hello World'
		}
	},
	props: {
		project: Object
	},
	methods: {
		MethodTest() {
			console.log('Hello World')
		}
	}
}
</script>
<style scoped lang="scss">
* {
	text-decoration: none;
}
#projectCard {
	background-color: lightgray;
	padding: 25px 25px 80px 25px;
	border-radius: 20px;
	color: black;
    display: flex;
    justify-content: center;
	.container {
        display: flex;
        flex-direction: column;
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
}
</style>
