<script>
  export let post;

  function clickback() {
		window.history.back()
	};
</script>


<div class="container">
  <div class="post">
    <h1>{post.title}</h1>
    <small>{post.date}</small>
    <img src="{post.image.image}" alt="{post.image.caption}">
    {#if post.image.caption}
    <small>{post.image.caption}</small>
    {/if}
    <h3>{post.intro}</h3>
    <div class="content">
      {@html post.content}
    </div>
    {#if post.tag}
    <div class="tag">
      Tags:
      {#each post.tag as tag}
      <a class="tag" href="/tag/{tag.slug}">{tag.name}</a>
      {/each}
    </div>
    {/if}
    <div class="back">
      <button on:click={clickback}>Back</button>
    </div>
  </div>
</div>

<style>
  small {
    @apply text-lg pl-6;
  }
  div.container {
    @apply grid grid-cols-1 items-center gap-4;
  }
  div.post {
    @apply p-6;
  }
  h1 {
    @apply py-4;
  }
  a.tag, button {
    @apply inline-flex items-center justify-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 mx-1 no-underline;
  }
  div.tag, div.back {
    @apply p-3 pt-6
  }
  h3 {
    @apply italic;
  }
</style>
