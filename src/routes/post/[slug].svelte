<script context="module">
	export async function preload({ params }, session) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`${session.apiEndpoint}/post/${params.slug}/`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.detail);
		}
	}
</script>

<script>
	import Post from '../../components/Post.svelte';
	export let post;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<Post post={post}/>
