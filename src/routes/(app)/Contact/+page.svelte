<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';

	export let data;
	// const form = superForm(data.form);
</script>



<!-- <form method="POST" use:form>
	<label>First Name: <input type="text" name="firstName" /></label>
	<label>Last Name: <input type="text" name="lastName" /></label>
	<label>Email: <input type="email" name="email" /></label>
	<label>Message: <textarea name="message"></textarea></label>

	<button type="submit">Submit</button>
</form> -->

<!-- Hero Section -->
<section class="hero">
	<div class="overlay">
		<h1 class="hero-title">Contact</h1>
	</div>
</section>

<!-- Contact Content -->
<section class="contact-content">
	<div class="contact-item">
		<h2 class="contact-title">Phone</h2>
		<p class="contact-paragraph">514-555-5555</p>
	</div>

	<div class="contact-item">
		<h2 class="contact-title">Email</h2>
		<p class="contact-paragraph">info@cachetcache.com</p>
	</div>

	<div class="contact-item">
		<h2 class="contact-title">Location</h2>
		<p class="contact-paragraph">
			123 Vendôme Avenue, Montreal, Canada
		</p>
	</div>
</section>

<style>
	/* Hero Section */
	.hero {
		background: url('https://t3.ftcdn.net/jpg/03/33/26/22/240_F_333262223_iOXWIUUTR3SsDASkkOC7XGxbo731zkzY.jpg') 
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

	/* Contact Section */
	.contact-content {
		max-width: 800px;
		margin: 2rem auto;
		padding: 1rem;
		padding-bottom: 120px; /* Prevent overlap with footer */
	}

	.contact-item {
		margin-bottom: 2rem;
	}

	.contact-title {
		font-size: 1.5rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
		color: #333;
	}

	.contact-paragraph {
		font-size: 1rem;
		line-height: 1.6;
		color: #555;
	}
</style>
