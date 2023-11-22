<script>
	import { onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	import Title from './common/Title.svelte';

	/**
	 * @type {{ title: string; link: string; pubDate: string; description: string; cover: string }[]}
	 */
	let articles = [];
	const maxArticles = 3;

	//define separate dev and prod rss urls
	const rssURL = import.meta.env.VITE_RSS_URL;

	onMount(() => {
		fetch(rssURL)
			.then((res) => res.json())
			.then((data) => {
				console.log('RSS DATA: ', data);
				articles = data.slice(0, maxArticles);
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
						<img src={article.cover} alt={article.title} class="w-full lg:w-1/2" />
						<div class="h-full flex flex-col items-stretch">
							<div class="text-gray-600 dark:text-gray-300 mt-2 text-left">
								<!-- max 60 words -->
								{article.description.split(' ').slice(0, 60).join(' ')}...
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
