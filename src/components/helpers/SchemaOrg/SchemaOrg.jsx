import React from 'react';
import { Helmet } from 'react-helmet';

const SchemaOrg = () => {
  const schema = `
    {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Middle Way",
  "image": "https://middleway.in.ua/logo.jpg",
  "url": "https://middleway.in.ua/",
  "sameAs": [
    "https://www.instagram.com/middleway_vasylkiv/",
    "https://www.facebook.com/middleway.sadok",
    "https://www.facebook.com/school.middleway"
  ],
  "hasMap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.7099974618786!2d30.267208184052574!3d50.205687441225784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4b10426a7c61d%3A0xac7c6ef55d939c10!2z0KLQntCSICLQn9GA0LjQstCw0YLQvdC40Lkg0LfQsNC60LvQsNC0INC00L7RiNC60ZbQu9GM0L3QvtGXINC-0YHQstGW0YLQuCAi0JzRltC00Lsg0JLQtdC5Ig!5e0!3m2!1suk!2sua!4v1714998617281!5m2!1suk!2sua",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "UA",
    "addressRegion": "Київська область",
    "addressLocality": "с. Путрівка",
    "streetAddress": "вул. Газова, 8"
  },
  "telephone": "+38 067 447 42 95",
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Мережа садочків Middle Way",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Ранній розвиток - Я з мамою",
        "description": "1,5-2 роки. 09:30-11:00 понеділок/четвер. 10:30-12:00 вівторок/п'ятниця. Монтессорі метод. Творча робота. Напій зі смаколиками. Повноцінний обід за бажанням",
        "priceCurrency": "UAH",
        "price": "1600",
        "priceValidUntil": "P1M",
        "itemOffered": {
          "@type": "Service",
          "serviceType": "Ранній розвиток"
        },
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Повний день Toddler",
        "description": "1,5-3 роки. 08:00 - 19:00 Пн-Пт. 5-разове харчування. Монтессорі метод. Заняття з фахівцями. Спортивно-рухова активність",
        "priceCurrency": "UAH",
        "price": "11800",
        "priceValidUntil": "P1M",
        "itemOffered": {
          "@type": "Service",
          "serviceType": "Дошкільне виховання"
        },
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Повний день Preschool",
        "description": "3-6 років. 09:30-11:00 Пн-Пт. 5-разове харчування. Монтессорі метод. Заняття з фахівцями. Спортивно-рухова активність",
        "priceCurrency": "UAH",
        "price": "11800",
        "priceValidUntil": "P1M",
        "itemOffered": {
          "@type": "Service",
          "serviceType": "Дошкільне виховання"
        },
        "availability": "https://schema.org/InStock"
      }
    ]
  },
  "hasPart": [
    {
      "@type": "ChildCare",
      "name": "Middle Way Путрівська філія",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "UA",
        "addressRegion": "Київська область",
        "addressLocality": "с. Путрівка",
        "streetAddress": "вул. Газова, 8"
      },
      "telephone": "+38 067 447 42 95"
    },
    {
      "@type": "ChildCare",
      "name": "Middle Way ЖК Столичний",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "UA",
        "addressRegion": "Київська область",
        "addressLocality": "м. Васильків",
        "streetAddress": "вул. Декабристів, 151, корпус 5"
      },
      "telephone": "+38 067 447 42 95"
    },
    {
      "@type": "School",
      "name": "Middle Way Путрівська гімназія",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "UA",
        "addressRegion": "Київська область",
        "addressLocality": "с. Путрівка",
        "streetAddress": "вул. Газова, 8"
      },
      "telephone": "+38 067 447 42 95",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Школа Middle Way",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Стандартний день",
            "description": "Уроки до 15.00. Можливість перебувати до 19.00 - 100 грн./день. Окремо оплачуються гуртки",
            "priceCurrency": "UAH",
            "price": "8000",
            "priceValidUntil": "P1M",
            "itemOffered": {
              "@type": "Service",
              "serviceType": "Освіта"
            },
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Повний день",
            "description": "Перебування до 19.00. Безлім гуртків з 15.00 до 19.00 (окрім Smartum)",
            "priceCurrency": "UAH",
            "price": "10000",
            "priceValidUntil": "P1M",
            "itemOffered": {
              "@type": "Service",
              "serviceType": "Освіта"
            },
            "availability": "https://schema.org/InStock"
          }
        ]
      }
    }
  ]
}
  `;

  return (
    <Helmet>
      <script type="application/ld+json">{schema}</script>
    </Helmet>
  );
};

export default SchemaOrg;
