<script>
	import { addMessage } from '../stores/messages';
	import mockResponse from '../components/Messages/mockResponse.json';

	let message = '';

	const handleSubmit = () => {
		const timestamp = new Date().getTime();

		addMessage({
			content: message,
			sender: 'user',
			id: timestamp
		});

		message = '';
		addMessage({
			content: mockResponse.choices[0].message.content,
			sender: mockResponse.choices[0].message.role,
			id: mockResponse.id
		});
	};

	const handleInput = (e) => {
		if (e.which === 13 && !e.shiftKey) {
			e.preventDefault();
			handleSubmit();
		}
	};
</script>

<form class="wrapper" on:submit={handleSubmit}>
	<textarea bind:value={message} placeholder="Type your message..." on:keydown={handleInput} />
	<input type="submit" value="Send" />
</form>

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
