import type { CollectionConfig } from 'payload'

export const Lembaga: CollectionConfig = {
  slug: 'lembaga',
  labels: {
    singular: 'Lembaga Desa',
    plural: 'Lembaga Desa',
  },
  admin: {
    useAsTitle: 'Nama',
    group: 'Pemerintahan',
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
      name: 'Tugas',
      type: 'textarea',
      required: false,
    },
  ],
}
