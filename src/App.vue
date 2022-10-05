<template>
	<div id="app">
		<Nav />
		<main>
			<div class="container">
				<router-view />
			</div>
		</main>
		<Footer />
	</div>
</template>
<script>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer.vue'
import DarkModeSwitch from '@/components/DarkModeSwitch.vue'

export default {
	components: { Nav, Footer, DarkModeSwitch }
}
</script>
<style scoped lang="scss">
#app {
	main {
		width: 100%;
		height: calc(100vh - 100px - 100px);
		overflow-y: auto;
		background-color: var(--bg-main);
		.container {
			width: 50%;
			margin: 0 auto;
			height: 100%;
		}
	}
}
</style>
<style lang="scss">
@import './master.scss';
* {
	box-sizing: border-box;
}
body {
	margin: 0;
	padding: 0;
	border: 0;
}
ul {
	padding-left: 0;
	li {
		list-style: none;
	}
}
a{
    text-decoration: none;
    color: black;
}
/* Define styles for the default root window element */
:root {
	--background-color-primary: #ebebeb;
	--background-color-secondary: #fafafa;
	--accent-color: #cacaca;
	--text-primary-color: #222;
	--element-size: 4rem;
    
	--bg-main: rgb(236, 236, 236);
	--bg-footer: rgb(129, 236, 255);
	--bg-navbar: rgb(0, 159, 187);
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
	--background-color-primary: #1e1e1e;
	--background-color-secondary: #2d2d30;
	--accent-color: #3f3f3f;
	--text-primary-color: #ddd;

	--bg-main: #222;
	--bg-footer: rgb(10, 122, 115);
	--bg-navbar: rgb(0, 64, 59);
}
</style>

<!-- <i18n>
{
  "en": {
    "hello": "Hello world"
  },
  "it": {
    "hello": "ciao mondo"
  }
}
</i18n> -->