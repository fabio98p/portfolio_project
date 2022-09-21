<template>
	<section id="project">
		<h1>Hello World</h1>
		<h2>{{ $t('projects[0].title') }}</h2>
		<h2>{{ $t('projects[0].description') }}</h2>
		<h2>{{ $t('projects[0].technicaldescription') }}</h2>
		<a :href="$t('projects[0].githublink')">gino</a>
	</section>
</template>
<script>
export default {
	name: 'project',
	components: {}
}
</script>
<style scoped lang="scss">
#project {
	h1 {
		color: cadetblue;
	}
}
</style>
