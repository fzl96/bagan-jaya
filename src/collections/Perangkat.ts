import type { CollectionConfig } from 'payload'

export const Perangkat: CollectionConfig = {
  slug: 'perangkat-desa',
  labels: {
    singular: 'Kelola Perangkat Desa',
    plural: 'Kelola Perangkat Desa',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'Nama',
    group: 'Pemerintahan',
  },
  fields: [
    {
      name: 'nama',
      type: 'text',
      required: true,
    },
    {
      name: 'jabatan',
      type: 'text',
      required: true,
    },
    {
      name: 'hp',
      type: 'text',
    },
  ],
}
