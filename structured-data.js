// Structured Data (JSON-LD) for SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sokolka Okna Serwis",
    "description": "Profesjonalna naprawa okien. Wymiana szyb, okuć, regulacja i montaż okien.",
    "telephone": "+48604539539",
    "email": "sokolkaoknaserwis@gmail.com",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Usługi naprawy okien",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Wymiana szyb okiennych",
                    "description": "Szybka i fachowa wymiana uszkodzonych szyb jednokomorowych i dwukomorowych"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Montaż i wymiana okien",
                    "description": "Pewny montaż nowych okien gwarantujący komfort i bezpieczeństwo"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Naprawa okuć okiennych",
                    "description": "Skuteczna naprawa i wymiana elementów okuć we wszystkich typach okien"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Regulacja i serwis okien",
                    "description": "Precyzyjna regulacja okien poprawiająca szczelność i wygodę użytkowania"
                }
            }
        ]
    },
    "serviceType": ["Naprawa okien", "Wymiana szyb", "Montaż okien", "Regulacja okien", "Serwis okien"],
    "priceRange": "$$"
};


function injectStructuredData() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
}

document.addEventListener('DOMContentLoaded', injectStructuredData);
