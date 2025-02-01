<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>nits webring</title>
	<meta name="description" content="nit silchar engineering undergrad webring" />
</svelte:head>
<nav class="flex items-center justify-between pb-10">
	<a href="/">NIT Silchar Webring</a>
	<div class="grid">
		<a href="https://en.wikipedia.org/wiki/Webring" class="underline underline-offset-4"
			>what's a webring</a
		>
		<a href="https://git.new/nitsring" class="underline underline-offset-4">how can i join?</a>
	</div>
</nav>
{@render children()}
<footer class="pt-20 text-center">
	<p>
		Made with ❤️ by <a href="https://byt3h3ad.github.io/" class="underline-offset-4 hover:underline"
			>byt3h3ad</a
		>
	</p>
	<p>
		Inspired by <a href="https://se-webring.xyz/" class="underline-offset-4 hover:underline"
			>U Waterloo</a
		>
	</p>
</footer>

<style>
	:global(html) {
		@apply bg-zinc-950 p-4 font-serif text-zinc-300/90 md:p-8;
	}
	:global(a) {
		@apply transition-colors duration-300 hover:text-zinc-50;
	}
</style>
