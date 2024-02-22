<script>
	import Message from './fragments/Message.svelte';
	import MockResponse from './mockResponse.json';

	import { messages } from '../../stores/messages';
</script>

<div class="wrapper">
	{#each $messages as message}
		<Message sender={message.sender} content={message.content} />
	{/each}
</div>

<style>
	.wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		height: 100%;
		overflow: auto;
	}
</style>
