<script lang="ts">
	// Import Shadcn components
	import * as Dialog from "$lib/components/ui/dialog/index.js";
</script>

<section class="team-container">
	<!-- Profile 1: Dr. Lisa Henriques -->
	<Dialog.Root>
		<Dialog.Trigger>
			<div class="team-member">
				<div class="profile-image">
					<img 
						src="https://www.polycdi.net/wp-content/uploads/2023/08/IMGL00151.jpg" 
						alt="Dr. Lisa Henriques"
					/>
				</div>
				<div class="profile-info">
					<h1 class="title">Dr. Lisa Henriques</h1>
					<p class="subtitle">Lead Medical Consultant</p>
				</div>
			</div>
		</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-[425px]">
			<!-- Profile Photo -->
			<div class="dialog-image">
				<img 
					src="https://www.polycdi.net/wp-content/uploads/2023/08/IMGL00151.jpg" 
					alt="Dr. Lisa Henriques"
				/>
			</div>
			<!-- Dialog Header -->
			<Dialog.Header>
				<Dialog.Title>Dr. Lisa Henriques</Dialog.Title>
			</Dialog.Header>
			<!-- Bio Content -->
			<div class="bio-content">
				<p>
					Dr. Lisa Henriques is a seasoned medical professional with over 15 years of experience in aesthetic medicine. She has worked with leading clinics globally to advance non-invasive treatments.
				</p>
				<p>
					Her expertise includes micro-needling, advanced skincare therapies, and patient-centric solutions for natural, healthy results.
				</p>
			</div>
		</Dialog.Content>
	</Dialog.Root>

	<!-- Profile 2: Dr. Helen B -->
	<Dialog.Root>
		<Dialog.Trigger>
			<div class="team-member">
				<div class="profile-image">
					<img 
						src="/blondedoctor.png" 
						alt="Dr. Helen B"
					/>
				</div>
				<div class="profile-info">
					<h1 class="title">Dr. Helen B</h1>
					<p class="subtitle">Medical Consultant</p>
				</div>
			</div>
		</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-[425px]">
			<!-- Profile Photo -->
			<div class="dialog-image">
				<img 
					src="/blondedoctor.png" 
					alt="Dr. Helen B"
				/>
			</div>
			<!-- Dialog Header -->
			<Dialog.Header>
				<Dialog.Title>Dr. Helen B</Dialog.Title>
			</Dialog.Header>
			<!-- Bio Content -->
			<div class="bio-content">
				<p>
					Dr. Helen B specializes in dermatological aesthetics with a focus on personalized treatment plans. Her passion lies in enhancing natural beauty through cutting-edge techniques.
				</p>
				<p>
					She has trained internationally and is known for her expertise in laser treatments and facial rejuvenation procedures.
				</p>
			</div>
		</Dialog.Content>
	</Dialog.Root>
</section>

<style>
	/* Container Styling */
	.team-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2rem;
		margin: 3rem auto;
		padding: 5rem 1.5rem 1.5rem;
		max-width: 1200px;
		background-color: #fff;
        flex-direction: column;
		align-items: center; /* Center items horizontally */
		justify-content: center; /* Center items vertically */
		gap: 1.5rem;
	}

	.team-member {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		background-color: #f9f9f9;
		padding: 1.5rem;
		border-radius: 0.5rem;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		cursor: pointer;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
		height: 350px; /* Ensures all cards have the same height */
		width: 300px;  /* Ensures all cards have the same width */
	}

	.team-member:hover {
		transform: translateY(-5px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}

	/* Profile Image */
	.profile-image img {
		width: 150px;
		height: 150px;
		object-fit: cover;
		border-radius: 50%;
		border: 3px solid black;
	}

	/* Title Styling */
	.title {
		font-size: 1.5rem;
		font-weight: bold;
		margin-top: 1rem;
		color: #333;
	}

	/* Subtitle Styling */
	.subtitle {
		font-size: 1rem;
		color: #777;
		margin-top: 0.5rem;
	}

	/* Dialog Image */
	.dialog-image img {
		width: 150px;
		height: 150px;
		object-fit: cover;
		margin: 0 auto 1rem;
		border-radius: 50%;
		border: 2px solid black;
	}

	/* Bio Content */
	.bio-content {
		margin: 1rem 0;
		color: #555;
		font-size: 0.95rem;
		line-height: 1.6;
		text-align: center;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.team-container {
			flex-direction: column;
			gap: 1.5rem;
		}
	}
</style>
