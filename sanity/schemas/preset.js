import { MdCamera as icon } from 'react-icons/md';

export default {
  // Computer Name
  name: 'preset',
  // Visible title
  title: 'Presets',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Preset Name',
      type: 'string',
      description: 'What is the name of the Preset?',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the preset in cents.',
      validation: (Rule) => Rule.min(200).max(100000),
      // TODO: Add custom input component
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      tag0: 'tags.0.name',
      tag1: 'tags.1.name',
      tag2: 'tags.2.name',
      tag3: 'tags.3.name',
    },
    prepare: ({ title, media, ...tags }) => {
      // Filter undefined tags out
      const t = Object.values(tags).filter((tag) => tag !== undefined);

      // Return preview object for the pizza
      return {
        title,
        media,
        subtitle: t.join(', '),
      };
    },
  },
};
