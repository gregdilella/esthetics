<script lang="ts">
	import { Instagram } from 'lucide-svelte'; // Import the Instagram icon
</script>

<footer class="footer">
	<div class="container">
		<!-- Title: Cachet Caché (cursive) and Clinique Médicaux Esthétique -->
		<h1 class="title" translate="no">
			<span class="cursive">Cachet Caché</span> 
			<span class="small-text">- clinique médicaux esthétique</span>
		</h1>
		<!-- Address and Phone -->
		<div class="info">
			<p>123 Vendôme, Montreal, Canada</p>
			<p>Phone: 514 555 5555</p>
		</div>
	</div>

	<!-- Instagram Logo -->
	<div class="social">
		<a 
			href="https://www.instagram.com/drlisahenriques/?hl=en" 
			target="_blank" 
			rel="noopener noreferrer"
			aria-label="Visit Instagram Profile"
		>
			<Instagram class="icon" />
		</a>
	</div>
</footer>

<style>
	.footer {
		background-color: white;
		width: 100%;
		position: fixed;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: space-between; /* Align content to left and right */
		padding: 0 2rem;
		border-top: 1px solid #ccc;
		box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
		height: 100px;
	}

	.container {
		text-align: left;
	}

	.title {
		font-size: 1.5rem; /* Large title */
		margin-bottom: 0.25rem;
		color: #333;
	}

	.cursive {
		font-family: cursive;
		font-weight: bold;
	}

	.small-text {
		font-size: 1rem;
		font-weight: normal;
		color: #555;
	}

	.info {
		font-size: 1rem;
		color: #333;
	}

	.info p {
		margin: 0.2rem 0;
	}

	/* Social Media Icon */
	.social {
		display: flex;
		align-items: center;
	}

	.icon {
		width: 24px;
		height: 24px;
		color: #333; /* Default icon color */
		transition: color 0.3s ease;
	}

	.icon:hover {
		color: #e1306c; /* Instagram brand color on hover */
	}
</style>
