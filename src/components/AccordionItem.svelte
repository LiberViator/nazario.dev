<script lang="js">
	export let title = "";
	export let content = "";

	export let index;
	export let isOpen;
	export let toggle;
</script>

<div class="border-shine relative overflow-hidden rounded-xl bg-slate-700 shadow-container">
	<button class="group flex h-auto w-full items-center py-3 pl-6 pr-4" on:click={() => toggle(index)}>
		<span class="mr-4 w-full text-left text-base">{title}</span>
		<img
			class={`transition-[translate] duration-100 ${
				isOpen ? "-rotate-90 group-hover:-translate-y-0.5" : "rotate-90 group-hover:translate-y-0.5"
			}`}
			src="/assets/arrow_nav.svg"
			alt="Open/Close accordion"
			width="16"
			height="16"
			draggable="false"
		/>
	</button>
	<div class={`max-h-0 text-slate-400 ${isOpen && "max-h-96"}`}>
		<p class="h-full px-6 pb-3 pt-2 text-left text-base/relaxed">{content}</p>
	</div>
</div>
