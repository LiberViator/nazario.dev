<script lang="js">
	import AccordionItem from "./AccordionItem.svelte";

	export let data = [];

	const toggle = (elIndex) => {
		const accordions = document.querySelectorAll(".accordion");
		accordions.forEach((acc, i) =>
			i !== elIndex ? acc.classList.remove("accordion-active") : acc.classList.toggle("accordion-active")
		);
	};
</script>

<div class="flex flex-col gap-6 sm:max-w-[560px]">
	{#each data as item, i}
		<AccordionItem title={item.question} content={item.answer} {toggle} {i} />
	{/each}
</div>
