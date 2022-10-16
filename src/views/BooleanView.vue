<template>
	<div id="boolean">{{dataTest}}</div>
	<p>{{ $t('booleanview.title') }}</p>
</template>
<script>
export default {
	name: 'boolean',
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
#boolean {
	background-color: lightgray;
}
</style>
