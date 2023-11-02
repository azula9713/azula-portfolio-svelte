<script>
	import { Timeline, TimelineItem } from 'flowbite-svelte';
	import { CalendarWeekSolid } from 'flowbite-svelte-icons';

	import Title from './common/Title.svelte';

	import workHistory from '$lib/data/workHistory';

	const listItemStyle = 'list-item list-outside list-disc';
	const ulStyle = 'text-base font-normal text-gray-500 dark:text-gray-400 px-2';
</script>

<section class="flex flex-col items-start justify-center w-full pt-4 lg:pt-12">
	<Title title="Work History" />
	<div class="flex flex-col items-center justify-center w-full pt-4">
		<Timeline order="vertical">
			{#each workHistory as item}
				<TimelineItem title={item.title} date={item.date}>
					<svelte:fragment slot="icon">
						<span
							class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-4 ring-secondary bg-primary"
						>
							<CalendarWeekSolid class="w-3 h-3 text-secondary" />
						</span>
					</svelte:fragment>
					<ul class={ulStyle}>
						{#each item.work as work}
							<li class={listItemStyle}>{work.task}</li>
						{/each}
					</ul>
				</TimelineItem>
			{/each}
		</Timeline>
	</div>
</section>
