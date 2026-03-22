import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tour',
  title: 'Tour Date',
  type: 'document',
  fields: [
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'soldOut',
      title: 'Sold Out',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'mapUrl',
      title: 'Map URL',
      type: 'url',
    }),
    defineField({
      name: 'ticketUrl',
      title: 'Ticket URL',
      type: 'url',
    }),
  ],
})

