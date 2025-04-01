<script lang="ts">
    //@ts-ignore
    import Navbar from "../../lib/components/Navbar.svelte";

    let resumeLink = "/Naum-Hoffman-Resume-2024s.pdf";


    $: safeResumeLink = resumeLink && resumeLink.startsWith('/') ? resumeLink : null;

    let uvicLogo = "/uvic.png";
    let pamwayLogo = "/Pamway.png";
    let isourceLogo = "/isource.png";
    let pollLogo = "/poll.png";

    $: safeUvicLogo = uvicLogo && uvicLogo.startsWith('/') ? uvicLogo : null;
    $: safePamwayLogo = pamwayLogo && pamwayLogo.startsWith('/') ? pamwayLogo : null;
    $: safeIsourceLogo = isourceLogo && isourceLogo.startsWith('/') ? isourceLogo : null;
    $: safePollLogo = pollLogo && pollLogo.startsWith('/') ? pollLogo : null;
</script>

<Navbar />

<main class="p-4 sm:p-6 bg-background text-primary font-sans min-h-screen">

    <div class="flex items-center space-x-3 mb-4 w-full max-w-2xl mx-auto">
        <h1 class="text-lg sm:text-xl font-bold">Resume Overview</h1>
    </div>


    <hr class="border-t border-gray-400 mb-6 w-full max-w-2xl mx-auto" />

    <div class="w-full max-w-2xl mx-auto border border-gray-300 rounded-lg p-4 sm:p-6 bg-surface shadow-md space-y-2">
        <div class="h-20 flex items-center justify-center w-full">
            <span class="text-xs sm:text-sm font-bold">SUMMARY</span>
        </div>
        <div class="flex flex-col w-full space-y-2 mb-6">
            <p class="text-xs sm:text-sm text-secondary">
                Hey, I'm <span class="font-bold text-primary">Naum Hoffman</span>. 
                I am passionate about <span class="text-accent font-semibold">software engineering </span> 
                and <span class="text-accent font-semibold">data science</span>, and I aspire to build a successful career in these fields.
            </p>
            <p class="text-xs sm:text-sm text-secondary">
                Want to see my full resume? 
                <a
                    href={safeResumeLink || '#'}
                    download="Naum-Resume-0225.pdf"
                    class={`text-accent underline hover:text-primary transition ${
                        safeResumeLink ? '' : 'cursor-not-allowed opacity-50'
                    }`}
                    on:click={safeResumeLink ? null : (e) => e.preventDefault()}
                >
                    Download it here.
                </a>
            </p>
        </div>

        <div class="h-20 flex items-center justify-center w-full">
            <span class="text-xs sm:text-sm font-bold">EDUCATION</span>
        </div>
        <div class="flex items-start space-x-2 mb-4">
            <img src={safeUvicLogo || ''} alt="University Logo" style="width: 40px; height: auto;" class="sm:w-[50px]" />
            <div>
                <p class="font-semibold text-primary text-xs sm:text-sm">University of Victoria</p>
                <p class="text-secondary text-[11px] sm:text-xs">Bachelor of Science in Computer Science</p>
                <p class="text-secondary text-[11px] sm:text-xs">December 2024</p>
            </div>
        </div>

        <div class="h-20 flex items-center justify-center w-full">
            <span class="text-xs sm:text-sm font-bold">PROFESSIONAL EXPERIENCE</span>
        </div>
        <div class="flex flex-col space-y-5">
            <div class="flex items-start space-x-2">
                <img src={safePamwayLogo || ''} alt="Pamway Logo" style="width: 40px; height: auto;" class="sm:w-[50px]" />
                <div>
                    <p class="font-semibold text-primary text-xs sm:text-sm">Pamway Logistics</p>
                    <p class="text-secondary text-[11px] sm:text-xs">Data Analyst Intern</p>
                    <p class="text-secondary text-[11px] sm:text-xs">March 2023 - September 2023</p>
                </div>
            </div>
            <div class="flex items-start space-x-2">
                <img src={safeIsourceLogo || ''} alt="iSource Logo" style="width: 40px; height: auto;" class="sm:w-[50px]" />
                <div>
                    <p class="font-semibold text-primary text-xs sm:text-sm">iSource Macedonia</p>
                    <p class="text-secondary text-[11px] sm:text-xs">Software Developer Intern</p>
                    <p class="text-secondary text-[11px] sm:text-xs">July 2022 - August 2022</p>
                </div>
            </div>
            <div class="flex items-start space-x-2">
                <img src={safePollLogo || ''} alt="Recruiter Polls Logo" style="width: 40px; height: auto;" class="sm:w-[50px]" />
                <div>
                    <p class="font-semibold text-primary text-xs sm:text-sm">Recruiter Polls</p>
                    <p class="text-secondary text-[11px] sm:text-xs">Software Developer</p>
                    <p class="text-secondary text-[11px] sm:text-xs">January 2021 - April 2021</p>
                </div>
            </div>
        </div>
    </div>
</main>