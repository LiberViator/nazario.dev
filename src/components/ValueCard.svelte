<script>
	export let title, desc, image;
</script>

<div class="flex max-w-[264px] flex-col items-center">
	<div class="border-shine relative mb-6 h-32 w-32 rounded-xl bg-slate-700 shadow-container">
		<img src={image} alt="Advantage illustration" width="128" height="128" loading="lazy" draggable="false" />
	</div>
	<h4 class="mb-3 text-center text-base font-semibold">{title}</h4>
	<p class="text-center text-base/relaxed text-slate-400">{desc}</p>
</div>
