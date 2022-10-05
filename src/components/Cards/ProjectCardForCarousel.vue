<template>
		<div id="projectCard">
			<div class="container">
				<h1>{{ project.card.title.source }}</h1>
				<div class="languages">
					<div class="language" :class="language.source" v-for="language in project.languages">
						<router-link :to="{ name: 'language', params: { id: `${language.source}` } }" class="link">{{ language.source }}</router-link>
					</div>
				</div>
				<div>{{ project.card.shortdescription.source }}</div>
			</div>
            <router-link class="button" :to="{name: 'project', params: {id:`${project.card.route.source}`}}">{{$t('utilities.seemore')}}</router-link>
		</div>
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
    .button{
        background-color: greenyellow;
        padding: 5px;
        border-radius: 5px;
        width: 130px;

        position: absolute;
        right: 5%;
        bottom: 5%;

    }
}
</style>
