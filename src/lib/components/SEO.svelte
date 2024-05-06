<script>
    export let URL;
    export let TITLE;
    export let DESCRIPTION;

    import { DATA_SEO } from "$lib/const/INFO";

    let seo = {
        site_name: DATA_SEO.APP_NAME,
        AUTHOR: DATA_SEO.APP_NAME + ' By Mazter.dev',
        ROBOTS: 'index, follow',
        OG: {
            TITLE: DATA_SEO.APP_NAME + ' - ' + TITLE,
            DESCRIPTION: DESCRIPTION,
            IMAGE: DATA_SEO.DOMAIN+DATA_SEO.IMAGE,
            URL: DATA_SEO.DOMAIN+URL,
        },
        DESCRIPTION: DESCRIPTION,
        KEYWORDS: DATA_SEO.KEYWORDS,
        TITLE: DATA_SEO.APP_NAME + ' - ' + TITLE,
        URL: DATA_SEO.DOMAIN+URL,
        IMAGE: DATA_SEO.DOMAIN+'brand/logo.png',
    };
</script>

<svelte:head>
    <title>{seo.TITLE}</title>
    <meta name="author" content={seo.AUTHOR}>
    <meta name="robots" content={seo.ROBOTS}>
    <meta name="description" content={seo.DESCRIPTION}>
    <meta property="og:site_name" content={seo.site_name}>
    <meta name="keywords" content={seo.KEYWORDS}>
    <meta property="og:title" content={seo.OG.TITLE}>
    <meta property="og:description" content={seo.OG.DESCRIPTION}>
    <meta property="og:image" content={seo.OG.IMAGE}>
    <meta property="og:url" content={seo.OG.URL}>
    <link rel="canonical" href={seo.URL}>
    <meta property="og:type" content="website">
</svelte:head>