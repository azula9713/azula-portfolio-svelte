<script>
	import { quintOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import { Tooltip } from 'flowbite-svelte';

	import Title from './common/Title.svelte';

	const techStack = [
		{
			title: 'React',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
		},
		{
			title: 'Recoil',
			logo: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/298/square_480/recoil.png'
		},
		{
			title: 'Redux Toolkit',
			logo: 'https://redux-toolkit.js.org/img/redux.svg'
		},
		{
			title: 'Svelte',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png'
		},
		{
			title: 'Node',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png'
		},
		{
			title: 'MongoDB',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png'
		},
		{
			title: 'Express',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/1200px-Expressjs.png'
		},
		{
			title: 'Tailwind',
			logo: 'https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png'
		},
		{
			title: 'Styled Components',
			logo: 'https://styled-components.com/logo.png'
		}
	];
</script>

<section
	transition:fade={{ duration: 1000, delay: 2250, easing: quintOut }}
	class="flex flex-col items-start justify-center w-full pt-4 lg:pt-12"
>
	<Title title="My Jazz" />

	<div class="flex flex-col items-center justify-center w-full pt-4">
		<!-- show them in a grid responsive layout -->
		<div class="grid w-full grid-cols-3 gap-4">
			{#each techStack as tech}
				<div class="flex items-center justify-start w-full px-2 py-8 space-x-4 tooltip">
					<img src={tech.logo} alt={tech.title} class="w-24" />
					<Tooltip>
						{tech.title}
					</Tooltip>
				</div>
			{/each}
		</div>
	</div>
</section>
