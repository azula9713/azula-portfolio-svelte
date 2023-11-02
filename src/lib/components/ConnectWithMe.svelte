<script>
	import { SpeedDial, SpeedDialButton } from 'flowbite-svelte';
	import {
		LinkedinSolid,
		GithubSolid,
		TwitterSolid,
		MailBoxSolid,
		PapperClipSolid,
		UserCircleSolid
	} from 'flowbite-svelte-icons';
</script>

<SpeedDial
	defaultClass="fixed left-4 bottom-32 text-primary bg-primary rounded-full"
	placement="top-end"
	textOutside={false}
	name=""
>
	<UserCircleSolid slot="icon" />
	<SpeedDialButton name="Github" on:click={() => window.open('https://github.com/azula9713')}>
		<GithubSolid class="w-5 h-5" />
	</SpeedDialButton>
	<SpeedDialButton
		name="LinkedIn"
		on:click={() => window.open('https://www.linkedin.com/in/nilesh-viduranga')}
	>
		<LinkedinSolid class="w-5 h-5" />
	</SpeedDialButton>
	<SpeedDialButton
		name="Blog"
		on:click={() => window.open('https://blog.yaepublishinghouse.online')}
	>
		<PapperClipSolid class="w-5 h-5" />
	</SpeedDialButton>
	<SpeedDialButton name="X" on:click={() => window.open('https://twitter.com/azula9713')}>
		<TwitterSolid class="w-5 h-5" />
	</SpeedDialButton>
	<SpeedDialButton
		name="Mail"
		on:click={() => window.open('mailto:nilesh@yaepublishinghouse.online')}
	>
		<MailBoxSolid class="w-5 h-5" />
	</SpeedDialButton>
</SpeedDial>
