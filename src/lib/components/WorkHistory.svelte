<script>
	import { Timeline, TimelineItem, Button } from 'flowbite-svelte';

	import Title from './common/Title.svelte';

	import workHistory from '$lib/data/workHistory';

	const listItemStyle = 'list-item list-outside list-disc';
	const ulStyle = 'text-base font-normal text-gray-500 dark:text-gray-400 px-2';
</script>

<section class="flex flex-col items-start justify-center w-full pt-4 lg:pt-12">
	<Title title="Work History" />
	<div class="flex flex-col items-center justify-center w-full pt-4">
		<Timeline>
			{#each workHistory as item}
				<TimelineItem title={item.title} date={item.date}>
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
