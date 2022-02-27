[![Unit Test](https://github.com/danbi-fi/packages/actions/workflows/unit-test.yml/badge.svg)](https://github.com/danbi-fi/packages/actions/workflows/unit-test.yml) [![Publish GPR](https://github.com/danbi-fi/packages/actions/workflows/publish-gpr.yml/badge.svg)](https://github.com/danbi-fi/packages/actions/workflows/publish-gpr.yml) [![Publish NPM](https://github.com/danbi-fi/packages/actions/workflows/publish-npm.yml/badge.svg)](https://github.com/danbi-fi/packages/actions/workflows/publish-npm.yml) [![Create Pull Request](https://github.com/danbi-fi/packages/actions/workflows/create-release-pr.yml/badge.svg)](https://github.com/danbi-fi/packages/actions/workflows/create-release-pr.yml) [![/canary-release](https://github.com/danbi-fi/packages/actions/workflows/canary-release.yml/badge.svg)](https://github.com/danbi-fi/packages/actions/workflows/canary-release.yml)

# Danbi-Fi General purpose Javascript Packages

단비 General purpose 패키지

- [Danbi-Fi General purpose Javascript Packages](#danbi-fi-general-purpose-javascript-packages)
  - [`@danbi-fi/juso2geolocation`](#danbi-fijuso2geolocation)
  - [`@danbi-fi/eslint-config-danbi-base`](#danbi-fieslint-config-danbi-base)
    - [Configuration](#configuration)
  - [`@danbi-fi/danbi-net`](#danbi-fidanbi-net)
    - [Usage](#usage)
      - [`function getIPAddresses()`](#function-getipaddresses)
      - [`function getNetworkIP(callback: (error: Error | undefined, data: string) => void)`](#function-getnetworkipcallback-error-error--undefined-data-string--void)
## `@danbi-fi/juso2geolocation`

![npm (tag)](https://img.shields.io/npm/v/@danbi-fi/juso2geolocation/latest) ![npm type definitions](https://img.shields.io/npm/types/@danbi-fi/juso2geolocation) ![npm](https://img.shields.io/npm/dw/@danbi-fi/juso2geolocation)

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

## `@danbi-fi/eslint-config-danbi-base`

### Configuration

- 설치 `yarn add -D @danbi-fi/eslint-config-danbi-base`
- `.eslintrc.js` 파일을 만들어 아래와 같이 씁니다.

```js
module.exports = {
  extends: ["@danbi-fi/eslint-config-danbi-base"],
}
```

- 추가할 `rules`가 있으면

```js
module.exports = {
  extends: ["@danbi-fi/eslint-config-danbi-base"],
  rules: {
    // rules 를 추가
  }
}
```

## `@danbi-fi/danbi-net`

### Usage

#### `function getIPAddresses()`

실제 물리적 네트워크 인터페이스의 IP주소를 가져옴 (sync)

```ts
import { getIPAddresses } from "@danbi-fi/danbi-net"

const ipAddress = getIPAddresses(); // IP Address
```

#### `function getNetworkIP(callback: (error: Error | undefined, data: string) => void)`

`www.google.com`을 연결하는 인터페이스의 IP주소를 가져옴: 이더넷 혹은 Wi-Fi 연결을 동시에 사용하거나, 여러 네트워크 인터페이스가 열려있는 경우 실제 네트워크 주소를 가져옴.

```ts
import { getNetworkIP } from "@danbi-fi/danbi-net"

getNetworkIP((error, data) => {
  console.log(data) // IP Address
});
```
