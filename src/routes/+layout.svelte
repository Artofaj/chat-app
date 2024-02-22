<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/settings">Settings</a>
</nav>

<main>

<slot></slot>
</main>

<style>
	:global(body) {
		font-family: Arial, sans-serif;
		display: grid;
		grid-template-rows: auto 1fr auto;
		grid-template-columns: 1fr;
		gap: 1rem;
		height: 100svh;
		background-color: #f4f4f4;
	}

	nav, main {
		width: 100%;
		max-width: 800px;
		background-color: #fff;
		margin: auto;
	}
</style>
