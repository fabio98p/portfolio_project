<template>
	<div id="template">{{dataTest}}</div>
	<p>{{ $t('utilities.seemore') }}</p>
</template>
<script>
export default {
	name: 'project',
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
#template {
	background-color: lightgray;
}
</style>
