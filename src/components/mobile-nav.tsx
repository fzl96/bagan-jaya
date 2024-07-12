import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'

const links: { href: string; title: string }[] = [
  { href: '/', title: 'Home' },
  { href: '/profil', title: 'Profil' },
  { href: '/struktur-organisasi', title: 'Struktur Organisasi' },
  { href: '/perangkat-desa', title: 'Perangkat Desa' },
  { href: '/lembaga-desa', title: 'Lembaga' },
  { href: '/berita', title: 'Berita' },
  { href: '/data-penduduk', title: 'Data Penduduk' },
  { href: '/galeri', title: 'Galeri' },
]

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default" size="icon" className="bg-transparent">
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="z-[1000]">
        <SheetHeader className="mt-5">
          <SheetTitle className="text-left">Kelurahan Sungai Beringin</SheetTitle>
          <SheetDescription className="text-left">
            Kecamatan Tembilahan, Kabupaten Indragiri Hilir
          </SheetDescription>
        </SheetHeader>
        <div className="mt-10">
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  )
}
