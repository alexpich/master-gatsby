import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Alex Pich Photography`,
    siteUrl: 'https://alexpichphotography.com',
    description: "Alex's photography portoflio and presets for sale.",
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // This is the name of plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'rcbiovxm',
        dataset: 'production',
        watchMode: 'true',
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
