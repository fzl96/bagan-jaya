import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { siteConfig } from '@/config/site'

export async function Perangkat() {
  const payload = await getPayloadHMR({ config })
  const perangkat = await payload.find({
    collection: 'perangkat-desa',
    limit: 100,
  })
  return (
    <div className="md:max-w-[860px] mx-auto mt-20">
      <Table>
        <TableCaption>Daftar Perangkat Desa {siteConfig.name}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Nama</TableHead>
            <TableHead>Jabatan</TableHead>
            <TableHead className="text-right">No. Hp</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {perangkat.docs.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.nama as string}</TableCell>
              <TableCell>{item.jabatan as string}</TableCell>
              <TableCell className="text-right">{item.hp as string}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
