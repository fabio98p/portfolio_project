import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'home',
        component: function () {
			return import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
		}
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function () {
			return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
		}
	},
    {
		path: '/boolean',
		name: 'boolean',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function () {
			return import(/* webpackChunkName: "boolean" */ '../views/BooleanView.vue')
		}
	},
	{
		// path: '/project/:slag',
		path: '/project/:id',
		name: 'project',
		component: () => import(/* webpackChunkName: "project" */ '@/views/ProjectView.vue'),
		children: [
			{
				path: '/img/:imgId',
				name: 'image',
				component: () => import(/* webpackChunkName: "project" */ '@/components/ImageModal.vue'),
			}
		]
	},
    {
		// path: '/project/:slag',
		path: '/language/:id',
		name: 'language',
		component: () => import(/* webpackChunkName: "language" */ '@/views/LanguagePageView.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
