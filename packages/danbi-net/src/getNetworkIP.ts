import { isEmpty } from "lodash";
import net from "net";

export function getNetworkIP(callback: (error: Error | undefined, data: string) => void) {
  const socket = net.createConnection(80, "www.google.com");
  socket.on("connect", function () {
    const socketAddress = socket.address();
    if (isEmpty(socketAddress)) return;
    const { address } = socketAddress as unknown as net.AddressInfo;
    callback(undefined, address);
    socket.end();
  });
  socket.on("error", function (e: Error) {
    callback(e, "error");
  });
}
