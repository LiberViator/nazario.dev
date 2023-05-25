<script>
	import Title from "@components/Title.svelte";
	import ActionLink from "@components/ActionLink.svelte";
	import ListItem from "@components/ListItem.svelte";

	export let offerList = [];
	const mainOffer = offerList.filter(offer => offer.type === "main");
	const sideOffer = offerList.filter(offer => offer.type === "side");
</script>

<section id="offer" class="paddings mx-auto flex w-full max-w-6xl flex-col items-center py-12 md:py-16">
	<Title text="Moja Oferta" />
	<div class="flex flex-col items-center gap-8 md:flex-row">
		<div class="border-shine relative max-w-sm flex-1 overflow-hidden rounded-2xl bg-slate-700 shadow-form">
			<div class="mb-8 flex h-24 items-center justify-center bg-offer-gradient">
				<h3 class="text-center text-lg">Tworzenie witryny</h3>
			</div>
			<ul class="mb-8 flex flex-col gap-3 px-4 text-base sm:px-8">
				{#each mainOffer as offer}
						<ListItem content={offer.content} />
				{/each}
			</ul>
			<div class="flex w-full justify-center px-6 pb-8">
				<ActionLink text="Przejdź do formularza" goToId="user_name" />
			</div>
		</div>
		<div class="border-shine relative max-w-sm flex-1 overflow-hidden rounded-2xl bg-slate-700 shadow-form">
			<div class="mb-8 flex h-24 items-center justify-center bg-offer-gradient">
				<h3 class="text-center text-lg">Dodatkowe usługi</h3>
			</div>
			<ul class="mb-8 flex flex-col gap-3 px-4 text-base sm:px-8">
				{#each sideOffer as offer}
					{#if offer.type === "side"}
						<ListItem content={offer.content} />
					{/if}
				{/each}
			</ul>
		</div>
	</div>
</section>
