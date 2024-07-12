'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Pagination({
  prev,
  next,
}: {
  prev: number | null | undefined
  next: number | null | undefined
}) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page') ?? 1)

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', String(pageNumber))
    return `${pathname}?${params.toString()}`
  }

  return (
    <div className="flex gap-3">
      <Link
        aria-label="Previous page"
        href={prev ? createPageUrl(prev) : '#'}
        className={cn(
          buttonVariants({ variant: 'default', size: 'icon' }),
          prev ? 'bg-[#105a3d]' : 'bg-[#105a3d]/50 pointer-events-none',
        )}
      >
        <ChevronLeft size={24} />
      </Link>
      <Link
        aria-label="Next page"
        href={next ? createPageUrl(next) : '#'}
        className={cn(
          buttonVariants({ variant: 'default', size: 'icon' }),
          next ? 'bg-[#105a3d]' : 'bg-[#105a3d]/50 pointer-events-none',
        )}
      >
        <ChevronRight size={24} />
      </Link>
    </div>
  )
}
