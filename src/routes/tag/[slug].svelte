<script context="module">
  export async function preload({ params }, session) {
    const tag = params.slug
		const res = await this.fetch(`${session.apiEndpoint}/tag/${params.slug}/`);
		const data = await res.json();

		if (res.status === 200) {
      let posts = data;
      if (data.next) {
        posts.next = `/tag/${tag}/${posts.next}`
      }
      if (data.previous) {
        posts.previous = `/tag/${tag}/${posts.previous}`
      }
			return { posts: posts, tag: tag };
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
