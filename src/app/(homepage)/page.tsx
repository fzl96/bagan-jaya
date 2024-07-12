import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { ProfileSection } from './_components/profil-section'
import { BeritaSection } from './_components/berita-section'
import { Suspense } from 'react'
import { GaleriSection } from './_components/galeri-section'

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
      <div className="w-full h-96 md:h-[40rem] overflow-hidden relative inline-block">
        <img src="/sawah.jpg" alt="Sawah" className="object-cover w-full h-full brightness-50" />
        <div className="absolute inset-0 items-center justify-center text-[#f5f0d7] flex flex-col">
          <h1 className="text-center text-2xl md:text-4xl font-medium font-accent ">
            Selamat Datang di Website Resmi
          </h1>
          <div className="text-center space-y-4">
            <h2 className="font-accent text-5xl md:text-8xl font-bold">Desa Bagan Jaya</h2>
            <h3 className="font-accent text-3xl md:text-[3.35rem] font-bold">
              Kec. Enok, Kab. Indragiri Hilir
            </h3>
          </div>
        </div>
      </div>

      <div className="space-y-20">
        <ProfileSection />
        <Suspense fallback={<p>Loadig...</p>}>
          <BeritaSection />
        </Suspense>

        <Suspense fallback={<p>Loadig...</p>}>
          <GaleriSection />
        </Suspense>
      </div>
    </div>
  )
}
