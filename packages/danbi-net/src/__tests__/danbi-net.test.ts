import { getIPAddresses } from "..";
import * as os from "os";
import { mockNetworkInterfaces } from "./mockNetworkInterfaces";

describe("danbi-net", () => {
  it("getIPAddresses", () => {
    const spy = jest.spyOn(os, "networkInterfaces");
    spy.mockReturnValue(mockNetworkInterfaces);
    expect(getIPAddresses()).toEqual(["192.168.0.50"]);
  });
});
