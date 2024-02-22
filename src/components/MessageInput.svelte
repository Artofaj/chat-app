<script>
	let message = '';

	function sendMessage() {
		// Logic to send the message
		console.log('Sending message:', message);
		message = '';
	}
</script>

<div class="wrapper">
	<textarea bind:value={message} placeholder="Type your message..." />
	<button on:click={sendMessage}>Send</button>
</div>

<style>
	.wrapper {
		width: 100%;
		display: flex;
		gap: 1rem;
	}

	textarea {
		width: 100%;
		padding: 1rem;
		font-size: 1rem;
		border: 1px solid #ccc;
		border-radius: 5px;
	}
</style>
