<script>
	const access_key = "f21c06ae-2d7f-43b7-be97-c94e2cd54eb8";
</script>

<form
	id="contact-form"
	action="https://api.web3forms.com/submit"
	method="POST"
	class="max-md:paddings intersect-once border-shine after:border-b-0 relative mx-auto flex w-full flex-col rounded-t-2xl bg-slate-700 bg-form-gradient pb-16 pt-3 opacity-5 shadow-form intersect:animate-form sm:max-w-[560px] md:px-8"
>
	<input type="hidden" name="access_key" value={access_key} />
	<span class="mb-6 flex h-1 w-[min(24%,128px)] self-center rounded bg-slate-600" />
	<fieldset class="flex w-full flex-wrap gap-x-4">
		<div class="flex w-full flex-[1_1_200px] flex-col">
			<label for="user_name" class="mb-3 w-fit text-base text-slate-400">Imię:</label>
			<input
				id="user_name"
				name="Name"
				type="text"
				minlength="3"
				class="mb-4 h-12 w-full rounded-xl border border-transparent bg-slate-600 px-6 py-3 text-base transition-colors hover:border-slate-500"
				placeholder="Artur"
				required
			/>
		</div>
		<div class="flex w-full flex-[1_1_200px] flex-col">
			<label for="user_number" class="mb-3 w-fit text-base text-slate-400">Numer: (Opcj.)</label>
			<input
				id="user_number"
				name="Mobile number"
				type="tel"
				minlength="9"
				class="mb-4 h-12 w-full rounded-xl border border-transparent bg-slate-600 px-6 py-3 text-base transition-colors hover:border-slate-500"
				placeholder="+48 505 050 505"
			/>
		</div>
	</fieldset>
	<label for="user_email" class="mb-3 w-fit text-base text-slate-400">E-Mail:</label>
	<input
		id="user_email"
		name="Email"
		type="email"
		class="mb-4 flex h-12 w-full rounded-xl border border-transparent bg-slate-600 px-6 py-3 text-base transition-colors hover:border-slate-500"
		placeholder="mój@gmail.com"
		required
	/>
	<label for="user_message" class="mb-3 w-fit text-base text-slate-400">Wiadomość:</label>
	<textarea
		id="user_message"
		name="Message"
		class="mb-8 flex min-h-[128px] w-full resize-none rounded-xl border border-transparent bg-slate-600 px-6 py-3 text-base/relaxed transition-colors scrollbar-hide placeholder:text-slate-400 hover:border-slate-500"
		placeholder="Cześć, Nazar! Mam swój barbershop w Krakowie i potrzebuję strony internetowej, która zachęci nowych klientów do skorzystania z moich usług. Chcę, aby była atrakcyjna i zawierała wszystkie niezbędne informacje."
		required
	/>
	<input type="hidden" name="redirect" value="https://web3forms.com/success" />
	<button type="submit" class="cta_button w-full self-end bg-yellow-300 text-black hover:shadow-glow-yellow sm:w-64"
		>Wyślij wiadomość</button
	>
</form>
