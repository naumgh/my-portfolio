<script lang="ts">
    import { onMount } from 'svelte';
    import ExpandedWindow from '../components/ExpandedWindow.svelte';
    import Prism from "prismjs";
    import "prismjs/components/prism-sql";
    import "prismjs/components/prism-python";
    import "prismjs/components/prism-java"
    import "prismjs/themes/prism-tomorrow.css";
    import "prismjs/components/prism-nasm";
    import "prismjs/themes/prism-tomorrow.css"; 


    export let title: string;
    export let description: string;
    export let highlights: string[];
    export let codeSnippet: string;
    export let downloadLink: string;
    export let codeType: string;
    export let id: string;
    export let visualization: string[] | null = null;

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

<div id={id} class="bg-surface relative border border-gray-300/20 rounded-lg shadow-md h-auto max-h-[45rem] overflow-x-auto scrollbar scrollbar-thin scrollbar-thumb-[#555555] scrollbar-track-[#1a1a1a] scrollbar-thumb-rounded">
    <!-- Sticky Header -->
    <div
        class="sticky top-0 z-10 bg-surface border-b border-gray-700"
        style="position: -webkit-sticky; position: sticky; left: 0;"
    >
        <div class="flex items-center justify-between p-2">
            <div class="flex flex-col w-full max-w-[calc(100%-5rem)]">
                <h2 class="text-xs font-bold text-primary">{title}</h2>
                <p class="text-[0.75rem] text-[#a1a1aa] mt-1 whitespace-pre-wrap break-words">{description}</p>
            </div>
            <div class="flex items-center space-x-2">
            <a
            href={downloadLink || '#'}
            class={`text-accent flex items-center justify-center w-8 h-8 rounded-full bg-surface transition ${
                downloadLink
                ? 'hover:text-primary hover:bg-gray-700'
                : 'text-gray-500 cursor-not-allowed'
            }`}
            aria-label="View on GitHub"
            target={downloadLink ? '_blank' : undefined}
            rel={downloadLink ? 'noopener noreferrer' : undefined}
            on:click={downloadLink ? null : (e) => e.preventDefault()}
            >
            <!-- GitHub Mark icon -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-5 h-5"
            >
                <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 
                    0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28
                    -.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28
                    -.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02
                    .08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04
                    2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75
                    -3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013
                    8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                clip-rule="evenodd"
                />
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

    <div style="padding: 1rem;">
        
        <ul style="font-size: 0.625rem; color: #a1a1aa; list-style-type: disc; padding-left: 1.25rem;">
            {#each highlights as highlight}
                <li>{highlight}</li>
            {/each}
        </ul>
        {#if visualization && visualization.length > 0}
            <div class="mt-4">
                <h4 class="text-sm font-semibold text-primary">Visualization(s)</h4>
                <div class="flex flex-col gap-6">
                    {#each visualization as image, index}
                        <div>
                            <img 
                                src={image} 
                                alt="{title} Visualization {index + 1}" 
                                class="rounded-md shadow-md" 
                                style="max-width: 100%; height: auto; object-fit: contain; max-height: 300px;" 
                            />
                        </div>
                    {/each}
                </div>
            </div>
        {/if}
        <pre style="overflow-x: auto; font-size: 0.5625rem; padding: 1rem; background-color: transparent; color: #ffffff; border-radius: 0.375rem; scrollbar-width: thin; scrollbar-color: #555555 #1a1a1a;">
            <code class={`language-${codeType}`} style="font-size: 0.5625rem; line-height: 1rem;">
                {codeSnippet}
            </code>
        </pre> 
    </div>
</div>

<!-- Expanded Window -->
{#if isExpanded}
    <ExpandedWindow
        {title}
        {id}
        {description}
        {highlights}
        {codeSnippet}
        {codeType}
        {downloadLink}
        {visualization}
        onClose={closeExpandedWindow}
    />
{/if}
