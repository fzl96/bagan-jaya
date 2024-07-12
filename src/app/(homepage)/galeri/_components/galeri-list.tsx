import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

export async function GaleriList() {
  const payload = await getPayloadHMR({ config })
  const galeri = await payload.find({
    collection: 'galeri',
  })

  return (
    <div className="md:columns-3 columns-2 gap-2 md:gap-5">
      {galeri.docs.map((item) => (
        <div key={item.id} className="inline-block bg-white mb-5 rounded-lg shadow-sm">
          {/* @ts-ignore */}
          <img src={item.Foto.thumbnailURL} alt={item.Foto.alt} className="rounded-t-lg" />
          {/* @ts-ignore */}
          <h3 className="text-base font-medium mt-2 px-4 pt-1 pb-4">{item.Keterangan}</h3>
        </div>
      ))}
    </div>
  )
}
