import { networkInterfaces } from "os";
import { compact, isEmpty } from "lodash";

const ifaces = networkInterfaces();
export function getIPAddresses() {
  const ip: string[] = [];
  for (var devName in ifaces) {
    const iface = ifaces[devName];
    if (iface === undefined) return ["0.0.0.0"];
    const ipaddress = compact(
      iface.map((alias) => {
        if (alias.family === "IPv4" && alias.address !== "127.0.0.1" && !alias.internal) {
          return alias.address;
        }
        return null;
      }),
    );
    if (isEmpty(ipaddress)) continue;
    ip.push(ipaddress[0]);
  }
  if (isEmpty(ip)) return ["0.0.0.0"];
  return ip;
}
