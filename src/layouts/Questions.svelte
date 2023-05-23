<script>
	import Title from "@components/Title.svelte";
	import Accordion from "@components/Accordion.svelte";
	import ActionLink from "@components/ActionLink.svelte";

	export let questionsList;
</script>

<section id="questions" class="paddings mx-auto flex w-full max-w-6xl flex-col items-center py-12 md:py-16">
	<Title text="Pytania i Odpowiedzi" />
	<div class="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-12 lg:grid-cols-2">
		<div class="flex w-full max-w-[560px] flex-col items-center justify-center lg:items-start lg:pr-[16%]">
			<h3 class="mb-6 max-w-lg text-center text-lg lg:text-left">
				Możesz zadać mi pytanie wysyłając wiadomość przez formularz kontaktowy
			</h3>
			<ActionLink />
		</div>
		<Accordion data={questionsList} />
	</div>
</section>
