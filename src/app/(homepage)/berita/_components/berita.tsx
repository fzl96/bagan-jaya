import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { BeritaCard } from '../../_components/berita-section'
import { slateToHtml, payloadSlateToHtmlConfig } from '@slate-serializers/html'
import { Pagination } from './pagination'

export async function BeritaList({ page }: { page: number }) {
  const payload = await getPayloadHMR({ config })
  const berita = await payload.find({
    collection: 'berita',
    limit: 6,
    page: page,
  })

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 grid-cols-1">
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
      <Pagination prev={berita.prevPage} next={berita.nextPage} />
    </div>
  )
}
