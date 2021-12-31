import * as os from "os";

export const mockNetworkInterfaces: NodeJS.Dict<os.NetworkInterfaceInfo[]> = {
  lo0: [
    {
      address: "127.0.0.1",
      netmask: "255.0.0.0",
      family: "IPv4",
      mac: "00:00:00:00:00:00",
      internal: true,
      cidr: "127.0.0.1/8",
    },
    {
      address: "::1",
      netmask: "ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff",
      family: "IPv6",
      mac: "00:00:00:00:00:00",
      internal: true,
      cidr: "::1/128",
      scopeid: 0,
    },
    {
      address: "fe80::1",
      netmask: "ffff:ffff:ffff:ffff::",
      family: "IPv6",
      mac: "00:00:00:00:00:00",
      internal: true,
      cidr: "fe80::1/64",
      scopeid: 1,
    },
  ],
  anpi0: [
    {
      address: "fe80::1c00:daff:fe14:3791",
      netmask: "ffff:ffff:ffff:ffff::",
      family: "IPv6",
      mac: "1e:00:da:14:37:91",
      internal: false,
      cidr: "fe80::1c00:daff:fe14:3791/64",
      scopeid: 4,
    },
  ],
  anpi1: [
    {
      address: "fe80::1c00:daff:fe14:3792",
      netmask: "ffff:ffff:ffff:ffff::",
      family: "IPv6",
      mac: "1e:00:da:14:37:92",
      internal: false,
      cidr: "fe80::1c00:daff:fe14:3792/64",
      scopeid: 5,
    },
  ],
  en0: [
    {
      address: "fe80::1cb0:e6af:4524:fa4e",
      netmask: "ffff:ffff:ffff:ffff::",
      family: "IPv6",
      mac: "a0:78:17:a6:30:9d",
      internal: false,
      cidr: "fe80::1cb0:e6af:4524:fa4e/64",
      scopeid: 12,
    },
    {
      address: "192.168.10.50",
      netmask: "255.255.255.0",
      family: "IPv4",
      mac: "a0:78:17:a6:30:9d",
      internal: false,
      cidr: "192.168.0.50/24",
    },
  ],
  awdl0: [
    {
      address: "fe80::5cac:a4ff:fe76:d7d",
      netmask: "ffff:ffff:ffff:ffff::",
      family: "IPv6",
      mac: "5e:ac:a4:76:0d:7d",
      internal: false,
      cidr: "fe80::5cac:a4ff:fe76:d7d/64",
      scopeid: 13,
    },
  ],
  llw0: [
    {
      address: "fe80::5cac:a4ff:fe76:d7d",
      netmask: "ffff:ffff:ffff:ffff::",
      family: "IPv6",
      mac: "5e:ac:a4:76:0d:7d",
      internal: false,
      cidr: "fe80::5cac:a4ff:fe76:d7d/64",
      scopeid: 14,
    },
  ],
  utun0: [
    {
      address: "fe80::f630:90e1:c7f9:a418",
      netmask: "ffff:ffff:ffff:ffff::",
      family: "IPv6",
      mac: "00:00:00:00:00:00",
      internal: false,
      cidr: "fe80::f630:90e1:c7f9:a418/64",
      scopeid: 15,
    },
  ],
  utun1: [
    {
      address: "fe80::6316:d743:5de5:a0ba",
      netmask: "ffff:ffff:ffff:ffff::",
      family: "IPv6",
      mac: "00:00:00:00:00:00",
      internal: false,
      cidr: "fe80::6316:d743:5de5:a0ba/64",
      scopeid: 16,
    },
  ],
  utun2: [
    {
      address: "fe80::5e5a:71b:ab68:4499",
      netmask: "ffff:ffff:ffff:ffff::",
      family: "IPv6",
      mac: "00:00:00:00:00:00",
      internal: false,
      cidr: "fe80::5e5a:71b:ab68:4499/64",
      scopeid: 17,
    },
  ],
  utun3: [
    {
      address: "fe80::e636:b26d:93ee:3bd8",
      netmask: "ffff:ffff:ffff:ffff::",
      family: "IPv6",
      mac: "00:00:00:00:00:00",
      internal: false,
      cidr: "fe80::e636:b26d:93ee:3bd8/64",
      scopeid: 18,
    },
  ],
};
