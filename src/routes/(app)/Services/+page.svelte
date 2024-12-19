<script lang="ts">
	// Logic to handle toggling service descriptions
	let openIndex: number | null = null; // To track which service item is open

	// Function to toggle service items
	function toggleDescription(index: number) {
		openIndex = openIndex === index ? null : index; // Close if already open, else open
	}
</script>

<!-- Hero Section -->
<section class="hero">
	<div class="overlay">
		<h1 class="hero-title">Services</h1>
	</div>
</section>

<!-- Services Content -->
<section class="services-content">
	<!-- Service Item 1 -->
	<div class="service-item">
		<h2 class="service-title" on:click={() => toggleDescription(0)}>
			Botox Treatments
		</h2>
		{#if openIndex === 0}
			<p class="service-paragraph">
				Botox is a non-surgical treatment used to reduce the appearance of fine lines and wrinkles by temporarily relaxing facial muscles. Perfect for achieving a youthful, refreshed look, Botox treatments are quick, effective, and require little to no downtime.
			</p>
		{/if}
	</div>

	<!-- Service Item 2 -->
	<div class="service-item">
		<h2 class="service-title" on:click={() => toggleDescription(1)}>
			Facial Fillers
		</h2>
		{#if openIndex === 1}
			<p class="service-paragraph">
				Facial fillers, also known as dermal fillers, are used to enhance facial volume, contour the face, and smooth out deep wrinkles. Whether you want fuller lips, defined cheekbones, or a more youthful profile, fillers can deliver natural and beautiful results.
			</p>
		{/if}
	</div>

	<!-- Service Item 3 -->
	<div class="service-item">
		<h2 class="service-title" on:click={() => toggleDescription(2)}>
			Platelet-Rich Plasma (PRP) Therapy
		</h2>
		{#if openIndex === 2}
			<p class="service-paragraph">
				PRP therapy involves using your own blood to stimulate collagen production and skin rejuvenation. This cutting-edge treatment is ideal for improving skin texture, reducing scars, and promoting a healthy, radiant complexion naturally.
			</p>
		{/if}
	</div>
</section>

<style>
	/* Hero Section */
	.hero {
		background: url('https://www.andersoncollege.com/wp-content/uploads/2019/02/Picture5b.jpg') 
		            no-repeat center center/cover;
		height: 400px;
		margin-top: 100px; /* Offset for fixed header */
		position: relative;
		color: white;
	}

	.overlay {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5); /* Dark overlay for text readability */
	}

	.hero-title {
		font-size: 3rem;
		font-weight: bold;
		text-transform: uppercase;
		text-align: center;
	}

	/* Services Section */
	.services-content {
		max-width: 800px;
		margin: 2rem auto;
		padding: 1rem;
		padding-bottom: 120px; /* Add padding to prevent overlap with footer */
	}

	.service-item {
		margin-bottom: 2rem;
		cursor: pointer;
	}

	.service-title {
		font-size: 1.5rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
		color: #333;
		transition: color 0.2s ease;
	}

	.service-title:hover {
		color: #007BFF; /* Highlight on hover */
	}

	.service-paragraph {
		font-size: 1rem;
		line-height: 1.6;
		color: #555;
		margin-top: 0.5rem;
	}
</style>
