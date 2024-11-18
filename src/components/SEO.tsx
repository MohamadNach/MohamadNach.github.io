import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  name: string;
  type: string;
  keywords?: string; // Optional, default provided
  canonicalUrl?: string; // Optional, dynamic default provided
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  name,
  type,
  keywords = 'developer, full-stack, portfolio, React, Node.js',
  canonicalUrl = window.location.href, // Defaults to current URL
}) => {
  return (
    <Helmet>
      {/* Standard metadata */}
      <meta charSet='UTF-8' />
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='keywords' content={keywords} />
      <meta
        name='google-site-verification'
        content='rSmWr0bVUWIODMHpWV1uZo4JBlbXBPnkcc1r-esn9Js'
      />
      <link rel='canonical' href={canonicalUrl} />

      {/* Icons */}
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='../assets/favicon_io/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='../assets/favicon_io/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='../assets/favicon_io/favicon-16x16.png'
      />
      <link rel='manifest' href='../assets/favicon_io/site.webmanifest' />

      {/* Performance Optimizations */}
      <link
        rel='preload'
        href='../assets/MohamadProfile.jpg'
        as='image'
        type='image/jpg'
      />
      <link
        rel='prefetch'
        href='/projects/budget-app.jpg'
        as='image'
        type='image/jpg'
      />
      <link
        rel='prefetch'
        href='/projects/Wind-power-production.jpg'
        as='image'
        type='image/jpg'
      />
      <link
        rel='prefetch'
        href='/projects/ecommerce.jpg'
        as='image'
        type='image/jpg'
      />

      {/* Open Graph (Facebook) metadata */}
      <meta property='og:type' content={type} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:site_name' content={name} />

      {/* Twitter metadata */}
      <meta name='twitter:creator' content={name} />
      <meta name='twitter:card' content={type} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
    </Helmet>
  );
};

export default SEO;
