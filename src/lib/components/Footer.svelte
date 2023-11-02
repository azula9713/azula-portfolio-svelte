<script>
	/**
	 * @type {number}
	 */

	const currentYear = new Date().getFullYear();
</script>

<div class="mb-14 flex flex-col w-full items-center justify-center text-gray-400 text-sm">
	<div class="w-full items-center justify-center flex flex-col md:flex-row">
		<p class="text-center">
			Designed and Developed by <a
				href="https://www.linkedin.com/in/nilesh-viduranga/"
				target="_blank">Nilesh Viduranga</a
			>
			using
		</p>
		<a href="https://kit.svelte.dev/" target="_blank">
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Svelte-kit-horizontal.svg/2560px-Svelte-kit-horizontal.svg.png"
				alt="SvelteKit"
				class="h-8 ml-1"
			/>
		</a>
	</div>

	<p>&copy; Yae Publishing House {currentYear}</p>
</div>
