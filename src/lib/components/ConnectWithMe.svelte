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
	defaultClass="fixed left-4 bottom-2 text-primary bg-primary rounded-full"
	placement="top-end"
	textOutside={false}
	name=""
>
	<UserCircleSolid slot="icon" />
	<SpeedDialButton name="Github">
		<GithubSolid class="w-5 h-5" />
	</SpeedDialButton>
	<SpeedDialButton name="LinkedIn">
		<LinkedinSolid class="w-5 h-5" />
	</SpeedDialButton>
	<SpeedDialButton name="Blog">
		<PapperClipSolid class="w-5 h-5" />
	</SpeedDialButton>
	<SpeedDialButton name="X">
		<TwitterSolid class="w-5 h-5" />
	</SpeedDialButton>
	<SpeedDialButton name="Mail">
		<MailBoxSolid class="w-5 h-5" />
	</SpeedDialButton>
</SpeedDial>
