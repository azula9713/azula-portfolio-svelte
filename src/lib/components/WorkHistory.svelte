<script>
	import { Timeline, TimelineItem, Button } from 'flowbite-svelte';

	import Title from './common/Title.svelte';

	const listItemStyle = 'list-item list-outside list-disc';
	const ulStyle = 'text-base font-normal text-gray-500 dark:text-gray-400 px-2';
</script>

<section class="flex flex-col items-start justify-center w-full pt-4 lg:pt-12">
	<Title title="Work History" />
	<div class="flex flex-col items-center justify-center w-full pt-4">
		<Timeline>
			<TimelineItem
				title="Senior Software Engineer: Eyepax IT Consulting, Colombo, Sri Lanka"
				date="November 2023 - Present"
			>
				<ul class="text-base font-normal text-gray-500 dark:text-gray-400">
					<li class={listItemStyle}>Just got started...</li>
				</ul>
			</TimelineItem>
			<TimelineItem
				title="Senior Software Engineer: Swivel Tech, Victoria, Australia"
				date="April 2022 - October 2023"
			>
				<ul class={ulStyle}>
					<li class={listItemStyle}>
						Mentored and developed junior developers and engineers to increase productivity.
					</li>
					<li class={listItemStyle}>
						Coordinated with project managers to meet development timelines and plan testing.
					</li>
					<li class={listItemStyle}>
						Performed estimates of work hours and tracked progress using Agile and Scrum
						methodology.
					</li>
					<li class={listItemStyle}>
						Performed root cause analysis of problems, documented faults in the tracking system and
						generated daily reports.
					</li>
					<li class={listItemStyle}>
						Developed a Fin Tech product and technology road map and strategy from concept to
						launch.
					</li>
				</ul>
			</TimelineItem>
			<TimelineItem
				title="Software Engineer: Aiken Labs, Colombo, Sri Lanka"
				date="March 2021 - March 2022"
			>
				<ul class={ulStyle}>
					<li class={listItemStyle}>Analyzed solutions and coding fixes for software problems.</li>
					<li class={listItemStyle}>Worked on multiple projects using React and Next JS.</li>
					<li class={listItemStyle}>
						Met with stakeholders, product teams and customers throughout the system development
						life cycle.
					</li>
				</ul>
			</TimelineItem>
			<TimelineItem
				title="Software Engineer: Eutech Cybernetics, Colombo, Sri Lanka"
				date="June 2020 - December 2020"
			>
				<ul class={ulStyle}>
					<li class={listItemStyle}>
						Maintained software products, including programs, web pages, and databases.
					</li>
					<li class={listItemStyle}>Analyzed solutions and coding fixes for software problems.</li>
					<li class={listItemStyle}>
						Redesigned the web portal to create a more visually appealing, user-friendly experience.
					</li>
				</ul>
			</TimelineItem>
			<TimelineItem
				title="Asscoiate Software Engineer: Eutech Cybernetics, Colombo, Sri Lanka"
				date="June 2019 - May 2020"
			>
				<ul class={ulStyle}>
					<li class={listItemStyle}>
						Worked closely with development team members to identify and remove software bugs.
					</li>
					<li class={listItemStyle}>
						Implemented and updated application modules under the direction of Senior Software
						Developers.
					</li>
					<li class={listItemStyle}>
						Utilized crucial design software skills to assist with projects.
					</li>
				</ul>
			</TimelineItem>
		</Timeline>
	</div>
</section>
