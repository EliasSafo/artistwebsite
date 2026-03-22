import {defineType, defineField} from 'sanity'

export default defineType({
    name: 'music',
    title: 'Music Release',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: ['album', 'single', 'ep'],
            },
        }),
        defineField({
            name: 'releaseDate',
            title: 'Release Date',
            type: 'date',
        }),
        defineField({
            name: 'coverArt',
            title: 'Cover Art',
            type: 'image',
        }),
        defineField({
            name: 'spotify',
            title: 'Spotify Link',
            type: 'url',
        }),
        defineField({
            name: 'apple',
            title: 'Apple Music Link',
            type: 'url',
        }),
        defineField({
            name: 'youtube',
            title: 'YouTube Link',
            type: 'url',
        }),
        defineField({
            name: 'tracklist',
            title: 'Tracklist',
            type: 'array',
            of: [{type: 'string'}],
        }),
    ],
})