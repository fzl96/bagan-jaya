import type { CollectionConfig } from 'payload'

export const Perangkat: CollectionConfig = {
  slug: 'perangkat-desa',
  labels: {
    singular: 'Perangkat Desa',
    plural: 'Perangkat Desa',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'Nama',
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
