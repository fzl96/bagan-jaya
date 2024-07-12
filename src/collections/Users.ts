import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Kelola Admin',
    plural: 'Kelola Admin',
  },
  admin: {
    useAsTitle: 'email',
    group: 'Admin',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
