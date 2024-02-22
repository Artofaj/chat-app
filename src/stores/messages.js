import { writable } from 'svelte/store';

// Initial state of the messages store
const initialMessages = [];

// Create a writable store for messages
export const messages = writable(initialMessages);
