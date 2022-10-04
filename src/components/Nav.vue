<template>
	<div class="nav">
		<div class="nav_start">
			<router-link :to="$t('nav.home.link')" class="link">{{ $t('nav.home.title') }}</router-link>
			<router-link :to="$t('nav.about.link')" class="link">{{ $t('nav.about.title') }}</router-link>
			<router-link :to="$t('nav.boolean.link')" class="link">{{ $t('nav.boolean.title') }}</router-link>
			<Dropdown :datas="$tm(`nav.projects`)" class="dropdown"/>
			<Dropdown :datas="$tm(`nav.languages`)" class="dropdown"/>
		</div>
		<div class="nav_end">
			<LocaleSwitcher class="translation" />
			<DarkModeSwitch class="dark-mode"/>
		</div>
	</div>
</template>

<script>
import LocaleSwitcher from '@/components/LocaleSwitcher'
import Dropdown from './Dropdown.vue'
import DarkModeSwitch from './DarkModeSwitch.vue'
export default {
	components: { LocaleSwitcher, Dropdown, DarkModeSwitch }
}
</script>

<style scoped lang="scss">
.nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: left;
	padding: 1rem;
	color: #fff;
	background-color: var(--bg-navbar);
}
.nav_start,
.nav_end {
	display: flex;
	align-items: center;
    
    .link,
    .dropdown,
    .translation,
    .dark-mode {
        margin: 0 20px;
    }
}
.nav img {
	margin-right: 1rem;
	height: 20px;
}
.nav a {
	margin-right: 1.5rem;
	font-weight: bold;
	color: #fff;
	text-decoration: none;
}
</style>
