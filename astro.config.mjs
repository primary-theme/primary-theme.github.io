import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Primary Theme',
			description: 'Primary is a theme for people looking for a certain nostalgic warmness now available again for Obsidian. Read the docs to learn how to customize!',
			social: {
				'x.com': 'https://dub.sh/x/primary',
				github: 'https://git.new/primary/obsidian',

			},
			sidebar: [
				{	label: 'Start Here',
					link: '/start-here/'
				},
				{
					label: 'Features',
					items: [
						{ label: 'Custom Icons', link: '/features/custom-icons/' },
						{ label: 'Animations', link: '/features/animations/' },
						{ label: 'Editor Background Pattern', link: '/features/editor-background/' },
						{ label: 'Active Line Highlighting', link: '/features/active-line-highlighting/' },
						{ label: 'Multicolored Highlights', link: '/features/multicolored-highlights/' }
					],
				},
				{	label: 'Supported Plugins',
					link: '/supported-plugins/'
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Overview', link: '/guides/overview' },
						{ label: 'General Typography', link: '/guides/general-typography' },
						{
							label: 'Font Recommendations',
							items: [
								{ label: 'Overview', link: '/guides/font-recommendations/overview' },
								{ label: 'Karla', link: '/guides/font-recommendations/karla' }
							],
						},
					],
				},
				{	label: 'Presets',
					link: '/presets/'
				},
				{	label: 'Help',
					link: '/help/'
				},
				{	label: 'Contributing',
					link: '/contribute/'
				},
				{	label: 'About',
					link: '/about/'
				},
			],
		}),
	],
});
