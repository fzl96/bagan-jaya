import type { CollectionConfig } from 'payload'

export const Galeri: CollectionConfig = {
  slug: 'galeri',
  labels: {
    singular: 'Galeri',
    plural: 'Galeri',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'Judul',
  },
  fields: [
    {
      name: 'Judul',
      type: 'text',
      required: true,
    },
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
