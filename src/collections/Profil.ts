import type { CollectionConfig } from 'payload'

export const Profil: CollectionConfig = {
  slug: 'profil',
  labels: {
    singular: 'Kelola Profil Desa',
    plural: 'Kelola Profil Desa',
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
    {
      name: 'Gambar',
      type: 'upload',
      required: false,
      relationTo: 'media',
    },
  ],
}
