const defaultSEOConfig = {
  defaultTitle: "Aulianza's Next.js + TS + Tailwind Starter",
  description:
    'Next.js + TS + Tailwind CSS starter template packed with useful development features',
  canonical: 'https://next-tailwind-starter.aulianza.id',
  openGraph: {
    canonical: 'https://next-tailwind-starter.aulianza.id',
    title: "Aulianza's Next.js + TS + Tailwind Starter",
    description:
      'Next.js + TS + Tailwind CSS starter template packed with useful development features',
    type: 'website',
    images: [
      {
        url: 'https://aulianza.s3.ap-southeast-1.amazonaws.com/images/public/aulianza-next-tailwind-starter.png',
        alt: 'next-tailwind-starter.aulianza.id og-image',
        width: 800,
        height: 600,
      },
    ],
    site_name: 'aulianza-next-tailwind-starter',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: 'https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png',
    },
  ],
};

export default defaultSEOConfig;
