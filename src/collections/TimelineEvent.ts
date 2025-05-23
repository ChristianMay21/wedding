import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const TimelineEvent: CollectionConfig = {
  slug: 'timelineEvent',
  access: {
    read: () => true,
  },
  lockDocuments: false,
  fields: [
    {
      name: 'Year',
      type: 'text',
      required: true,
    },
    {
      name: 'bodyContentText',
      type: 'richText',
      required: true,
      editor: lexicalEditor({}),
    },
    {
      name: 'plainText',
      type: 'text',
      required: false,
    },
    {
      name: 'order',
      type: 'number',
      required: true,
    },
    {
      name: 'image',
      type: 'relationship',
      relationTo: 'media',
    },
  ],
}
