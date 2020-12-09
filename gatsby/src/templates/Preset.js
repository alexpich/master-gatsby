import React from 'react';
import { graphql } from 'gatsby';

export default function SinglePresetPage() {
  return <p>Single Preset</p>;
}

// Needs to be dynamic based on slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    preset: sanityPreset(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      tags {
        name
        id
      }
    }
  }
`;
