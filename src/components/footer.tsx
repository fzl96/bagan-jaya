import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#105a3d] mt-20 md:py-14 py-10 px-7">
      <div className="md:max-w-[1000px] mx-auto md:space-y-20 space-y-10">
        <div className="grid md:grid-cols-4 grid-cols-1  mx-auto items-start md:gap-0 gap-5">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="w-8 h-8" />
            <span className="text-2xl text-[#f5f0d7] font-accent">Desa Bagan Jaya</span>
          </div>
          <div>
            <Link href="/profil" className="text-[#f5f0d7] hover:underline">
              Profil Desa
            </Link>
          </div>
          <div>
            <ul className="text-[#f5f0d7] space-y-2">
              <li className="hover:underline">
                <Link href="/struktur-organisasi">Struktur Organisasi</Link>
              </li>
              <li className="hover:underline">
                <Link href="/perangkat-desa">Perangkat Desa</Link>
              </li>
              <li className="hover:underline">
                <Link href="/lembaga-desa">Lembaga Desa</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-[#f5f0d7] space-y-2">
              <li className="hover:underline">
                <Link href="/berita">Berita Desa</Link>
              </li>
              <li className="hover:underline">
                <Link href="/data-penduduk">Data Penduduk</Link>
              </li>
              <li className="hover:underline">
                <Link href="/galeri">Galeri</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="text-[#f5f0d7] text-center mt-5">
            &copy; 2024 Desa Bagan Jaya. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
