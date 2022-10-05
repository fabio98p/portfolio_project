<template>
	<div id="imageModal">{{dataTest}}</div>
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
#imageModal {
	background-color: lightgray;
}
</style>
