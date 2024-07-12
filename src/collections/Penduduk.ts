import type { CollectionConfig } from 'payload'

export const Penduduk: CollectionConfig = {
  slug: 'penduduk',
  labels: {
    singular: 'Kelola Penduduk',
    plural: 'Kelola Penduduk',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'Kepala Keluarga',
    group: 'Informasi Publik',
  },
  fields: [
    // {
    //   name: 'Nama',
    //   type: 'text',
    //   required: true,
    // },
    {
      name: 'No Kartu Keluarga',
      type: 'text',
      required: true,
    },
    {
      name: 'Nama Kepala Keluarga',
      type: 'text',
      required: true,
    },
    {
      name: 'Alamat',
      type: 'text',
      required: true,
    },
    {
      name: 'RT/RW',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'RT/RW',
      },
    },
    {
      name: 'Kode Pos',
      type: 'number',
      required: true,
    },
    {
      name: 'Kelurahan',
      type: 'text',
      required: true,
    },
    {
      name: 'Kecamatan',
      type: 'text',
      required: true,
    },
    {
      name: 'Kabupaten/Kota',
      type: 'text',
      required: true,
    },
    {
      name: 'Provinsi',
      type: 'text',
      required: true,
    },
    // {
    //   name: 'Tempat Lahir',
    //   type: 'text',
    //   required: true,
    // },
    // {
    //   name: 'Tanggal Lahir',
    //   type: 'date',
    //   required: true,
    // },
    // {
    //   name: 'Agama',
    //   type: 'text',
    //   required: true,
    // },
    // {
    //   name: 'Pekerjaan',
    //   type: 'text',
    //   required: true,
    // },
    // {
    //   name: 'Status Perkawinan',
    //   type: 'text',
    //   required: true,
    // },
  ],
}
