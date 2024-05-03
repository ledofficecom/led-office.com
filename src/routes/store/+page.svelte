<script>
	import { SOCIAL } from '$lib/const/INFO';
	import { PRODUCTS } from '$lib/const/PRODUCTS';
</script>

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
			{#each PRODUCTS as item}
				<div class="col-sm-12 col-md-4 col-lg-3">
					<div class="news-feed-main">
						<div class="new-feed-content">
							<div class="post-image-area">
								<div class="post-date">
								</div>
								<img src={item.image} alt="01-news-feed" />
							</div>
							<div class="category">
								<span class="badge">Nuevo</span>
							</div>
							<h3>{item.name}</h3>
							<h4 class="mb-5 text-white">{item.description}</h4>
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
