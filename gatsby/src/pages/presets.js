import React from 'react';
import { graphql } from 'gatsby';
import PresetList from '../components/PresetList';
import TagsFilter from '../components/TagsFilter';

export default function PresetsPage({ data, pageContext }) {
  const presets = data.presets.nodes;
  return (
    <>
      <TagsFilter activeTag={pageContext.tag} />
      <PresetList presets={presets} />
    </>
  );
}

export const query = graphql`
  query PresetQuery($tag: [String]) {
    presets: allSanityPreset(
      filter: { tags: { elemMatch: { name: { in: $tag } } } }
    ) {
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
