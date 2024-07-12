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
import { siteConfig } from '@/config/site'
import { MobileNav } from './mobile-nav'

export function Navbar() {
  return (
    <header className="px-5 py-4 bg-[#105a3d] top-0 sticky z-[100]">
      <div className="md:max-w-[1000px] flex justify-between mx-auto items-center">
        <Link href="/">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="w-8 h-8" />
            <span className="text-2xl text-[#f5f0d7] font-accent md:not-sr-only sr-only">
              {siteConfig.name}
            </span>
          </div>
        </Link>
        <div className="block md:hidden">
          <MobileNav />
        </div>
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
                  <Link href="/profil">Profil</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[slate=open]:bg-transparent data-[active]:bg-transparent">
                  Pemerintahan
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#f5f4f3]">
                  <ul className="grid w-[400px] gap-2 p-2">
                    <ListItem href="/struktur-organisasi" title="Struktur Organisasi">
                      Struktur Organisasi Pemerintahan {siteConfig.name}
                    </ListItem>
                    <ListItem href="/perangkat-desa" title="Perangkat Desa">
                      Perangkat Desa {siteConfig.name} dan Jabatannya
                    </ListItem>
                    <ListItem href="/lembaga-desa" title="Lembaga">
                      Lembaga {siteConfig.name}
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Informasi Publik</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#f5f4f3]">
                  <ul className="grid w-[400px] gap-2 p-2">
                    <ListItem href="/berita" title="Berita">
                      Berita {siteConfig.name} Terbaru
                    </ListItem>
                    <ListItem href="/data-penduduk" title="Data Penduduk">
                      Data Penduduk {siteConfig.name}
                    </ListItem>
                    <ListItem href="/galeri" title="Galeri">
                      Galeri foto {siteConfig.name}
                    </ListItem>
                    <ListItem href="/produk-lokal" title="Produk Lokal">
                      Produk Lokal {siteConfig.name}
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
