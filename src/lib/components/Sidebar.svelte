<script lang="ts">
	import { MapPinHouse, Syringe, Users, MessageCircleQuestion, SmartphoneNfc, Menu, X } from 'lucide-svelte';
	import * as Dialog from "$lib/components/ui/dialog/index.js";

	const sidebarItems = [
		{
			text: 'Services',
			icon: Syringe,
			href: '/Services'
		},
		{
			text: 'Location',
			icon: MapPinHouse,
			href: '/location'
		},
		{
			text: 'Meet Our Team',
			icon: Users,
			href: '/Team'
		},
		{
			text: 'FAQs',
			icon: MessageCircleQuestion,
			href: '/faqs'
		},
		{
			text: 'Contact',
			icon: SmartphoneNfc,
			href: '/Contact'
		}
	];

	let isMenuOpen = false;
</script>

<header class="header" translate="no">
	<!-- Circular Logo Linking to Home -->
	<a href="/" class="flex-shrink-0 mr-6">
		<img 
			src="/lisa_and_helen.png" 
			alt="Lisa and Helen" 
			class="w-[95px] h-[95px] object-cover rounded-full border border-black"
		/>
	</a>

	<!-- Title -->
	<h1 class="text-3xl font-bold text-center title">Cachet Caché</h1>

	<!-- Menu for larger screens -->
	<nav class="menu">
		{#each sidebarItems as { text, icon, href }}
			<a 
				href={href} 
				class="menu-item"
			>
				<svelte:component this={icon} class="icon" />
				<span>{text}</span>
			</a>
		{/each}
	</nav>

	<!-- Menu Button for Small Screens -->
	<button class="menu-toggle" on:click={() => (isMenuOpen = true)}>
		<Menu class="icon" />
	</button>

	<!-- Modal Dialog for Small Screens -->
	<Dialog.Root bind:open={isMenuOpen}>
		<Dialog.Content class="menu-modal">
			<div class="modal-header">
				<h2 class="text-xl font-bold">Menu</h2>
				<button on:click={() => (isMenuOpen = false)} aria-label="Close">
					
				</button>
			</div>
			<nav class="modal-nav">
				{#each sidebarItems as { text, icon, href }}
					<a 
						href={href} 
						class="modal-menu-item" 
						on:click={() => (isMenuOpen = false)}
					>
						<svelte:component this={icon} class="icon" />
						<span>{text}</span>
					</a>
				{/each}
			</nav>
		</Dialog.Content>
	</Dialog.Root>
</header>

<style>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: white;
		border-bottom: 1px solid #ccc;
		padding: 1rem;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		height: 100px;
	}

	.title {
		font-family: cursive;
	}

	.menu {
		display: flex;
		gap: 1rem;
	}

	.menu-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		text-decoration: none;
		color: #333;
		background-color: #f4f4f4;
		border-radius: 0.25rem;
		transition: background-color 0.2s ease;
	}

	.menu-item:hover {
		background-color: #e2e2e2;
	}

	.menu-item:nth-child(3) { /* Fixed size for "Meet Our Team" */
		flex-shrink: 0;
	}

	

	.menu-toggle {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
	}



	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	.modal-nav {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.modal-menu-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem;
		text-decoration: none;
		color: #333;
		border-radius: 0.25rem;
		transition: background-color 0.2s ease;
	}

	.modal-menu-item:hover {
		background-color: #e2e2e2;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.menu {
			display: none;
		}

		.menu-toggle {
			display: block;
		}
	}
</style>
