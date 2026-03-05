import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    type?: 'website' | 'article' | 'product';
    image?: string;
    url?: string;
    jsonLd?: string; // Stringified JSON-LD for Schema.org Structured Data
}

export function SEO({
    title,
    description,
    keywords = "OEM Hardware, B2B Furniture, Government Procurement, Infrastructure solutions",
    type = 'website',
    image = "https://seatech-gov.com/og-image.jpg", // Placeholder default OG image
    url,
    jsonLd
}: SEOProps) {
    const location = useLocation();
    const currentUrl = url || `https://seatech-gov.com${location.pathname}`;
    const siteName = "Seatech";

    return (
        <Helmet>
            {/* Standard SEO */}
            <title>{`${title} | ${siteName}`}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={currentUrl} />

            {/* OpenGraph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* JSON-LD Structured Data */}
            {jsonLd && (
                <script type="application/ld+json">
                    {jsonLd}
                </script>
            )}
        </Helmet>
    );
}
