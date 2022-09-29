import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//utils import
import i18n from './i18n'
import ClickOutside from './util/js/click-outside'

/* add some free styles */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faChevronRight, faPlay } from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'

import { YoutubeVue3 } from 'youtube-vue3'

library.add(faTwitter, faLinkedin, faGithub, faChevronLeft, faChevronRight, faPlay)

createApp(App)
	.directive('click-outside', ClickOutside)
	.use(i18n)
	.use(router)
	.component('Youtube', YoutubeVue3)
	.component('font-awesome-icon', FontAwesomeIcon)
	.mount('#app')