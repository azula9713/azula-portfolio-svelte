<script>
	import { quintOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import Title from './common/Title.svelte';

	const projects = [
		{
			title: 'Project 1',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel odio vitae magna aliqu'
		},
		{
			title: 'Project 2',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel odio vitae magna aliqu'
		},
		{
			title: 'Project 3',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel odio vitae magna aliqu'
		},
		{
			title: 'Project 4',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel odio vitae magna aliqu'
		},
		{
			title: 'Project 5',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel odio vitae magna aliqu'
		}
	];
</script>

<section
	transition:fade={{ duration: 1000, delay: 2500, easing: quintOut }}
	class="flex flex-col items-start justify-center w-full pt-4 lg:pt-12"
>
	<Title title="Selected Works" />
	<div class="flex flex-col items-center justify-center w-full pt-4">
		<!-- Project cards scrollable horizontally on mobile -->
		<div
			class="flex flex-row items-center justify-start w-full pb-8 space-x-8 overflow-x-scroll lg:flex-col lg:items-start lg:justify-center lg:space-x-0 lg:space-y-8 lg:overflow-hidden"
		>
			{#each projects as project}
				<div class="flex flex-col items-center justify-center w-full px-4 py-8 space-y-4">
					<h1 class="text-2xl font-bold text-gray-700 dark:text-gray-200 md:text-4xl">
						{project.title}
					</h1>
					<div class="font-semibold text-gray-500 dark:text-gray-400">
						<h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-700 dark:text-gray-200">
							{project.description}
						</h2>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
