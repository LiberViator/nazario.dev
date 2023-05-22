<script>
	export let text, image, goTo, open;
</script>

<button
	onclick={`${goTo ? window.open(open) : document.getElementById(goTo).focus()}`}
	class="cta_button mb-6 w-64 bg-blue-600 text-neutral-50 hover:shadow-glow-blue"
>
	{#if image}
		<img src={image} alt="Social media" width="24" height="24" />
	{/if}
	{text}
</button>
