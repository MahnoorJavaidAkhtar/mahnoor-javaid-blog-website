export default {
    name: 'comment',
    type: 'document',
    title: 'Comment',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
      },
      {
        name: 'comment',
        type: 'text',
        title: 'Comment',
      },
      {
        name: 'approved',
        type: 'boolean',
        title: 'Approved',
        description: 'Only approved comments will be visible on the site.',
      },
    ],
  };