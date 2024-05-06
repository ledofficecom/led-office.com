<script lang="ts">
	import { MENU } from '$lib/const/INFO';
	import { onMount } from 'svelte';
	import './global.css';
	import './tailwind.css';

	let isMobile = false;
	onMount(() => {
		if (window.innerWidth < 768) {
			isMobile = true;
		}
	});
</script>

<header id="header">
	<!-- BEGIN NAV -->
	<div class="navbar header-nav navbar-dark navbar-expand-lg" id="navbar">
		<div class="container">
			<!-- BRAND LOGO -->
			<a class="navbar-brand" id="navbar-brand" href="/">
				<!-- <img src="assets/images/logo.png" style="width: 66px;" alt="logo led office" /> -->
				<img src="/brand/logo-white.svg" class="w-[140px]" alt="Logo led office" />
			</a>

			<!-- BEGIN TOGGLER/COLLAPSIBE BUTTON -->
			<button
				class="navbar-toggler"
				id="navbar-toggler-bg"
				type="button"
				data-toggle="collapse"
				on:click={() => {
					document.getElementById('collapsibleNavbarx').classList.toggle('collapse');
				}}
			>
				<span class="navbar-toggler-icon" id="navbar-toggler-color-change">
					<i class="fa fa-bars" style="font-size:32px"></i>
				</span>
			</button>
			<div
				class="my-lg-0 navbar-collapse {isMobile ? 'collapse' : ''}  my-2"
				id="collapsibleNavbarx"
			>
				<ul class="navbar-nav nav mx-auto" id="navbar">
					{#each MENU as item}
						<li class="nav-item ml-lg-4">
							<a class="nav-link" id="hover-nav-menu" href={item.path}>{item.name}</a>
						</li>
					{/each}
				</ul>
				<a class="btn-nav btn-bg text-decoration-none" id="btn-bg-nav" href="/"
					><i class="fa fa-phone"></i>111-333-555-77</a
				>
			</div>
			<!-- END NAVBAR LINKS -->
		</div>
	</div>
	<!-- END NAV -->
</header>
<slot />
<footer>
	<div id="footer" class="footer-bg">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-md-12 col-lg-4">
					<div class="logo">
						<img src="/brand/logo-white.svg" class="w-[140px]" alt="Logo" />
					</div>
					<p class="footer-description footer-text-style my-3">
						This website is for health information and advice about coronavirus (COVID-19), how to
						prevent and protect yourself from disease.
					</p>
					<p class="footer-description footer-text-style my-3">
						Learn about the government response to coronavirus on covid.gov.pk
					</p>
					<ul class="nav footer-social-links mx-auto">
						<li class="nav-item link-social-icons link-footer" id="link-footer">
							<a class="nav-link light-text mr-2 p-0 px-0" href="#"
								><i class="fa fa-facebook"></i></a
							>
						</li>
						<li class="nav-item link-social-icons link-footer" id="link-footer">
							<a class="nav-link light-text mx-2 p-0 px-0" href="#"><i class="fa fa-twitter"></i></a
							>
						</li>
						<li class="nav-item link-social-icons link-footer" id="link-footer">
							<a class="nav-link light-text mx-2 p-0 px-0" href="#"
								><i class="fa fa-linkedin"></i></a
							>
						</li>
					</ul>
				</div>
				<div class="col-sm-12 col-md-6 col-lg-2">
					<ul class="nav flex-column my-lg-0 my-2">
						<li class="nav-item text-color">
							<h6 class="footer-heading"><i class="fa fa-plus fa-icon-style"></i>Quick Links</h6>
						</li>
						<li class="nav-item d-flex align-items-center link-footer">
							<a class="nav-link footer-text-style ml-2 px-0" href="#">Symptoms</a>
						</li>
						<li class="nav-item d-flex align-items-center link-footer" id="link-footer">
							<a class="nav-link footer-text-style ml-2 px-0" href="#">Prevention</a>
						</li>
						<li class="nav-item d-flex align-items-center link-footer" id="link-footer">
							<a class="nav-link footer-text-style ml-2 px-0" href="#">Protect Yourself</a>
						</li>
						<li class="nav-item d-flex align-items-center link-footer" id="link-footer">
							<a class="nav-link footer-text-style ml-2 px-0" href="#">About Corona</a>
						</li>
						<li class="nav-item d-flex align-items-center link-footer" id="link-footer">
							<a class="nav-link footer-text-style ml-2 px-0" href="#">FAQs</a>
						</li>
					</ul>
				</div>
				<div class="col-sm-12 col-md-6 col-lg-2">
					<ul class="nav flex-column my-lg-0 my-2">
						<li class="nav-item text-color">
							<h6 class="footer-heading"><i class="fa fa-plus fa-icon-style"></i>Helpful Links</h6>
						</li>
						<li class="nav-item d-flex align-items-center link-footer">
							<a class="nav-link footer-text-style ml-2 px-0" href="#">WHO</a>
						</li>
						<li class="nav-item d-flex align-items-center link-footer" id="link-footer">
							<a class="nav-link footer-text-style ml-2 px-0" href="#">Services</a>
						</li>
						<li class="nav-item d-flex align-items-center link-footer" id="link-footer">
							<a class="nav-link footer-text-style ml-2 px-0" href="#">Worldwide Info</a>
						</li>
						<li class="nav-item d-flex align-items-center link-footer" id="link-footer">
							<a class="nav-link footer-text-style ml-2 px-0" href="#">About Corona</a>
						</li>
						<li class="nav-item d-flex align-items-center link-footer" id="link-footer">
							<a class="nav-link footer-text-style ml-2 px-0" href="#">FAQs</a>
						</li>
					</ul>
				</div>
				<div class="col-sm-12 col-md-6 col-lg-2">
					<ul class="nav flex-column my-lg-0 my-2">
						<li class="nav-item text-color">
							<h6 class="footer-heading">
								<i class="fa fa-plus fa-icon-style"></i>Important Links
							</h6>
						</li>

						<li class="nav-item d-flex align-items-center link-footer">
							<a class="nav-link footer-text-style ml-2 px-0" href="#">Symptoms</a>
						</li>
						<li class="nav-item d-flex align-items-center link-footer" id="link-footer">
							<a class="nav-link footer-text-style ml-2 px-0" href="#">Prevention</a>
						</li>
						<li class="nav-item d-flex align-items-center link-footer" id="link-footer">
							<a class="nav-link footer-text-style ml-2 px-0" href="#">Protect Yourself</a>
						</li>
						<li class="nav-item d-flex align-items-center link-footer" id="link-footer">
							<a class="nav-link footer-text-style ml-2 px-0" href="#">About Corona</a>
						</li>
						<li class="nav-item d-flex align-items-center link-footer" id="link-footer">
							<a class="nav-link footer-text-style ml-2 px-0" href="#">FAQs</a>
						</li>
					</ul>
				</div>
				<div class="col-sm-12 col-md-6 col-lg-2">
					<ul class="nav flex-column my-lg-0 my-2">
						<li class="nav-item text-color">
							<h6 class="footer-heading"><i class="fa fa-plus fa-icon-style"></i>Extended Links</h6>
						</li>

						<li class="nav-item d-flex align-items-center link-footer">
							<a class="nav-link footer-text-style ml-2 px-0" href="#">WHO</a>
						</li>
						<li class="nav-item d-flex align-items-center link-footer" id="link-footer">
							<a class="nav-link footer-text-style ml-2 px-0" href="#">Services</a>
						</li>
						<li class="nav-item d-flex align-items-center link-footer" id="link-footer">
							<a class="nav-link footer-text-style ml-2 px-0" href="#">Worldwide Info</a>
						</li>
						<li class="nav-item d-flex align-items-center link-footer" id="link-footer">
							<a class="nav-link footer-text-style ml-2 px-0" href="#">About Corona</a>
						</li>
						<li class="nav-item d-flex align-items-center link-footer" id="link-footer">
							<a class="nav-link footer-text-style ml-2 px-0" href="#">FAQs</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="footer-bottom" id="border-color-change">
		<div class="container">
			<div class="row">
				<div class="footer-last">
					<p class="text-small footer-text-style py-lg-4 m-0 pt-4">
						©Copyright ECONOMIC Todos los derechos reservados.
					</p>
					<a href="#" class="footer-text-style footer-link m-0 py-4">Privacy Policy</a>
				</div>
			</div>
		</div>
	</div>
</footer>
