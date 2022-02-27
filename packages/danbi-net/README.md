# `@danbi-fi/danbi-net`

![npm (tag)](https://img.shields.io/npm/v/@danbi-fi/danbi-net/latest) ![npm type definitions](https://img.shields.io/npm/types/@danbi-fi/danbi-net) ![npm](https://img.shields.io/npm/dw/@danbi-fi/danbi-net)

단비 서버를 위한 네트워크 툴

## Installation

```sh
yarn add @danbi-fi/danbi-net
```

## Usage

### `function getIPAddresses()`

실제 물리적 네트워크 인터페이스의 IP주소를 가져옴 (sync)

```ts
import { getIPAddresses } from "@danbi-fi/danbi-net"

const ipAddress = getIPAddresses(); // IP Address
```

### `function getNetworkIP(callback: (error: Error | undefined, data: string) => void)`

`www.google.com`을 연결하는 인터페이스의 IP주소를 가져옴: 이더넷 혹은 Wi-Fi 연결을 동시에 사용하거나, 여러 네트워크 인터페이스가 열려있는 경우 실제 네트워크 주소를 가져옴.

```ts
import { getNetworkIP } from "@danbi-fi/danbi-net"

getNetworkIP((error, data) => {
  console.log(data) // IP Address
});
```