import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { slateToHtml, payloadSlateToHtmlConfig } from '@slate-serializers/html'
import parse from 'html-react-parser'

export async function ProfilSection() {
  const payload = await getPayloadHMR({ config })
  const profil = await payload.find({
    collection: 'profil',
    sort: '',
  })

  return (
    <div className="md:max-w-[860px] md:px-0 px-5 mx-auto">
      {profil.docs
        .sort((a, b) => {
          // @ts-ignore
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        })
        .map((item) => (
          <div key={item.id}>
            <h3
              // @ts-ignore
              id={item.Bagian.replace(/\s/g, '-').toLowerCase()}
              className="font-accent md:text-5xl text-3xl font-bold text-center mt-10 mb-10"
            >
              {/* @ts-ignore */}
              {item.Bagian}
            </h3>
            {/* <div className=""> */}
            <article className="prose mx-auto">
              {/* @ts-ignore */}
              {parse(slateToHtml(item.Konten, payloadSlateToHtmlConfig))}
            </article>
            {/* </div> */}
          </div>
        ))}
    </div>
  )
}
