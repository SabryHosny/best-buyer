import React from 'react';

export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Best Buyer",
    "alternateName": "Best Buyers",
    "url": "https://bestbuyerss.com",
    "logo": "https://bestbuyerss.com/images/logo.png",
    "description": "Best Buyer offers exclusive discounts on hotels, flights, and tourism services with the Best Buyers Card.",
    "sameAs": [
      "https://www.facebook.com/bestbuyerss",
      "https://www.instagram.com/bestbuyerss",
      "https://twitter.com/bestbuyerss"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "97 A. Misr Helwan Agricultural Road, Behind Armed Forces Hospital",
      "addressLocality": "Maadi",
      "addressRegion": "Cairo",
      "postalCode": "",
      "addressCountry": "Egypt"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+20 1155538363",
      "contactType": "customer service",
      "availableLanguage": ["English", "Arabic"]
    },
    "offers": {
      "@type": "Offer",
      "description": "Get exclusive discounts on tourism services with your personal Best Buyers Card",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
