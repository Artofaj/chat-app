import { writable } from 'svelte/store';

// Initial state of the messages store
const initialMessages = [
	{ sender: 'assistant', content: 'Hello! How can I help you?', id: '00000001' }
];

// Create a writable store for messages
export const messages = writable(initialMessages);

// Add a new message to the store
export function addMessage({ content, sender, id }) {
	messages.update((messages) => [...messages, { content, sender, id }]);
}
