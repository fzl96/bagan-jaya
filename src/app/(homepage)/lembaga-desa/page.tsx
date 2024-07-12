import { Suspense } from 'react'
import { Lembaga } from './_components/lembaga'
import { siteConfig } from '@/config/site'

export default function LembagaDesaPage() {
  return (
    <div>
      <div className="w-full h-96 md:h-[40rem] overflow-hidden relative inline-block">
        <img
          src="/lembaga.jpg"
          alt="Lembaga"
          className="object-cover w-full h-full brightness-50"
        />
        <div className="absolute inset-0 items-center justify-center text-[#f5f0d7] flex flex-col">
          <div className="text-center space-y-4">
            <h1 className="font-accent text-5xl md:text-8xl font-bold">Lembaga Kelurahan</h1>
            <h2 className="font-accent text-3xl md:text-[3.35rem] font-bold">{siteConfig.name}</h2>
          </div>
        </div>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <Lembaga />
      </Suspense>
    </div>
  )
}
