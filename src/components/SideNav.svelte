<script>
	export let open = false;

  function triggerOpen() {
    open = !open;
  }
</script>

<aside class="absolute lg:w-1/4 md:w-1/3 w-1/2 h-full bg-gray-200 border-r-2 shadow-lg" class:open>
	<nav class="p-12 text-xl">
		<a class="block" href="/" on:click={triggerOpen}>Home</a>
		<a class="block" href="/about" on:click={triggerOpen}>About</a>
		<a class="block" href="/blog" on:click={triggerOpen}>Blog</a>
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
    <text x=0 y=20>moe.ph</text>
  </svg>
	</nav>
</header>


<style>
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
