import Link from 'next/link'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

export async function GaleriSection() {
  const payload = await getPayloadHMR({ config })
  const galeri = await payload.find({
    collection: 'galeri',
    limit: 3,
  })

  return (
    <div className="md:max-w-[1000px] md:px-0 px-5 mx-auto">
      <h2 className="font-accent text-4xl md:text-5xl text-center font-bold">Galeri Desa</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-2 md:gap-5 mt-8">
        {galeri.docs.map((item) => (
          <div key={item.id} className="inline-block bg-white mb-5 rounded-lg shadow-sm">
            <div className="h-40 rounded-t-lg overflow-hidden">
              <img
                // @ts-ignore
                src={item.Foto.thumbnailURL}
                // @ts-ignore
                alt={item.Foto.alt}
                className="object-cover w-full h-full"
              />
            </div>
            {/* @ts-ignore */}
            <h3 className="text-base font-medium mt-2 px-4 pt-1 pb-4">{item.Keterangan}</h3>
          </div>
        ))}
      </div>
      <Link
        href="/galeri"
        className="text-[#105a3d] hover:underline text-center block font-semibold mt-2"
      >
        Lihat Semua
      </Link>
    </div>
  )
}
