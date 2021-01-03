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
    {#each posts.results as post, index}
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


{#if posts.next != null || posts.previous != null}
<div class="grid items-center pt-12">
  <nav class="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
    {#if posts.previous != null}
      <a rel="prefetch" href="/{posts.previous}" class="inline-flex items-center justify-center px-2 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            <span class="sr-only">Previous</span>
            <!-- Heroicon name: chevron-left -->
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </a>
    {/if}
    <p class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
        {posts.current}
      </p>
    {#if posts.next != null}
    <a rel="prefetch" href="{posts.next}" class="inline-flex items-center justify-center px-2 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          <span class="sr-only">Next</span>
          <!-- Heroicon name: chevron-right -->
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </a>
      {/if}
    </nav>
</div>
{/if}

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
