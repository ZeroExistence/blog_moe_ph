<script context="module">
	export async function preload({ params }, session) {
		return this.fetch(`${session.apiEndpoint}/tag/`)
			.then(r => r.json())
			.then(response => {
				return { list: response };
			});
	}
</script>

<script>
	import List from '../../components/List.svelte';
	export let list;
</script>


<svelte:head>
	<title>Tags - tech.moe.ph</title>
</svelte:head>

<List list={list}/>
