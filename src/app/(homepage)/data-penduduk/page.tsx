import { Suspense } from 'react'
import { ListPenduduk } from './_components/list-penduduk'
// import { Perangkat } from './_components/perangkat'

export default function DataPendudukPage({
  searchParams,
}: {
  searchParams: {
    query: string
    page: string
  }
}) {
  const query = searchParams.query ?? ''
  const page = parseInt(searchParams.page) || 1
  return (
    <div>
      <div className="w-full h-96 md:h-[40rem] overflow-hidden relative inline-block">
        <img
          src="/penduduk.jpg"
          alt="penduduk desa"
          className="object-cover w-full h-full brightness-50"
        />
        <div className="absolute inset-0 items-center justify-center text-[#f5f0d7] flex flex-col">
          <div className="text-center space-y-4">
            <h1 className="font-accent text-5xl md:text-8xl font-bold">Data Penduduk</h1>
            <h2 className="font-accent text-3xl md:text-[3.35rem] font-bold">Desa Bagan Jaya</h2>
          </div>
        </div>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <ListPenduduk page={page} query={query} />
      </Suspense>
    </div>
  )
}
