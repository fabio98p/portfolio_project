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
export default {
	components: { Nav, Footer }
}
</script>
<style lang="scss">
@import './master.scss';
*{
    box-sizing: border-box;
}
body {
	margin: 0;
    padding: 0;
    border: 0;
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
<style scoped lang="scss">
#app {
    main{
        width: 100%;
        height: calc(100vh - 100px - 100px);
        overflow-y: auto;
        .container{
            width: 50%;
            margin: 0 auto;
            
        }
    }
}
</style>