<script>
	import { fly } from 'svelte/transition';
	import { Svroller } from 'svrollbar';

	import Header from '../lib/components/Header.svelte';
	import './styles.css';
	import Footer from '$lib/components/Footer.svelte';

	const flyLeft = (/** @type {Element} */ node) => fly(node, { x: -160 });
	const flyRight = (/** @type {Element} */ node) => fly(node, { x: 30 });
</script>

<div class="app bg-white dark:bg-black">
	<Svroller
		width="100%"
		height="105vh"
		hideAfter={500}
		vTrackIn={flyLeft}
		vTrackOut={flyLeft}
		vThumbIn={flyRight}
		vThumbOut={flyRight}
	>
		<Header />
		<main class="flex flex-col p-4 w-full max-w-5xl box-border shadow-md rounded-lg">
			<slot />
		</main>
		<Footer />
	</Svroller>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;

		--svrollbar-track-width: 20px;
		--svrollbar-track-background: #b25b6e;
		--svrollbar-track-opacity: 1;

		--svrollbar-thumb-width: 10px;
		--svrollbar-thumb-background: #e8d2c9;
		--svrollbar-thumb-opacity: 1;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
