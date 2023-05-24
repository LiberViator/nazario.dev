<script>
	import NavLink from "@components/Nav.svelte";
	export let navLinks, socialLinks;

	let height;
</script>

<svelte:window bind:innerHeight={height}/>

<section
	id="hero"
	class="paddings relative mx-auto grid max-h-[960px] h-[100svh] min-h-[640px] w-full max-w-6xl grid-cols-1 justify-center gap-8 lg:grid-cols-2"
	style={`height:${height}px`}
>
	<div class="absolute inset-0 overflow-hidden lg:relative lg:overflow-visible">
		<img
			draggable="false"
			src="/assets/portrait.webp"
			alt="Portrait"
			width="650"
			height="820"
			class="hero-image absolute bottom-0 h-full max-h-[840px] w-auto max-w-[680px] translate-x-[calc((100vw-100%)/3+32vw)] object-cover object-right-bottom opacity-10 drop-shadow-portrait lg:right-0 lg:translate-x-0 lg:opacity-100"
		/>
	</div>
	<div class="z-[1] col-start-1 row-start-1 flex h-full w-full flex-col lg:col-start-2">
		<header class="flex w-full flex-row pb-4 pt-8">
			<div class="flex flex-col">
				<span class="mb-3 hidden text-base text-slate-500 sm:block">Nawiguj do</span>
				<nav class="flex flex-row gap-8">
					{#each navLinks as _item}
						<NavLink link={_item} />
					{/each}
				</nav>
			</div>
		</header>
		<div class="flex h-full w-full max-w-[560px] items-center">
			<div class="intersect-once my-16 flex flex-col opacity-0 intersect:animate-heading">
				<div class="flex max-w-lg flex-col gap-x-8">
					<h1 class="mb-4 font-display text-2xl/tight sm:text-3xl/tight">Hej, jestem Nazar</h1>
					<h2 class="mb-12 text-lg sm:text-xl">Zaprojektuję witrynę na potrzeby Twoich klientów</h2>
					<!-- <a href={""} class="mb-12 flex">
              <img
                src="/arrow_play.svg"
                alt="Play"
                class="mr-4"
                width="24"
                height="24"
              />
              <h5 class="">Zobacz film o mnie</h5>
            </a> -->
				</div>
				<button
					class="cta_button w-64 bg-yellow-300 text-black hover:shadow-glow-yellow"
					onclick="document.getElementById('user_name').focus()">Zleć projekt!</button
				>
			</div>
		</div>
		<footer class="flex w-full flex-row items-end justify-end pb-8 pt-4">
			<div class="flex flex-col justify-end">
				<span class="mb-3 hidden text-base text-slate-500 sm:block">Znajdź mnie na</span>
				<div class="flex shrink-0 flex-row justify-end gap-8">
					{#each socialLinks as _item}
						<a href={_item.href}>
							<img src={_item.image} alt="Social media" width="24" height="24" />
						</a>
					{/each}
				</div>
			</div>
		</footer>
	</div>
</section>
