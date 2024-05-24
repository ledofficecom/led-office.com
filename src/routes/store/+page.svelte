<script>
	import { goto } from '$app/navigation';

	//@ts-nochecks
	import Seo from '$lib/components/SEO.svelte';
	import { SOCIAL } from '$lib/const/INFO';
	// import { PRODUCTS } from '$lib/const/PRODUCTS';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	/**
	 * @type {any[]}
	 */
	// @ts-ignore
	export let data;

	/**
	 * @type {any[]}
	 */
	let PRODUCTS = [];
	/**
	 * @type {any[]}
	 */
	let CATEGORIES = [];
	// @ts-ignore
	let LOADING = false;
	/**
	 * @type {number}
	 */
	let TOTAL_PAGES;
	/**
	 * @type {string}
	 */
	let search;
	/**
	 * @type {string | number | NodeJS.Timeout | undefined}
	 */
	let active_search;
	let show_searching = false;
	let currentPage = 1;
	const PRODUCTS_PER_PAGE = 16;

	let products_showing = getProductsByPage(currentPage);
	let show_paginator = true;
	let paginator = [];
	let total_results = 16;

	// Función para generar la lista de números de página visibles
	function generateVisiblePages() {
		const totalPages = TOTAL_PAGES;
		const visiblePages = [];
		const maxVisible = 5; // Puedes ajustar la cantidad máxima de números de página visibles

		if (totalPages <= maxVisible) {
			for (let i = 1; i <= totalPages; i++) {
				visiblePages.push(i);
			}
		} else {
			const leftOffset = Math.max(currentPage - Math.floor(maxVisible / 2), 1);
			const rightOffset = Math.min(leftOffset + maxVisible - 1, totalPages);

			if (leftOffset > 1) {
				visiblePages.push(1);
				if (leftOffset > 2) {
					visiblePages.push('...');
				}
			}

			for (let i = leftOffset; i <= rightOffset; i++) {
				visiblePages.push(i);
			}

			if (rightOffset < totalPages) {
				if (rightOffset < totalPages - 1) {
					visiblePages.push('...');
				}
				visiblePages.push(totalPages);
			}
		}

		return visiblePages;
	}
	function find() {
		show_searching = true;
		clearTimeout(active_search);
		active_search = setTimeout(() => {
			if (search == '') {
				products_showing = getProductsByPage(1);
				show_paginator = true;
				show_searching = false;
				total_results = PRODUCTS.length;
				return;
			}
			if (search.length >= 3) {
				show_searching = false;
				// || producto.category.toLowerCase().includes(search.toLowerCase())
				const resultados = PRODUCTS.filter(
					(producto) => producto.name.toLowerCase().includes(search.toLowerCase()),
					// || producto.category.toLowerCase().includes(search.toLowerCase()),
				);
				products_showing = resultados;
				show_paginator = false;
				total_results = resultados.length;
			} else {
				show_paginator = true;
				show_searching = false;
				return;
			}
		}, 1000);
	}
	/**
	 * @param {number} pageNumber
	 */
	function getProductsByPage(pageNumber) {
		const startIndex = (pageNumber - 1) * PRODUCTS_PER_PAGE;
		const endIndex = startIndex + PRODUCTS_PER_PAGE;

		return PRODUCTS.slice(startIndex, endIndex);
	}

	onMount(() => {
		// @ts-ignore
		CATEGORIES = data.info_products.categories;
		// @ts-ignore
		PRODUCTS = data.info_products.services;
		total_results = PRODUCTS.length;
		products_showing = getProductsByPage(currentPage);
		TOTAL_PAGES = Math.ceil(PRODUCTS.length / PRODUCTS_PER_PAGE);
		paginator = generateVisiblePages();
	});

	// @ts-ignore
	function filterByCategory(category) {
		console.log(category);
		if (category === 'todas') {
			// @ts-ignore
			products_showing = data.info_products.services;
			total_results = PRODUCTS.length;
		} else {
			// @ts-ignore
			products_showing = data.info_products.services.filter(
				(/** @type {{ category: any; }} */ item) => item.category === category,
			);
			total_results = products_showing.length;
		}
	}
	// @ts-ignore
	function changePage(page) {
		goto(`#filter_input`);
		currentPage = page;
		paginator = generateVisiblePages();
		products_showing = getProductsByPage(currentPage);
	}
</script>

<Seo
	URL="/store"
	TITLE="Nuestra tienda"
	DESCRIPTION="Bienvenido a nuestra tienda en línea. Aquí encontrarás una amplia selección de productos de iluminación LED para diferentes aplicaciones. Explora nuestras categorías y encuentra la solución perfecta para tus necesidades de iluminación."
