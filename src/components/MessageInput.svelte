<script>
	let message = '';

	function sendMessage() {
		// Logic to send the message
		console.log('Sending message:', message);
		message = '';
	}
</script>

<div>
	<input type="text" bind:value={message} placeholder="Type your message..." />
	<button on:click={sendMessage}>Send</button>
</div>
