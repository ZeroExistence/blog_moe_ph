<script>
	import successkid from 'images/successkid.jpg';
</script>


<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div class="grid gril-cols-1 items-center">
<div>
<h1>Great success!</h1>

<figure>
	<img alt="Success Kid" src="{successkid}">
	<figcaption class="text-xl text-white">Have fun with Sapper!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
</div>
</div>

<style lang="postcss">
	h1 {
		@apply text-3xl text-white;
	}
	p {
		@apply text-xl text-white;
	}
</style>
