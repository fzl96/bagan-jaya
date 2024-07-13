import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

export async function StrukturOrganisasi() {
  const payload = await getPayloadHMR({ config })
  const struktur = await payload.find({
    collection: 'profil',
    where: {
      or: [
        {
          Bagian: {
            contains: 'organisai',
          },
        },
        {
          Bagian: {
            contains: 'organisasi',
          },
        },
      ],
    },
  })

  // @ts-ignore
  const imgUrl = struktur.docs[0].Gambar.thumbnailURL

  return (
    <div className="md:w-[40rem] w-full">
      <img src={imgUrl} alt="struktur organisasi" className="object-cover w-full h-full" />
    </div>
  )
}
