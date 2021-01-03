<script>
  export let posts;
  export let tag;
</script>

<div class="container">
  {#if tag}
  <div class="main">
    <h3>Tagged Pages: <small class="tag">{tag}</small></h3>
  </div>
  {/if}
  <div class="posts">
    {#each posts as post, index}
    <div class="post">
      <a rel="prefetch" href="/post/{post.slug}">
      <h1>{post.title}</h1>
      </a>
      <small>{post.date}</small>
      {#if index <= 2}
      <img src="{post.image.image}" alt="{post.image.caption}">
      {:else}
      <img src="{post.image.image}" loading="lazy" alt="{post.image.caption}">
      {/if}
      <small>{post.intro}</small>
    </div>
    {/each}
  </div>
</div>

<style>
  div.container {
    @apply grid items-center gap-4;
  }
  div.post {
    @apply p-6;
  }
  h1 {
    @apply text-3xl py-1;
  }
  small {
    @apply text-lg pl-6;
  }
  small.tag {
    @apply px-1;
  }
</style>
