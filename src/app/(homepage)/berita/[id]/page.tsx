import { BeritaComponent } from './_components/berita'
import { Suspense } from 'react'


export const dynamic = 'force-dynamic'

export default function BeritaPage({
  params,
}: {
  params: {
    id: string
  }
}) {
  return (
    <div className="md:max-w-[860px] md:px-0 px-5 mx-auto mt-20">
      <Suspense fallback={<p>Loading...</p>}>
        <BeritaComponent beritaId={params.id!} />
      </Suspense>
    </div>
  )
}
