const canonicalUrl = 'http://frontendmentor-photosnap-website-anhek.vercel.app/'

const defaultTitle = 'Photosnap'

export const SEO = {
  defaultTitle: defaultTitle,
  titleTemplate: 'Photosnap | %s',
  canonical: canonicalUrl,
  additionalLinkTags: [
    {
      rel: 'apple-touch-icon',
      href: 'favicons/apple-icon-57x57.png',
      sizes: '57x57',
    },
    {
      rel: 'apple-touch-icon',
      href: 'favicons/apple-icon-60x60.png',
      sizes: '60x60',
    },
    {
      rel: 'apple-touch-icon',
      href: 'favicons/apple-icon-72x72.png',
      sizes: '72x72',
    },
    {
      rel: 'apple-touch-icon',
      href: 'favicons/apple-icon-76x76.png',
      sizes: '76x76',
    },
    {
      rel: 'apple-touch-icon',
      href: 'favicons/apple-icon-114x114.png',
      sizes: '114x114',
    },
    {
      rel: 'apple-touch-icon',
      href: 'favicons/apple-icon-120x120.png',
      sizes: '120x120',
    },
    {
      rel: 'apple-touch-icon',
      href: 'favicons/apple-icon-144x144.png',
      sizes: '144x144',
    },
    {
      rel: 'apple-touch-icon',
      href: 'favicons/apple-icon-152x152.png',
      sizes: '152x152',
    },
    {
      rel: 'apple-touch-icon',
      href: 'favicons/apple-icon-180x180.png',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      href: 'favicons/android-icon-192x192.png',
      type: 'image/png',
      sizes: '192x192',
    },
    {
      rel: 'icon',
      href: 'favicons/favicon-32x32.png',
      type: 'image/png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      href: 'favicons/favicon-96x96.png',
      type: 'image/png',
      sizes: '96x96',
    },
    {
      rel: 'icon',
      href: 'favicons/favicon-16x16.png',
      type: 'image/png',
      sizes: '16x16',
    },
    {
      rel: 'manifest',
      href: 'favicons/manifest.json',
    },
  ],
  additionalMetaTags: [
    {
      name: 'msapplication-TileColor',
      content: '#ffffff',
    },
    {
      name: 'msapplication-TileImage',
      content: '/ms-icon-144x144.png',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
  openGraph: {
    title: 'Photosnap',
    type: 'website',
    locale: 'en_IE',
    url: canonicalUrl,
  },
  twitter: {
    handle: '@photosnap',
    site: '@photosnap',
    cardType: 'summary_large_image',
  },
}

export default SEO
