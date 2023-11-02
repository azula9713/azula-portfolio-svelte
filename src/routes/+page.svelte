<script>
	import { onMount } from 'svelte';

	import Button from '$lib/components/common/Button.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import TechStack from '$lib/components/TechStack.svelte';
	import ConnectWithMe from '$lib/components/ConnectWithMe.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import WorkHistory from '$lib/components/WorkHistory.svelte';
	import { sideBarState } from '$lib/stores';

	let ready = false;

	onMount(() => (ready = true));
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="Portfolio" />
</svelte:head>

<div class="flex flex-col items-start justify-start px-4 py-8 space-y-4">
	<h1 class="text-2xl font-bold text-gray-700 dark:text-gray-200 md:text-4xl">
		Hi, I'm <span class="text-primary">Nilesh</span>
	</h1>
	{#if ready}
		<Intro />
		<Button
			label="Let's talk!"
			delay={2000}
			onClick={() => {
				sideBarState.set(false);
			}}
		/>
		<TechStack />
		<Projects />
		<WorkHistory />
		<ConnectWithMe />
	{/if}
</div>
