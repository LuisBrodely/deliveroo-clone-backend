import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation: (Rule) => Rule.isRequired(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      title: 'Image of the Restaurant',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of the Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude of the Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'adress',
      title: 'Restaurant Adress',
      type: 'string',
      validation: (Rule) => Rule.isRequired(),
    }),
    defineField({
      name: 'rating',
      title: 'Enter Rating from (1-5 Stars)',
      type: 'number',
      validation: (Rule) => Rule
        .min(1)
        .max(5)
        .error('Please enter a valid value (1-5)')
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type:'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.isRequired(),
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type:'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'dish'}],
        },
      ],
    }),
  ],
})
