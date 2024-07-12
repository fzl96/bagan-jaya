import { Suspense } from 'react'
import { BeritaList } from './_components/berita'

export default function BeritaPage({
  searchParams,
}: {
  searchParams: {
    page: string
  }
}) {
  const page = parseInt(searchParams.page) || 1
  return (
    <div className="md:max-w-[1000px] md:px-0 px-5 mx-auto space-y-10">
      <h1 className="font-accent text-4xl text-center font-bold mt-20">Daftar Berita Desa</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <BeritaList page={page} />
      </Suspense>
    </div>
  )
}
