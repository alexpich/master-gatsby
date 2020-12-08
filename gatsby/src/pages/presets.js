import React from 'react';
import { graphql } from 'gatsby';
import PresetList from '../components/PresetList';

export default function PresetsPage({ data }) {
  const presets = data.presets.nodes;
  return (
    <>
      <PresetList presets={presets} />
    </>
  );
}

export const query = graphql`
  query {
    presets: allSanityPreset {
      nodes {
        name
        id
        slug {
          current
        }
        tags {
          id
          name
        }
        image {
          asset {
            fixed(width: 300, height: 200) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
