<script lang="ts">

    //@ts-ignore
    import Navbar from "../../lib/components/Navbar.svelte";

    let name: string = '';
    let email: string = '';
    let message: string = '';
    let isSubmitting: boolean = false

    async function handleSubmit() {
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            });

            const responseData = await response.json();

            if (response.ok) {
                alert(responseData.message);
                name = '';
                email = '';
                message = '';
            } else {
                alert(responseData.error || 'Error sending the message.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message.');
        }

        setTimeout(() => {
            isSubmitting = false;
        }, 5000);
    }

</script>

<!-- Nav Bar from homepage-->
<Navbar />

<!-- Contact Form UI -->
<main class="flex flex-col items-center justify-center min-h-screen bg-background text-primary font-sans px-8">
    <h1 class="text-5xl font-bold mb-6 text-accent">Contact Me</h1>
    <p class="text-lg text-secondary mb-8 text-center">
        Feel free to send me a message below for inquires.
    </p>

    <form on:submit|preventDefault={handleSubmit} class="flex flex-col w-full max-w-lg space-y-4">
        <!-- Name Input -->
        <label for="name" class="text-secondary">Name</label>
        <input
            type="text"
            id="name"
            bind:value={name}
            required
            class="p-3 bg-surface border border-muted text-primary rounded-lg focus:ring-2 focus:ring-accent"
        />

        <!-- Email Input -->
        <label for="email" class="text-secondary">Email</label>
        <input
            type="email"
            id="email"
            bind:value={email}
            required
            class="p-3 bg-surface border border-muted text-primary rounded-lg focus:ring-2 focus:ring-accent"
        />

        <!-- Message Textarea -->
        <label for="message" class="text-secondary">Message</label>
        <textarea
            id="message"
            bind:value={message}
            required
            class="p-3 bg-surface border border-muted text-primary rounded-lg focus:ring-2 focus:ring-accent"
        />

        <!-- Submit Button -->
        <button type="submit" 
            class="px-8 py-3 bg-accent hover:bg-green-500 rounded-lg text-surface font-semibold transition duration-300 disabled:opacity-50" disabled={isSubmitting}>
            {isSubmitting ? 'Send' : 'Send'}
        </button>
        
    </form>

    <div class="mt-8">
        <p class="text-lg text-secondary text-center mb-4">
            Or connect with me on LinkedIn:
        </p>
        <a 
            href="https://www.linkedin.com/in/naum-hoffman/" 
            target="_blank" 
            class="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-300 flex items-center justify-center space-x-2"
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-6 w-6" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                stroke="none"
            >
                <path 
                    d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6 1.12 6 0 4.88 0 3.5S1.12 1 2.5 1s2.48 1.12 2.48 2.5zM1.22 8h3.55V24H1.22zm11.85 0H9.61v16h3.46v-8.3c0-4.57 5.55-4.94 5.55 0V24h3.45V13.06c0-7.46-8.56-7.18-9.41-3.49V8z"
                />
            </svg>
            <span>Add me on LinkedIn</span>
        </a>
    </div>
</main>

<!--
<Navbar />
-->