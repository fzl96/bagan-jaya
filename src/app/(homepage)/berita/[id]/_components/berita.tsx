import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { slateToHtml, payloadSlateToHtmlConfig } from '@slate-serializers/html'
import parse from 'html-react-parser'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'

export async function BeritaComponent({ beritaId }: { beritaId: string }) {
  const payload = await getPayloadHMR({ config })
  const berita = await payload.find({
    collection: 'berita',
    where: {
      id: {
        equals: beritaId,
      },
    },
  })

  return (
    <div className="prose">
      <h1>{berita.docs[0].Judul as string}</h1>
      <div className="-mt-5">
        {format(new Date(berita.docs[0].createdAt as string), 'dd MMMM yyyy', { locale: id })}
      </div>
      {/* @ts-ignore */}
      <img src={berita.docs[0].Gambar.thumbnailURL} alt="" className="rounded-lg" />
      {/* @ts-ignore */}
      {parse(slateToHtml(berita.docs[0].Konten, payloadSlateToHtmlConfig))}
      {/* <pre>
        <code>{JSON.stringify(berita, null, 2)}</code>
      </pre> */}
    </div>
  )
}
