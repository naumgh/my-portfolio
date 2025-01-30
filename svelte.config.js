import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [sveltePreprocess(), mdsvex()],
    kit: {
        adapter: adapter()
    },
    extensions: ['.svelte', '.svx']
};

export default config;