<script lang="ts">
	// No logic needed for this static FAQ page
</script>

<!-- Hero Section -->
<section class="hero">
	<div class="overlay">
		<h1 class="hero-title">FAQs</h1>
	</div>
</section>

<!-- FAQ Content -->
<section class="faq-content">
	<div class="faq-item">
		<h2 class="faq-title">How far in advance should I make my appointment?</h2>
		<p class="faq-paragraph">
			Many of our services are booked weeks in advance, so it is best to call two to three weeks ahead to ensure you get the date and time you desire. A deposit is required at the time of booking. For information about deposits, see Spa Etiquette.
		</p>
	</div>

	<div class="faq-item">
		<h2 class="faq-title">On the day of my appointment, what time should I arrive?</h2>
		<p class="faq-paragraph">
			Please arrive 10 to 15 minutes prior to your scheduled appointment time. For microblading and microneedling, arrive about 20 to 30 minutes early for numbing. If you are running more than 15 minutes late, you will need to reschedule your appointment, and you will lose your deposit and will have to put down another deposit. See Spa Etiquette for information on our late and no-show policies.
		</p>
	</div>

	<div class="faq-item">
		<h2 class="faq-title">What is the cancellation policy?</h2>
		<p class="faq-paragraph">
			To receive a refund of your deposit, we require you to cancel or reschedule no less than 24 hours before your appointment.
		</p>
	</div>
</section>

<style>
	/* Hero Section */
	.hero {
		background: url('https://media.istockphoto.com/id/941762276/photo/doctors-walking-in-clinic.jpg?s=612x612&w=0&k=20&c=OwsH-lT88akwiPOYm1kTVs6c7mXHBUDgUbnQuCssyyg=') 
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

	/* FAQ Section */
	.faq-content {
		max-width: 800px;
		margin: 2rem auto;
		padding: 1rem;
		padding-bottom: 120px; /* Add padding to prevent overlap with footer */
	}

	.faq-item {
		margin-bottom: 2rem;
	}

	.faq-title {
		font-size: 1.5rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
		color: #333;
	}

	.faq-paragraph {
		font-size: 1rem;
		line-height: 1.6;
		color: #555;
	}
</style>
