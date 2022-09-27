<template>
	<!-- <div id="template">{{dataTest}}</div> -->
</template>
<script>
export default {
	name: 'project',
	components: {},
	data() {
		return {
			// projects: this.$tm('projects').filter(project => project.tags )
		}
	},
	methods: {
		MethodTest() {
			console.log('Hello World')
		}
	}
}
</script>
<style scoped lang="scss">
#template {
	background-color: lightgray;
}
</style>
