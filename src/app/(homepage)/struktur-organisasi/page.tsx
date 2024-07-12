export default function StrukturOrganisasiPage() {
  return (
    <div className="md:max-w-[860px] md:px-0 px-5 mx-auto mt-20 flex items-center flex-col gap-20">
      <h1 className="font-accent text-center text-5xl md:text-5xl font-bold">
        Struktur Organisasi
      </h1>
      <div className="text-center">
        <div className="md:w-[40rem] w-full">
          <img
            src="/struktur.png"
            alt="struktur organisasi"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}
