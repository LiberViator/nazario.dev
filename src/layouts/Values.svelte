<script>
	import Title from "../components/Title.svelte";
	import ValueCard from "../components/ValueCard.svelte";

	export let valuesList;
</script>

<section id="values" class="paddings mx-auto flex w-full max-w-6xl flex-col items-center py-12 md:py-16">
	<Title text="Zalety Współpracy" />
	<div class="grid w-full grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
		{#each valuesList as _value}
			<ValueCard title={_value.title} desc={_value.desc} image={_value.image} />
		{/each}
	</div>
</section>
