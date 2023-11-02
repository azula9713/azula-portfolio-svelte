<script>
	import { onDestroy } from 'svelte';
	import { Drawer, Button, CloseButton, Label, Input, Textarea } from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';
	import { DownloadSolid } from 'flowbite-svelte-icons';

	import { sideBarState } from '$lib/stores';

	let transitionParams = {
		x: 320,
		duration: 200,
		easing: sineIn
	};
</script>

<Drawer transitionType="fly" {transitionParams} bind:hidden={$sideBarState} placement="right" out>
	<div class="flex items-center">
		<h5
			class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
		>
			Let's Talk
		</h5>
		<CloseButton
			on:click={() => {
				sideBarState.set(true);
			}}
			class="mb-4 dark:text-white"
		/>
	</div>
	<Button type="button" class=" bg-primary w-full mb-6">
		<DownloadSolid class="w-4 h-4 mr-2" />
		Download Resume
	</Button>

	<form action="#" class="mb-2">
		<div class="mb-6">
			<Label for="email" class="block mb-2">Your email</Label>
			<Input id="email" name="email" required placeholder="name@company.com" />
		</div>
		<div class="mb-6">
			<Label for="subject" class="block mb-2">Subject</Label>
			<Input id="subject" name="subject" required placeholder="Let me know how I can help you" />
		</div>
		<div class="mb-6">
			<Label for="message" class="mb-2">Your message</Label>
			<Textarea id="message" placeholder="Your message..." rows="4" name="message" />
		</div>
		<Button type="submit" class="w-full bg-primary">Send message</Button>
	</form>
</Drawer>
