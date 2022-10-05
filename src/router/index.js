import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
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
		// path: '/project/:slag',
		path: '/project/:id',
		name: 'project',
		component: () => import(/* webpackChunkName: "project" */ '@/views/Project.vue'),
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
		path: '/tag/:id',
		name: 'tag',
		component: () => import(/* webpackChunkName: "tag" */ '@/views/TagPageView.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
