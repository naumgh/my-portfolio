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
    export let onClose: () => void;

    onMount(() => {
        console.log("code highlighting executed");
        Prism.highlightAll();
    });
</script>

<div class="fixed inset-0 z-50 bg-opacity-50 flex items-center justify-center">
    <div class="relative bg-surface border border-gray-300/20 rounded-lg shadow-lg w-full h-full flex flex-col">
        <!-- Header -->
        <div class="bg-surface border-b border-gray-700">
            <div class="flex items-center justify-between p-2" style="min-width: max-content;">
                <h2 class="text-xs font-bold text-white">{title}</h2>
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

        <!-- Content -->
        <div class="p-4 flex flex-col h-full">
            <div class="flex flex-col flex-1">
                <p class="text-sm text-secondary mb-4 line-clamp-2">{description}</p>
                {#if highlights.length > 0}
                    <ul class="text-sm text-secondary list-disc pl-5 mb-4 flex-none">
                        {#each highlights as highlight}
                            <li class="line-clamp-1">{highlight}</li>
                        {/each}
                    </ul>
                {/if}
                <pre 
                    class="flex-1 text-sm"
                    style="font-size: 0.75rem; line-height: 1.25rem; padding: 1rem; background-color: transparent; color: #ffffff; border-radius: 0.375rem; overflow: hidden;"
                >
                    <code class={`language-${codeType}`} style="white-space: pre-wrap;">{codeSnippet}</code>
                </pre>
            </div>
        </div>
    </div>
</div>