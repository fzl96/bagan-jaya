import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Admin',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    adminThumbnail: ({ doc }) =>
      `https://bfptwktgdyytxiumwtbb.supabase.co/storage/v1/object/public/bagan-jaya/media/${doc.filename}`,
    disableLocalStorage: true,
    mimeTypes: ['image/*'],
  },
}
