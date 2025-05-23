import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const InfoBlock: CollectionConfig = {
  slug: 'infoblock',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heading',
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
      name: 'order',
      type: 'number',
      required: true,
    },
  ],
  lockDocuments: false,
}
