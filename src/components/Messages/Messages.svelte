<script>
	import Message from './fragments/Message.svelte';
</script>

<div class="wrapper">
	<Message sender="assistant" content="How can I help you today?" />
	<Message sender="user" content="Hello world!" />
</div>

<style>
	.wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
