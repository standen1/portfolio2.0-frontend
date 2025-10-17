import React from 'react';
import { PageMetaInformationProps } from './PageMetaInformationProps';

const PageMetaInformation = (pageInfo: PageMetaInformationProps['pageInfo']) => {
  return (
    <>
      {/* Favicons */}
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
          <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />       
          <link rel="manifest" href="/site.webmanifest" />
        {/* End Favicons */}

        {/* Site Meta Tags */}
        <meta name="author" content="Sean Standen" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Sean Standen, Sean, Standen, Portfolio, Developer, Software, Engineer, Web Development, Web Developer, Frontend Developer, Backend Developer, Fullstack Developer" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        <title>{pageInfo.title}</title>
        <meta name="description" content={pageInfo.description} />
        <meta name="image" content="/site_thumbnail.jpg" />
        <link rel="canonical" href={pageInfo.canonicalUrl} />
        <meta name="theme-color" content="#ffffff" />
        {/* End Site Meta Tags */}
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageInfo.title} />
        <meta property="og:description" content={pageInfo.description} />
        <meta property="og:image" content="https://seanstanden.dev/site_thumbnail.jpg" />
        <meta property="og:url" content={pageInfo.canonicalUrl} />
        {/* End Open Graph / Facebook */}
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageInfo.title} />
        <meta name="twitter:description" content={pageInfo.description} />
        <meta name="twitter:image" content="https://seanstanden.dev/site_thumbnail.jpg" />
        {/* End Twitter */}
    </>
  );
}

export default PageMetaInformation;