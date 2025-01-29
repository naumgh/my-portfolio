<script lang="ts">
    export let title: string;
    export let iconSrc: string;
    export let iconAlt: string = "Section Icon";
    export let titleColor: string = "#000000"; // Default black color
</script>

<div class="flex items-center space-x-3 mb-4">
    <img
        src={iconSrc}
        alt={iconAlt}
        class="h-8 w-8"
    />
    <h1 class="text-xl font-bold" style="color: {titleColor}">{title}</h1>
</div>