<script>
	export let workData;
</script>

<li class="swiper-slide flex w-full flex-col gap-3">
	<div class="border-shine group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-700">
		<div class="absolute grayscale transition-transform duration-[4000ms] ease-linear group-hover:filter-none">
			<img class="-mb-[75%]" src={workData?.image} alt="Project example" loading="lazy" draggable="false" />
		</div>
	</div>
	<div class="flex w-full flex-wrap gap-3">
		{#each workData?.tags as _tag}
			<span class="rounded bg-slate-700 px-2 text-sm/6">{_tag}</span>
		{/each}
	</div>
	<a href={workData?.url}>
		<span class="text-base">{workData?.title}</span>
	</a>
</li>
