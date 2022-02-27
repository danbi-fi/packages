"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIPAddresses = void 0;
var os_1 = require("os");
var lodash_1 = require("lodash");
var ifaces = (0, os_1.networkInterfaces)();
function getIPAddresses() {
    var ip = [];
    for (var devName in ifaces) {
        var iface = ifaces[devName];
        if (iface === undefined)
            return ["0.0.0.0"];
        var ipaddress = (0, lodash_1.compact)(iface.map(function (alias) {
            if (alias.family === "IPv4" && alias.address !== "127.0.0.1" && !alias.internal) {
                return alias.address;
            }
            return null;
        }));
        if ((0, lodash_1.isEmpty)(ipaddress))
            continue;
        ip.push(ipaddress[0]);
    }
    if ((0, lodash_1.isEmpty)(ip))
        return ["0.0.0.0"];
    return ip;
}
exports.getIPAddresses = getIPAddresses;
//# sourceMappingURL=getIPAddresses.js.map