import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
  structuredData?: object;
}

export default function SEO({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://ik.imagekit.io/by733ltn6/FAVICONS/favicon_io%20(8)/AZ.png?updatedAt=1759667457479',
  keywords = 'location autocar bruxelles, autocar bruxelles, minibus bruxelles, autocar avec chauffeur bruxelles, excursion bruxelles, transport groupe bruxelles, devis autocar bruxelles, transfert aéroport bruxelles',
  structuredData
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: ogType },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:image', content: ogImage },
      { property: 'og:site_name', content: 'Autocaravecchauffeur' },
      { property: 'og:locale', content: 'fr_BE' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'author', content: 'Autocaravecchauffeur' },
      { name: 'language', content: 'French' },
      { name: 'revisit-after', content: '7 days' }
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? 'name' : 'property';
      const value = name || property;
      let element = document.querySelector(`meta[${attribute}="${value}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value!);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    });

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    if (structuredData) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData);
    }

    return () => {
      const scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (scriptTag) {
        scriptTag.remove();
      }
    };
  }, [title, description, canonicalUrl, ogType, ogImage, keywords, structuredData]);

  return null;
}
