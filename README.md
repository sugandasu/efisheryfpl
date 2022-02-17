# Efisheryfpl CLI

Efisheryfpl (Efishery fish price list) is a cli created for a test as a platform engineer created using nodejs. This Application use [steinhq][https://steinhq.com/] api and [steinhq-js-client][https://github.com/steinhq/js-client] to crate wrapper and cli based on data provided by the evaluator

## Installation

This application use a **sensitive data** that present in the .env.example.

```bash
cp .env.example .env
```

Then modify **all the parameter** whithin the .env file

- NODE_ENV=
- STORAGE_URL=
- STORAGE_TEST_URL=
- FISH_PRICE_SHEETNAME=
- OPTION_AREA_SHEETNAME=
- OPTION_SIZE_SHEETNAME=

### Npm

Install the cli using [npm][https://www.npmjs.com/]

```bash
npm install install -g .
```

### Docker

Install the cli in the container using [docker][https://www.docker.com/]

```bash
docker built -t efisheryfpl .
```

## Usage

### Command Line

```bash
efisheryfpl get all
# returns {status: true: data: [] }
```

#### Valid Options

| Options           | Description                                       | Format           | Requirement |
| ----------------- | ------------------------------------------------- | ---------------- | ----------- |
| -l, --limit       | Jumlah data maksimum yang ditampilkan             | Number           | Optional    |
| -o, --offset      | Jumlah data yang akan dilewati dari awal data     | Number           | Optional    |
| -s, --search      | Cari data berdasarkan daftar kolom=nilai, cth:    | Kolom1=Nilai1    | Optional    |
|                   | komoditas="Ikan Salmon" area_kota="Buleleng".     | Kolom2=Nilai2    |             |
|                   | Kolom (uuid, komoditas, area_provinsi,            | Kolom3=Nilai3    |             |
|                   | area_kota, size, harga, tanggal, timestamp)       |                  |             |
| --range           | Cari data berdasarkan range dari kolom. Kolom     | Kolom1=Min1,Max2 | Optional    |
|                   | (harga, size, tanggal)                            | Kolom2=Min2,Max2 |             |
| --order           | Urut data berdasarkan kolom. Kolom (uuid,         | Kolom            | Optional    |
|                   | komoditas, area_provinsi, area_kota, size, harga, |                  | (tanggal)   |
|                   | tanggal, timestamp)                               |                  |             |
| --order-direction | Tipe pengurutan data                              | asc/desc         | Optional    |
|                   |                                                   |                  | (asc)       |
| --to-usd          | Tambahkan kolom konversi harga dari rupiah ke     | true/false       | Optional    |
|                   | dollar                                            |                  | (false)     |
| -h, --help        | display help for command                          | true/false       | Optional    |

## License

[MIT](https://choosealicense.com/licenses/mit/)
