<script lang="ts">
	// You can add any necessary logic here if needed.
</script>

<!-- Hero Section -->
<section class="hero">
	<div class="overlay">
		<h1 class="hero-title">Our Location</h1>
	</div>
</section>

<!-- Location Details -->
<section class="location-content">
	<div class="location-description">
		<p>
			Welcome to our clinic! We are conveniently located in the heart of the city, offering a tranquil environment and easy accessibility for all our patients. Our team is dedicated to providing high-quality medical and cosmetic services to ensure your well-being and satisfaction.
		</p>
	</div>

	<div class="location-map">
		<iframe 
			src="https://www.google.com/maps/place/Medical+Clinic+Vendome/@45.4741863,-73.6044592,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc910a4ec4d9219:0x6a7e7019a028ff2!8m2!3d45.4741863!4d-73.6044592!16s%2Fg%2F1tk6vjhm?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" 
			width="100%" 
			height="450" 
			style="border:0;" 
			allowfullscreen="" 
			loading="lazy" 
			referrerpolicy="no-referrer-when-downgrade">
		</iframe>
	</div>
</section>

<style>
	/* Hero Section */
	.hero {
		background: url('https://oakvillemed.ca/wp-content/uploads/2023/06/IMG_6516-scaled-1.jpg') 
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

	/* Location Section */
	.location-content {
		max-width: 800px;
		margin: 2rem auto;
		padding: 1rem;
	}

	.location-description {
		font-size: 1.2rem;
		line-height: 1.8;
		color: #333;
		margin-bottom: 2rem;
	}

	.location-map {
		width: 100%;
	}
</style>
