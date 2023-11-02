<script>
	import { DarkMode } from 'flowbite-svelte';
	import { BarsSolid } from 'flowbite-svelte-icons';

	import { sideBarState } from '$lib/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import Drawer from './Drawer.svelte';

	let btnClass =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
</script>

<header class="flex flex-row items-center justify-between w-full px-2 py-2 bg-white dark:bg-black">
	<div class="flex flex-row items-center justify-center space-x-4">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" class="h-8 w-8 m-2" />
		</a>
	</div>
	<div class="flex flex-row items-center justify-center space-x-4">
		<!-- <Icon class="h-8 w-8 text-primary" src={Bars3BottomRight} solid /> -->
		<DarkMode {btnClass} />
		<BarsSolid
			class="h-6 w-6 text-primary"
			on:click={() => {
				sideBarState.set(false);
			}}
		/>
	</div>
	<Drawer />
</header>
