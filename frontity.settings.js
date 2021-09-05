const settings = {
	name: 'wpindo',
	state: {
		frontity: {
			url: 'https://frontity.enigmatheme.club',
			title: 'Test Frontity Blog',
			description:
				'WordPress installation for Frontity development'
		}
	},
	packages: [
		{
			name: '@frontity/mars-theme',
			state: {
				theme: {
					menu: [
						['Home', '/'],
						['International', '/category/international/'],
						['Lifestyle', '/category/lifestyle/'],
						['Movie', '/category/movie/'],
						['Sample Page', '/sample-page/']
					],
					featured: {
						showOnList: false,
						showOnPost: false
					}
				}
			}
		},
		{
			name: '@frontity/wp-source',
			state: {
				source: {
					url: 'https://frontity.enigmatheme.club'
				}
			}
		},
		'@frontity/tiny-router',
		'@frontity/html2react'
	]
};

export default settings;
