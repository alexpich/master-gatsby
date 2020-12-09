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
  console.log(data);

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

export async function createPages(params) {
  // Create pages dynamically
  // Presets
  await turnPresetsIntoPages(params);

  // Tags
  // About
}
