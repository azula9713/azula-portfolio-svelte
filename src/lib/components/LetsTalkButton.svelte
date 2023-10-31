<script>
	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<div
	class="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:space-x-4"
	transition:fade={{ duration: 1000, delay: 2000, easing: quintOut }}
>
	<button
		class="px-4 py-2 font-semibold text-white transition duration-300 ease-in-out bg-primary rounded-lg hover:bg-primary-light"
	>
		Let's talk!
	</button>
</div>
