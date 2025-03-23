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

<div class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-0">
    <div class="relative bg-surface border border-gray-300/20 rounded-lg shadow-lg w-full max-w-[90vw] sm:max-w-3xl h-full max-h-[90vh] overflow-auto scrollbar scrollbar-thin scrollbar-thumb-[#555555] scrollbar-track-[#1a1a1a] scrollbar-thumb-rounded touch-auto">
        <!-- Header -->
        <div
            class="sticky top-0 z-10 bg-surface border-b border-gray-700"
            style="position: -webkit-sticky; position: sticky; left: 0;"
        >
            <div class="flex items-center justify-between p-2 sm:p-4 min-w-[100%]">
                <h2 class="text-xs sm:text-sm font-bold text-white break-words max-w-[70%]">{title}</h2>
                <button
                    on:click={onClose}
                    class="text-accent hover:text-primary flex items-center justify-center w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-surface hover:bg-gray-700 transition"
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
        <div class="p-2 sm:p-4">
            <p class="text-secondary mb-2 sm:mb-4" style="font-size: 0.75rem; line-height: 1rem; sm:font-size: 0.875rem; sm:line-height: 1.25rem;">{description}</p>
            <ul class="text-secondary list-disc pl-4 sm:pl-5 mb-2 sm:mb-4" style="font-size: 0.75rem; line-height: 1rem; sm:font-size: 0.875rem; sm:line-height: 1.25rem;">
                {#each highlights as highlight}
                    <li>{highlight}</li>
                {/each}
            </ul>
            <pre 
                class="overflow-x-auto scrollbar scrollbar-thin scrollbar-thumb-[#555555] scrollbar-track-[#1a1a1a] scrollbar-thumb-rounded touch-auto"
                style="font-size: 0.65rem; line-height: 1; padding: 0.5rem; background-color: transparent; color: #ffffff; border-radius: 0.375rem; sm:font-size: 0.8125rem; sm:line-height: 1rem; sm:padding: 1rem;"
            >
                <code class={`language-${codeType}`}>{codeSnippet}</code>
            </pre>
        </div>
    </div>
</div>

<style>
    .touch-auto {
        -webkit-overflow-scrolling: touch;
    }
</style>