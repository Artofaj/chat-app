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
	}

	.sender {
		font-weight: bold;
	}

	.content {
		margin-top: 5px;
	}
</style>
