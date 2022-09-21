<template>
	<section id="project">
		<h1>{{$t(`projects.${this.$route.params.id}.name`)}}</h1>
		<h1>{{$t(`projects.${this.$route.params.id}.title`)}}</h1>
		<h1>{{$t(`projects.${this.$route.params.id}.description`)}}</h1>
		<h1>{{$t(`projects.${this.$route.params.id}.technicaldescription`)}}</h1>
		<a :href="$t(`projects.${this.$route.params.id}.githublink`)">
            <font-awesome-icon icon="fa-brands fa-github" />
        </a>
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
