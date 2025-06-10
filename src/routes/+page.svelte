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

fetch("https://api.github.com/users/naumgh")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("github-profile-pic").src = data.avatar_url;
    //document.getElementById("bio").textContent = data.bio;
});
</script>

<Navbar />

<main class="flex flex-col items-center justify-center min-h-screen bg-background text-primary font-sans text-center">

    <img
    id="github-profile-pic"
    class="w-36 h-36 rounded-full border-2 border-accent shadow-lg mb-6"
    alt="GitHub Profile Picture"
    />

    <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">{name}</h1>
    <p class="text-lg sm:text-xl text-secondary mb-6">{jobTitle}</p>

    <a href="/projects" 
       class="px-8 py-3 bg-accent hover:bg-green-500 rounded-lg text-surface font-semibold transition duration-300">
        See My Work
    </a>

</main>
