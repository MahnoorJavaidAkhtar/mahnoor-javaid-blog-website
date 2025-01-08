// sanity/pet.ts
export default {
    name: 'blog',
    type: 'document',
    title: 'Blog Post',
    fields: [
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'authorName',
            title: 'Author Name',
            type: 'string',
        },
        {
            name: 'authorImage',
            title: 'Author Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'publishDate',
            title: 'Publish Date',
            type: 'datetime',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                { type: 'block' }, 
                {
                    type: 'image', 
                    options: {
                        hotspot: true,
                    },
                },
            ],
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
        },
    },
};