/>
<section id="header-top" class="header-top-bg">
	<div class="container">
		<div class="row align-items-center">
			<div id="filter_inputs" class="col-sm-12 col-md-12 col-lg-12">
				<div class="home-content text-center">
					<h1>Nuestra tienda</h1>
					<ul class="breadcrumb breadcrumb-style justify-content-center">
						<li class="breadcrumb-item"><a href="/">Inicio</a></li>
						<li class="breadcrumb-item active">Tienda</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
<section id="news-feed" class="news-feed-bg news-grid-bg sidebar-page-container">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-sm-12">
				<div class="sidebar">
					<div class="sidebar-widget sidebar-tags">
						<div class="row">
							<div class="col-sm-12 col-md-4 col-lg-4">
								<div class="widget-title">
									<h4>Buscar producto</h4>
								</div>
								<div class="sidebar-page-container">
									<div class="sidebar">
										<div class="sidebar-search mb-5">
											<div class="search-form">
												<div class="form-group">
													<input
														on:input={find}
														bind:value={search}
														type="search"
														name="name"
														class="mb-3"
														placeholder="Nombre"
													/>
													<button type="button" class="flex items-center justify-center">
														{#if show_searching}
															<img src="/loader-spin.svg" style="width: 25px;" alt="" />
														{:else}
															<i class="fa fa-search"></i>
														{/if}
													</button>
													<small class="text-white"
														>Mostrando <b>{total_results}</b> resultados</small
													>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-12 col-md-8 col-lg-8">
								<div class="widget-title">
									<h4>Categorías</h4>
								</div>
								<div class="widget-content">
									<!-- svelte-ignore a11y-invalid-attribute -->
									<ul class="tags-list clearfix">
										<li>
											<a href="#filter_input" on:click={() => filterByCategory('todas')}>Todas</a>
										</li>
										{#each CATEGORIES as CATEGORY}
											<li>
												<a
													href="#filter_input"
													class="capitalize"
													on:click={() => filterByCategory(CATEGORY)}>{CATEGORY}</a
												>
											</li>
										{/each}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<div id="filter_input"></div>
<section id="news-feed" class="news-feed-bg news-grid-bg">
	<div class="container">
		<div class="row justify-content-center">
			{#each products_showing as item}
				<div
					class="col-sm-12 col-md-4 col-lg-3"
					transition:fly={{ duration: 300, y: 500, opacity: 0.5 }}
				>
					<div class="news-feed-main">
						<div class="new-feed-content">
							<div class="post-image-area">
								<div class="post-date"></div>
								<img
									src={item.image}
									alt="01-news-feed h-[260px] object-cover"
									style="height: 260px; object-fit: cover;"
								/>
							</div>
							{#if item.category}
								<div class="category">
									<span class="badge uppercase">{item.category}</span>
								</div>
							{/if}
							<h3>{item.name}</h3>
							<h4 class="mb-5 text-sm text-white">{item.description ? item.description : ''}</h4>
							<a
								target="_blank"
								href={SOCIAL.WHATSAPP + '?text=Hola estoy interesado en ' + item.name}
								>Comprar<i class="fa fa-angle-right"></i></a
							>
						</div>
					</div>
				</div>
			{/each}
		</div>
		{#if show_paginator}
			<div class="flex justify-center">
				{#each paginator as page}
					{#if page === '...'}
						<span class="text-white">...</span>
					{:else}
						<button
							class={`rounded-full px-4 py-2 ${currentPage === page ? 'bg-[#16CF16] font-semibold text-white' : 'font-semibold text-white transition duration-300 hover:bg-[#329f32]'}`}
							on:click={() => changePage(page)}
						>
							{page}
						</button>
					{/if}
				{/each}
			</div>
		{/if}
	</div>
</section>

<section id="cta-area" class="cta-area-bg">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-sm-12 col-md-12 col-lg-12">
				<div class="content-main cta-area-inner-bg mt-0 p-5 text-center">
					<div class="content-top text-center">
						<h2 class="mt-0">¿Tienes alguna inquietud?</h2>
					</div>
					<div class="content-bottom content-bottom-width text-center">
						<p>
							Recuerda usar todos nuestros canales de atención de cliente para resolver tus dudas
						</p>
					</div>
					<a href="/contact" id="outline-btn" class="home-btn outline-btn mr-sm-4 mr-md-4"
						>Contacto</a
					>
				</div>
			</div>
		</div>
	</div>
</section>
