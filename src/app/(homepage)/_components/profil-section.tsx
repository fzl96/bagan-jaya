import Link from 'next/link'

export function ProfileSection() {
  return (
    <div className="md:max-w-[860px] md:px-0 px-5 mx-auto mt-20 space-y-5">
      <h2 className="font-accent text-5xl text-center font-bold">Profil Desa</h2>
      <div className="w-full">
        <p className="prose mx-auto text-xl">
          Desa Bagan Jaya Merupakan pemekaran dari Desa Daratan Reteh Dua yang pemekaran dari Desa
          Sungai Rukam sampai saat ini sertifikat tanah kepemilikan masih tertulis Desa Sungai Rukam
          atau Reteh dua yang terdiri dari Blok T, Blok E, Blok M, Blok F, Parit Kalimantan, Parit
          Banjar Masin, Parit Jumat/ Usaha Baru, ParitPelita/Abdullah.
        </p>
      </div>
      <Link
        href="/profil"
        className="block text-center text-[#105a3d] font-semibold mt-5 hover:underline"
      >
        Lihat Selengkapnya
      </Link>
    </div>
  )
}
