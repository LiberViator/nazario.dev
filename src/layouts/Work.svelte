<script>
	import Title from "@components/Title.svelte";
	import WorkCard from "@components/WorkCard.svelte";

	export let workList;
</script>

<section id="works" class="flex w-full flex-col items-center py-12 md:py-16">
	<Title text="Wykonane pracy" />
	<div class="worksSlider paddings mb-6 w-full lg:px-[max(calc((100vw-1152px)/2),theme(spacing.8))]">
		<ul class="swiper-wrapper flex w-max">
			{#each workList as _workData}
				<WorkCard workData={_workData} />
			{/each}
		</ul>
	</div>
	<span class="worksSlider-pagination flex w-full justify-center" />
</section>
