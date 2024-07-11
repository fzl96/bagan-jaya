import type { CollectionConfig } from 'payload'

export const Profil: CollectionConfig = {
  slug: 'profil',
  labels: {
    singular: 'Profil Desa',
    plural: 'Profil Desa',
  },
  admin: {
    useAsTitle: 'Bagian',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Bagian',
      type: 'text',
      required: true,
    },
    {
      name: 'Konten',
      type: 'richText',
      required: true,
    },
  ],
}
