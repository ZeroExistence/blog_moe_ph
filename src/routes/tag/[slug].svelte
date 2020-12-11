<script context="module">
  export async function preload({ params }, session) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
    const tag = params.slug
		const res = await this.fetch(`${session.apiEndpoint}/tag/${params.slug}/`);
		const data = await res.json();

		if (res.status === 200) {
			return { posts: data, tag: tag };
		} else {
			this.error(res.status, data.detail);
		}
	}
</script>

<script>
	import Posts from '../../components/Posts.svelte';
	export let posts;
  export let tag;
</script>


<svelte:head>
	<title>Posts: {tag} - tech.moe.ph</title>
</svelte:head>

<Posts posts={posts} tag={tag}/>
