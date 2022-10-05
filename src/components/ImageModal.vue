<template>
	<div id="image_modal">{{dataTest}}</div>
</template>
<script>
export default {
	name: 'imageModal',
	components: {},
	data() {
		return {
			dataTest: 'Hello World'
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
#image_modal {
	background-color: lightgray;
}
</style>
