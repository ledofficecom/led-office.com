<script lang="ts">
	import { INFO_COMPANY, MENU, SOCIAL } from '$lib/const/INFO';
	import { onMount } from 'svelte';
	import './global.css';
	import './tailwind.css';
	import ButtonWhatsApp from '$lib/components/ButtonWhatsApp.svelte';

	let isMobile = false;
	onMount(() => {
		if (window.innerWidth < 768) {
			isMobile = true;
		}
	});
</script>
<ButtonWhatsApp/>
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
				<a class="btn-nav btn-bg text-decoration-none" id="btn-bg-nav" target="_blank" href={SOCIAL.WHATSAPP}
					><i class="fa fa-phone"></i>{INFO_COMPANY.PHONE}</a
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
						{INFO_COMPANY.ABOUT}
					</p>

					<ul class="nav footer-social-links mx-auto">
						<li class="nav-item link-social-icons link-footer" id="link-footer">
							<a target="_blank" class="nav-link light-text mr-2 p-0 px-0" href={SOCIAL.FACEBOOK}
								><i class="fa fa-facebook"></i></a
							>
						</li>
						<li class="nav-item link-social-icons link-footer" id="link-footer">
							<a target="_blank" class="nav-link light-text mx-2 p-0 px-0" href={SOCIAL.WHATSAPP}
								><i class="fa fa-whatsapp"></i></a
							>
						</li>
						<li class="nav-item link-social-icons link-footer" id="link-footer">
							<a target="_blank" class="nav-link light-text mx-2 p-0 px-0" href={SOCIAL.INSTAGRAM}
								><i class="fa fa-instagram"></i></a
							>
						</li>
					</ul>
				</div>
				<div class="col-sm-12 col-md-6 col-lg-2"></div>
				<div class="col-sm-12 col-md-6 col-lg-2"></div>
				<div class="col-sm-12 col-md-6 col-lg-2">
					<ul class="nav flex-column my-lg-0 my-2">
						<li class="nav-item text-color">
							<h6 class="footer-heading">
								<i class="fa fa-plus fa-icon-style"></i>Accesos rápidos
							</h6>
						</li>
						{#each MENU as item}
							<li class="nav-item d-flex align-items-center link-footer">
								<a class="nav-link footer-text-style ml-2 px-0" href={item.path}>{item.name}</a>
							</li>
						{/each}
					</ul>
				</div>
				<div class="col-sm-12 col-md-6 col-lg-2"></div>
			</div>
		</div>
	</div>
	<div class="footer-bottom" id="border-color-change">
		<div class="container">
			<div class="row">
				<div class="footer-last">
					<p class="text-small footer-text-style py-lg-4 m-0 pt-4">
						©Copyright {INFO_COMPANY.APP_NAME} Todos los derechos reservados.
					</p>
					
				</div>
			</div>
		</div>
	</div>
</footer>
