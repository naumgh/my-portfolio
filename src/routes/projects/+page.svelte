<script lang="ts">
    //@ts-ignore
    import Navbar from "../../lib/components/Navbar.svelte";
    import { Octokit } from "octokit";
    import { onMount } from 'svelte';
    
    interface Repo {
        id: number;
        name: string;
        html_url: string;
        description: string | null;
        stargazers_count: number;
        forks_count: number;
    }
    
    interface File {
        name: string;
        path: string;
        type: string; // "file" or "dir"
        download_url: string | null; // null for directories
    }
    
    let repos: Repo[] = [];
    let fileLists: Record<string, File[]> = {}; // Store files for each repository by name
    let openDropdown: string | null = null; // Track the currently open dropdown
    
    const octokit = new Octokit({
        auth: import.meta.env.VITE_GIT_AUTH,
    });
    
    async function fetchRepo() {
        try {
            const result = await octokit.request("GET /users/{username}/repos", {
                username: "naumgh",
                per_page: 10,
                sort: "created",
            });
    
            repos = result.data as Repo[];
        } catch (error) {
            console.error("Error fetching repositories:", error);
        }
    }
    
    async function fetchFiles(repoName: string) {
        if (fileLists[repoName]) return; // Avoid re-fetching if files are already loaded
    
        try {
            const result = await octokit.request("GET /repos/{owner}/{repo}/contents", {
                owner: "naumgh",
                repo: repoName,
            });
    
            fileLists[repoName] = result.data as File[];
        } catch (error) {
            console.error(`Error fetching files for ${repoName}:`, error);
            fileLists[repoName] = []; // Set to empty if an error occurs
        }
    }
    
    function toggleDropdown(repoName: string) {
        if (openDropdown === repoName) {
            openDropdown = null; // Close the dropdown if already open
        } else {
            openDropdown = repoName; // Open the dropdown
            fetchFiles(repoName); // Fetch files for the repository
        }
    }
    
    onMount(() => {
        fetchRepo();
    });
    </script>
    
    <Navbar />
    
    <main class="p-10 bg-background text-primary font-sans min-h-screen">
        <!-- Header with PostgreSQL Logo -->
        <div class="flex items-center space-x-4 mb-6">
            <!-- PostgreSQL Logo -->
            <img
                src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
                alt="PostgreSQL Logo"
                class="h-12 w-12"
            />
    
            <!-- Title -->
            <h1 class="text-5xl font-bold" style="color: #336791">
                SQL Projects
            </h1>
        </div>
    
        <!-- Divider Line -->
        <hr class="border-t border-gray-500 mb-8" />

        <div class="flex items-center space-x-4 mb-6">
            <!-- PostgreSQL Logo -->
            <img
                src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
                alt="PostgreSQL Logo"
                class="h-12 w-12"
            />
    
            <!-- Title -->
            <h1 class="text-5xl font-bold" style="color: #336791">
                SQL Projects
            </h1>
        </div>
    
        <!-- Divider Line -->
        <hr class="border-t border-gray-500 mb-8" />
   
    </main>

    

















         
        <!--
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#if repos.length > 0}
                {#each repos as repo (repo.id)}
                    {#if repo.name !== "naumgh"}
                        <div class="p-4 bg-surface border border-muted rounded-lg hover:border-accent transition">
                            Project Card 
                            <div
                                class="cursor-pointer"
                                on:click={() => toggleDropdown(repo.name)}
                                aria-expanded={openDropdown === repo.name}
                            >
                                <h2 class="text-xl font-semibold">{repo.name}</h2>
                                <p class="text-secondary mb-auto">{repo.description || "No description provided."}</p>
                            </div>
    
                            Dropdown for Files 
                            <div
                                class={`mt-4 overflow-hidden transition-[max-height] duration-300 ${
                                    openDropdown === repo.name ? "max-h-96" : "max-h-0"
                                }`}
                            >
                                <ul class="bg-muted rounded-lg p-4">
                                    TO DO SECTION 
                                </ul>
                            </div>
                        </div>
                    {/if}
                {/each}
            {:else}
                <p class="text-secondary">No repositories found or still loading...</p>
            {/if}
        </div>
    -->