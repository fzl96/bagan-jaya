import type { CollectionConfig } from 'payload'

export const Berita: CollectionConfig = {
  slug: 'berita',
  admin: {
    useAsTitle: 'Judul',
    group: 'Informasi Publik',
  },
  labels: {
    singular: 'Berita',
    plural: 'Berita',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Judul',
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
      relationTo: 'media',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
