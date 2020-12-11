<script>
	export let open = false;

  function triggerOpen() {
    open = !open;
  }
</script>

<!--
This code is based on this
https://svelte.dev/repl/03f0be0c4dc54eb4af5a168f644f5c31?version=3.19.1
-->
<aside class="absolute lg:w-1/4 md:w-1/3 w-1/2 h-full bg-gray-200 border-r-2 shadow-lg" class:open>
	<nav class="p-12 text-xl">
		<a class="block" href="/" on:click={triggerOpen}>Home</a>
		<a class="block" href="/post" on:click={triggerOpen}>Posts</a>
		<a class="block" href="/tag" on:click={triggerOpen}>Tags</a>
	</nav>
</aside>

<header class="flex justify-between bg-gray-200 p-4 items-center text-gray-600 border-b-2">
	<nav class="flex">
  <button class="text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none" class:open on:click={triggerOpen}>
    <svg width=32 height=24>
      <line id="top" x1=0 y1=2  x2=32 y2=2/>
      <line id="middle" x1=0 y1=12 x2=24 y2=12/>
      <line id="bottom" x1=0 y1=22 x2=32 y2=22/>
    </svg>
  </button>

  <svg width=auto height=30>
    <text x=0 y=20>tech.moe.ph</text>
  </svg>
	</nav>
</header>


<style>
	a {
		@apply text-black pb-2;
	}
  text {
    fill: currentColor
  }
	svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
	}

	svg line {
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out
	}

	button {
		z-index: 20;
	}

	.open svg {
		transform: scale(0.7)
	}

	.open #top {
		transform: translate(6px, 0px) rotate(45deg)
	}

	.open #middle {
		opacity: 0;
	}

  .open #bottom {
		transform: translate(-12px, 9px) rotate(-45deg)
	}

  aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
    z-index: 1;
	}

	.open {
		left: 0;
	}
</style>
