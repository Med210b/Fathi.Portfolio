import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Fathi Hammami | Premium Web Designer & App Developer in Dubai",
  description = "Fathi Hammami is a premium Web Designer and App Developer based in Dubai, specializing in modern web applications, UI/UX design, and exceptional digital experiences.",
  keywords = "Web Designer Dubai, App Developer Dubai, UI/UX Designer, Fathi Hammami Portfolio, Modern Web Applications, Premium Digital Experiences",
  image = "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785455563/qmotttaqcqogwajcuvja.png", // Dubai skyline image used in Hero
  url = "https://fathihammami.com",
}) => {
  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Fathi Hammami" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Mobile Friendly */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#050816" />
      
      {/* Language */}
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
