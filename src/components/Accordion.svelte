<script lang="js">
	import AccordionItem from "./AccordionItem.svelte";

	export let data = [];

	let active;
	const toggle = (elIndex) => (elIndex === active ? (active = undefined) : (active = elIndex));
</script>

<div class="flex flex-col gap-6 sm:max-w-[560px]">
	{#each data as item, index}
		<AccordionItem title={item.question} content={item.answer} {toggle} isOpen={active === index} {index} />
	{/each}
</div>
