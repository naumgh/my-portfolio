<script lang="ts">
    import { onMount } from 'svelte';
    import ExpandedWindow from '../components/ExpandedWindow.svelte';
    import Prism from "prismjs";
    import "prismjs/components/prism-sql";
    import "prismjs/components/prism-python";
    import "prismjs/themes/prism-tomorrow.css";


    export let title: string;
    export let description: string;
    export let highlights: string[];
    export let codeSnippet: string;
    export let downloadLink: string;
    export let codeType: string;
    export let id: string;

    let isExpanded = false;

    onMount(() => {
        console.log("code highlighting executed");
        Prism.highlightAll(); // Apply syntax highlighting
    });

    function openExpandedWindow() {
        isExpanded = true;
    }

    function closeExpandedWindow() {
        isExpanded = false;
    }
</script>

<div class="bg-surface relative border border-gray-300/20 rounded-lg shadow-md h-auto max-h-[40rem] overflow-x-auto scrollbar scrollbar-thin scrollbar-thumb-[#555555] scrollbar-track-[#1a1a1a] scrollbar-thumb-rounded">
    <!-- Sticky Header -->
    <div
        class="sticky top-0 z-10 bg-surface border-b border-gray-700"
        style="position: -webkit-sticky; position: sticky; left: 0;"
    >
        <div class="flex items-center justify-between p-2" style="min-width: max-content;">
            <h2 class="text-xs font-bold text-primary">{title}</h2>
            <div class="flex items-center space-x-2">
                <a
                    href={downloadLink}
                    download
                    class="text-accent hover:text-primary flex items-center justify-center w-8 h-8 rounded-full bg-surface hover:bg-gray-700 transition"
                    aria-label="Download file"
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
                    on:click={openExpandedWindow}
                    class="text-accent hover:text-primary flex items-center justify-center w-8 h-8 rounded-full bg-surface hover:bg-gray-700 transition"
                    aria-label="Expand window"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 4h7M4 4v7M20 20h-7M20 20v-7M16 4h4v4M4 16v4h4"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Content -->
    <div class="p-4">
        <p class="text-sm text-secondary mb-4">{description}</p>
        <ul class="text-sm text-secondary list-disc pl-5">
            {#each highlights as highlight}
                <li>{highlight}</li>
            {/each}
        </ul>
        <pre 
        class="overflow-x-auto scrollbar scrollbar-thin scrollbar-thumb-[#555555] scrollbar-track-[#1a1a1a] scrollbar-thumb-rounded"
        style="font-size: 0.75rem; padding: 1rem; background-color: transparent; color: #ffffff; border-radius: 0.375rem;">
            <code class={`language-${codeType}`} style="font-size: inherit; line-height: inherit;">
                {codeSnippet}
            </code>
        </pre>
        
       
    </div>
</div>

<!-- Expanded Window -->
{#if isExpanded}
    <ExpandedWindow
        {title}
        {description}
        {highlights}
        {codeSnippet}
        {codeType}
        onClose={closeExpandedWindow}
    />
{/if}
