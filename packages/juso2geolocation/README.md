# `@danbi-fi/juso2geolocation`

![npm (tag)](https://img.shields.io/npm/v/@danbi-fi/juso2geolocation/latest) ![npm type definitions](https://img.shields.io/npm/types/@danbi-fi/juso2geolocation) ![npm](https://img.shields.io/npm/dw/@danbi-fi/juso2geolocation)

도로명 주소 API로부터 Geolocation 좌표를 획득:  EPSG:5179 (GPRS80) => EPSG:4326(WGS84) 변환

- Install

```sh
yarn add @danbi-fi/juso2geolocation
```

- Usage

```typescript
import { TransGeolocation, Params } from "@danbi-fi/juso2geolocation";

const apiKey = `${ADDRESS_COORD_API_KEY}`;

const testTranslator = new TransGeolocation(apiKey);

const params: Params = {
  admCd: "1120011400",
  rnMgtSn: "112003103004",
  udrtYn: "0",
  buldSlno: "0",
  buldMnnm: "99",
}

async function main() {
  const data = await testTranslator.translate(params);
  console.log(data);
// {
//   latitude: 37.54947013,
//   longitude: 127.05118739,
//   altitude: 0,
//   x: 960355.5014496567,
//   y: 1950109.3230320513
// }
}

main();
```