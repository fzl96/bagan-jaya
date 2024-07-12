// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { slateEditor } from '@payloadcms/richtext-slate'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { resendAdapter } from '@payloadcms/email-resend'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Profil } from './collections/Profil'
import { Perangkat } from './collections/Perangkat'
import { Lembaga } from './collections/Lembaga'
import { Produk } from './collections/Produk'
import { Galeri } from './collections/Galeri'
import { Penduduk } from './collections/Penduduk'
import { Berita } from './collections/Berita'
import ForceThemeProvider from './ForceThemeProvider'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    components: {
      // @ts-ignore
      providers: [ForceThemeProvider],
    },
  },
  email: resendAdapter({
    defaultFromAddress: 'mail@wisetheticlab.store',
    defaultFromName: 'Kelurahan Sungai Beringin',
    apiKey: process.env.RESEND_API_KEY!,
  }),
  collections: [Profil, Perangkat, Lembaga, Produk, Galeri, Penduduk, Berita, Media, Users],
  editor: slateEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: {
          prefix: 'media',
          disablePayloadAccessControl: true,
        },
      },
      bucket: process.env.S3_BUCKET!,
      config: {
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID!,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
        },
        region: process.env.S3_REGION,
        endpoint: process.env.S3_ENDPOINT,
      },
    }),
  ],
})
