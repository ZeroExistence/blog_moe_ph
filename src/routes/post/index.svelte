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
	import { stores } from '@sapper/app';
	const { page } = stores();

	import Posts from '../../components/Posts.svelte';
	export let posts;
</script>


<svelte:head>
	<title>Posts - {$page.host}</title>
</svelte:head>

<Posts posts={posts}/>
