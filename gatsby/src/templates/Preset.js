import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PresetGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

export default function SinglePresetPage({ data }) {
  console.log(data.preset);
  return (
    <PresetGrid>
      <Img fluid={data.preset.image.asset.fluid} />
      <div>
        <h2 className="mark">{data.preset.name}</h2>
        <ul>
          {data.preset.tags.map((tag) => (
            <li key={tag.id}>{tag.name}</li>
          ))}
        </ul>
      </div>
    </PresetGrid>
  );
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
