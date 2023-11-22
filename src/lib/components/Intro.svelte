<script>
	import { quintOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	import profileImage from "$lib/images/profile1.png"
</script>

<section class="font-semibold text-gray-500 dark:text-gray-400">
	<div
		class="w-full flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-2 lg:items-center lg:justify-start"
	>
		<img
			src={profileImage}
			alt="profilepic"
			class="w-full lg:w-1/4"
		/>
		<h2
			class="text-4xl sm:text-5xl lg:hidden lg:text-7xl font-bold text-gray-700 dark:text-gray-200"
			transition:fade={{ duration: 1000, delay: 1000, easing: quintOut }}
		>
			Developer, <span class="text-primary"> Gamer</span>, Weeb...
		</h2>
		<h2
			class="hidden text-4xl sm:text-5xl lg:block lg:text-7xl font-bold text-gray-700 dark:text-gray-200"
			transition:fade={{ duration: 1000, delay: 1000, easing: quintOut }}
		>
			Developer
			<br/>
			<span class="text-primary"> Gamer</span>
			<br/>
			Weeb...
		</h2>
	</div>

	<p
		class="text-gray-600 dark:text-gray-300 mt-6 text-left lg:text-justify"
		transition:fade={{ duration: 1000, delay: 1250, easing: quintOut }}
	>
		Hi there! I am a Full Stack Software Developer with a passion for MERN stack development. With 5
		years of experience in the field, I have developed expertise in building robust and scalable
		applications. I enjoy working on complex projects and implementing innovative solutions to
		tackle real-world problems.
	</p>

	<p
		class="text-gray-600 dark:text-gray-300 mt-2 text-left lg:text-justify"
		transition:fade={{ duration: 1000, delay: 1500, easing: quintOut }}
	>
		In addition to my technical skills, I am also an anime, Genshin Impact, and Dota enthusiast. I
		love exploring new cultures and experiencing new things, which is why I find Japanese culture
		and gaming to be particularly fascinating. I believe that having hobbies and interests outside
		of work is crucial for maintaining a healthy work-life balance and staying motivated.
	</p>
	<p
		class="text-gray-600 dark:text-gray-300 mt-2 text-left lg:text-justify"
		transition:fade={{ duration: 1000, delay: 1750, easing: quintOut }}
	>
		As a developer, I am always seeking to learn and grow. I stay up-to-date with the latest
		industry trends and technologies, and I am constantly seeking new challenges to improve my
		skills. I am a firm believer in teamwork and collaboration, and I enjoy working with diverse
		teams to achieve common goals.
	</p>
</section>
