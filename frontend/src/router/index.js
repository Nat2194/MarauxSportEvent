import HomePage from '../views/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomePage,
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/AboutPage.vue'),
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () => import('../views/ContactPage.vue'),
	},
];

export default createRouter({
	history: createWebHistory(),
	routes,
});
