import { GaleriList } from './_components/galeri-list'

export default function GaleriPage() {
  return (
    <div className="md:max-w-[1000px] md:px-0 px-5 mx-auto mt-20 flex items-center flex-col gap-20">
      <h1 className="font-accent text-center text-5xl md:text-5xl font-bold">Galeri</h1>
      <div>
        <GaleriList />
      </div>
    </div>
  )
}
