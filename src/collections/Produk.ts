import type { CollectionConfig } from 'payload'

export const Produk: CollectionConfig = {
  slug: 'produk-lokal',
  labels: {
    singular: 'Produk Lokal',
    plural: 'Produk Lokal',
  },
  admin: {
    useAsTitle: 'Nama',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Nama',
      type: 'text',
      required: true,
    },
    {
      name: 'Deskripsi',
      type: 'textarea',
      required: false,
    },
    {
      name: 'Foto',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
}
