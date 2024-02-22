<script>
	export let sender;
	export let content;

	let isUser = sender === 'user';
</script>

<div class="message" class:user-message={isUser}>
	<div class="sender">{sender}</div>
	<div class="content">{content}</div>
</div>

<style>
	.message {
		margin-bottom: 10px;
		max-width: 500px;
		background-color: #fff;
		padding: 1rem;
		border-radius: 8px;
		align-self: flex-start;
	}

	.sender {
		font-weight: bold;
	}

	.content {
		margin-top: 5px;
	}

	.user-message {
		align-self: flex-end;
		background-color: skyblue;
	}
</style>
