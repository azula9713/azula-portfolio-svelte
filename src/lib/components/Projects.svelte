<script>
	import { onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import { GithubSolid, GlobeSolid } from 'flowbite-svelte-icons';

	import Title from './common/Title.svelte';
	import { getProjects } from '$lib/services/projects';

	/**
	 * @typedef {Object} Project
	 * @property {string} id - The project's unique identifier.
	 * @property {string} name - The name of the project.
	 * @property {string} description - The description of the project.
	 * @property {string} github - The github url of the project.
	 * @property {string} link - The url of the project.
	 * @property {string[]} tech - The tech stack used in the project.
	 */

	/** @type {Project[]} */
	let projects = [];

	let theme = localStorage.getItem('color-theme');

	onMount(() => {
		getProjects().then((res) => {
			projects = res;
		});
	});
</script>

<section
	transition:fade={{ duration: 1000, delay: 2500, easing: quintOut }}
	class="flex flex-col items-start justify-center w-full pt-4 lg:pt-12"
>
	<Title title="Selected Works" />
	<div class="flex flex-col items-center justify-center w-full pt-4">
		<!-- Project cards scrollable horizontally on mobile -->
		<div class="flex flex-col items-start justify-center space-x-0 space-y-8 overflow-hidden">
			{#each projects as project}
				<div class="flex flex-col items-center justify-center w-full px-4 py-8 space-y-4">
					<h1 class="text-2xl font-bold text-gray-700 dark:text-gray-200 md:text-4xl">
						{project.name}
					</h1>
					<!-- map tech stack -->
					<div class="flex flex-row items-center justify-center space-x-4">
						{#each project.tech as tech}
							<div class="flex flex-row items-center justify-center space-x-2">
								{#if tech.toLowerCase() === 'react'}
									<img
										src="https://img.icons8.com/color/48/000000/react-native.png"
										class="w-5 h-5 text-primary"
										alt="react"
									/>
								{/if}
								{#if tech.toLowerCase() === 'tailwind'}
									<img
										src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
										class="w-5 text-primary"
										alt="tailwind"
									/>
								{/if}
								{#if tech.toLowerCase() === 'aws'}
									<!-- aws icon -->
									<img
										src="https://img.icons8.com/color/48/000000/amazon-web-services.png"
										class="w-5 h-5 text-primary"
										alt="aws"
									/>
								{/if}
								{#if tech.toLowerCase() === 'node'}
									<img
										src="https://img.icons8.com/color/48/000000/nodejs.png"
										class="w-5 h-5 text-primary"
										alt="nodejs"
									/>
								{/if}
								{#if tech.toLowerCase() === 'cognito'}
									<img
										src="https://cdn.worldvectorlogo.com/logos/aws-cognito.svg"
										class="w-5 h-5 text-primary"
										alt="cognito"
									/>
								{/if}
								{#if tech.toLowerCase() === 'material ui'}
									<img
										src="https://img.icons8.com/color/48/000000/material-ui.png"
										class="w-5 h-5 text-primary"
										alt="material ui"
									/>
								{/if}
								{#if tech.toLowerCase() === 'hyperformula'}
									<img
										src="https://hyperformula.handsontable.com/logo.png"
										class="w-5 h-5 text-primary"
										alt="hyperformula"
									/>
								{/if}
								{#if tech.toLowerCase() === 'recoil'}
									<img
										src="https://seeklogo.com/images/R/recoil-js-logo-0FA612F129-seeklogo.com.png"
										class="w-5 h-5 text-primary"
										alt="recoil"
									/>
								{/if}
								{#if tech.toLowerCase() === 'express'}
									<img
										src="https://img.icons8.com/color/48/000000/express.png"
										class="w-5 h-5 text-primary"
										alt="express"
										style={`filter: ${theme === 'dark' ? 'invert(1)' : 'invert(0)'}`}
									/>
								{/if}
								{#if tech.toLowerCase() === 'mongodb'}
									<img
										src="https://img.icons8.com/color/48/000000/mongodb.png"
										class="w-5 h-5 text-primary"
										alt="mongodb"
									/>
								{/if}
								{#if tech.toLowerCase() === 'react native'}
									<img
										src="https://img.icons8.com/color/48/000000/react-native.png"
										class="w-5 h-5 text-primary"
										alt="react native"
									/>
								{/if}
								{#if tech.toLowerCase() === 'firebase'}
									<img
										src="https://img.icons8.com/color/48/000000/firebase.png"
										class="w-5 h-5 text-primary"
										alt="firebase"
									/>
								{/if}
								{#if tech.toLowerCase() === 'docker'}
									<img
										src="https://img.icons8.com/color/48/000000/docker.png"
										class="w-5 h-5 text-primary"
										alt="docker"
									/>
								{/if}
							</div>
						{/each}
					</div>
					<div class="font-semibold text-gray-500 dark:text-gray-400">
						<h2 class="text-xl font-bold text-gray-700 dark:text-gray-200">
							{project.description}
						</h2>
					</div>
					<div>
						<div class="flex flex-row items-center justify-center space-x-4">
							{#if project.github}
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									class="flex flex-row items-center justify-center space-x-2"
								>
									<GithubSolid class="w-5 h-5 text-primary" />
								</a>
							{/if}
							{#if project.link}
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									class="flex flex-row items-center justify-center space-x-2"
								>
									<GlobeSolid class="w-5 h-5 text-primary" />
								</a>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
