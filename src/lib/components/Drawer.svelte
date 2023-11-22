<script>
	import { Button, CloseButton, Drawer, Input, Label, Textarea } from 'flowbite-svelte';
	import { DownloadSolid } from 'flowbite-svelte-icons';
	import { sineIn } from 'svelte/easing';

	import qrCode from '$lib/images/download.png';

	import { sideBarState } from '$lib/stores';

	let transitionParams = {
		x: 320,
		duration: 200,
		easing: sineIn
	};

	const STATIC_FORM_ACCESS_KEY = import.meta.env.VITE_STATIC_FORM_ACCESS_KEY;
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
	<Button
		type="button"
		class=" bg-primary w-full mb-3"
		href="https://file.io/SAl6tqpTsUlW"
		target="_blank"
		rel="noopener noreferrer"
	>
		<DownloadSolid class="w-4 h-4 mr-2" />
		Download Resume
	</Button>

	<div
		class="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-6 w-full flex flex-col items-center justify-center"
	>
		<p>Doesn't work? Scan this QR code with your phone</p>
		<img src={qrCode} alt="QR code" class="w-1/2 mt-2" />
	</div>

	<form
		action="https://api.staticforms.xyz/submit"
		method="post"
		class="mb-2"
		id="talkform"
		on:submit={(e) => {
			e.preventDefault();

			/**
			 * @type {any}
			 *
			 */
			const form = document.getElementById('talkform');

			if (!form && form instanceof HTMLFormElement === false)
				return console.error('Form not found');

			const formData = new FormData(form);
			const bodyObj = Object.fromEntries(formData);

			fetch('https://api.staticforms.xyz/submit', {
				method: 'POST',
				body: JSON.stringify(bodyObj),
				headers: { 'Content-Type': 'application/json' }
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.success) {
						alert('Your message has been sent!');
						form.reset();
					} else {
						alert('Oops! Something went wrong');
					}
				});
		}}
	>
		<input type="hidden" name="accessKey" value={STATIC_FORM_ACCESS_KEY} />
		<div class="mb-6">
			<Label for="email" class="block mb-2">Your email</Label>
			<Input id="email" name="email" required placeholder="name@company.com" />
		</div>
		<div class="mb-6">
			<Label for="name" class="block mb-2">Your name</Label>
			<Input id="name" name="name" required placeholder="John Doe" />
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
