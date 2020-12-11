<script context="module">
	export async function preload({ params }, session) {
		return this.fetch(`${session.apiEndpoint}/post/`)
			.then(r => r.json())
			.then(response => {
				return { posts: response };
			});
	}
</script>

<script>
	import Posts from '../../components/Posts.svelte';
	export let posts;
</script>


<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<Posts posts={posts}/>
