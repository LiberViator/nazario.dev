<script>
	export let text = "Przejdź do formularza",
		goToId = "user_name";
</script>

<button class="group flex cursor-pointer items-center justify-center" onclick={`document.getElementById('${goToId}').focus()`}>
	<img
		class="mr-2 transition-transform duration-100 group-hover:translate-x-1"
		src="/assets/arrow_next.svg"
		alt="Action link"
		width="16"
		height="16"
		draggable="false"
	/>
	<span class="text-base text-yellow-200 group-hover:text-shine">
		{text}
	</span>
</button>
