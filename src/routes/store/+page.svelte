<script>
	import Seo from '$lib/components/SEO.svelte';
	import { SOCIAL } from '$lib/const/INFO';
	// import { PRODUCTS } from '$lib/const/PRODUCTS';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	/**
	 * @type {any[]}
	 */
	let PRODUCTS = []
	let CATEGORIES = []
	export let data;
	onMount(() => {
		console.log(data.info_products);
		CATEGORIES = data.info_products.categories;
		PRODUCTS = data.info_products.services;
	});
	/**
	 * @param {string} category
	 */
	function filterByCategory( category ){
		if( category === 'todas' ){
			PRODUCTS = data.info_products.services;
		}else{
			PRODUCTS = data.info_products.services.filter( (/** @type {{ category: any; }} */ item) => item.category === category );
		}
	}
</script>
<Seo URL='/store' TITLE="Nuestra tienda" DESCRIPTION="Bienvenido a nuestra tienda en línea. Aquí encontrarás una amplia selección de productos de iluminación LED para diferentes aplicaciones. Explora nuestras categorías y encuentra la solución perfecta para tus necesidades de iluminación." />
<section id="header-top" class="header-top-bg">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-sm-12 col-md-12 col-lg-12">
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

<section id="news-feed" class="news-feed-bg news-grid-bg">
	<div class="container">
		
		<div class="row justify-content-center">
			<h1 class="text-white font-bold mb-3 text-2xl">Categorías</h1>
			<div class="col-sm-12 flex justify-center mb-7">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="category">
					<span class="badge uppercase cursor-pointer" on:click={ ()=> filterByCategory('todas')}>todas</span>
					{#each CATEGORIES as CATEGORY}
						<span class="badge uppercase cursor-pointer" on:click={ ()=> filterByCategory(CATEGORY)}>{CATEGORY}</span>
					{/each}
					<!-- <span class="badge uppercase cursor-pointer" on:click={ ()=> filterByCategory('Cintas Led')}>Cintas Led</span>
					<span class="badge uppercase cursor-pointer" on:click={ ()=> filterByCategory('Modulos Led')}>Modulos Led</span>
					<span class="badge uppercase cursor-pointer" on:click={ ()=> filterByCategory('Fuentes de poder')}>Fuentes de poder</span>
					<span class="badge uppercase cursor-pointer" on:click={ ()=> filterByCategory('Perfiles cinta led')}>Perfiles cinta led</span>
					<span class="badge uppercase cursor-pointer" on:click={ ()=> filterByCategory('hogar')}>hogar</span>
					<span class="badge uppercase cursor-pointer" on:click={ ()=> filterByCategory('Cables')}>Cables</span>
					<span class="badge uppercase cursor-pointer" on:click={ ()=> filterByCategory('conectores')}>conectores</span>
					<span class="badge uppercase cursor-pointer" on:click={ ()=> filterByCategory('controladores')}>controladores</span>
					<span class="badge uppercase cursor-pointer" on:click={ ()=> filterByCategory('sensores')}>sensores</span> -->
				</div>
			</div>
			{#each PRODUCTS as item}
				<div class="col-sm-12 col-md-4 col-lg-3" transition:fly={{ duration: 300,  y: 500, opacity: 0.5 }}>
					<div class="news-feed-main">
						<div class="new-feed-content">
							<div class="post-image-area">
								<div class="post-date">
								</div>
								<img src={item.image} alt="01-news-feed" />
							</div>
							<div class="category">
								<span class="badge uppercase">{item.category}</span>
							</div>
							<h3>{item.name}</h3>
							<h4 class="mb-5 text-white text-sm" >{item.description}</h4>
							<a target="_blank" href={SOCIAL.WHATSAPP + '?text=Hola estoy interesado en '+item.name}>Comprar<i class="fa fa-angle-right"></i></a>
						</div>
					</div>
				</div>
			{/each}
		</div>
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
