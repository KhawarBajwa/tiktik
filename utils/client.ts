import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '63xm0chj',
  dataset: 'production',
  apiVersion: 'v2021-08-31',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
