import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

export async function ProdukList() {
  const payload = await getPayloadHMR({ config })
  const products = await payload.find({
    collection: 'produk-lokal',
    limit: 100,
  })

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 grid-cols-1">
      {products.docs.map((item) => (
        <div key={item.id} className="bg-white shadow-md rounded-md">
          <img
            // @ts-ignore
            src={item.Foto.thumbnailURL}
            // @ts-ignore
            alt={item.Foto.alt}
            className="object-cover w-full h-80"
          />
          <div className="p-4 space-y-2">
            {/* @ts-ignore */}
            <h2 className="text-lg font-bold">{item.Nama}</h2>
            {/* @ts-ignore */}
            <p className="text-sm text-muted-foreground line-clamp-3">{item.Deskripsi}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
