<script lang="ts">
    //@ts-ignore
    import Navbar from "../../lib/components/Navbar.svelte";
</script>

<Navbar />

<main class="p-6 px-[20vw] bg-background text-primary font-sans min-h-screen">
    <!-- Resume Summary -->
    <div class="flex items-center space-x-3 mb-4 max-w-2xl mx-auto">
        <h1 class="text-xl font-bold">Resume Overview</h1>
    </div>

    <!-- Divider Line -->
    <hr class="border-t border-gray-400 mb-6 max-w-2xl mx-auto" />
    <!-- Resume Card -->
     <!-- global card affects everything-->
    <div class="max-w-2xl mx-auto border border-gray-300 rounded-lg p-6 bg-surface shadow-md space-y-2">
        <!-- Circle around Summary -->
        <div class="h-20 flex items-center justify-center w-full">
            <span class="text-sm font-bold">SUMMARY</span>
        </div>
        <div class="flex flex-col w-full space-y-2 mb-6">
            <p class="text-sm text-secondary">
                Hey, I'm <span class="font-bold text-primary">Naum Hoffman</span>. 
                I am passionate about <span class="text-accent font-semibold">software engineering </span> 
                and <span class="text-accent font-semibold">data science</span>, and I aspire to build a successful career in these fields.
            </p>
            <p class="text-sm text-secondary">
                Want to see my full resume? 
                <a
                    href="/Naum-Hoffman-Resume-2024s.pdf"
                    download="Naum-Resume-0225.pdf"
                    class="text-accent underline hover:text-primary transition"
                >
                    Download it here.
                </a>
            </p>
        </div>

        <!-- Circle around Education -->
        <div class="h-20 flex items-center justify-center w-full">
                <span class="text-sm font-bold">EDUCATION</span>

        </div>
        <div class="flex items-start space-x-2 mb-4">
            <img src="/uvic.png" alt="University Logo" style="width: 50px; height: auto;" />
            <div>
                <p class="font-semibold text-primary text-sm">University of Victoria</p>
                <p class="text-secondary text-xs">Bachelor of Science in Computer Science</p>
                <p class="text-secondary text-xs">December 2024</p>
            </div>
        </div>

        <!-- Circle around Professional Experience -->
        <div class="h-20 flex items-center justify-center w-full">
                <span class="text-sm font-bold">PROFESSIONAL EXPERIENCE</span>
        </div>
        <div class="flex flex-col space-y-5">
            <div class="flex items-start space-x-2">
                <img src="/Pamway.png" alt="Pamway Logo" style="width: 50px; height: auto;" />
                <div>
                    <p class="font-semibold text-primary text-sm">Pamway Logistics</p>
                    <p class="text-secondary text-xs">Data Analyst Intern</p>
                    <p class="text-secondary text-xs">March 2023 - September 2023</p>
                </div>
            </div>
            <div class="flex items-start space-x-2">
                <img src="/isource.png" alt="iSource Logo" style="width: 50px; height: auto;" />
                <div>
                    <p class="font-semibold text-primary text-sm">iSource Macedonia</p>
                    <p class="text-secondary text-xs">Software Developer Intern</p>
                    <p class="text-secondary text-xs">July 2022 - August 2022</p>
                </div>
            </div>
            <div class="flex items-start space-x-2">
                <img src="/poll.png" alt="Recruiter Polls Logo" style="width: 50px; height: auto;" />
                <div>
                    <p class="font-semibold text-primary text-sm">Recruiter Polls</p>
                    <p class="text-secondary text-xs">Software Developer</p>
                    <p class="text-secondary text-xs">January 2021 - April 2021</p>
                </div>
            </div>
        </div>

        <!-- Circle around Skills & Tools -->
        <div class="h-20 flex items-center justify-center w-full">
                <span class="text-sm font-bold">Skills & Tools</span>
        </div>
        <div class="flex flex-col space-y-2">
            <!-- Languages -->
            <div>
                <h3 class="text-sm font-bold text-primary mb-1">Languages</h3>
                <p class="text-xs text-secondary">Python, C, C++, Java, JavaScript, SQL, Mars MIPS Assembly</p>
            </div>
            <!-- Tools & Frameworks -->
            <div>
                <h3 class="text-sm font-bold text-primary mb-1">Tools & Frameworks</h3>
                <p class="text-xs text-secondary">React, GraphQL, Express.js, MongoDB, PostgreSQL, SQLite, Apollo Server</p>
            </div>
            <!-- Other Tools & Concepts -->
            <div>
                <h3 class="text-sm font-bold text-primary mb-1">Other Tools & Concepts</h3>
                <p class="text-xs text-secondary">Git, Vim, Scikit-learn, LaTeX, WordPress, MS Suite, Learning Theory, OOP Principles</p>
            </div>
            <!-- Skills -->
            <div>
                <h3 class="text-sm font-bold text-primary mb-1">Skills</h3>
                <p class="text-xs text-secondary">Data Analytics, Power BI, Machine Learning, Tableau, Unix, Operating Systems, Databases, Math, Numerical Analysis, Statistics, UX, AWS</p>
            </div>
        </div>
    </div>
</main>
