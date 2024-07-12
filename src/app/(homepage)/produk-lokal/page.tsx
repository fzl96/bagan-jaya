// import { ProfilSection } from './_components/profil-section'

import { siteConfig } from '@/config/site'
import { ProdukList } from './_components/produk-list'

export const dynamic = 'force-dynamic'

export default function ProdukLokalPage() {
  return (
    <div>
      <div className="w-full h-96 md:h-[40rem] overflow-hidden relative inline-block">
        <img
          src="/produk-lokal.jpg"
          alt="Produk Lokal"
          className="object-cover w-full h-full brightness-50"
        />
        <div className="absolute inset-0 items-center justify-center text-[#f5f0d7] flex flex-col">
          <div className="text-center space-y-4">
            <h1 className="font-accent text-5xl md:text-8xl font-bold">Produk Lokal</h1>
            <h2 className="font-accent text-4xl md:text-[3.35rem] font-bold">{siteConfig.name}</h2>
          </div>
        </div>
      </div>
      <div className="md:max-w-[1000px] md:px-0 px-5 mx-auto space-y-10 mt-10">
        <ProdukList />
      </div>
      {/* <ProfilSection /> */}
    </div>
  )
}
