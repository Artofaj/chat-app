<script>
	import Message from './fragments/Message.svelte';
	import MockResponse from './mockResponse.json';
</script>

<div class="wrapper">
	<Message sender="assistant" content="How can I help you today?" />
	<Message sender="user" content="Hello world!" />
	<Message
		sender={MockResponse.choices[0].message.role}
		content={MockResponse.choices[0].message.content}
	/>
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
