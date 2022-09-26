<template>
	<div id="app">
		<Nav />
        <main>
            <div class="container">
                <router-view />
            </div>
        </main>
		<Footer />
		<div class="container-center">
			<div class="card">
				<DarkModeSwitch />
				<p>Wer sitzt dort so spät, bei Nacht und Wind?</p>
				<p>Entwickler Clemens, mit einem Pint.</p>
				<p>Man hört ihn seufzen, ziemlich hart -</p>
				<p>Sonntag ist's, die Deadline naht</p>
			</div>
		</div>
	</div>
</template>
<script>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer.vue'
import DarkModeSwitch from "@/components/DarkModeSwitch.vue";

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
		background-color: var(--background-color-primary);
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
/* Define styles for the default root window element */
:root {
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --element-size: 4rem;
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --background-color-primary: #1e1e1e;
  --background-color-secondary: #2d2d30;
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
}

p {
  color: var(--text-primary-color);
}

.container-center {
  background-color: var(--background-color-primary);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  padding: 2rem 4rem;
  height: 200px;
  width: 300px;
  text-align: center;
  border: 1px solid var(--accent-color);
  border-radius: 4px;
  background-color: var(--background-color-secondary);
}
ul {
	padding-left: 0;
	li {
		list-style: none;
	}
}
</style>
