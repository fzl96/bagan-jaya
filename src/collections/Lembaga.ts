import type { CollectionConfig } from 'payload'

export const Lembaga: CollectionConfig = {
  slug: 'lembaga',
  labels: {
    singular: 'Lembaga Desa',
    plural: 'Lembaga Desa',
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
  ],
}
