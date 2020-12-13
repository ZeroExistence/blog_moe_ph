<script>
  export let list;
</script>

<div class="container">
  <div class="main">
    <h3>Tags</h3>
  </div>
  <div class="posts">
    <ul>
    {#each list as item}
      <a href="/tag/{item.slug}">
      <li>{item.name}</li>
      </a>
    {/each}
    </ul>
  </div>
</div>

<style>
  div.container {
    @apply grid items-center gap-4;
  }
  ul {
    @apply list-disc;
  }
</style>
