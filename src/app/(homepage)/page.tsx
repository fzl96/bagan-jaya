import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { slateToHtml, payloadSlateToHtmlConfig } from '@slate-serializers/html'
import parse from 'html-react-parser'

export default async function Home() {
  const payload = await getPayloadHMR({ config })
  const profil = await payload.find({
    collection: 'profil',
  })
  const galeri = await payload.find({
    collection: 'galeri',
  })
  const perangkat = await payload.find({
    collection: 'perangkat-desa',
  })

  return (
    <div>
      <h1 className="text-lg bg-green-400 w-fit px-3 py-2">Mulberry</h1>
      {/* <h1>Profil</h1>
      <div>
        {profil.docs.map((item) => (
          <article key={item.id} className="prose">
            {parse(slateToHtml(item.Konten, payloadSlateToHtmlConfig))}
          </article>
        ))}
      </div>
      <hr />
      <pre>
        <code>{JSON.stringify(perangkat, null, 2)}</code>
      </pre>
      <hr />
      <pre>
        <code>{JSON.stringify(galeri, null, 2)}</code>
      </pre> */}
    </div>
  )
}
