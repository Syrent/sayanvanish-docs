// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = process.env.SITE_URL || 'http://localhost:4321';
const base = process.env.SITE_BASE || '/';

export default defineConfig({
	site,
	base,
	vite: {
		server: {
			allowedHosts: ['syrent', 'localhost', '127.0.0.1'],
		},
		preview: {
			allowedHosts: ['syrent', 'localhost', '127.0.0.1'],
		},
	},
	integrations: [
		starlight({
			title: 'SayanVanish Wiki',
			description: 'Documentation for installing, operating, and integrating SayanVanish.',
			customCss: ['./src/styles/starlight-theme.css'],
			lastUpdated: true,
			editLink: {
				baseUrl: 'https://github.com/Syrent/SayanVanish/edit/master/docs/',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Syrent/SayanVanish' },
			],
			sidebar: [
				{
					label: 'Administration',
					items: [
						{
							label: 'Getting started',
							autogenerate: { directory: 'administration/getting-started' },
						},
						{
							label: 'How-to guides',
							autogenerate: { directory: 'administration/how-to' },
						},
						{
							label: 'Reference',
							autogenerate: { directory: 'administration/reference' },
						},
					],
				},
				{
					label: 'Development',
					items: [
						{
							label: 'Getting started',
							autogenerate: { directory: 'development/getting-started' },
						},
						{
							label: 'API',
							autogenerate: { directory: 'development/api' },
						},
					],
				},
			],
		}),
	],
});
