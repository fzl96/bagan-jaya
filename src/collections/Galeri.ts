import type { CollectionConfig } from 'payload'

export const Galeri: CollectionConfig = {
  slug: 'galeri',
  labels: {
    singular: 'Kelola Galeri',
    plural: 'Kelola Galeri',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'Keterangan',
    group: 'Informasi Publik',
  },
  fields: [
    {
      name: 'Foto',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'Keterangan',
      type: 'text',
      required: false,
    },
  ],
}
