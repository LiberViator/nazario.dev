<script>
	export let link;
</script>

<button
	onclick={`document.getElementById('${link.id}').scrollIntoView()`}
	class="text-base text-slate-400 transition-colors duration-100 hover:duration-150 hover:text-blue-200"
>
	{link.name}
</button>
