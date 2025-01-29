<script lang="ts">
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
</script>

<footer class="fixed bottom-4 right-4 z-50">
    <button
        on:click={scrollToTop}
        class="bg-[#0A0A0A] text-accent w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition"
        aria-label="Scroll back to top"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-6 h-6"
        >
            <path d="M12 19V5M5 12l7-7 7 7" class="stroke-current" />
        </svg>
    </button>
</footer>
