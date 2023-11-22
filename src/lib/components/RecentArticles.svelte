<script>
	import { onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	import Title from './common/Title.svelte';

	/**
	 * @type {{ title: string; link: string; pubDate: string; description: string; image: string }[]}
	 */
	let articles = [];

	//define separate dev and prod rss urls
	const rssURL =
		process.env.NODE_ENV === 'development'
			? 'https://cors-anywhere.herokuapp.com/https://blog.yaepublishinghouse.online/rss.xml'
			: 'https://blog.yaepublishinghouse.online/rss.xml';

	onMount(() => {
		console.log('CURRENT NODE ENVIRONMENT: ', process.env.NODE_ENV);
		fetch(rssURL)
			.then((res) => res.text())
			.then((data) => {
				const parser = new DOMParser();
				const xml = parser.parseFromString(data, 'text/xml');
				const items = xml.querySelectorAll('item');

				const maxArticles = 3;
				/**
				 * @type {{ title: string; link: string; pubDate: string; description: string; image: string; }[]}
				 */
				let temp = [];

				items.forEach((item) => {
					/**
					 * @typedef {Object} Article
					 * @property {string} title - The article's title.
					 * @property {string} link - The article's link.
					 * @property {string} pubDate - The article's publication date.
					 * @property {string} description - The article's description.
					 * @property {string} image - The article's image.
					 *
					 */

					const titleElement = item.querySelector('title');
					const linkElement = item.querySelector('link');
					const pubDateElement = item.querySelector('pubDate');
					const descriptionElement = item.querySelector('description');
					const imageElement = item.querySelector('cover_image');

					if (
						titleElement &&
						linkElement &&
						pubDateElement &&
						descriptionElement &&
						imageElement &&
						temp.length < maxArticles
					) {
						temp.push({
							title: titleElement.innerHTML.replace('<![CDATA[', '').replace(']]>', ''),
							link: linkElement.innerHTML,
							pubDate: pubDateElement.innerHTML,
							description: descriptionElement.innerHTML
								.replace('<![CDATA[', '')
								.replace(']]>', '')
								// limit to 67 words
								.split(' ')
								.slice(0, 67)
								.join(' ')
								// append ellipsis
								.concat('...'),

							image: imageElement.innerHTML
						});
					}
				});

				articles = temp;
			});
	});
</script>

<section
	transition:fade={{ duration: 1000, delay: 2500, easing: quintOut }}
	class="flex flex-col items-start justify-center w-full pt-4 lg:pt-12"
>
	<Title title="Recent Articles" />

	<div class="flex flex-col items-center justify-center w-full pt-4">
		<div class="flex flex-col items-start justify-center space-x-0 space-y-8 overflow-hidden">
			{#each articles as article}
				<div class="flex flex-col items-center justify-center w-full px-4 py-8 space-y-4">
					<h1 class="text-2xl font-bold text-gray-700 dark:text-gray-200 text-left w-full">
						{article.title}
					</h1>
					<div
						class="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full lg:space-x-4"
					>
						<img src={article.image} alt={article.title} class="w-full lg:w-1/2" />
						<div class="h-full flex flex-col items-stretch">
							<div class="text-gray-600 dark:text-gray-300 mt-2 text-left">
								{@html article.description}
							</div>
							<a
								href={article.link}
								target="_blank"
								rel="noopener noreferrer"
								class="text-primary hover:underline font-bold pt-2"
							>
								Read more
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
