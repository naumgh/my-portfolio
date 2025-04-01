<script lang="ts">
    import { onMount } from 'svelte';
    //@ts-ignore
    import Prism from "prismjs";
    import "prismjs/components/prism-sql";
    import "prismjs/themes/prism-tomorrow.css";

    export let title: string;
    export let description: string;
    export let highlights: string[];
    export let codeSnippet: string;
    export let codeType: string;
    export let downloadLink: string;
    export let onClose: () => void; // Callback to close the expanded window

    onMount(() => {
        console.log("code highlighting executed");
        Prism.highlightAll(); 
    });
</script>

<div class="fixed inset-0 z-50 bg-opacity-50 flex items-center justify-center">
    <div class="relative bg-surface border border-gray-300/20 rounded-lg shadow-lg w-full max-w-6xl h-[95%] overflow-auto scrollbar scrollbar-thin scrollbar-thumb-[#555555] scrollbar-track-[#1a1a1a] scrollbar-thumb-rounded">
        <div
            class="sticky top-0 z-10 bg-surface border-b border-gray-700"
            style="position: -webkit-sticky; position: sticky; left: 0;"
        >
            <div class="flex items-center justify-between p-2">
                <div class="flex flex-col w-full max-w-[calc(100%-5rem)]">
                    <h2 class="text-xs font-bold text-white">{title}</h2>
                    <p class="text-[0.75rem] text-[#a1a1aa] mt-1 whitespace-pre-wrap break-words">{description}</p>
                </div>
                <a
                    href={downloadLink || '#'}
                    class={`text-accent flex items-center justify-center w-8 h-8 rounded-full bg-surface transition ${
                        downloadLink ? 'hover:text-primary hover:bg-gray-700' : 'text-gray-500 cursor-not-allowed'
                    }`}
                    aria-label="Download file"
                    { ...(downloadLink ? { download: true } : {}) }
                    on:click={downloadLink ? null : (e) => e.preventDefault()}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        class="w-5 h-5"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 16V8M8 12l4 4 4-4" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 20h16" />
                    </svg>
                </a>
                <button
                    on:click={onClose}
                    class="text-accent hover:text-primary flex items-center justify-center w-8 h-8 rounded-full bg-surface hover:bg-gray-700 transition"
                    aria-label="Close expanded window"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        class="w-5 h-5"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <div style="padding: 1rem;">
            <ul style="font-size: 0.75rem; line-height: 1.25rem; color: #a1a1aa; list-style-type: disc; padding-left: 1.25rem; margin-bottom: 1rem;">
                {#each highlights as highlight}
                    <li>{highlight}</li>
                {/each}
            </ul>
            <pre style="overflow-x: auto; font-size: 0.7rem; line-height: 1.2rem; padding: 1rem; background-color: transparent; color: #ffffff; border-radius: 0.375rem; scrollbar-width: thin; scrollbar-color: #555555 #1a1a1a; max-height: 100%;">
                <code class={`language-${codeType}`} style="font-size: 0.7rem; line-height: 1.2rem;">{codeSnippet}</code>
            </pre>
        </div>
    </div>
</div>