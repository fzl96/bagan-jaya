'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

export function Navbar() {
  return (
    <header className="px-5 py-4 bg-[#105a3d] top-0 sticky z-[100]">
      <div className="md:max-w-[1000px] flex justify-between mx-auto items-center">
        <Link href="/">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="w-8 h-8" />
            <span className="text-2xl text-[#f5f0d7] font-accent">Desa Bagan Jaya</span>
          </div>
        </Link>
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="space-x-5 font-semibold text-[#f5f0d7]">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/profil">Profil Desa</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[slate=open]:bg-transparent data-[active]:bg-transparent">
                  Pemerintahan
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#f5f4f3]">
                  <ul className="grid w-[400px] gap-2 p-2">
                    <ListItem href="/struktur-organisasi" title="Struktur Organisasi">
                      Struktur Organisasi Pemerintahan Desa Bagan Jaya
                    </ListItem>
                    <ListItem href="/perangkat-desa" title="Perangkat Desa">
                      Perangkat Desa Bagan Jaya dan Jabatannya
                    </ListItem>
                    <ListItem href="/lembaga-desa" title="Lembaga Desa">
                      Lembaga Desa Bagan Jaya
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Informasi Publik</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#f5f4f3]">
                  <ul className="grid w-[400px] gap-2 p-2">
                    <ListItem href="/berita" title="Berita Desa">
                      Berita Desa Bagan Jaya Terbaru
                    </ListItem>
                    <ListItem href="/data-penduduk" title="Data Penduduk">
                      Data Penduduk Desa Bagan Jaya
                    </ListItem>
                    <ListItem href="/galeri" title="Galeri">
                      Galeri foto desa Bagan Jaya
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
    </header>
  )
}

const ListItem = ({
  href,
  title,
  children,
}: {
  href: string
  title: string
  children: React.ReactNode
}) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none hover:bg-[#105a3d] hover:text-white focus:bg-accent focus:text-accent-foreground group"
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-green-100">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  </li>
)
