<script>
	import Title from "@components/Title.svelte";
	import Form from "@components/Form.svelte";
</script>

<section id="contact" class="sm:paddings mx-auto flex w-full max-w-6xl flex-col items-center overflow-hidden pt-12 md:pt-16">
	<Title text="Kontakt" />
	<div class="grid w-full grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
		<div
			class="max-sm:paddings flex w-full flex-col items-center justify-center lg:order-1 lg:items-start lg:pb-16 lg:pl-[16%]"
		>
			<h3 class="mb-6 max-w-sm text-center text-lg lg:text-left">Zapraszam do kontaktu ze mną za pomocą formularza</h3>
			<!-- <button
				onclick="window.open('https://m.me/nazar.poplawski/')"
				class="cta_button mb-6 w-64 bg-blue-200 text-black hover:shadow-glow-blue"
			>
				<img src="/assets/messenger.svg" alt="Social media" width="24" height="24" />
				Messenger
			</button> -->
			<p class="text-center text-base/loose text-slate-400 lg:text-left max-w-sm">
				Lub wysyłając wiadomość na
				<a href="https://m.me/nazar.poplawski/" target="_blank" class="text-blue-200 inline-flex items-center">
					<img src="/assets/messenger.svg" alt="Social media" width="24" height="24" class="mr-2" />
					<span>Messenger</span>
				</a>
			</p>
		</div>
		<Form />
	</div>
</section>
