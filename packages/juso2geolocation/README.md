# `@danbi-fi/juso2geolocation`

## Usage

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
