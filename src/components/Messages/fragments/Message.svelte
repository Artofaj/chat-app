<script>
	export let sender;
	export let content;
</script>

<div class="message">
	<div class="sender">{sender}</div>
	<div class="content">{content}</div>
</div>

<style>
	.message {
		margin-bottom: 10px;
		max-width: 500px;
		background-color: #fff;
		padding: 1rem;
	}

	.sender {
		font-weight: bold;
	}

	.content {
		margin-top: 5px;
	}
</style>
