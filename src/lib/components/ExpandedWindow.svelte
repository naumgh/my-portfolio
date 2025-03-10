<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
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

    let fontSize = 16; // Initial font size in pixels
    let contentContainer: HTMLDivElement | undefined;
    let observer: ResizeObserver | undefined;

    onMount(() => {
        Prism.highlightAll();
        adjustFontSize();
        setupResizeObserver();
    });

    onDestroy(() => {
        if (observer) observer.disconnect();
    });

    function adjustFontSize() {
        if (!contentContainer) return;

        const maxHeight = window.innerHeight * 0.9;
        let currentFontSize = 16; // Reset to initial size each time
        
        // Reset to initial size first
        contentContainer.style.fontSize = `${currentFontSize}px`;
        
        // If content is too tall, reduce font size
        while (contentContainer.offsetHeight > maxHeight && currentFontSize > 8) {
            currentFontSize -= 0.5;
            contentContainer.style.fontSize = `${currentFontSize}px`;
        }
        
        fontSize = currentFontSize;
    }

    function setupResizeObserver() {
        if (!contentContainer) return;
        
        observer = new ResizeObserver(() => {
            adjustFontSize();
        });
        observer.observe(contentContainer);
    }
</script>

<div class="fixed inset-0 z-50 bg-opacity-50 flex items-center justify-center p-4">
    <div class="relative bg-surface border border-gray-300/20 rounded-lg shadow-lg w-full max-h-[90vh] flex flex-col">
        <!-- Header -->
        <div class="bg-surface border-b border-gray-700 shrink-0">
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
        <div 
            bind:this={contentContainer}
            class="content-container flex-1 p-4 flex flex-col" 
            style="overflow: hidden;"
        >
            <p class="text-secondary mb-4 line-clamp-3" style="min-height: 3em;">{description}</p>
            {#if highlights.length > 0}
                <ul class="text-secondary list-disc pl-5 mb-4" style="max-height: 30%;">
                    {#each highlights as highlight}
                        <li class="line-clamp-2">{highlight}</li>
                    {/each}
                </ul>
            {/if}
            <pre 
                class="flex-1 text-sm"
                style="padding: 1rem; background-color: transparent; color: #ffffff; border-radius: 0.375rem; max-height: 60%; overflow: hidden;"
            >
                <code 
                    class={`language-${codeType}`} 
                    style="white-space: pre-wrap; display: block; height: 100%;"
                >{codeSnippet}</code>
            </pre>
        </div>
    </div>
</div>

<style>
    .content-container {
        font-size: 16px;
        transition: font-size 0.1s ease;
    }
</style>