import type { CollectionConfig } from 'payload'

export const Produk: CollectionConfig = {
  slug: 'produk-lokal',
  labels: {
    singular: 'Kelola Produk Desa',
    plural: 'Kelola Produk Desa',
  },
  admin: {
    useAsTitle: 'Nama',
    group: 'Informasi Publik',
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
