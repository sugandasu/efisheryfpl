# Efisheryfpl Stein Library Wrapper

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

## Usage

### Add Records

`wrapper.addRecords(komoditas, area_provinsi, area_kota, size, harga, tanggal, timestamp)`

#### Add Records Valid Options

| Parameter     | Description             | Format | Requirement |
| ------------- | ----------------------- | ------ | ----------- |
| komoditas     | Nama ikan               | String | Required    |
| area_provinsi | Area provinsi transaksi | String | Required    |
| area_kota     | Area kota transaksi     | String | Required    |
| size          | Size transaksi ikan     | Number | Required    |
| harga         | Harga ikan              | Number | Required    |
| tanggal       | Tanggal transaksi       | Date   | Required    |
| timestamp     | Timestamp transaksi     | Date   | Required    |
|               |                         |        |             |

#### Add Records Return Value

This return promise with the following value `{status: boolean, data?: [data], error?: [{parameter: [error message]}], message?: string}`

```javascript
const wrapper = require("efisheryfpl");
wrapper
  .addRecords(
    "Ikan Lele",
    "SULAWESI TENGAH",
    "PALU",
    50,
    100000,
    new Date(),
    new Date()
  )
  .then((data) => {
    console.log(data);
  });
```

### Update Records

`wrapper.updateRecords(id, { komoditas: komoditas, area_provinsi: area_provinsi, area_kota: area_kota, size: size, harga: harga, tanggal: tanggal, timestamp: timestamp })`

#### Update Records Valid Options

| Parameter     | Description             | Format | Requirement |
| ------------- | ----------------------- | ------ | ----------- |
| id            | Id data                 | String | Required    |
| komoditas     | Nama ikan               | String | Optional    |
| area_provinsi | Area provinsi transaksi | String | Optional    |
| area_kota     | Area kota transaksi     | String | Optional    |
| size          | Size transaksi ikan     | Number | Optional    |
| harga         | Harga ikan              | Number | Optional    |
| tanggal       | Tanggal transaksi       | Date   | Optional    |
| timestamp     | Timestamp transaksi     | Date   | Optional    |
|               |                         |        |             |

#### Update Records Return Value

This return promise with the following value `{status: boolean, data?: data, message?: string}`

```javascript
const wrapper = require("efisheryfpl");
wrapper
  .updateRecords("6eaa323d-sfds-2223-8c38-5ba212f21b5d", {
    komoditas: "Ikan Lele",
    area_provinsi: "SULAWESI TENGAH",
    area_kota: "PALU",
    size: 50,
    harga: 100000,
    tanggal: new Date(),
    timestamp: new Date(),
  })
  .then((data) => {
    console.log(data);
  });
```

### Delete Records by Id

`wrapper.deleteRecords(id)`

#### Delete Records Valid Options

| Parameter | Description | Format | Requirement |
| --------- | ----------- | ------ | ----------- |
| id        | Id data     | String | Required    |
|           |             |        |             |

#### Delete Records Return Value

This return promise with the following value `{status: boolean, message?: string}`

```javascript
const wrapper = require("efisheryfpl");
wrapper.deleteRecords("6eaa323d-sfds-2223-8c38-5ba212f21b5d").then((data) => {
  console.log(data);
});
```

### Get All By Range

`wrapper.getAllByRange({ harga?: {min?: number, max?: number}, size?: {min?: number, max?: number}, tanggal?: {min?: date, max?: date} })`

#### Get All By Range Valid Options

| Parameter | Description                        | Format                             | Requirement |
| --------- | ---------------------------------- | ---------------------------------- | ----------- |
| options   | Object data (harga, size, tanggal) | Object({min?: value, max?: value}) | Optional    |
|           |                                    |                                    |             |

#### Get All By Range Return Value

This return promise with the following value `{status: boolean, data?: [data], message?: string}`

```javascript
const wrapper = require("efisheryfpl");
wrapper
  .getAllByRange({
    size: { min: 50, max: 100 },
    harga: { min: 100000, max: 200000 },
    tanggal: { min: new Date(), max: new Date() },
  })
  .then((data) => {
    console.log(data);
  });
```

### Get All By Commodity

`wrapper.getAllByCommodity(komoditas)`

#### Get All By Commodity Valid Options

| Parameter | Description | Format | Requirement |
| --------- | ----------- | ------ | ----------- |
| komoditas | Nama ikan   | String | Required    |
|           |             |        |             |

#### Get All By Commodity Return Value

This return promise with the following value `{status: boolean, data?: [data], message?: string}`

```javascript
const wrapper = require("efisheryfpl");
wrapper.getAllByCommodity("Ikan Lele").then((data) => {
  console.log(data);
});
```

### Get By Id

`wrapper.getAllByCommodity(komoditas)`

#### Get By Id Valid Options

| Parameter | Description | Format | Requirement |
| --------- | ----------- | ------ | ----------- |
| id        | Id data     | String | Required    |
|           |             |        |             |

#### Get By Id Return Value

This return promise with the following value `{status: boolean, data?: data, message?: string}`

```javascript
const wrapper = require("efisheryfpl");
wrapper.getById("6eaa323d-sfds-2223-8c38-5ba212f21b5d").then((data) => {
  console.log(data);
});
```

### Get By Area

`wrapper.getByArea({ area_provinsi?: area_provinsi, area_kota?: area_kota })`

#### Get By Area Valid Options

| Parameter | Description                            | Format         | Requirement |
| --------- | -------------------------------------- | -------------- | ----------- |
| options   | Object data (area_provinsi, area_kota) | Object(string) | Optional    |
|           |                                        |                |             |

#### Get By Area Return Value

This return promise with the following value `{status: boolean, data?: [data], message?: string}`

```javascript
const wrapper = require("efisheryfpl");
wrapper
  .getById({ area_provinsi: "SULAWESI TENGAH", area_kota: "PALU" })
  .then((data) => {
    console.log(data);
  });
```

### Get Max Price

`wrapper.getMaxPrice({ week?: number, komoditas?: string })`

#### Get Max Price Valid Options

| Parameter | Description                   | Format                                    | Requirement |
| --------- | ----------------------------- | ----------------------------------------- | ----------- |
| options   | Object data (week, komoditas) | Object({week?:number, komoditas?:string}) | Optional    |
|           |                               |                                           |             |

#### Get Max Price Return Value

This return promise with the following value `{status: boolean, data?: data, message?: string}`

```javascript
const wrapper = require("efisheryfpl");
wrapper.getById({ week: 7, komoditas: "Ikan Lele" }).then((data) => {
  console.log(data);
});
```

### Get Most Records

`wrapper.getMostRecords()`

#### Get Most Records Return Value

This return promise with the following value `{status: boolean, data?: [data], message?: string}`

```javascript
const wrapper = require("efisheryfpl");
wrapper.getMostRecords({ week: 7, komoditas: "Ikan Lele" }).then((data) => {
  console.log(data);
});
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
