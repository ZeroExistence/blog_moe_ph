<script>
	import SideNav from '../components/SideNav.svelte';

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
</style>

<SideNav {open}/>

<main>
	<slot></slot>
</main>
