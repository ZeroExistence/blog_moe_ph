<script context="module">
	export async function preload({ params }, session) {
		const res = await this.fetch(`${session.apiEndpoint}/?page=${params.int}`)
		const data = await res.json()

		if (res.status === 200) {
			return { posts: data };
		} else {
			this.error(res.status, data.detail);
		}
	}
</script>

<script>
	import { stores } from '@sapper/app';
	const { page } = stores();

	import Posts from '../components/Posts.svelte';
	export let posts;


</script>

<svelte:head>
	<title>Home Page - {$page.host}</title>
</svelte:head>

<Posts posts={posts}/>
