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
		white-space: nowrap; /* Prevent wrapping */
	}

	.info {
		font-size: 0.85rem; /* Smaller text */
		color: #333;
		line-height: 1.2; /* Reduced line spacing */
		margin-top: 0.25rem;
	}

	.info p {
		margin: 0.1rem 0; /* Tightened margin between lines */
	}

	/* Social Media Icon */
	.social {
		display: flex;
		align-items: center;
	}


	/* Small screens adjustments */
	@media (max-width: 600px) {
		.footer {
			padding: 0 1rem; /* Reduce horizontal padding */
		}

		.title {
			font-size: 1.2rem; /* Slightly smaller title */
		}

		.info {
			font-size: 0.75rem; /* Further reduce info text size */
		}
	}
</style>
