<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
import Sidebar from "$lib/components/Sidebar.svelte";


	let { children } = $props();
</script>
<Sidebar />
{@render children()}
<Footer />