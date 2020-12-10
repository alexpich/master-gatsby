import path from 'path';

async function turnPresetsIntoPages({ graphql, actions }) {
  // Get a template for this page
  const presetTemplate = path.resolve('./src/templates/Preset.js');

  // Query all Presets
  const { data } = await graphql(`
    query {
      presets: allSanityPreset {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);

  // Loop over each preset and create a page for that pizza
  data.presets.nodes.forEach((preset) => {
    actions.createPage({
      path: `preset/${preset.slug.current}`,
      component: presetTemplate,
      context: {
        slug: preset.slug.current,
      },
    });
  });
}

async function turnTagsIntoPages({ graphql, actions }) {
  // Get a template
  const tagTemplate = path.resolve('./src/pages/presets.js');

  // Query all Tags
  const { data } = await graphql(`
    query {
      tags: allSanityTag {
        nodes {
          name
          id
        }
      }
    }
  `);

  // Loop over each and create a page for that Tag
  data.tags.nodes.forEach((tag) => {
    console.log(`Creating page for tag`, tag.name);
    actions.createPage({
      path: `tag/${tag.name}`,
      component: tagTemplate,
      context: {
        tag: tag.name,
        // TOGO: Regex for Tag
      },
    });
  });

  // Pass tag data to preset.js
}

export async function createPages(params) {
  // Create pages dynamically:
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([
    // Presets
    turnPresetsIntoPages(params),

    // Tags
    turnTagsIntoPages(params),

    // About
  ]);
}
