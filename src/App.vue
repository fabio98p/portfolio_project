<template>
	<div id="app">
		<Nav />
		<div class="container">
			<router-view />
		</div>
		<Footer />
	</div>
</template>
<script>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer.vue'
export default {
	components: { Nav, Footer }
}
</script>
<style>
@import './master.scss';
body {
	margin: 0;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
}
</style>
