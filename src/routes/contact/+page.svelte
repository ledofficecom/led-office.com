<script>

	import Seo from "$lib/components/SEO.svelte";

</script>

<Seo URL='/contact' TITLE="Contáctanos" DESCRIPTION="Esta es la página de contacto" />
<section id="header-top" class="header-top-bg">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-sm-12 col-md-12 col-lg-12">
				<div class="home-content text-center">
					<h1>Contacto</h1>
					<ul class="breadcrumb breadcrumb-style justify-content-center">
						<li class="breadcrumb-item"><a href="/">Inicio</a></li>
						<li class="breadcrumb-item active">Contacto</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="cta-area" class="cta-area-bg">
	<div class="container">
		<!-- svelte-ignore a11y-missing-attribute -->
		<div class="col-sm-12 col-md-12 text-center">
			<iframe
				class="w-full"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.677307013362!2d-74.06588042502102!3d4.651518695323316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ba7089d6495%3A0x5b801481c4d34b88!2sCentro%20Comercial%20Multicompras!5e0!3m2!1sen!2sco!4v1714764146140!5m2!1sen!2sco"
				height="450"
				style="border:0;"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
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
	</div>
</section>
<!-- end section #cta-area -->
