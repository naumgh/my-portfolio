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
  export let summary = "Hi, I’m Naum Hoffman, a Computer Science grad from the University of Victoria, now based in Seattle. My journey into tech started with hosting servers in video games and grew into a passion for solving real-world problems with Python and Java. I’ve worked as a data analyst at Pamway Logistics, aligning technical insights with business goals, and gained international experience in Macedonia that pushed me out of my comfort zone and helped me grow. Outside of tech, I’m into fitness, backcountry camping in the Cascades and Olympic Peninsula, and volunteering with the SCA to restore native ecosystems. I'm always building, learning, and looking for ways to create meaningful impact.";
  import Navbar from "$lib/components/Navbar.svelte";

  let jobTitle = ""; // this will be set via fetch

  fetch("https://api.github.com/users/naumgh")
  .then((res) => res.json())
  .then((data) => {
    const profilePic = document.getElementById("github-profile-pic");
    if (profilePic) {
      profilePic.src = data.avatar_url;

    }
    jobTitle = data.bio;
  });
</script>

<Navbar />

<main class="flex flex-col items-center justify-center min-h-screen bg-background text-primary font-sans text-center">

<div class="shimmer-effect rounded-full w-[270px] h-[270px] mb-6">
  <img
    id="github-profile-pic"
    class="w-full h-full rounded-full border-4 border-accent shadow-lg object-cover profile-animate fade-in-up"
    alt="GitHub Profile Picture"
  />
</div>

    <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">{name}</h1>
    <p class="text-lg sm:text-xl text-secondary mb-6">{jobTitle}</p>
    <p class="text-sm sm:text-base text-secondary mb-8 max-w-2xl px-4">
        {summary}
    </p>

    <a href="/projects" 
       class="px-8 py-3 bg-accent hover:bg-green-500 rounded-lg text-surface font-semibold transition duration-300">
        See My Work
    </a>

</main>
