import { Helmet } from 'react-helmet-async';

// Single source of truth for per-route head tags. Google renders JS and reads
// these; social scrapers (LinkedIn/X/Slack) do not run JS and fall back to the
// static homepage tags in index.html — a known limitation of this client-only
// SPA. The static index.html intentionally omits canonical/description so the
// values set here are the only ones, avoiding conflicting/duplicate tags.

const SITE_URL = 'https://sinaghazi.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/icon/android-chrome-512x512.png`;

interface SeoProps {
    /** Full document title, e.g. "Selected work | Sina Ghazi". */
    title: string;
    description: string;
    /** Route path beginning with "/", used for canonical + og:url. */
    path: string;
    /** Open Graph type. Defaults to "website". */
    ogType?: string;
    /** Absolute or root-relative image URL for social cards. */
    image?: string;
}

export function Seo({
    title,
    description,
    path,
    ogType = 'website',
    image = DEFAULT_OG_IMAGE,
}: SeoProps) {
    const url = `${SITE_URL}${path}`;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content={ogType} />
            <meta property="og:image" content={image} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}

export default Seo;
