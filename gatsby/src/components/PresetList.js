import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PresetGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 200px;
`;

const PresetStyles = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--row, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  h2 {
    font-size: 2.4rem;
  }
  h2,
  p {
    margin: 0;
  }
`;

function SinglePreset({ preset }) {
  return (
    <PresetStyles>
      <Link to={`/preset/${preset.slug.current}`}>
        <h2>
          <span>{preset.name}</span>
        </h2>
        <p>{preset.tags.map((tag) => tag.name)}</p>
        <Img fluid={preset.image.asset.fluid} alt={preset.name} />
      </Link>
    </PresetStyles>
  );
}

export default function PresetList({ presets }) {
  return (
    <PresetGridStyles>
      {presets.map((preset) => (
        <SinglePreset preset={preset} key={preset.id} />
      ))}
    </PresetGridStyles>
  );
}
