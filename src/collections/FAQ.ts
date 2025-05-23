import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const FAQ: CollectionConfig = {
  slug: 'faq',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'questionText',
      type: 'richText',
      required: true,
      editor: lexicalEditor({}),
    },
    {
      name: 'order',
      type: 'number',
      required: true,
    },
    {
      name: 'showColorPaletteBelow',
      type: 'checkbox',
      required: true,
    },
    {
      name: 'group',
      type: 'select',
      options: [
        'faq',
        'invitation',
        'schedule'
      ]
    }
  ],
  lockDocuments: false,
}
