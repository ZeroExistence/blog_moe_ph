<script context="module">
	export async function preload({ params }, session) {
		return this.fetch(`${session.apiEndpoint}/`)
			.then(r => r.json())
			.then(response => {
				return { posts: response };
			});
	}
</script>

<script>
	import Posts from '../components/Posts.svelte';
	export let posts;
</script>

<svelte:head>
	<title>Home Page - tech.moe.ph</title>
</svelte:head>

<Posts posts={posts}/>
