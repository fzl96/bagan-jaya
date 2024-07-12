import Link from 'next/link'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Pagination({
  prev,
  next,
}: {
  prev: number | null | undefined
  next: number | null | undefined
}) {
  return (
    <div className="flex gap-3">
      <Link
        aria-label="Previous page"
        href={prev ? `/berita?page=${prev}` : '#'}
        className={cn(
          buttonVariants({ variant: 'default', size: 'icon' }),
          prev ? 'bg-[#105a3d]' : 'bg-[#105a3d]/50 pointer-events-none',
        )}
      >
        <ChevronLeft size={24} />
      </Link>
      <Link
        aria-label="Next page"
        href={next ? `/berita?page=${next}` : '#'}
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
