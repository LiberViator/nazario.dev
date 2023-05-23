<script>
	import ActionLink from "@components/ActionLink.svelte";
	export let title, desc, image, isCTA;
</script>

<li class="swiper-slide flex flex-col items-center md:items-start">
	<div class="border-shine relative mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-slate-700 shadow-container">
		<img src={image} alt="Step icon" width="32" height="32" draggable="false" />
	</div>
	<h4 class="mb-3 text-base font-semibold">{title}</h4>
	<p class="mb-4 max-w-lg text-center text-base/relaxed text-slate-400 md:max-w-none md:text-left">{desc}</p>
	{#if isCTA}
		<ActionLink text="Przejdź do formularza" goToId="user_name" />
	{/if}
</li>
