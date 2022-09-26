<template>
    <router-link :to="{name: 'project', params: {id:`${project.route.source}`}}">
        <div id="projectCard">
            <div class="header">
                <h1>
                    {{ project.title.source }}
                </h1>
                <div class="tags">
                    <div class="tag" :class="tag.source" v-for="tag in project.tags">
                        {{ tag.source }}
                    </div>
                </div>
            </div>
            <div>{{ project.shortdescription.source }}</div>
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
*{
    text-decoration: none;
}
#projectCard {
	background-color: lightgray;
	padding: 25px;
	border-radius: 20px;
    display: flex;
    flex-direction: column;
    color: black;

	.header {
		display: flex;
		align-items: center;

		.tags {
			margin-left: 20px;
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
