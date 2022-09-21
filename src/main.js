import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* add some free styles */
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faLinkedin, faGithub)

createApp(App)
    .use(i18n)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')


