<script>
	import SideNav from '../components/SideNav.svelte';
	import Footer from '../components/Footer.svelte';
	export let open = false;
</script>

<style>
	main {
		position: relative;
		max-width: 64em;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
	:global(body) {
		@apply text-white;
	}
	:global(p) {
		@apply py-2;
	}
	:global(pre) {
		@apply p-3 bg-gray-700 rounded overflow-x-auto;
	}
	:global(h1) {
		@apply text-4xl;
	}
	:global(h2) {
		@apply text-3xl py-3 border-b border-gray-700;
	}
	:global(h3) {
		@apply text-2xl p-2;
	}
	:global(a) {
		@apply underline;
	}
</style>

<SideNav {open}/>

<main>
	<slot></slot>
</main>

<Footer/>
