import { AiFillTag as icon } from 'react-icons/ai';

export default {
  // Computer Name
  name: 'tag',
  // Visible title
  title: 'Tags',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Tag Name',
      type: 'string',
      description: 'What is the name of the tag?',
    },
    {
      name: 'fade',
      title: 'Fade',
      type: 'boolean',
      description: 'Applies a faded film look.',
      options: { layout: 'checkbox' },
    },
    {
      name: 'vibrant',
      title: 'Vibrant',
      type: 'boolean',
      description: 'Vibrant colors.',
      options: { layout: 'checkbox' },
    },
    {
      name: 'grain',
      title: 'Grain',
      type: 'boolean',
      description: 'The grainy-look of vintage magazines.',
      options: { layout: 'checkbox' },
    },
  ],
  preview: {
    select: {
      name: 'name',
      fade: 'fade',
    },
    prepare: (fields) => ({
      title: `${fields.name}`,
    }),
  },
};
