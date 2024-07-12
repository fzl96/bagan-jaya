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

export async function Lembaga() {
  const payload = await getPayloadHMR({ config })
  const lembaga = await payload.find({
    collection: 'lembaga',
    limit: 100,
  })
  return (
    <div className="md:max-w-[860px] mx-auto mt-20">
      <Table>
        <TableCaption>Daftar Lembaga {siteConfig.name}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Nama</TableHead>
            <TableHead className="">Tugas</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {lembaga.docs.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.Nama as string}</TableCell>
              <TableCell className="max-w-80">{item.Tugas as string}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
