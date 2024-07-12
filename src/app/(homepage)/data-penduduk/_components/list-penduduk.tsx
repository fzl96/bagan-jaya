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
import { Search } from './search'
import { Pagination } from './pagination'

export async function ListPenduduk({ query, page }: { query: string; page: number }) {
  const payload = await getPayloadHMR({ config })
  const penduduk = await payload.find({
    collection: 'penduduk',
    limit: 10,
    page: page,
    where: {
      'Nama Kepala Keluarga': {
        contains: query,
      },
    },
  })
  return (
    <div className="md:max-w-[860px] mx-auto mt-20">
      <div className="space-y-5">
        <Search placeholder="Cari kepala keluarga..." />
        <Table>
          <TableCaption>Daftar Perangkat Lembaga Bagan Jaya</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">Nama Kepala Keluarga</TableHead>
              <TableHead className="">Alamat</TableHead>
              <TableHead className="sm:table-cell hidden">Kelurahan</TableHead>
              <TableHead className="sm:table-cell hidden">Kecamatan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {penduduk.docs.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item['Nama Kepala Keluarga'] as string}</TableCell>
                <TableCell>{item.Alamat as string}</TableCell>
                <TableCell className="sm:table-cell hidden">{item.Kelurahan as string}</TableCell>
                <TableCell className="sm:table-cell hidden">{item.Kecamatan as string}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="grid place-items-center ">
          <Pagination prev={penduduk.prevPage} next={penduduk.nextPage} />
        </div>
      </div>
    </div>
  )
}
