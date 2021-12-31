import { mockNetworkInterfaces } from "./mockNetworkInterfaces";

const mockOS = jest.requireActual("os");
mockOS.networkInterfaces = jest.fn().mockReturnValue(mockNetworkInterfaces);
jest.mock("os", () => mockOS);

import { getIPAddresses } from "..";

describe("danbi-net", () => {
  it("getIPAddresses", () => {
    expect(getIPAddresses()).toEqual(["192.168.10.50"]);
  });
});
