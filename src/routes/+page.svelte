<!--
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

LEARN SVELTE

<SCRIPT> tag allows you to write JavaScript code inside the component
the code inside runs when componente initialized

export let name = "Your Name";
export makes name a vairabler prop
name can now be set from ouside the component, by a parent component

-->

<script>
    export let name = "Naum Hoffman";
    export let jobTitle = "Software Engineer / Data Analyst";
    import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar />

<main class="flex flex-col items-center justify-center min-h-screen bg-background text-primary font-sans">

    <img src="/me2.jpg" alt="Naum Hoffman" class="w-36 h-36 rounded-full border-2 border-accent shadow-lg mb-6">

    <h1 class="text-6xl font-bold mb-2">{name}</h1>
    <p class="text-xl text-secondary mb-6">{jobTitle}</p>

    

    <a href="/projects" 
       class="px-8 py-3 bg-accent hover:bg-green-500 rounded-lg text-surface font-semibold transition duration-300">
        See My Work
    </a>


</main>
