import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

function SinglePreset({ preset }) {
  return (
    <div>
      <Link to={`/preset/${preset.slug.current}`}>
        <h2>
          <span className="mark">{preset.name}</span>
        </h2>
        <p>{preset.tags.map((tag) => tag.name)}</p>
        <Img fixed={preset.image.asset.fixed} alt={preset.name} />
      </Link>
    </div>
  );
}

export default function PresetList({ presets }) {
  return (
    <div>
      {presets.map((preset) => (
        <SinglePreset preset={preset} key={preset.id} />
      ))}
    </div>
  );
}
