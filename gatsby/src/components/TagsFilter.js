import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const TagsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    padding: 5px;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    background: var(--grey);
    align-items: center;
    border-radius: 2px;
    text-decoration: none;
    .count {
      background: white;
      padding: 2px 5px;
    }
    &[aria-current='page'] {
      background: var(--black);
      color: white;
      .count {
        background: var(--white);
        color: black;
      }
    }
  }
`;

function countPresetsInTags(presets) {
  // Return the presets with the counts
  const counts = presets
    .map((preset) => preset.tags)
    .flat()
    .reduce((acc, tag) => {
      // Check if this is an existing tag
      const existingTag = acc[tag.id];

      // If yes, increment by 1
      if (existingTag) {
        existingTag.count += 1;
      } else {
        // else, create new entry in our acc and set it to one
        acc[tag.id] = {
          id: tag.id,
          name: tag.name,
          count: 1,
        };
      }

      return acc;
    }, {});

  // sort by counts
  const sortedTags = Object.values(counts).sort((a, b) => b.count - a.count);
  return sortedTags;
}

export default function TagsFilter({ activeTag }) {
  // Get a list of all the tags
  // Get a list of all the presets with their tags

  const { tags, presets } = useStaticQuery(graphql`
    query {
      presets: allSanityPreset {
        nodes {
          tags {
            id
            name
          }
        }
      }
    }
  `);

  // Count how many presets are in each tag
  const tagsWithCounts = countPresetsInTags(presets.nodes);

  // Loop over the list of tags and display the tag and count of presets in that tag
  return (
    <TagsStyles>
      <Link to="/presets">
        <span className="name">All</span>
        <span className="count">{presets.nodes.length}</span>
      </Link>
      {tagsWithCounts.map((tag) => (
        <Link to={`/tag/${tag.name}`} key={tag.id}>
          <span className="name">{tag.name}</span>
          <span className="count">{tag.count}</span>
        </Link>
      ))}
    </TagsStyles>
  );
}
