import Link from 'next/link'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { slateToHtml, payloadSlateToHtmlConfig } from '@slate-serializers/html'
import parse from 'html-react-parser'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'

export async function BeritaSection() {
  const payload = await getPayloadHMR({ config })
  const berita = await payload.find({
    collection: 'berita',
    limit: 3,
  })

  return (
    <div className="md:max-w-[1000px] md:px-0 px-5 mx-auto space-y-10">
      <h2 className="font-accent text-5xl text-center font-bold">Berita Desa</h2>
      <div className=" grid md:grid-cols-3 gap-5 grid-cols-1">
        {berita.docs.map((item) => (
          <BeritaCard
            key={item.id}
            // @ts-ignore
            thumbnail={item.Gambar.thumbnailURL}
            // @ts-ignore
            title={item.Judul}
            // @ts-ignore
            content={slateToHtml(item.Konten, payloadSlateToHtmlConfig)}
            // @ts-ignore
            date={item.createdAt}
            // @ts-ignore
            id={item.id}
          />
        ))}
      </div>
    </div>
  )
}

export function BeritaCard({
  thumbnail,
  title,
  content,
  date,
  id: uniqueId,
}: {
  id: string
  thumbnail: string
  title: string
  content: string
  date: string
}) {
  return (
    <div className="bg-white shadow-md rounded-lg flex flex-col h-full">
      <Link href={`/berita/${uniqueId}`}>
        <img src={thumbnail} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      </Link>
      <div className="px-4 flex flex-col justify-between pb-4 h-full">
        <div className="flex flex-col">
          <Link className="font-semibold text-lg mt-2" href={`/berita/${uniqueId}`}>
            {title}
          </Link>
          <span className="my-1">{format(new Date(date), 'EEE, dd MMM yyyy', { locale: id })}</span>
        </div>
        <div className="mt-2 my-[1.25em] leading-[1.6]">
          {parse(content.substring(0, 100) + '...')}
        </div>
        <Link href={`/berita/${uniqueId}`} className="text-[#105a3d] hover:underline">
          Baca Selengkapnya
        </Link>
      </div>
      {/* make the excerpt from the content */}
    </div>
  )
}
