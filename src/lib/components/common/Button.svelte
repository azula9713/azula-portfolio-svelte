<script>
	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let duration = 1000;
	export let delay = 0;
	export let label = '';
	export let onClick = () => {};
</script>

<div
	class="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:space-x-4"
	transition:fade={{ duration: duration, delay: delay, easing: quintOut }}
>
	<button
		class="px-4 py-2 font-semibold text-white transition duration-300 ease-in-out bg-primary rounded-lg hover:bg-primary-light"
		on:click={onClick}
	>
		{label}
	</button>
</div>
